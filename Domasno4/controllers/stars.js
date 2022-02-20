const Stars = require("../models/Star");

const addNewStar = async (req, res) => {
  const { name, habitable } = req.body;

  if (!name || !habitable) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Stars.addStar({ name, habitable });
    return res.status(200).json(`Added is ${name}`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllStar = async (req, res) => {
  try {
    const stars = await Stars.viewStar();
    return res.status(200).json(stars);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateStar = async (req, res) => {
  const { id, name, habitable } = req.body;

  if (!id || !habitable || !name) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Stars.updateStar({ id, name, habitable });
    return res.status(200).json(`Updateded`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTheStar = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    await Stars.deleteStar(id);
    return res.status(200).json(`Deleted`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  addNewStar,
  getAllStar,
  updateStar,
  deleteTheStar,
};
