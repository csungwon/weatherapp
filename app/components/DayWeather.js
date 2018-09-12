import React from "react";
import moment from "moment";

export default function DayWeather({ dt_txt, weather, onClick }) {
  const date = moment(dt_txt).format("dddd, MMM DD");
  const icon = weather[0].icon;
  return (
    <div className="dayContainer" onClick={onClick}>
      <img
        src={`/app/images/weather-icons/${icon}.svg`}
        alt={`${dt_txt} weather`}
        className="weather"
      />
      <h2 className="subheader">{date}</h2>
    </div>
  );
}
