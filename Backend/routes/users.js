const { Router } = require("express");

const userController = require("../controllers/userController");
const { authenticated } = require("../middlewares/auth");

const router = new Router();

router.get("/", userController.login);

//  @desc   Login Page
//  @route  GET /users/login
router.get("/login", userController.login);

//  @desc   Login Handle
//  @route  POST /users/login
router.post("/login", userController.AdminhandleLogin, userController.rememberMe);
router.post("/handleLogin", userController.handleLogin);

//  @desc   Logout Handle
//  @route  GET /users/logout
router.get("/logout", authenticated, userController.logout);

//  @desc   Register Page
//  @route  GET /users/register
router.get("/register", userController.register);
router.post("/handleRegister", userController.handleRegister);

//  @desc   Forget Password Page
//  @route  GET /users/forget-password
router.get("/forget-password", userController.forgetPasswrod);

//  @desc   Reset Password Page
//  @route  GET /users/reset-password/:token
router.get("/reset-password/:token", userController.resetPassword);

//  @desc   Handle Forget Password
//  @route  POST /users/forget-password
router.post("/forget-password", userController.handleForgetPassword);

//  @desc   Handle reset Password
//  @route  POST /users/reset-password/:id
router.post("/reset-password/:id", userController.handleResetPassword);

//  @desc   Register Handle
//  @route  POST /users/register
router.post("/register", userController.createUser);
router.get("/allusers", userController.getAllusers);

module.exports = router;
