const apiJoke = "https://icanhazdadjoke.com/";
const headerJson = {
  headers: {
    Accept: "application/json",
  },
};
const htmlJoke: HTMLElement | null = document.querySelector("#joke")

function newJoke(): void {
  fetch(apiJoke, headerJson)
    .then((response) => response.json())
    .then((data) => htmlJoke.innerHTML = `"${data.joke}"`);
}

