import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div
        className="search-container"
        style={{ flexDirection: this.props.direction }}
      >
        <input
          className="form-control"
          type="text"
          placeholder="St. George, Utah"
        />
        <button className="btn btn-success" style={{ margin: 10 }}>
          Get Weather
        </button>
      </div>
    );
  }
}
