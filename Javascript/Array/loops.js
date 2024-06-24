let arr = [1, 2, 33, 23, 12, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

let object = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(key, element);
  }
}
for (const iterator of arr) {
  console.log(iterator);
}
