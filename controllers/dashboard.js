const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index, updateUser, new: newCar, create, show };

function show(req, res) {
  console.log("reqparams =", req.params.carId);
  Car.findById(req.params.carId, function (err, car) {
    res.render("cars/show", { car });
  });
}

function index(req, res, next) {
  Car.find({ customer: req.user.id }, function (err, car) {
    Customer.findById(req.user.id, function (err, customer) {
      res.render("dashboard", { customer, car });
    });
  });
  //   Customer.findOne({ email: req.user.email }, function (err, customer) {
  //     console.log("customer:", customer);
  //   });
}

function updateUser(req, res) {
  Customer.findOne({ email: req.user.email }, function (err, customer) {
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.phone = req.body.phone;
    customer.save(function (err) {
      req.body.customer = req.user.id;
      const car = new Car(req.body);
      car.save(function (err) {
        res.redirect("/dashboard");
      });
    });
  });
}

function newCar(req, res) {
  res.render("cars/new");
}

function create(req, res) {
  req.body.appointment = [];
  req.body.customer = req.user.id;
  const car = new Car(req.body);
  car.save(function (err) {
    res.redirect("/dashboard");
  });
}
