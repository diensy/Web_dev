let button = document.getElementById("btn");
button.addEventListener("click", () => {
  alert("I was clicked yay!!!");
});
let btn = document.getElementById("btn1");
btn.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML = "Change Content";
});
document.addEventListener("keydown", (e) => {
  console.log(e.key, e.keyCode);
});
