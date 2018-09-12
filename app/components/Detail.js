import React, { Component } from "react";
import DayWeather from "./DayWeather";

export default function Detail({ location, match }) {
  const weather = location.state;
  const description = weather.weather[0].description;
  const { temp_min, temp_max, humidity } = weather.main;
  return (
    <div>
      <DayWeather weather={weather.weather} dt_txt={weather.dt_txt} />
      <div className="description-container">
        <p>{match.params.city}</p>
        <p>{description}</p>
        <p>min temp: {temp_min}</p>
        <p>max temp: {temp_max}</p>
        <p>humidity: {humidity}</p>
      </div>
    </div>
  );
}
