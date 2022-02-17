const http = require(`http`);
const path = require(`path`);
const fs = require(`./fileSystem`);

const pathToFile = path.join(__dirname, `domasni.txt`);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end();
});

server.listen(8080, () => {
  fs.writeToFile(pathToFile, `Deneska ucese povekje od vcera, bravo`)
    .then(() => {
      return fs.readToFile(pathToFile);
    })
    .then((domasnite) => {
      console.log(domasnite.toString());
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(`Server running!`);
});
