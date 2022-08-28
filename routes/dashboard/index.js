var express = require("express");
var router = express.Router();
var dashboardCtrl = require("../../controllers/dashboard");

/* GET users listing. */
router.get("/", dashboardCtrl.index);

module.exports = router;
