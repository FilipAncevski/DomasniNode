const fs = require("fs/promises");

const writeFile = async (pathToFile, content) => {
  try {
    await fs.writeFile(pathToFile, content);
  } catch (error) {
    console.log(error);
  }
};

const readFile = async (pathToFile) => {
  try {
    const newFile = await fs.readFile(pathToFile);
    return newFile;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  writeFile,
  readFile,
};
