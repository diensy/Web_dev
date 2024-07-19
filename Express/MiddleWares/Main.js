const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const blogs = require("./routes/blogs");

// app.use(express.static("public"));
app.use("/blogs", blogs);
// Middle 1
app.use((req, res, next) => {
  fs.appendFileSync("logs.txt", `${Date.now()} is ${req.method}\n`);
  console.log(`${Date.now()} is ${req.method}`);
  //   res.send("This is MiddleWare !");
  next();
});
// Middle 2
app.use((req, res, next) => {
  console.log("M2");
  next();
});
// app.use(myLogger);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
