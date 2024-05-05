const apiKey = `c8d935c67937ddcbe7a9a98a4ecd0114`;


async function  fetchWeatherData(city) {
    try{
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    if(!response.ok){
        throw new Error("Unable To Fetch Weather Data");
    }

   const data = await response.json();
//    console.log(data);
   updateWeatherUI(data);
    }
    catch(error){
         console.log(error);
    }

    
 
}

const body = document.querySelector("body");
const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility-distance");
const descriptionText = document.querySelector(".description-text");
const date = document.querySelector(".date");




function updateWeatherUI(data){
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°`;
    windSpeed.textContent= `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    visibility.textContent = `${data.visibility/1000} km`;
    descriptionText.textContent = data.weather[0].description;

    const currDate = new Date();

    date.textContent = currDate.toDateString();
}

const formElement = document.querySelector("search-form");
const inputElement = document.querySelector(".city-input");

formElement = addEventListener("submit", (e)=>{
     e.preventDefault();
     const city = inputElement.value;
     if(city!== ' '){
        fetchWeatherData(city);
        inputElement.value = ' ';
     }

})