import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { getCurrentWeather, getFiveDayForecast } from "../utils/api";

export default class Search extends Component {
  state = {
    searchQuery: "",
    goToForecast: false
  };
  handleInputChange = e => {
    const searchQuery = e.target.value;
    this.setState(() => ({ searchQuery }));
  };
  handleButtonClick = () =>
    this.setState(() => ({
      goToForecast: true
    }));
  // handleSearch(cityName) {
  //   getCurrentWeather(cityName)
  //     .then(result => console.log(result))
  //     .catch(e => console.warn(e));
  // }
  render() {
    const { searchQuery, goToForecast } = this.state;

    if (goToForecast) {
      return <Redirect to={`/forecast/${window.encodeURI(searchQuery)}`} />;
    }
    return (
      <div
        className="search-container"
        style={{ flexDirection: this.props.direction }}
      >
        <input
          onChange={this.handleInputChange}
          className="form-control"
          type="text"
          placeholder="St. George, Utah"
          value={searchQuery}
        />
        <button
          className="btn btn-success"
          style={{ margin: 10 }}
          onClick={this.handleButtonClick}
        >
          Get Weather
        </button>
      </div>
    );
  }
}
