const { Router } = require("express");

const blogController = require("../controllers/blogController");

const router = new Router();

//  @desc   Weblog Index Page
//  @route  GET /
//router.get("/", blogController.getIndex);

//  @desc   Weblog Post Page
//  @route  GET /post/:id
router.get("/post/:id", blogController.getSinglePost);

//  @desc   Weblog Contact Page
//  @route  GET /contact
router.get("/contact", blogController.getContactPage);

//  @desc   Handle Contact Page
//  @route  POST /contact
router.post("/contact", blogController.handleContactPage);

module.exports = router;
