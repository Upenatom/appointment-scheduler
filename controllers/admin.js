const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index, edit, update, delete: deleteAppt };

function edit(req, res) {
  console.log("hitting edit router");
  Customer.findById(req.user.id, function (err, admin) {
    if (admin.isAdmin) {
      Car.findById(req.params.carId, function (err, car) {
        const appointment = car.appointment.id(req.params.appointmentId);
        res.render("admin/edit", { car, appointment });
      });
    } else {
      res.redirect("../");
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
      res.redirect("../");
    }
  });
}

function update(req, res) {
  console.log("hitting update router");
  Customer.findById(req.user.id, function (err, admin) {
    if (admin.isAdmin) {
      Car.findById(req.params.carId, function (err, car) {
        const appointment = car.appointment.id(req.params.appointmentId);
        appointment.date = req.body.date;
        appointment.time = req.body.appointment;
        appointment.carSymptom = req.body.carSymptom;
        appointment.ownerComment = req.body.ownerComment;
        car.save(function (err) {
          res.redirect("/admin");
        });
      });
    } else {
      res.redirect("../");
    }
  });
}
function deleteAppt(req, res) {}
