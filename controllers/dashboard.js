const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { index, createUser, new: newCar, create };

function index(req, res, next) {
  Car.find({ customer: req.user.id }, function (err, car) {
    Customer.findById(req.user.id, function (err, customer) {
      console.log(car);
      res.render("dashboard", { customer, car });
    });
  });
  //   Customer.findOne({ email: req.user.email }, function (err, customer) {
  //     console.log("customer:", customer);
  //   });
}

function createUser(req, res) {
  Customer.findOne({ email: req.user.email }, function (err, customer) {
    console.log(req.body);
    console.log("customer before:", customer);
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.phone = req.body.phone;
    customer.save(function (err) {
      req.body.appointment = [];
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
  console.log(req.body);
  const car = new Car(req.body);
  car.save(function (err) {
    res.redirect("/dashboard");
  });
}
