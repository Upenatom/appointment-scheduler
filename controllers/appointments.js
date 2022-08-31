const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = {
  new: newAppointment,
  create,
  delete: deleteAppointment,
  edit,
};

function edit(req, res) {
  console.log("edit app router");
  Car.findById(req.params.carId, function (err, car) {
    const appointment = car.appointment.id(req.params.appointmentId);
    res.render("appointment/update", { car, appointment });
  });
}

function deleteAppointment(req, res) {
  console.log("delete app router");
  Car.findById(req.params.carId, function (err, car) {
    car.appointment.id(req.params.appointmentId).remove();
    car.save(function (err) {
      res.redirect(`/cars/${car.id}`);
    });
  });
}

function newAppointment(req, res) {
  console.log("new app router");
  Car.findById(req.params.carId, function (err, car) {
    res.render("appointment/new", { car });
  });
}

function create(req, res) {
  console.log("create app router");
  Car.findById(req.params.carId, function (err, car) {
    car.appointment.push(req.body);
    car.save(function (err) {
      res.redirect(`/cars/${car.id}`);
    });
  });
}
