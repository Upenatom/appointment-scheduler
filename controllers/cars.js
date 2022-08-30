const Customer = require("../models/customer");
const Car = require("../models/car");
module.exports = { show };

function show(req, res) {
  Car.findById(req.params.id, function (err, car) {
    res.render("cars/show", { car });
  });
}
