const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index, edit };

function edit(req, res) {
  console.log("hitting edit router");
  Customer.findById(req.user.id, function (err, admin) {
    if (admin.isAdmin) {
      res.send("ok");
    } else {
      res.redirect("/");
    }
  });
}

function index(req, res) {
  Customer.findById(req.user.id, function (err, admin) {
    if (admin.isAdmin) {
      Car.find({})
        .populate("customer")
        .exec(function (err, car) {
          res.render("admin/index", { car });
        });
    } else {
      res.redirect("/");
    }
  });
}
