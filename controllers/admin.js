const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index };

function index(req, res) {
  console.log("you've hit admin index contorller");
  Customer.findById(req.user.id, function (err, admin) {
    // console.log(admin);
    if (admin.isAdmin) {
      Car.find({}, function (err, car) {
        Customer.find({}, function (err, customer) {
          res.render("admin/index", { car, customer });
        });
      });
    } else {
      console.log("you've hit homepage render");
      res.redirect("/");
    }
  });
}
