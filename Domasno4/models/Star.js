const { readFile, writeFile } = require(`../fileSystem`);
const path = require("path");

const pathToFile = path.join(__dirname, "stars.json");

const addStar = async ({ name, habitable }) => {
  try {
    const stars = await readFile(pathToFile);
    const jsonStars = JSON.parse(stars);
    const star = {
      id: jsonStars.length + 1,
      name,
      habitable,
    };
    jsonStars.push(star);
    await writeFile(pathToFile, JSON.stringify(jsonStars));
  } catch (error) {
    return res.status(500).send(error);
  }
};

const viewStar = async () => {
  try {
    const stars = await readFile(pathToFile);
    return stars.toString();
  } catch (error) {
    return [];
  }
};

const updateStar = async ({ id, name, habitable }) => {
  try {
    const stars = await readFile(pathToFile);
    let jsonStars = JSON.parse(stars);
    jsonStars = jsonStars.map((star) => {
      if (star.id === id) {
        return {
          id: star.id,
          name,
          habitable,
        };
      }
      return star;
    });
    await writeFile(pathToFile, JSON.stringify(jsonStars));
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteStar = async (id) => {
  try {
    const stars = await readFile(pathToFile);
    let jsonStars = JSON.parse(stars);
    jsonStars = jsonStars.filter((star) => star.id !== id);
    await writeFile(pathToFile, JSON.stringify(jsonStars));
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  addStar,
  viewStar,
  updateStar,
  deleteStar,
};
