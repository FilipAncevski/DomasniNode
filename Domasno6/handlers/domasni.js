const Domasna = require("../models/Domasna");

const getAllDomasna = async (req, res, next) => {
  try {
    const allDomasni = await Domasna.find();
    return res.status(200).json(allDomasni);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addDomasna = async (req, res, next) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(404).json("Missing params");
  }

  try {
    await Domasna.create({ name, number });
    return res.status(200).json("Added new domasna");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateDomasna = async (req, res, next) => {
  const { name, number } = req.body;
  const _id = req.params._id;

  if (!name || !number) {
    return res.status(404).json("Missing params");
  }

  try {
    await Domasna.findByIdAndUpdate(_id, { name, number });
    return res.status(200).json("Updated");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteDomasna = async (req, res, next) => {
  const _id = req.params._id;

  try {
    await Domasna.findByIdAndDelete(_id);
    return res.status(200).json("Deleted");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllDomasna,
  addDomasna,
  updateDomasna,
  deleteDomasna,
};
