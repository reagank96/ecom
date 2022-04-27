import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationContainer from "./navigation/navigation-container";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}