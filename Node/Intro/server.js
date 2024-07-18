var slugify = require("Intro/slugify");
let a = slugify("some String");
console.log(a);
const b = slugify("some string#&*^$*@^$", "_");
console.log(b);
