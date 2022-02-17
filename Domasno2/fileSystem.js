const fs = require(`fs/promises`);

const writeToFile = async (pathToFile, newContent) => {
  try {
    await fs.writeFile(pathToFile, newContent);
  } catch (error) {
    console.log(error);
  }
};

const readToFile = async (pathToFile) => {
  try {
    const fileContent = await fs.readFile(pathToFile);
    return fileContent;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  writeToFile,
  readToFile,
};
