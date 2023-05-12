const Yup = require("yup");
const Customers = require("../models/Customers");
const { formatDate } = require("../utils/jalali");
const { truncate } = require("../utils/helpers");
//const { sendEmail } = require("../utils/mailer");

exports.handleRegisterCustomers = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error("Validation is failed.");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }

        const { fullname, tel, address, desc } = req.body;
        const userCount = await Customers.findOne({ fullname });

        let customers; let messagetxt = "";
        if (userCount) {

            messagetxt = "Exit Customer!";
            res.status(202).json({ message: messagetxt });

        } else {
            customers = new Customers({

                fullname,
                tel,
                address,
                desc,
                user: req.user.id

            });
            await customers.save();

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
/*exports.getIndex = async (req, res) => {
    const page = +req.query.page || 1;
    const postPerPage = 5;

    try {
        const numberOfPosts = await Customers.find({
            status: "public",
        }).countDocuments();

        const posts = await Customers.find({ status: "public" })
            .sort({
                createdAt: "desc",
            })
            .skip((page - 1) * postPerPage)
            .limit(postPerPage);

        res.render("index", {
            pageTitle: "مشتریان",
            path: "/",
            posts,
            formatDate,
            truncate,
            currentPage: page,
            nextPage: page + 1,
            previousPage: page - 1,
            hasNextPage: postPerPage * page < numberOfPosts,
            hasPreviousPage: page > 1,
            lastPage: Math.ceil(numberOfPosts / postPerPage),
        });
        //? Smooth Scrolling
    } catch (err) {
        console.log(err);
        res.render("errors/500");
    }
};

exports.getSinglePost = async (req, res) => {
    try {
        const post = await Blog.findOne({ _id: req.params.id }).populate(
            "user"
        );

        if (!post) return res.redirect("errors/404");

        res.render("post", {
            pageTitle: post.title,
            path: "/post",
            post,
            formatDate,
        });
    } catch (err) {
        console.log(err);
        res.render("errors/500");
    }
};

exports.getContactPage = (req, res) => {
    res.render("contact", {
        pageTitle: "تماس با ما",
        path: "/contact",
        message: req.flash("success_msg"),
        error: req.flash("error"),
        errors: [],
    });
};

exports.handleContactPage = async (req, res) => {
    const errorArr = [];

    const { fullname, email, message, captcha } = req.body;

    const schema = Yup.object().shape({
        fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
        email: Yup.string()
            .email("آدرس ایمیل صحیح نیست")
            .required("آدرس ایمیل الزامی می باشد"),
        message: Yup.string().required("پیام اصلی الزامی می باشد"),
    });

    try {
        await schema.validate(req.body, { abortEarly: false });

        //TODO Captcha Validation

        sendEmail(
            email,
            fullname,
            "پیام از طرف وبلاگ",
            `${message} <br/> ایمیل کاربر : ${email}`
        );

        req.flash("success_msg", "پیام شما با موفقیت ارسال شد");

        res.render("contact", {
            pageTitle: "تماس با ما",
            path: "/contact",
            message: req.flash("success_msg"),
            error: req.flash("error"),
            errors: errorArr,
        });
    } catch (err) {
        err.inner.forEach((e) => {
            errorArr.push({
                name: e.path,
                message: e.message,
            });
        });
        res.render("contact", {
            pageTitle: "تماس با ما",
            path: "/contact",
            message: req.flash("success_msg"),
            error: req.flash("error"),
            errors: errorArr,
        });
    }
};
*/