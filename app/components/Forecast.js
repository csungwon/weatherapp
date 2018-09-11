import React, { Component } from "react";

export default class Forecast extends Component {
  render() {
    const { match } = this.props;
    return <div>FORECAST for {match.params.city}</div>;
  }
}
