const {
  addSong,
  delSong,
  getSong,
  getSongId,
  updateSong,
} = require("../models/Song");

const getAllSongs = async (req, res, next) => {
  try {
    const allSongs = await getSong();
    return res.status(200).json(allSongs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getSongLICNA = async (req, res, next) => {
  const id = +req.params.id;

  if (!id) {
    return res.status(404).json("Missing id");
  }

  try {
    const song = await getSongId(id);
    return res.status(200).json(song);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postSong = async (req, res, next) => {
  const { name, genre, releaseDate, artist } = req.body;

  if (!name || !genre || !releaseDate || !artist) {
    return res.status(404).json(res.status);
  }

  try {
    await addSong({ name, genre, releaseDate, artist });
    return res.status(200).json("Song created");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putSong = async (req, res, next) => {
  const { name, genre, releaseDate, artist } = req.body;
  const id = +req.params.id;

  if (!id || !genre || !releaseDate || !artist || !name) {
    return res.status(404).json("Missing data");
  }

  try {
    await updateSong({ id, name, genre, releaseDate, artist });
    return res.status(200).json("Song updated");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteSong = async (req, res, next) => {
  const id = +req.params.id;

  if (!id) {
    return res.status(404).json("Missing data");
  }

  try {
    await delSong(id);
    return res.status(200).json(`Deleted`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllSongs,
  getSongLICNA,
  postSong,
  putSong,
  deleteSong,
};
