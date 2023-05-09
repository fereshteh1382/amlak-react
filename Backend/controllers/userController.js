const passport = require("passport");
const fetch = require("node-fetch");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { sendEmail } = require("../utils/mailer");

exports.login = (req, res) => {
    res.render("login", {
        pageTitle: "ورود به بخش مدیریت",
        path: "/login",
        message: req.flash("success_msg"),
        error: req.flash("error"),
    });
};

exports.AdminhandleLogin = async (req, res, next) => {
    /* if (!req.body["g-recaptcha-response"]) {
         req.flash("error", "اعتبار سنجی captcha الزامی می باشد");
         return res.redirect("/admin/login");
     }
 
     const secretKey = process.env.CAPTCHA_SECRET;
     const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body["g-recaptcha-response"]}
      &remoteip=${req.connection.remoteAddress}`;
 
     const response = await fetch(verifyUrl, {
         method: "POST",
         headers: {
             Accept: "application/json",
             "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
         },
     });
 
     const json = await response.json();
 
     if (json.success) {
         passport.authenticate("local", {
             failureRedirect: "/admin/login",
             failureFlash: true,
         })(req, res, next);
     } else {
         req.flash("error", "مشکلی در اعتبارسنجی captcha هست");
         res.redirect("/admin/login");
     }*/
    passport.authenticate("local", {
        failureRedirect: "/admin/login",
        failureFlash: true,
    })(req, res, next);

};

exports.rememberMe = (req, res) => {
    if (req.body.remember) {
        req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000; // 1 day 24
    } else {
        req.session.cookie.expire = null;
    }

    res.redirect("/dashboard");
};

exports.logout = (req, res) => {
    req.session = null;
    req.logout();
    // req.flash("success_msg", "خروج موفقیت آمیز بود");
    res.redirect("/admin/login");
};

exports.register = (req, res) => {
    res.render("register", {
        pageTitle: "ثبت نام کاربر جدید",
        path: "/register",
    });
};
exports.handleRegister = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error("Validation is failed.");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }

        const { email, fullname, password } = req.body;
        const hashedPw = await bcrypt.hash(password, 12);
        const userCount = await User.findOne({ email });
        //const userCount = await User.find().countDocuments();

        let user; let messagetxt = "";
        // if (userCount !== 0) {
        if (userCount) {
            /* user = new User({ email, fullname, password: hashedPw });
             await user.save();*/
            messagetxt = "Exit User!";
            res.status(202).json({ message: messagetxt });

        } else {
            user = new User({
                email,
                fullname,
                password: hashedPw,
                // isAdmin: false
            });
            await user.save();
            messagetxt = "User created.";
            res.status(201).json({ message: messagetxt });
        }

        // sendEmail(
        //     user.email,
        //     user.fullname,
        //     'Signup was seccessfull.',
        //     'We glad to have you on board.'
        // )
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.createUser = async (req, res) => {
    const errors = [];
    try {
        await User.userValidation(req.body);
        const { fullname, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            errors.push({ message: "کاربری با این ایمیل موجود است" });
            return res.render("register", {
                pageTitle: "ثبت نام کاربر",
                path: "/register",
                errors,
            });
        }

        await User.create({ fullname, email, password });

        //? Send Welcome Email
        sendEmail(
            email,
            fullname,
            "خوش آمدی به وبلاگ ما",
            "خیلی خوشحالیم که به جمع ما وبلاگرهای خفن ملحق شدی"
        );

        req.flash("success_msg", "ثبت نام موفقیت آمیز بود.");
        res.redirect("/admin/login");
    } catch (err) {
        console.log(err);
        err.inner.forEach((e) => {
            errors.push({
                name: e.path,
                message: e.message,
            });
        });

        return res.render("register", {
            pageTitle: "ثبت نام کاربر",
            path: "/register",
            errors,
        });
    }
};

exports.forgetPasswrod = async (req, res) => {
    res.render("forgetPass", {
        pageTitle: "فراموشی رمز عبور",
        path: "/login",
        message: req.flash("success_msg"),
        error: req.flash("error"),
    });
};

exports.handleForgetPassword = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        req.flash("error", "کاربری با ایمیل در پایگاه داده ثبت نیست");

        return res.render("forgetPass", {
            pageTitle: "فراموشی رمز عبور",
            path: "/login",
            message: req.flash("success_msg"),
            error: req.flash("error"),
        });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    const resetLink = `http://localhost:3000/admin/reset-password/${token}`;

    sendEmail(
        user.email,
        user.fullname,
        "فراموشی رمز عبور",
        `
        جهت تغییر رمز عبور فعلی رو لینک زیر کلیک کنید
        <a href="${resetLink}">لینک تغییر رمز عبور</a>
    `
    );

    req.flash("success_msg", "ایمیل حاوی لینک با موفقیت ارسال شد");

    res.render("forgetPass", {
        pageTitle: "فراموشی رمز عبور",
        path: "/login",
        message: req.flash("success_msg"),
        error: req.flash("error"),
    });
};

exports.resetPassword = async (req, res) => {
    const token = req.params.token;

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
    } catch (err) {
        console.log(err);
        if (!decodedToken) {
            return res.redirect("/404");
        }
    }

    res.render("resetPass", {
        pageTitle: "تغییر پسورد",
        path: "/login",
        message: req.flash("success_msg"),
        error: req.flash("error"),
        userId: decodedToken.userId,
    });
};
/*********************Handle************** */
exports.handleLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error("Validation Error.");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }
        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error(
                "A user with this email could not be found"
            );
            error.statusCode = 401;
            throw error;
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            const error = new Error("Wrong password.");
            error.statusCode = 401;
            throw error;
        }

        const token = await jwt.sign(
            {
                user: {
                    userId: user._id.toString(),
                    email: user.email,
                    fullname: user.fullname,
                    isAdmin: user.isAdmin
                }
            },
            "secret",
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({ token, userId: user._id.toString() });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************************** */
exports.handleResetPassword = async (req, res) => {
    const { password, confirmPassword } = req.body;
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
        req.flash("error", "کلمه های عبور یاکسان نیستند");

        return res.render("resetPass", {
            pageTitle: "تغییر پسورد",
            path: "/login",
            message: req.flash("success_msg"),
            error: req.flash("error"),
            userId: req.params.id,
        });
    }

    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
        return res.redirect("/404");
    }

    user.password = password;
    await user.save();

    req.flash("success_msg", "پسورد شما با موفقیت بروزرسانی شد");
    res.redirect("/admin/login");
};
exports.getAllusers = async (req, res) => {
    const page = +req.query.page || 1;
    const postPerPage = 10;

    try {
        const numberOfPosts = await User.find({
            user: req.user._id,
        }).countDocuments();
        const allusers = await User.find({})
            .skip((page - 1) * postPerPage)
            .limit(postPerPage);

        res.render("private/allusersgroups", {
            pageTitle: "بخش مدیریت | کاربران",
            path: "/usersgroup/allusersgroup",
            layout: "./layouts/usersgroupLayout",

            allusers,

            currentPage: page,
            nextPage: page + 1,
            previousPage: page - 1,
            hasNextPage: postPerPage * page < numberOfPosts,
            hasPreviousPage: page > 1,
            lastPage: Math.ceil(numberOfPosts / postPerPage),
        });
    } catch (err) {
        console.log(err);
        get500(req, res);
    }
};

