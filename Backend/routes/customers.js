const { Router } = require("express");

const customersController = require("../controllers/customersController");

const router = new Router();


router.post("/add-customers", customersController.handleRegisterCustomers);
router.get("/all-customers", customersController.getAllCustomers);
router.get("/delete-customers/:id", customersController.deleteCustomer);
router.get("/edit-customers/:id", customersController.editCustomer);

module.exports = router;
