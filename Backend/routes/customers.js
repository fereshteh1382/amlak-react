const { Router } = require("express");

const customersController = require("../controllers/customersController");
const rezervController = require("../controllers/rezervController");

const router = new Router();


router.post("/add-customers", customersController.handleRegisterCustomers);
router.get("/all-customers/:user", customersController.getAllCustomers);
router.get("/delete-customers/:id", customersController.deleteCustomer);
router.get("/edit-customers/:id", customersController.editCustomer);
router.post("/sms-customers/:customernubmers", customersController.smsCustomer);
router.post("/add-rezerv", rezervController.handleRezervCustomers);

module.exports = router;
