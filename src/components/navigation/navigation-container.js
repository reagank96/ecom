import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart}  from "@fortawesome/free-solid-svg-icons";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">

        <div className="left-side">
          <div className= "logo">
            <NavLink exact to="/" activeClassName="nav-link-active">
              RAY GUN DESIGN
            </NavLink>
          </div>
        </div>

        <div className="center">
          <div className="nav-link-wrapper">
            <NavLink exact to="/home" activeClassName="nav-link-active">
              HOME
            </NavLink>
          </div>

          {/* <div className="nav-link-wrapper">
            <NavLink to="/about" activeClassName="nav-link-active">
              ABOUT
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
              CONTACT
            </NavLink>
          </div> */}

          <div className="nav-link-wrapper">
            <NavLink to="/shop" activeClassName="nav-link-active">
              SHOP
            </NavLink>
          </div>
        </div>

      <div className="right-side">
          <div className="nav-link-wrapper">
            <NavLink to="/sign-in" activeClassName="nav-link-active">
              SIGN IN
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/cart" activeClassName="nav-link-active">
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </div>
      </div>

    </div>
    );
  }
}
