"use strict";

const setupDiv = document.querySelector("#setup");
const punchlineDiv = document.querySelector("#punchline");
const punchlineBtn = document.querySelector("#punchlineBtn");
const newJokeBtn = document.querySelector("#newJokeBtn");

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );

  const joke = await jokePromise.json();
  setupDiv.innerHTML = joke[0].setup;
}

getJoke();
