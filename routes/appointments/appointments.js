var express = require("express");
var router = express.Router();
var appointmentsCtrl = require("../../controllers/appointments");

router.get("/cars/:carId/appointments/new/", appointmentsCtrl.new);
router.get("/cars/:carId/appointments/:appointmentId", appointmentsCtrl.delete);
router.post("/cars/:carId/", appointmentsCtrl.create);

module.exports = router;
