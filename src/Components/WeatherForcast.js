import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WeekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function WeatherForcast(props) {
  const { forcastWeather } = props;
  let todayDay = new Date().getDay();
  let forcastDays = WeekDays.slice(todayDay, WeekDays.length).concat(
    WeekDays.slice(0, todayDay)
  );
  return (
    <>
      <label className="title">Daily Weather</label>
      <Accordion allowZeroExpanded>
        {forcastWeather.list.slice(0, 7).map((forcast, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="dailyWeather-item">
                  <img
                    src={`icons/${forcast.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="days">{forcastDays[index]}</label>
                  <label className="description">
                    {forcast.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(forcast.main.temp_max)}ºC /{" "}
                    {Math.round(forcast.main.temp_min)}ºC
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-gridItem">
                  <label>Feels Like</label>
                  <label>{Math.round(forcast.main.feels_like)}ºC</label>
                </div>
                <div className="daily-details-gridItem">
                  <label>Clouds</label>
                  <label>{forcast.clouds.all}%</label>
                </div>
                <div className="daily-details-gridItem">
                  <label>Wind</label>
                  <label>{forcast.wind.speed}m/s</label>
                </div>
                <div className="daily-details-gridItem">
                  <label>Humidity</label>
                  <label>{forcast.main.humidity}%</label>
                </div>
                <div className="daily-details-gridItem">
                  <label>Pressure</label>
                  <label>{forcast.main.pressure}hPa</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default WeatherForcast;
