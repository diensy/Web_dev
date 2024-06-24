let num = prompt("Enter your number");

let a = 6;
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr.slice(1));
  let fact = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  console.log(fact);
}
factorial(a);

function facfor(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}
console.log(`The ${num} factorial is = ${facfor(num)}`);
