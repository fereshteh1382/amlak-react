//const Yup = require("yup");
const Customersfile = require("../models/CustomersFile");
//const { formatDate } = require("../utils/jalali");
//const { truncate } = require("../utils/helpers");
//const { sendEmail } = require("../utils/mailer");

exports.handleRegisterCustomersfile = async (req, res, next) => {

    try {
        /*const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error("Validation is failed.");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }*/

        const { category, city, range, title, meterage, images, price, rooms, yearconstruction, floor, elevator, parking, warehouse, address, desc, user, customer } = req.body;
        ///   const userCount = await Customersfile.findOne({ fullname });

        let customersfile;
        //let messagetxt = "";
        /* if (userCount) {
 
             messagetxt = "Exit Customer!";
             res.status(202).json({ message: messagetxt });
 
         } else {*/
        customersfile = new Customersfile({

            category,
            city,
            range,
            title,
            meterage,
            images,
            price,
            rooms,
            yearconstruction,
            floor,
            elevator,
            parking,
            warehouse,
            address,
            desc,
            user,
            customer,
            /* user: req.user.id,
             customer: customer,
             image: fileName,*/

        });
        await customersfile.save();
        res.status(201).json({ message: "Create File Melk" });

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/******************************************* */
exports.getAllFiles = async (req, res, next) => {
    // const currentPage = Number.parseInt(req.query.page) || 1;
    // const perPage = Number.parseInt(req.query.perpage) || 4;
    try {
        const total = await Customersfile.find().countDocuments();
        const files = await Customersfile.find();
        // .skip((currentPage - 1) * perPage)
        // .limit(perPage);

        res.status(200).json({ files, total });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
/****************************** */
/*exports.handleRegisterCustomersfile = async (req, res) => {
    const errorArr = [];

    //  const thumbnail = req.files ? req.files.thumbnail : {};
    const fileName = `${shortId.generate()}_${thumbnail.name}`;
    const uploadPath = `${appRoot}/public/uploads/thumbnails/${fileName}`;

    try {
        req.body = { ...req.body, thumbnail };

        await Blog.postValidation(req.body);

        await sharp(thumbnail.data)
            .jpeg({ quality: 60 })
            .toFile(uploadPath)
            .catch((err) => console.log(err));

        await Blog.create({
            ...req.body,
            user: req.user.id,
            thumbnail: fileName,
        });
        res.status(202).json({ message: "Create File Melk" });
    } catch (err) {
        console.log(err);
        err.inner.forEach((e) => {
            errorArr.push({
                name: e.path,
                message: e.message,
            });
        });

    }
};*/

/***************************** */
exports.uploadImage = (req, res) => {
    const upload = multer({
        limits: { fileSize: 4000000 },
        fileFilter: fileFilter,
    }).single("image");

    upload(req, res, async (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res
                    .status(400)
                    .send("حجم عکس ارسالی نباید بیشتر از 4 مگابایت باشد");
            }
            res.status(400).send(err);
        } else {
            if (req.file) {
                const fileName = `${shortId.generate()}_${req.file.originalname
                    }`;
                await sharp(req.file.buffer)
                    .jpeg({
                        quality: 60,
                    })
                    .toFile(`./public/uploads/${fileName}`)
                    .catch((err) => console.log(err));
                res.status(200).send(
                    `http://localhost:3000/uploads/${fileName}`
                );
            } else {
                res.send("جهت آپلود باید عکسی انتخاب کنید");
            }
        }
    });
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

*/