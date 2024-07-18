async function getSongs() {
  let a = await fetch("http://127.0.0.1:5501/Javascript/Spotify/songs/");
  let rensponse = await a.text();
  console.log(rensponse);
  let div = document.createElement("div");
  div.innerHTML = rensponse;
  let as = div.getElementsByTagName("a");
  console.log(as);
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

// play music function
const playMusic = (track) => {
  let audio = new Audio("/Spotify/songs/" + track);
  audio.play();
};
async function main() {
  let currentSong;
  // Get the list of song
  let songs = await getSongs();
  console.log(songs);
  let songUl = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUl.innerHTML =
      songUl.innerHTML +
      `<li>
            <img class="invert" src="music.svg" alt="" />
             <div class="info">
               <div>${song.replaceAll("%20", " ")}</div>
                  <div></div>
                </div>
          <span class="playnow">Play Now</span>
         <img class="invert" src="play.svg" alt="" />
      </li>`;
  }
  // Attach event listener to each song
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
}
main();
