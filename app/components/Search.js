import React, { Component } from "react";
import { getCurrentWeather, getFiveDayForecast } from "../utils/api";

export default class Search extends Component {
  state = {
    searchQuery: ""
  };
  handleInputChange = e => {
    const searchQuery = e.target.value;
    this.setState(() => ({ searchQuery }));
  };
  handleSearch(cityName) {
    getCurrentWeather(cityName)
      .then(result => console.log(result))
      .catch(e => console.warn(e));
  }
  render() {
    const { searchQuery } = this.state;
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
          onClick={() => this.handleSearch(searchQuery)}
        >
          Get Weather
        </button>
      </div>
    );
  }
}
