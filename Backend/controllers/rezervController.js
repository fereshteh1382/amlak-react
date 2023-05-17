const Yup = require("yup");
const Rezerv = require("../models/Rezerv");
const { formatDate } = require("../utils/jalali");
const { truncate } = require("../utils/helpers");
//const { sendEmail } = require("../utils/mailer");

exports.handleRezervCustomers = async (req, res, next) => {
    // console.log(req);
    try {
        /* const errors = validationResult(req);
         if (!errors.isEmpty()) {
             const error = new Error("Validation is failed.");
             error.statusCode = 422;
             error.data = errors.array();
             throw error;
         }*/
        // const user = req.user._id;
        const { customerid, user, rezervdate, rezervtime } = req.body;
        // const userCount = await Customers.findOne({ fullname });
        let rezerv; let messagetxt = "";
        /*if (userCount) {
        
                    messagetxt = "Exit Customer!";
                    res.status(202).json({ message: messagetxt });
        
                } else {*/
        rezerv = new Rezerv({
            customerid,
            user,
            rezervdate,
            rezervtime,

            //user: req.user.id,
        });
        await rezerv.save();

        messagetxt = "Rezerv Added.";
        res.status(201).json({ message: messagetxt });
        // }


    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************** */
exports.editCustomer = async (req, res, next) => {

    try {
        /* const errors = validationResult(req);
         if (!errors.isEmpty()) {
             const error = new Error("Validation is failed.");
             error.statusCode = 422;
             error.data = errors.array();
             throw error;
         }*/
        const customer = await Customers.findOne({ _id: req.params.id });


        // const userCount = await Customers.findOne({ fullname });
        // let customers; 
        if (customer.user.toString() != req.user._id) {
            res.status(202).json({ message: "Not Exit Customer!" });

        } else {
            const { fullname, tel, address, desc } = req.body;
            customer.fullname = fullname;
            customer.tel = tel;
            customer.address = address;
            customer.desc = desc;

            await customer.save();
            res.status(201).json({ message: "User created." });
        }


    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
exports.getAllCustomers = async (req, res, next) => {
    // const currentPage = Number.parseInt(req.query.page) || 1;
    // const perPage = Number.parseInt(req.query.perpage) || 4;
    try {

        const numberOfCustomers = await Customers.find({
            // user: req.user._id,
            user: req.params.user
        }).countDocuments();

        const allcustomers = await Customers.find({ user: req.params.user })
            .sort({
                createdAt: "desc",
            });
        // .skip((currentPage - 1) * perPage)
        // .limit(perPage);
        //console.log(allcustomers);
        res.status(201).json({ allcustomers, numberOfCustomers });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/************************* */
exports.deleteCustomer = async (req, res) => {
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