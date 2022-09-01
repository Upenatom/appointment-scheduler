var express = require("express");
var router = express.Router();
var adminCtrl = require("../../controllers/admin");

router.get("/", adminCtrl.index);
router.get("/:carId/:appointmentId/edit", adminCtrl.edit);
router.put("/", adminCtrl.update);

module.exports = router;
