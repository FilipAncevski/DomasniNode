const { readFile, writeFile } = require(`../fileSystem`);
const path = require("path");

const pathToFile = path.join(__dirname, "planets.json");

const addPlanet = async ({ name, habitable }) => {
  try {
    const planets = await getPlanet();
    const jsonPlanets = JSON.parse(planets);
    const planet = {
      id: jsonPlanets.length + 1,
      name,
      habitable,
    };
    jsonPlanets.push(planet);
    await writeFile(pathToFile, JSON.stringify(jsonPlanets));
  } catch (error) {
    return error;
  }
};

const getPlanet = async () => {
  try {
    const planets = await readFile(pathToFile);
    return planets.toString();
  } catch (error) {
    return [];
  }
};

const updatePlanet = async ({ id, name, habitable }) => {
  try {
    const planets = await getPlanet();
    let jsonPlanets = JSON.parse(planets);
    jsonPlanets = jsonPlanets.map((planet) => {
      if (planet.id === id) {
        planet = {
          id: planet.id,
          name,
          habitable,
        };
      }
      return planet;
    });
    await writeFile(pathToFile, JSON.stringify(jsonPlanets));
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deletePlanet = async (id) => {
  const planets = await getPlanet();
  let jsonPlanets = JSON.parse(planets);
  jsonPlanets = jsonPlanets.filter((planet) => planet.id !== id);
  await writeFile(pathToFile, JSON.stringify(jsonPlanets));
};

module.exports = {
  addPlanet,
  getPlanet,
  updatePlanet,
  deletePlanet,
};
