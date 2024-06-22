function question(name) {
  console.log("Hey " + name + " how are you ?");
  console.log("Hey " + name + " how your study gone ?");
  console.log("Hey " + name + " how old are you ?");
  console.log("Hey " + name + " What are you doing ?");
}

question("Rinku");
question("Rohon");

function love(name1) {
  for (let i = 0; i < 100; i++) {
    console.log("I Love you " + name1 + " ❤️");
  }
}

// love ("Mama");
// console.log("Hey Dinesh how are you ");
// console.log("Hey Dinesh how your study gone ");
// console.log("Hey Dinesh how old are you ");
// console.log("Hey Dinesh What are you doing");

function sum(a, b) {
  console.log(a + b);
}

sum(45, 45);
function min(a, b) {
  return a - b;
}

let minus = min(8, 6);
console.log("The minus of two number is = " + minus);

// Arrow function

const Arrow = (x) => {
  console.log("I am a Function", x);
};
Arrow(87);
Arrow(34);
Arrow(67);
