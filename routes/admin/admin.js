var express = require("express");
var router = express.Router();
var adminCtrl = require("../../controllers/admin");

router.get("/", adminCtrl.index);
router.get("/:carId/edit/:appointmentId", adminCtrl.edit);
router.put("/:carId/edit/:appointmentId/update", adminCtrl.update);
router.delete("/:carId/edit/:appointmentId/delete", adminCtrl.delete);
module.exports = router;
