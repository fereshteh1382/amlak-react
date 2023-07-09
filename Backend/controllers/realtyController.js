//const Yup = require("yup");
const Realty = require("../models/Realty");
//const { formatDate } = require("../utils/jalali");
//const { truncate } = require("../utils/helpers");
//const { sendEmail } = require("../utils/mailer");

exports.handleAddRealty = async (req, res, next) => {

    try {

        const { category, city, range, title, meterage,
            images, price, rooms, yearconstruction, floor,
            elevator, parking, warehouse, address, desc, user, customer, status } = req.body;
        let realty; let messagetxt = "";

        realty = new Realty({
            category, city, range, title, meterage, images,
            price, rooms, yearconstruction, floor, elevator,
            parking, warehouse, address, desc, user, customer, status
        });
        await realty.save();

        messagetxt = "realty Added.";
        res.status(201).json({ message: messagetxt });



    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************** */
exports.editRezerv = async (req, res, next) => {

    try {
        /* const errors = validationResult(req);
         if (!errors.isEmpty()) {
             const error = new Error("Validation is failed.");
             error.statusCode = 422;
             error.data = errors.array();
             throw error;
         }*/
        const rezerv = await Rezerv.findOne({ _id: req.params.id });
        if (Rezerv) {

            const { rezervdate, rezervtime } = req.body;
            rezerv.rezervdate = rezervdate;
            rezerv.rezervtime = rezervtime;
            await rezerv.save();
            res.status(201).json({ message: "rezerv saved." });
        }


    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
exports.getAllPublicRealty = async (req, res, next) => {
    // const currentPage = Number.parseInt(req.query.page) || 1;
    // const perPage = Number.parseInt(req.query.perpage) || 4;
    try {
        const allrealtys = await Realty.find({ status: "public" })
            .sort({
                createdAt: "desc",
            })

        // .skip((currentPage - 1) * perPage)
        // .limit(perPage);
        //console.log(allcustomers);
        res.status(201).json({ allrealtys });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
exports.getAllUserRealty = async (req, res, next) => {
    // const currentPage = Number.parseInt(req.query.page) || 1;
    // const perPage = Number.parseInt(req.query.perpage) || 4;
    try {
        const allrealtys = await Realty.find({ user: req.params.userid })
            .sort({
                createdAt: "desc",
            })

        // .skip((currentPage - 1) * perPage)
        // .limit(perPage);
        //console.log(allcustomers);
        res.status(201).json({ allrealtys });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
exports.deleterezerv = async (req, res) => {
    try {
        const result = await Customers.findByIdAndRemove(req.params.id);
        console.log(result);
        //res.redirect("/dashboard/allposts");
        res.status(201).json({ message: "Deleted Customer ." });
    } catch (err) {
        console.log(err);
        res.render("errors/500");
    }
};
/********************************* */
exports.getAllrealtyforadmin = async (req, res) => {

    try {

        const allrealtys = await Realty.find({ user: req.params.id })
            .sort({
                createdAt: "desc",
            })

        res.render("private/allrealty", {
            pageTitle: "بخش مدیریت | فایل ها",
            path: "/usersgroup/allusersgroup",
            layout: "./layouts/usersgroupLayout",

            allrealtys,

            /* currentPage: page,
             nextPage: page + 1,
             previousPage: page - 1,
             hasNextPage: postPerPage * page < numberOfPosts,
             hasPreviousPage: page > 1,
             lastPage: Math.ceil(numberOfPosts / postPerPage),*/
        });
    } catch (err) {
        console.log(err);
        // get500(req, res);
    }
};
/************************** */
exports.confirmrealty = async (req, res) => {
    try {
        const result = await Realty.findByIdAndUpdate(req.params.id, { status: 'public' });

        // console.log(result);
        // res.redirect("/users/allusers");
        res.status(200).json({ message: "confirm realty." });

    } catch (err) {
        console.log(err);
        //  res.render("errors/500");
    }
};
/************************** */
exports.noconfirmrealty = async (req, res) => {
    try {
        const result = await Realty.findByIdAndUpdate(req.params.id, { status: 'private' });

        // console.log(result);
        // res.redirect("/users/allusers");
        res.status(200).json({ message: "No confirm realty." });
    } catch (err) {
        console.log(err);
        //res.render("errors/500");
    }
};
/************************** */
exports.editRealty = async (req, res, next) => {

    try {
        /* const errors = validationResult(req);
         if (!errors.isEmpty()) {
             const error = new Error("Validation is failed.");
             error.statusCode = 422;
             error.data = errors.array();
             throw error;
         }*/
        const realty = await Realty.findOne({ _id: req.params.id });

        const { city, range, title, meterage,
            price, rooms, yearconstruction, floor, elevator,
            parking, warehouse, address, desc } = req.body;

        realty.city = city;
        realty.range = range;
        realty.title = title;
        realty.meterage = meterage;
        realty.price = price;
        realty.rooms = rooms;
        realty.yearconstruction = yearconstruction;
        realty.floor = floor;
        realty.elevator = elevator;
        realty.parking = parking;
        realty.warehouse = warehouse;
        realty.address = address;
        realty.desc = desc;

        await realty.save();
        res.status(200).json({ message: "اطلاعات ملک با موفقیت ویرایش گردید." });
        //  }


    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
/*************************** */
exports.getSingleRealty = async (req, res) => {

    try {

        const realty = await Realty.findOne({ _id: req.params.id });
        if (!realty) {

            error.statusCode = 401;
            throw error;
        }


        res.status(200).json({ realty: realty });

        //console.log(allcustomers);

    } catch (err) {

        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
/********************************/
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
*/