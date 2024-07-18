const fs = require("fs");
// console.log(fs)
console.log("Starting");
// fs.writeFileSync("Dinesh.txt", "Dinesh is a Good boy");
fs.writeFile("Dinesh2.txt", "Dinesh become a web Developer", () => {
  console.log("Done");
  // fs.readFile("Dinesh3.txt", (error, data) => {
  //   console.log(error, data);
  // });
});
console.log("Ending");
fs.appendFile("Dinesh2.txt", "Dinesh", (e, d) => {
  console.log(d);
});
