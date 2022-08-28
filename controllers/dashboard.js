const Customer = require("../models/customer");
module.exports = { index };

function index(req, res, next) {
  console.log(req.user);
  res.render("dashboard", { customer: req.user });
}
