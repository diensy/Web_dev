document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("The child is clicked");
});
document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("The childContainer is clicked");
});
document.querySelector(".container").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("The container is clicked");
});
function randomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2}, ${val3})`;
}

let a = setInterval(() => {
  document.querySelector(".child").style.backgroundColor = randomColor();
  document.querySelector(".childContainer").style.backgroundColor =
    randomColor();
  document.querySelector(".container").style.backgroundColor = randomColor();
}, 1000);
console.log(a);
let b = setTimeout(() => {
  document.querySelector("body").style.backgroundColor = randomColor();
}, 5000);
console.log(b);
