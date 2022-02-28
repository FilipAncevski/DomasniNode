require("dotenv").config();
const http = require("http");
const app = require("./app");
const dbConnector = require("./config/db");

const server = http.createServer(app);
const PORT = process.env.PORT;

dbConnector()
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server is live,mongo connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
