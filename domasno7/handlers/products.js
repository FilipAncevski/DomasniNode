const Product = require("../models/Product");

const bulkInsert = async (req, res, next) => {
  const { productName, productQuantity } = req.body;

  try {
    await Product.create({ productName, productQuantity });
    return res.status(201).json("Product created successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const readingAllEntries = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updatingOneEntry = async (req, res, next) => {
  const { productName, productQuantity } = req.body;
  const _id = req.params._id;
  if (!productName || !productQuantity) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Product.findByIdAndUpdate(_id, { productName, productQuantity });
    return res.status(200).json(`${productName} updated`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletingAnEntry = async (req, res, next) => {
  const _id = req.params._id;

  try {
    await Product.findByIdAndDelete(_id);
    return res.status(200).json("Deleted successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  bulkInsert,
  readingAllEntries,
  updatingOneEntry,
  deletingAnEntry,
};
