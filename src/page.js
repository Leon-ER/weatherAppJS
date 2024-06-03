import { updateWeather, toggleTemperatureUnit } from "./populatePage";

export default function page() {
  // change between C and F
 document.getElementById("toggle-button").addEventListener("click", toggleTemperatureUnit)
  // getting value from the input
  const inputValue = document.getElementById("cityName");
  inputValue.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateWeather(inputValue.value);
    }
  });
  updateWeather("London");
}
