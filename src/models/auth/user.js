const mongoose = require("mongoose");
var user = mongoose.model("user", {
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    enum: ["User", "Driver"],
    default: "User",
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = user;
