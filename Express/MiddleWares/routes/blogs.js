const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
router.get("/", (req, res) => {
  res.send("Birds Home Page");
});
router.get("/about", (req, res) => {
  res.send("About Birds");
});
module.exports = router;
