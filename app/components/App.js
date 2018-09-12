import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Forecast from "./Forecast";

const HeaderWithRouter = withRouter(Header);

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <HeaderWithRouter />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
          </Switch>
        </div>
      </Router>
    );
  }
}
