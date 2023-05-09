const { Router } = require("express");
const { authenticated } = require("../middlewares/auth");

const adminController = require("../controllers/adminController");
const usersgroupController = require("../controllers/usersgroupController");
//const userController = require("../controllers/userController");

const router = new Router();

//  @desc   Dashboard
//  @route  GET /dashboard
router.get("/", usersgroupController.getAllusersgroup);

router.get("/allusersgroup", usersgroupController.getAllusersgroup);
//  @desc   Dashboard Add Post
//  @route  GET /dashboard/add-post
router.get("/add-usersgroup", usersgroupController.getAddusersgroup);

//  @desc   Dashboard Edit Post
//  @route  GET /dashboard/edit-post/:id
//router.get("/edit-usersgroup/:id", authenticated, adminController.getEditUsergroup);
router.get("/edit-usersgroup/:id", usersgroupController.getEditUsergroup);
//  @desc   Dashboard Delete Post
//  @route  GET /dashboard/delete-post/:id
router.get("/delete-usersgroup/:id", usersgroupController.deleteUsergroup);

//  @desc   Dashboard Handle Post Creation
//  @route  POST /dashboard/add-post
router.post("/add-usersgroup", usersgroupController.createUsergroup);

//  @desc   Dashboard Handle Post Edit
//  @route  POST /dashboard/edit-post/:id
router.post("/edit-usersgroup/:id", usersgroupController.editUsergroup);

//  @desc   Dashboard Handle Image Upload
//  @route  POST /dashboard/image-upload
//router.post("/image-upload", authenticated, adminController.uploadImage);

module.exports = router;
