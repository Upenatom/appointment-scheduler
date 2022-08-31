var express = require("express");
var router = express.Router();
var adminCtrl = require("../../controllers/admin");

router.get("/", adminCtrl.index);
router.get("/:carId/:appointmentId", adminCtrl.edit);

module.exports = router;
