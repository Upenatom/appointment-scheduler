var express = require("express");
var router = express.Router();
var appointmentsCtrl = require("../../controllers/appointments");

router.get("/dashboard/:carId/appointments/new/", appointmentsCtrl.new);
router.post("/dashboard/:carId/", appointmentsCtrl.create);

module.exports = router;
