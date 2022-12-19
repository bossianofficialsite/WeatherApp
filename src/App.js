import { useState } from 'react';
import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from './components/forecast/forecast';
import { OPEN_WEATHER_URL_API, OPEN_WEATHER_KEY } from './api/api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const OnSearchCity = (onSearch) => {
    const [lat, lon] = onSearch.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_URL_API}weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${OPEN_WEATHER_URL_API}forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
    .then( async(response) => {
      const currentWeatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({ city: onSearch.label, ...currentWeatherResponse });
      setForecast({ city: onSearch.label, ...forecastResponse });
    })


  }

  return (
    <div className="container">
      <Search onSearch={OnSearchCity} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
