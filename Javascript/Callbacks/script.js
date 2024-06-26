console.log("javascript asynchronous nature");
console.log("Dinesh test this nature");

setTimeout(() => {
  console.log("this part is skipped for this nature");
}, 2000);
console.log("End");
const callback = (arg) => {
  console.log(arg);
};

const loadFunction = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Rinku");
  document.head.append(sc);
};
loadFunction(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
