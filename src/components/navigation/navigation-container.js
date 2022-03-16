import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/home" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/about" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/shop" activeClassName="nav-link-active">
              Shop
            </NavLink>
          </div>
      </div>

        <div>
        <div className="center">RAY GUN DESIGN</div>
        <NavLink to="/home" activeClassName="nav-link-active"></NavLink>
        </div>

      <div>
        <div className="right-side">SIGN IN</div>
      </div>
    </div>
    );
  }
}
