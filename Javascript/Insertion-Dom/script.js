document.querySelector(".box").innerHTML = "This is Html Div";
document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style");
let para = document.createElement("p");
para.innerHTML = "I am the paragraph <b>Inserted by Dinesh</b>";
para.setAttribute("class", "created");
document.querySelector(".container").append(para);
let div = document.createElement("div");
div.innerHTML = "This is another div created by user !";
div.setAttribute("id", "div");
document.querySelector("body").before(div);
document.querySelector("#div").style.color = "blue";
let anc = document.createElement("a");
anc.innerHTML = "Google.com";
anc.setAttribute("href", "https:/www.google.com");
document.querySelector(".container").prepend(anc);