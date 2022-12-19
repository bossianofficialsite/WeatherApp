import "./current-weather.css";

function CurrentWeather({ currentWeather }) {

  return (
    <>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{currentWeather.city}</p>
            <p className="description">
              {currentWeather.weather[0].description}
            </p>
          </div>
          <img
            className="weather-icon"
            src={`./icons/${currentWeather.weather[0].icon}.png`}
            alt="weather-icon"
          />
          <p className="temperature">
            {Math.round(currentWeather.main.temp)}°C
          </p>
        </div>
        <div className="right">
          <div className="details">
            <span>Details : </span>
          </div>
          <div>
            <label>Feels Like</label>
            <p>{Math.round(currentWeather.main.feels_like)}</p>
          </div>
          <div>
            <label>Humidity</label>
            <p>{Math.round(currentWeather.main.humidity)}%</p>
          </div>
          <div>
            <label>Pressure</label>
            <p>{Math.round(currentWeather.main.pressure)}</p>
          </div>
          <div>
            <label>Clouds All</label>
            <p>{currentWeather.clouds.all}</p>
          </div>
          <div>
            <label>Country</label>
            <p>{currentWeather.sys.country}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
