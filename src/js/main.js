"use strict";
const apiJoke = "https://icanhazdadjoke.com/";
const headerJson = {
    headers: {
        Accept: "application/json",
    },
};
const htmlJoke = document.querySelector("#joke");
function newJoke() {
    fetch(apiJoke, headerJson)
        .then((response) => response.json())
        .then((data) => htmlJoke.innerHTML = `"${data.joke}"`);
}
//# sourceMappingURL=main.js.map