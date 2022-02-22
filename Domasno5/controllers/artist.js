const {
  addArtist,
  delArtist,
  getArtist,
  getArtistId,
  updateArtist,
} = require("../models/Artist");

const getAllArtist = async (req, res, next) => {
  try {
    const allArtist = await getArtist();
    return res.status(200).json(allArtist);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getArtistLICNA = async (req, res, next) => {
  const id = +req.params.id;

  if (!id) {
    return res.status(404).json("Missing id");
  }

  try {
    const artist = await getArtistId(id);
    return res.status(200).json(artist);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postArtist = async (req, res, next) => {
  const { name, artist } = req.body;

  if (!name || !artist) {
    return res.status(404).json(res.status);
  }

  try {
    await addArtist({ name, artist });
    return res.status(200).json("Artist created");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putArtist = async (req, res, next) => {
  const { name, artist } = req.body;
  const id = +req.params.id;

  if (!id || !artist || !name) {
    return res.status(404).json("Missing data");
  }

  try {
    await updateArtist({ id, artist, name });
    return res.status(200).json("Artist updated");
  } catch (error) {
    return res.status(500).json(error.status);
  }
};

const deleteArtist = async (req, res, next) => {
  const id = +req.params.id;

  if (!id) {
    return res.status(404).json("Missing data");
  }

  try {
    await delArtist(id);
    return res.status(200).json(`Deleted`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllArtist,
  getArtistLICNA,
  postArtist,
  putArtist,
  deleteArtist,
};
