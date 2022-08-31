var express = require("express");
var router = express.Router();
var carsCtrl = require("../../controllers/cars");

/* GET users listing. */
router.get("/", carsCtrl.index);
router.get("/new/", carsCtrl.new);
router.get("/:carId/", carsCtrl.show);
router.get("/:carId/edit/", carsCtrl.edit);
router.put("/newcustomer/", carsCtrl.updateUser);
router.put("/:carId", carsCtrl.update);
router.post("/", carsCtrl.create);
router.delete("/:carId", carsCtrl.delete);

module.exports = router;
