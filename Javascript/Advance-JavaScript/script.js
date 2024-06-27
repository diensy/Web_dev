async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 1000);
  });
}

(async function main() {
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();

let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
console.log(x, y, rest);

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
let { a, b } = obj;
console.log(a, b);
function sum(a, b, c) {
  return a + b + c;
}
let arr = [2, 4, 7];
console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); // Spread opreator
