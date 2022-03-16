import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <div>
            <NavigationContainer />
          </div>
      </div>
    );
  }
}