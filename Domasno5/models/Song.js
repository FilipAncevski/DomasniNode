let Songs = [
  {
    id: 1,
    name: "Pesnishtee",
    genre: "Rokce",
    releaseDate: "2016-08-29T09:12:33.001Z",
    artist: "Filip",
  },
];

const getSong = async () => {
  return Songs;
};

const getSongId = async (id) => {
  const song = Songs.filter((song) => song.id === id);
  return song;
};

const addSong = async ({ name, genre, releaseDate, artist }) => {
  const song = {
    id: Songs.length + 1,
    name,
    genre,
    releaseDate,
    artist,
  };
  Songs.push(song);
};

const updateSong = async ({ id, name, genre, releaseDate, artist }) => {
  Songs = Songs.map((song) => {
    if (song.id === id) {
      return {
        id: song.id,
        name,
        genre,
        releaseDate,
        artist,
      };
    }
    return song;
  });
};

const delSong = async (id) => {
  Songs = Songs.filter((song) => song.id !== id);
};

module.exports = {
  addSong,
  getSong,
  getSongId,
  updateSong,
  delSong,
};
