import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationContainer from "./navigation/navigation-container";
import Featured from './pages/featured';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <div>
            <NavigationContainer />
            <Featured/>
          
          </div>
      </div>
    );
  }
}