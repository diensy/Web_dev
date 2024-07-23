const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let siteName = "Addidas";
  let searchText = "Search Now";
  let arr = [20, 34, 56];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});
app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Addidas when and why?";
  let blogContent = "It is verry good app";
  res.render("index", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
