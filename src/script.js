document.addEventListener("DOMContentLoaded", function () 

{

//weekdays & months arrays for  human readability
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months =["Jan","Feb","Mar","Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

//DateTime handling

let current = new Date();
let day = current.getDay();

let date = current.getDate();
let month = current.getMonth();
let year = current.getFullYear();

let hours = current.getHours();
let minutes = current.getMinutes();

//hour & minute padding
if (hours==0)  {
    hours ="0" + hours;
}

if (minutes < 10) {
minutes = "0" + minutes;
}


//formatting day
let cDay = document.querySelector('.weekday');
cDay.innerHTML=weekdays[day];

//formatting date
let cDate = document.querySelector('.date');
let constructDate = date.toString() + ' ' + months[month].toString() + ' '+ year.toString();
cDate.innerHTML=constructDate;

//formatting time
let currentDate = hours + ':' + minutes;
let cd = document.querySelector('.time');
cd.innerHTML= currentDate;



//search fuunctionality Change city based on user input

//search button trigger api calll function
document.querySelector('.btnsearch').addEventListener('click', 

function () {
let userinput = document.querySelector('.textinput').value;
let cityDisplay = document.querySelector('#city');
cityDisplay.innerHTML = toUpperCaseFirst(userinput);

//api calls to get current data for curent city
//paarameters for api
let apiKey = "2fe0fte9o61ef8dffd6b25a86d413730";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${userinput}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(cityTemperature);
}

)
   
function cityTemperature(response) {

console.log(response);

let desc = response.data.condition.description;
let description = document.querySelector(".weatherDesc");
description.innerHTML = toUpperCaseFirst(desc);

let tempC= Math.round(response.data.temperature.current);
let tempF=Math.round((tempC *9/5) + 32);

let temp = document.querySelector(".temperature");
temp.innerHTML = tempC + "°C"+ " " + "("+ tempF + "°F"+") ";

let hum = Math.round(response.data.temperature.humidity);
let humidity = document.querySelector(".humidity")
humidity.innerHTML = "Humidity: " + hum + "%";

let w = Math.round(response.data.wind.speed);
let wm=Math.round(w/1.609);

let wind = document.querySelector(".wind")
wind.innerHTML = "Wind: "+ w + "km/h " + "(" + wm + "mph)";

let i = response.data.condition.icon_url;
let icon = document.querySelector(".weatherIcon");
icon.src = i;



}

//Sentence uppercase function
function toUpperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}





}

)
