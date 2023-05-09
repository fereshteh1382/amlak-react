const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

const { schema } = require("./secure/userValidation");

const usersgroupSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "نام و نام خانوادگی الزامی می باشد"],
        trim: true,
    },
    username: {
        type: String,
        required: [true, "نام کاربری الزامی می باشد"],
        unique: true,
    },
    level: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

usersgroupSchema.statics.userValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};
/*
userSchema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});*/

module.exports = mongoose.model("Usersgroup", usersgroupSchema);
