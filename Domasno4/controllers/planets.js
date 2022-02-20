const Planets = require("../models/Planet");

const addNewPlanet = async (req, res) => {
  const { name, habitable } = req.body;

  if (!name || !habitable) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Planets.addPlanet({ name, habitable });
    return res.status(200).json(`Added is ${name}`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllPlanet = async (req, res) => {
  try {
    const planets = await Planets.getPlanet();
    return res.status(200).json(planets);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updatePlanet = async (req, res) => {
  const { id, name, habitable } = req.body;

  if (!id || !habitable || !name) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Planets.updatePlanet({ id, name, habitable });
    return res.status(200).json(`Updateded`);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteThePlanet = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Planets.deletePlanet(id);
    return res.status(200).json(`Deleted`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  addNewPlanet,
  getAllPlanet,
  updatePlanet,
  deleteThePlanet,
};
