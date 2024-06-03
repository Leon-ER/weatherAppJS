import fetchWeather from "./fetchWeatherApi";

let weatherData = null;
let currentTempType = "c";

export async function updateWeather(city) {
    weatherData = await fetchWeather(city);
    displayWeather(currentTempType);
  }
export function displayWeather(tempType) {
  const tempDisplay = document.getElementById("temp-display");
  const feelsLikeDisplay = document.getElementById("feels-like-display");
  const windSpeedDisplay = document.getElementById("wind-speed-display");
  const iconDisplay = document.getElementById("icon-display");
  const locationDisplay = document.getElementById("location-display");
  const windDirDisplay = document.getElementById("wind-direction");
  const humidity = document.getElementById("humidity");
  const pressureDisplay = document.getElementById("pressure");
  const visibility = document.getElementById("visibility");
  
  if (tempType === "c") {
    tempDisplay.innerHTML = `${weatherData.tempC}°C`;
    feelsLikeDisplay.innerHTML = `Feels Like:<br>${weatherData.feelsLikeC}°C`;
    windSpeedDisplay.innerHTML = `Wind Speed:<br>${weatherData.windSpeedKph} kph`;
    visibility.innerHTML = `Visibility: <br> ${weatherData.visKph}kph`

} else {
    tempDisplay.innerHTML = `${weatherData.tempF}°F`;
    feelsLikeDisplay.innerHTML = `Feels Like:<br>${weatherData.feelsLikeF}°F`;
    windSpeedDisplay.innerHTML = `Wind Speed:<br>${weatherData.windSpeedMph} mph`;
    visibility.innerHTML = `Visibility: <br> ${weatherData.visMph}mph`

}
  humidity.innerHTML = `Humidity:<br>${weatherData.hum}`;
  pressureDisplay.innerHTML = `Pressure:<br>${weatherData.pressure}`;
  windDirDisplay.innerHTML = `Wind dir:<br>${weatherData.windDir}`;
  iconDisplay.src = weatherData.icon;
  locationDisplay.textContent = weatherData.location;
}
export function toggleTemperatureUnit() {
  currentTempType = currentTempType === "c" ? "f" : "c";
  displayWeather(currentTempType);
}
