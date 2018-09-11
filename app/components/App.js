import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}
