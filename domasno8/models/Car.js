const mongoose = require("mongoose");

const Car = mongoose.model("/cars", {
  make: String,
  series: String,
  powerTrain: String,
  l100kmh: Number,
  color: String,
});

module.exports = Car;
