// const http = require("node:http");
// const fs = require ('fs');
import http from "http";
const hostname = "127.0.0.1";
const port = "3000";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "Text/html");
  res.end("<h1>Hello World</h1>");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
