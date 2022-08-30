var express = require("express");
var router = express.Router();
var dashboardCtrl = require("../../controllers/dashboard");

/* GET users listing. */
router.get("/", dashboardCtrl.index);
router.get("/new/", dashboardCtrl.new);
router.get("/:carId/", dashboardCtrl.show);
router.put("/newcustomer/", dashboardCtrl.updateUser);
router.post("/", dashboardCtrl.create);

module.exports = router;
