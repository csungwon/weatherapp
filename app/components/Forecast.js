import React, { Component } from "react";
import { getForecastData, getFiveDayForecast } from "../utils/api";
import { parse } from "query-string";
import moment from "moment";

function DayWeather({ dt_txt, weather }) {
  const date = moment(dt_txt).format("dddd, MMM DD");
  const icon = weather[0].icon;
  return (
    <div className="dayContainer">
      <img
        src={`./app/images/weather-icons/${icon}.svg`}
        alt={`${dt_txt} weather`}
        className="weather"
      />
      <h2 className="subheader">{date}</h2>
    </div>
  );
}

export default class Forecast extends Component {
  state = {
    loading: true,
    forecastData: []
  };
  searchWeather(city) {
    this.setState(() => ({ loading: true }));

    getForecastData(city).then(forecastData => {
      console.log(forecastData);
      this.setState(() => ({
        loading: false,
        forecastData
      }));
    });
  }
  componentDidMount() {
    this.city = parse(this.props.location.search).city;
    this.searchWeather(this.city);
  }
  componentWillReceiveProps(nextProps) {
    const city = parse(nextProps.location.search).city;
    console.log(nextProps);
    if (this.city !== city) {
      this.city = city;
      this.searchWeather(this.city);
    }
  }
  render() {
    return this.state.loading ? (
      <div>LOADING</div>
    ) : (
      <div>
        <h1 className="forecast-header">{this.city}</h1>
        <div className="forecast-container">
          {this.state.forecastData.map(weather => (
            <DayWeather
              key={weather.dt}
              dt_txt={weather.dt_txt}
              weather={weather.weather}
            />
          ))}
        </div>
      </div>
    );
  }
}
