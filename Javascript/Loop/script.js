let a = 5;
for (let i = 0; i <= a; i++) {
  console.log(i);
}

console.log("\n");

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

let o = {
  name: "Rinku",
  Class: "MCA",
  Rollno: 2305274040,
  "job Role ": "Web Developer",
};
// for in loop
for (const key in o) {
  const element = o[key];
  console.log(key, element);
}
// for of loop
for (const c of "dinesh") {
  console.log(c);
}

// while loop
let i = 1;
while (i < 10) {
  console.log(i);
  i++;
}
// Do while loop
let j = 5;
do {
  console.log(j);
  j++;
} while (j > i);
