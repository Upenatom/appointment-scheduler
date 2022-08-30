const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { new: newAppointment, create };

function newAppointment(req, res) {
  Car.findById(req.params.carId, function (err, car) {
    res.render("appointment/new", { car });
  });
}

function create(req, res) {
  Car.findById(req.params.carId, function (err, car) {
    console.log(req.body);
    car.appointment.push(req.body);
    console.log("appointment=", car.appointment);
    car.save(function (err) {
      console.log("appointment=", car.appointment);
      res.redirect(`/dashboard/${car.id}`);
    });
  });
}
