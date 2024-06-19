var a = 10;
var b = 20;
var c = "Dinesh";
console.log(a + b);
console.log(typeof a, typeof b, typeof c);
const a1 = 5;
// a1 = 5 + 1; //const variable can not be change
// var is globaly scoped
// let and const block scoped

let x = "Dinesh Kumar ";
let y = 55;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// create object
let o = {
  name: "Rinku",
  Class: "MCA",
  Rollno: 2305274040,
  "job Role ": "Web Developer",
};
// add object reference
o.courseFee = 105000;
console.log(o);
