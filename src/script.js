

function findAllDetails(response){
    let temperature = document.querySelector("#temp-n");
    let cityElement = document.querySelector("#city-name");
    let descriptionElement = document.querySelector("#description");

   
    cityElement.innerHTML = response.data.city;
    temperature.innerHTML = Math.round(response.data.temperature.current);
    descriptionElement.innerHTML = response.data.condition.description;


}


function findRealInf(city){
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