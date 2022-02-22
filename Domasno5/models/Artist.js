let Artists = [
  {
    id: 1,
    artist: "Filip",
    name: "Kje naucam",
  },
];

const getArtist = async () => {
  return Artists;
};

const getArtistId = async (id) => {
  const artist = Artists.filter((song) => song.id === id);
  return artist;
};

const addArtist = async ({ name, artist }) => {
  const newArtist = {
    id: Artists.length + 1,
    name,
    artist,
  };
  Artists.push(newArtist);
};

const updateArtist = async ({ id, name, artist }) => {
  Artists = Artists.map((updatedArtist) => {
    if (updatedArtist.id === id) {
      return {
        id: updatedArtist.id,
        name,
        artist,
      };
    }
    return updatedArtist;
  });
};

const delArtist = async (id) => {
  Artists = Artists.filter((artist) => artist.id !== id);
};

module.exports = {
  addArtist,
  getArtist,
  getArtistId,
  updateArtist,
  delArtist,
};
