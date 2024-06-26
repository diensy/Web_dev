let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  //Throw the error
  throw SyntaxError("Sorry this is not a number");
}
let sum = parseInt(a) + parseInt(b);
let x = 1;
// using try catch handle the error
try {
  console.log("The sum of a + b = ", sum * x);
} catch (error) {
  console.log("This is an error");
} finally {
  console.log("File connection is closed or db collection is closed");
}
