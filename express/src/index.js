import axios from "axios";

function handleClick(event) {
  event.preventDefault();
  const host = window.location.hostname;
  let apiUrl = `http://${host}:3000/getjoke`

  axios.get(apiUrl).then(showAnswer);
}

function showAnswer(response) {
  new Typewriter(".typewritten", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });

  let sadImg = document.querySelector("#sad");
  sadImg.classList.add("hide");
  let happyImg = document.querySelector("#happy");
  happyImg.classList.remove("hide");
}

let generatebtn = document.querySelector("#generatebtn");
generatebtn.addEventListener("click", handleClick);

function resetGenerate(event) {
  event.preventDefault();
  let sadImg = document.querySelector("#sad");
  sadImg.classList.remove("hide");
  let happyImg = document.querySelector("#happy");
  happyImg.classList.add("hide");
  let typewritten = document.querySelector(".typewritten");
  typewritten.innerHTML = "";
}

let regenerateBtn = document.querySelector("#regeneratebtn");
regenerateBtn.addEventListener("click", resetGenerate);
