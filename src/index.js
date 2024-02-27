import axios from "axios";

function handleClick(event) {
  event.preventDefault();
  let apiKey = "39284b94tea8fb240cc5d3o3a355d5a0";
  let context = "You are an AI who provides popular jokes.";
  let prompt = "Please generate a joke that makes you laugh! Start with: Why> ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

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
