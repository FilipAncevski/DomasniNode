const Car = require("../models/Car");

const getAllCars = async (req, res, next) => {
  try {
    const allCars = await Car.find();
    return res.status(200).json(allCars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const bulkInsert = async (req, res, next) => {
  const cars = req.body;

  if (!cars) {
    return res.status(400).json("Missing information");
  }

  try {
    const allCars = await Car.insertMany(cars);
    return res.status(201).json(allCars);
  } catch (error) {
    return req.status(500).json(error);
  }
};

const lowConsumtion = async (req, res, next) => {
  try {
    const lowConsumtionCars = await Car.aggregate([
      {
        $match: {
          l100kmh: { $gte: 3, $lte: 5 },
        },
      },
      {
        $project: {
          car: ["$make", "$series"],
          consumption: "$l100kmh",
        },
      },
    ]);
    return res.status(200).json(lowConsumtionCars);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const hybridCars = async (req, res, next) => {
  try {
    const hybridCars = await Car.aggregate([
      {
        $match: {
          powerTrain: "hybrid",
        },
      },
      {
        $project: {
          car: "$make",
        },
      },
    ]);
    return res.status(200).json(hybridCars);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const customSearch = async (req, res, next) => {
  try {
    const custom = await Car.aggregate([
      {
        $match: {
          l100kmh: { $lt: 6 },
          color: "white",
        },
      },
      {
        $limit: 5,
      },
    ]);
    return res.status(200).json(custom);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  bulkInsert,
  getAllCars,
  lowConsumtion,
  hybridCars,
  customSearch,
};
