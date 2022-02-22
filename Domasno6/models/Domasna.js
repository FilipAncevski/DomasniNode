const mongoose = require("mongoose");

const Domasna = mongoose.model("domasni", {
  name: String,
  number: Number,
});

module.exports = Domasna;
