var express = require("express");
var router = express.Router();
var carsCtrl = require("../../controllers/cars");

router.get("/:carId/", carsCtrl.show);
