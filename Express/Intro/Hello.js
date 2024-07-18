const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World1!");
});
app.get("/about", (req, res) => {
  res.send("Hello About");
});
app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});
app.get("/login", (req, res) => {
  res.send("Hello Login!");
});
app.get("/Dinesh/:slug", (req, res) => {
  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
