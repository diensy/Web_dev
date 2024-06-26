async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
}
// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }
async function main() {
  console.log("Loading modules.....");
  console.log("Do something else...");
  console.log("Load Data");

  let data = await getData();
  console.log(data);
  console.log("Process Data");
  console.log("task 2");
}
main();
// let data = getData();
// data.then((v) => {
//   console.log(data);
//   console.log("Process Data");
//   console.log("task 2");
// });
