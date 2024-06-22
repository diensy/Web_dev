let box = document.getElementsByClassName("box");
console.log(box);
box[0].style.backgroundColor = "green";
box[1].style.backgroundColor = "blue";
box[2].style.backgroundColor = "pink";
box[3].style.backgroundColor = "green";
box[4].style.backgroundColor = "brown";
// box[0].style.color = "white";
// box[1].style.color = "white";
// box[2].style.color = "white";
// box[3].style.color = "white";
// box[4].style.color = "white";
document.getElementById("orange").style.backgroundColor = "orange";
document.getElementById("orange").style.color = "white";
document.getElementById("green").style.backgroundColor = "green";
document.getElementById("green").style.color = "white";

document.querySelector(".box").style.backgroundColor = "red";

document.querySelectorAll(".box").forEach((e) => {
  e.style.color = "white";
});
