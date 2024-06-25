function createCard(title, cName, views, monthsOld, duration, thumbanail) {
  let viewNumber;
  if (views < 1000) {
    viewNumber = views / 1000 ;
  } else if (views > 1000000) {
    viewNumber = views / 100000 + "M";
  } else {
    viewNumber = views / 1000 + "K";
  }
  let html = `<div class="card">
        <div>
        <img src="${thumbanail}" alt="" />
      </div>
      <div class="capsule">${duration}</div>
      <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewNumber} views . ${monthsOld}</p>
      </div>   
      </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
createCard(
  "Interduction to Backend | Sigma Web Dev #2",
  "Code With Harry",
  560000,
  "31:45",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Interduction to Backend | Sigma Web Dev #2",
  "Code With Harry",
  560000,
  "31:45",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
