// 1. The magical sorting hart :  Imagine you are creating for a wizard school Implement a JavaScript function that takes an array of student names and assign them to one of houses(Gryffindor(length less than 6),Hufflepuff(length less than 8),Ravenclaw(length less than 12) or Slytherin(length greater than or equal to 12)) based on the length of their name.

let student = [
  "Dinesh",
  "Ritesh",
  "Satya",
  "Uma",
  "Benni",
  "Ankit",
  "Rishi",
  "Chiku",
  "Rinku",
  "Bitu",
  "Rahul",
  "Soumya",
  "Dibyananda",
  "Rabishatri",
  "Bholeswar",
];

let houses = [];
for (const std of student) {
  if (std.length < 6) {
    houses.push("Gryffindor");
  } else if (std.length < 8) {
    houses.push("Hufflepuff");
  } else if (std.length < 12) {
    houses.push("Ravenclaw");
  } else {
    houses.push("Slytherin");
  }
}
console.log(houses);
