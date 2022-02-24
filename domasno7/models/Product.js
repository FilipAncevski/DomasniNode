const mongoose = require("mongoose");

const Product = mongoose.model("products", {
  productName: String,
  productQuantity: String,
});

module.exports = Product;
