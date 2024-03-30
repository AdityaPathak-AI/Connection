const http = require("http");
const fs = require("fs");
const { timeStamp } = require("console");

const myServer = http.createServer((req, res) => {
  const log = `New Request Received on:${Date.now()}:, Path:${req.url}`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("About Page");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(3000, () => console.log("Server Created Successfully"));
