const Customer = require("../models/customer");
module.exports = { home };

function home(req, res, next) {
  res.render("index", { title: "Sadie's Mayday Repair", home, user: req.user });
}
