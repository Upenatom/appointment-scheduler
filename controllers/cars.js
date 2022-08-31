const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index, updateUser, new: newCar, create, show, edit, update };

function update(req, res) {
  Car.findById(req.params.carId, function (err, car) {
    car.model = req.body.model;
    car.make = req.body.make;
    car.year = req.body.year;
    car.save(function (err) {
      res.redirect("/cars");
    });
  });
}

function edit(req, res) {
  Car.findById(req.params.carId, function (err, car) {
    res.render("cars/edit", { car });
  });
}

function show(req, res) {
  Car.findById(req.params.carId, function (err, car) {
    res.render("cars/show", { car });
  });
}

function index(req, res, next) {
  Car.find({ customer: req.user.id }, function (err, car) {
    Customer.findById(req.user.id, function (err, customer) {
      res.render("cars/index", { customer, car });
    });
  });
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
        res.redirect("/cars");
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
    res.redirect("/cars");
  });
}
