import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="St. George, Utah" />
        <button>Get Weather</button>
      </form>
    );
  }
}
