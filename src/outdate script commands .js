if(cityPrompt) 
{
let city = cityPrompt.toLowerCase();

if (weather[city] == undefined) {
    alert('City not found.Try: ' + 'https://www.google.com/search?q=weather/' + city);
                                }

else {
    let temp =weather[city].temp;
    let humidity = weather[city].humidity;
    let cityE = weather[city].cityE;

let tempC = Math.round(temp);
let tempF = Math.round((temp*9)/5+32);

alert('It is currently ' + tempC + '°C'+ ' '+ '('+ tempF + '°F'+') ' + 'in ' + cityE + ' with a humidity of ' + humidity + '%');
    }
}