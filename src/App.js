import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import Search from "./Components/Search";
import { useState } from "react";
import React from "react";
import { Weather_Api, weather_Api_Key } from "./Api";
import WeatherForcast from "./Components/WeatherForcast";



function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcastWeather, setForcastWeather] = useState(null);
  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${Weather_Api}/weather?lat=${lat}&lon=${lon}&appid=${weather_Api_Key}&units=metric`
    );
    const forcastFetch = fetch(
      `${Weather_Api}/forecast?lat=${lat}&lon=${lon}&appid=${weather_Api_Key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastRespone = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcastWeather({ city: searchData.label, ...forcastRespone });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forcastWeather && <WeatherForcast forcastWeather={forcastWeather}/>}
    </div>
  );
}

export default App;
