# Weather App 

A simple weather application built using **HTML**, **CSS**, and **JavaScript**.  
This app allows users to search for any city and get real-time weather information such as temperature, weather condition, and humidity.

# Features
- Search weather by city name
- Displays current temperature in Celsius
- Shows weather description
- Displays humidity level
- Uses free weather API (no API key required)

# Technologies Used
- HTML5
- CSS3
- JavaScript (Async/Await)
- wttr.in API

 

# How It Works
1. User enters a city name.
2. JavaScript fetches weather data from the wttr.in API.
3. The app displays:
   - City Name
   - Temperature
   - Weather Description
   - Humidity

# JavaScript Function

The app uses this function to fetch weather data:

 
async function getWeather() {
    const city = document.getElementById("city").value;

    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await response.json();

    document.getElementById("city-name").innerText = city;
    document.getElementById("temperature").innerText =
        `Temperature: ${data.current_condition[0].temp_C}°C`;

    document.getElementById("description").innerText =
        `Weather: ${data.current_condition[0].weatherDesc[0].value}`;

    document.getElementById("humidity").innerText =
        `Humidity: ${data.current_condition[0].humidity}%`;
}