const { Router } = require("express");
const realtyController = require("../controllers/realtyController");

const router = new Router();

router.post("/add-realty", realtyController.handleAddRealty);
router.get("/all-publicrealty", realtyController.getAllPublicRealty);
router.get("/all-userrealty/:userid", realtyController.getAllUserRealty);
/*router.get("/delete-realty/:id", realtyController.deleteRealty);
router.post("/edit-realty/:id", realtyController.editRealty);
router.post("/single-realty/:id", realtyController.singleRealty);*/
module.exports = router;
