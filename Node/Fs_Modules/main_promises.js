import fs from "fs/promises";
let a = await fs.readFile("Dinesh2.txt");
console.log(a.toString());
let b = await fs.appendFile("Rinku.txt", "\n\n\n\nRinku is a Good Boy");
console.log(b);
