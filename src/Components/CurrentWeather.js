import React from "react";

function CurrentWeather(props) {
  const { currentWeather } = props;
  return (
    <div className="weather">
      <div className="top">
        <span>
          <p className="city">{currentWeather.city}</p>
          <p className="weatherSummary">
            {currentWeather.weather[0].description}
          </p>
        </span>
        <img
          src={`icons/${currentWeather.weather[0].icon}.png`}
          alt="weather"
          className="weatherIcon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(currentWeather.main.temp)}ºC</p>
        <div className="details">
          <div className="parameterRow">
            <spam className="parameterLabel">Details</spam>
          </div>
          <div className="parameterRow">
            <spam className="parameterLabel">Feels Like</spam>
            <span className="parameterValue">
              {Math.round(currentWeather.main.feels_like)}ºC
            </span>
          </div>
          <div className="parameterRow">
            <spam className="parameterLabel">Wind</spam>
            <span className="parameterValue">
              {currentWeather.wind.speed}m/s
            </span>
          </div>
          <div className="parameterRow">
            <spam className="parameterLabel">Humidity</spam>
            <span className="parameterValue">
              {currentWeather.main.humidity}%
            </span>
          </div>
          <div className="parameterRow">
            <spam className="parameterLabel">Pressure</spam>
            <span className="parameterValue">
              {currentWeather.main.pressure}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
