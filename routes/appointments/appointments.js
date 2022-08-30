var express = require("express");
var router = express.Router();
var appointmentsCtrl = require("../../controllers/appointments");

router.get("/dashboard/:carId/appointments/new/", appointmentsCtrl.new);
router.get(
  "/dashboard/:carId/appointments/:appointmentId",
  appointmentsCtrl.delete
);
// router.get(
//   "/dashboard/:carId/appointments/:appointmentId/update",
//   appointmentsCtrl.update
// );
router.post("/dashboard/:carId/", appointmentsCtrl.create);

module.exports = router;
