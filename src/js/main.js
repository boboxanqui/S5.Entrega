"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Nivell 1
const apiJoke = "https://icanhazdadjoke.com/";
const headerJson = {
    headers: {
        Accept: "application/json",
    },
};
const htmlJoke = document.querySelector("#joke");
var jokeJson;
function newJoke() {
    fetch(apiJoke, headerJson)
        .then((response) => response.json())
        .then((data) => {
        htmlJoke.innerHTML = `"${data.joke}"`;
        jokeJson = data;
    });
}
// Nivell 2
const reportAcudits = [];
function newScore(score) {
    reportAcudits.push({
        joke: jokeJson.joke,
        score: score,
        date: new Date().toISOString()
    });
    console.table(reportAcudits);
}
//# sourceMappingURL=main.js.map