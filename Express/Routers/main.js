const express = require("express");
const blogs = require("./routes/blog")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("It is a get request!");
  res.send("Hello World1!");
});
app.use('/blog',blogs)
app.post("/", (req, res) => {
  console.log("It is a post request!");
  res.send("Hello World Post!");
});
app.put("/Test.html", (req, res) => {
  console.log("It is a put request!");
  res.send("Hello World PUT!");
});
app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3 });
});
app.get("/index.html", (req, res) => {
  console.log("This is the Index.html");
  res.sendFile("Templat/index.html", { root: __dirname });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
