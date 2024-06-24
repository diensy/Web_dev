let arr = [1, 2, 3, 4, 5, 6];
console.log(`This is the original array ${arr}`);
console.log(typeof arr);
console.log(`the array length is = ${arr.length}`);
console.log(arr[2]);
console.log(arr.toString());
console.log(arr.join("  and   "));
arr.pop();
console.log(`After pop opperation the array is = ${arr}`);
arr.push(6, 7);
console.log(`After push the array is = ${arr}`);
arr.shift();
console.log(`After shift opperation the array is =  ${arr}`);
arr.unshift("Dinesh");
console.log(`After unshift opperation the array is = ${arr}`);
delete arr[0];
console.log(`After Delete opperation the array is = ${arr}`);
console.log(arr.length);

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7];
let a3 = [8, 9];
let a = a1.concat(a2, a3);
console.log(a);
let b = [32, 3, 45, 24, 87, 65, 99, 4, 96, 0, 43, 11, 2, 55, 67, 85];
console.log(`The sorted array is = ${b.sort()}`);

let c = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(c);
c.splice(1, 4);
console.log(`After splice opperation the array is = ${c}`);
c.splice(1, 2, 333, 444, 555);
console.log(`After splice opperation the array is = ${c}`);
