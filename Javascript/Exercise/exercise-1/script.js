/* creating a faulty calculator using JavaScript
1. It takes the number as in put from the user 
2. It perform the wrong opperation as follows
+ --> -
* --> +
- --> /
/ --> **
 It performs wrong opperation 10% of time
*/

let random = Math.random();

let a = prompt("Enter your first number ");
let c = prompt("Enter your operation ");
let b = prompt("Enter your second number ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  //perform right calculator
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  //perfrom wrong calculator
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
