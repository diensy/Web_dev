let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarr = [];
for (let i = 0; i < arr.length; i++) {
  newarr.push(arr[i] ** 2);
}
console.log(arr);
console.log(newarr);

let a = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sqa = a.map((e) => {
  return e ** 2;
});
console.log(sqa);

const greaterthan = (e) => {
  if (e > 7) {
    return true;
  } else {
    return false;
  }
};
console.log(a.filter(greaterthan));

let aray = [1, 2, 3, 4, 5, 6, 7];
const red = (a, b) => {
  return a + b;
};
console.log(aray.reduce(red));
console.log(Array.from("Dinesh"));
