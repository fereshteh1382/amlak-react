const { Router } = require("express");

const customersController = require("../controllers/customersController");

const router = new Router();


router.post("/add-customers", customersController.handleRegisterCustomers);

module.exports = router;
