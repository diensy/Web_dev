import fs from "fs/promises";
import fsn from "fs";
import path from "path";
let basePath =
  "/Users/dineshkumarsahoo/Documents/FullStack_Developer/Express/Exercise/Exercise-1/Files";

let files = await fs.readdir(basePath);
for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];
  console.log("running for ", ext);
  if (fsn.existsSync(path.join(basePath, ext))) {
    // Move the files in this  directory
    fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
  } else {
    fs.mkdir(ext);
  }
  console.log(item);
}
