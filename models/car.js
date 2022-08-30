const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: Date },
  time: String,
  carSymptom: String,
  ownerComment: { type: String, default: "" },
});

const carSchema = new Schema({
  make: String,
  model: String,
  year: String,
  appointment: [appointmentSchema],
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
});

module.exports = mongoose.model("Car", carSchema);
