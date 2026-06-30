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