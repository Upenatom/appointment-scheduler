const Customer = require("../models/customer");
module.exports = { home };

function home(req, res, next) {
  res.render("index", { title: "Express", home, user: req.user });
}
