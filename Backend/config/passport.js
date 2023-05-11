const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

passport.use(
    new Strategy({ usernameField: "mobile" }, async (mobile, password, done) => {
        try {
            const user = await User.findOne({ mobile });
            if (!user) {
                return done(null, false, {
                    message: "کاربری با این موبایل ثبت نشده",
                });
            }
            const statususer = await User.findOne({ status });
            if (statususer !== 'admin') {
                return done(null, false, {
                    message: "شما مجوز دسترسی به ادمین را ندارید",
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                return done(null, user); //req.user
            } else {
                return done(null, false, {
                    message: "نام کاربری یا کلمه عبور صحیح نمی باشد",
                });
            }
        } catch (err) {
            console.log(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
