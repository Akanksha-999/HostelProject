const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: String,
  address: String,
  country: String,
  state: String,
});

module.exports = mongoose.model("User", UserSchema);
