

function findAllDetails(response) {
    let temperatureElement = document.querySelector("#temp-n");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city-name");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("humidity");
    let windElement = document.querySelector("windSpeed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#emoji");
   
    
    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.iinerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function findRealInf(city) {
  let apiKey = "49590o9129b5cbb04f9d3323t6a164fe";
  let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
   
  axios.get(apiUrl).then(findAllDetails);
}

function findCity(event) {
event.preventDefault();
let citySearch = document.querySelector("#search");

findRealInf(citySearch.value);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", findCity);

findRealInf("Cadiz");