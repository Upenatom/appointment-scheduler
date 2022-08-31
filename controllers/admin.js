const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index };

function index(req, res) {
  Customer.findById(req.user.id, function (err, admin) {
    if (admin.isAdmin) {
      Car.find({})
        .populate("customer")
        .exec(function (err, car) {
          Customer.find({}, function (err, customer) {
            res.render("admin/index", { car, customer });
          });
        });

      //   Car.find({}, function (err, car) {
      //     Customer.find({}, function (err, customer) {
      //       res.render("admin/index", { car, customer });
      //     });
      //   });
    } else {
      res.redirect("/");
    }
  });
}
