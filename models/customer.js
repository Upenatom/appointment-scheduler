const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  isAdmin: Boolean,
  googleId: String,
});

module.exports = mongoose.model("Customer", customerSchema);
