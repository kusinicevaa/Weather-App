let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let timeHours = now.getHours();
let timeMinutes =now.getMinutes();

let cityPrompt = prompt(`Enter city`).toLowerCase();  // Convert input to lowercase to match the keys

if (weather[cityPrompt]) {
let tempCelsius = Math.round(weather[cityPrompt].temp);
let tempFahrenheit = Math.round(weather[cityPrompt].temp * 9/5 + 32);
alert(`It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${cityPrompt} with a humidity of ${weather[cityPrompt].humidity}%`);
} else {
alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityPrompt}`);
}
