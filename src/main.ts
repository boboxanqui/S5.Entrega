// Import elements
import { joke, jokeReport, weather, jokeChuck } from "./interfaces";

// Exercici 1
const apiJoke = "https://icanhazdadjoke.com/";
const headerJson = {
  headers: {
    Accept: "application/json",
  },
};
const htmlJoke = document.querySelector("#joke");
var jokeText: string;

function newJoke(): void {
  if (Math.random() < 0.5) {
    getChuckNorrisJoke();
  } else {
    fetch(apiJoke, headerJson)
      .then((response) => response.json())
      .then((data: joke) => {
        htmlJoke!.innerHTML = `"${data.joke}"`;
        jokeText = data.joke;
        changeBlub();
      });
  }
}

// Exercici 3
const reportAcudits: jokeReport[] = [];

function newScore(score: number) {
  reportAcudits.push({
    joke: jokeText,
    score: score,
    date: new Date().toISOString(),
  });
  console.table(reportAcudits);
  //Disable jokeScores buttons
}

// Exercici 4
const htmlWeather = document.getElementById("weather");
var apiWheater = (city: string): string =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acaf6f925773a3b320516f453714edad`;

fetch(apiWheater("barcelona"))
  .then((response) => response.json())
  .then((data: weather) => printWeatherData(data));

function printWeatherData(data: weather): void {
  htmlWeather!.innerHTML = `<h1 style="font-weight: 200">${data.name}</h1>
  <h2>
    ${getWeatherIcon(data.weather[0].id)}
    <span>|</span>
    <span style="font-weight: 200">${kelvinToCelsius(data.main.temp)}ºC</span>
  </h2>`;
}

function kelvinToCelsius(kelvin: number): number {
  return Math.ceil(kelvin - 273.15);
}

function getWeatherIcon(weatherId: number): string {
  const weatherIdString: string = weatherId.toString();
  switch (weatherIdString[0]) {
    case "2":
      return `<i class="fas fa-bolt" style="color:yellow; text-shadow: 2px 2px 10px black ;"></i>`;
    case "3":
      return `<i class="fas fa-cloud-rain" style="color:lightskyblue; text-shadow: 2px 2px 5px black ;"></i>`;
    case "5":
      return `<i class="fas fa-cloud-showers-heavy" style="color:lightskyblue; text-shadow: 2px 2px 5px black ;"></i>`;
    case "6":
      return `<i class="fas fa-snowflake" style="color: lightcyan; text-shadow: 2px 2px 10px black"></i>`;
    case "7":
      return `<i class="fas fa-smog" style="color: gainsboro; text-shadow: 2px 2px 10px black"></i>`;
    case "8":
      if (weatherId === 800) {
        return `<i class="fas fa-sun" style="color: yellow; text-shadow: 2px 2px 10px black"></i>`;
      } else {
        return `<i class="fas fa-cloud-sun" style="color:rgb(255, 255, 100); text-shadow: 2px 2px 10px black"></i>`;
      }
    default:
      return `<i class="fas fa-meteor" style="color:brown; text-shadow: 2px 2px 10px black"></i>`;
  }
}

// Exercici 5
const apiChuckNorris = "https://api.chucknorris.io/jokes/random";

function getChuckNorrisJoke(): void {
  fetch(apiChuckNorris)
    .then((response) => response.json())
    .then((data: jokeChuck) => {
      htmlJoke!.innerHTML = `"${data.value}"`;
      jokeText = data.value;
      changeBlub();
    });
}

// Exercici 6 
const htmlBlub = document.querySelector('.card');

function changeBlub(): void {
  const blubNum = Math.floor(Math.random()*5)+1
  htmlBlub!.className = `blub${blubNum}`;
}
