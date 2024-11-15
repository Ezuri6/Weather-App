function findRealInf(){
  let citySearch = document.querySelector("#search");
  let city = citySearch.value;
  let apiKey = "49590o9129b5cbb04f9d3323t6a164fe";
  let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
   
  

}



function findCity(event) {
event.preventDefault();
let cityElement = document.querySelector("#city-name");
cityElement.innerHTML = citySearch.value;

axios.get(apiUrl).then(findRealInf);
}


let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", findCity);