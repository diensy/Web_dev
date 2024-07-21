const express = require("express");
const router = express.Router();

//define the home page in the route
router.get("/", (req, res) => {
  res.send("This is the Home page");
});

//Define about the route
router.get("/about", (req, res) => {
  res.send("About of the HomePage");
});

//Define the about of the Blogs
router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the blog spot for ${req.params.slug}`);
});
module.exports = router;
