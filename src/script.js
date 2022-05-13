let current = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Current date&time
let day = days[current.getDay()];
let hrs = current.getHours();
let min = current.getMinutes();
let time = `${hrs} : ${min}`;
let date = document.querySelector("h2");
date.innerHTML = `${day} ${time}`;

//Search value and input

function searchInput(event) {
  event.preventDefault();
  let apiKey = `69796792571903e4e5cf0acfee34bb5b`;
  let city = document.querySelector("#search-Bar").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCity);
}

function displayWeatherCity(response) {
  let temperature = Math.round(response.data.main.temp);
  let mainCity = document.querySelector("h1");
  mainCity.innerHTML = `${response.data.name}+
          ${temperature} ℃ <i class="far fa-snowflake heading"></i>`;
}
let searchCity = document.querySelector("#searchcity");
searchCity.addEventListener("submit", searchInput);

// API homework
let currentLocation = document.querySelector("#location");
currentLocation.addEventListener("click", currentGeoLocation);

function currentGeoLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let apiKey = "69796792571903e4e5cf0acfee34bb5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayCity);
}

function displayCity(response) {
  let temp = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}+${temp}℃ <i class="far fa-snowflake heading"></i>
       `;
}
