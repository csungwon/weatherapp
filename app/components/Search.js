import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default class Search extends Component {
  static defaultProps = {
    direction: "column"
  };
  static propTypes = {
    direction: PropTypes.string.isRequired
  };
  state = {
    searchQuery: ""
  };
  handleInputChange = e => {
    const searchQuery = e.target.value;
    this.setState(() => ({ searchQuery }));
  };
  handleButtonClick = city => {
    const { history } = this.props;
    history.push({
      pathname: "forecast",
      search: `?city=${city}`
    });
  };
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
          onClick={() => this.handleButtonClick(searchQuery)}
        >
          Get Weather
        </button>
      </div>
    );
  }
}
