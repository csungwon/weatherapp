import React, { Component } from "react";
import Search from "./Search";

export default class Home extends Component {
  render() {
    return (
      <div
        className="home-container"
        style={{ backgroundImage: "url('app/images/pattern.svg')" }}
      >
        <h1>Enter a City and State</h1>
        <Search direction="column" />
      </div>
    );
  }
}
