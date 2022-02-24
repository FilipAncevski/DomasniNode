require("dotenv").config();
const http = require("http");
const dbConnector = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT;
const server = http.createServer(app);

dbConnector()
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server is live, mongo connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
