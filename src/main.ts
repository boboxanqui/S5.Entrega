// Import elements
import {joke, jokeReport} from './interfaces';

// Nivell 1
const apiJoke = "https://icanhazdadjoke.com/";
const headerJson = {
  headers: {
    Accept: "application/json",
  },
};
const htmlJoke: HTMLElement | null = document.querySelector("#joke")
var jokeJson: joke;

function newJoke(): void {
  fetch(apiJoke, headerJson)
    .then((response) => response.json())
    .then((data: joke) => {
      htmlJoke.innerHTML = `"${data.joke}"`;
      jokeJson =  data;
    })
}

// Nivell 2
const reportAcudits: jokeReport[] = [];

function newScore (score: number) {
  reportAcudits.push({
    joke: jokeJson.joke,
    score: score,
    date: new Date().toISOString()
  })
  console.table(reportAcudits)
  //Disable jokeScores buttons
}
