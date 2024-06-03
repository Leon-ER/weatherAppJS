let apiKey = "edd981f1213248efa32193959240205";

export default async function fetchWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
  );
  const weatherData = await response.json();

  const {
    current: {
      temp_c,
      feelslike_c,
      wind_kph,
      temp_f,
      feelslike_f,
      wind_mph,
      condition: { icon },
      humidity,
      vis_km,
      vis_miles,
      pressure_mb,
      wind_dir,
    },
    location: { name: location },
  } = weatherData;

  return {
    tempC: temp_c,
    feelsLikeC: feelslike_c,
    windSpeedKph: wind_kph,
    tempF: temp_f,
    feelsLikeF: feelslike_f,
    windSpeedMph: wind_mph,
    icon,
    location,
    hum: humidity,
    visKph : vis_km,
    visMph: vis_miles,
    pressure:pressure_mb,
    windDir : wind_dir,
  };
}
