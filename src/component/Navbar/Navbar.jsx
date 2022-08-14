import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../image/logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="left">
          <ul>
            <li>
              <a href="/wo">women</a>
            </li>
            <li>
              <a href="/me">Men</a>
            </li>
            <li>
              <a href="/ki">Kids</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <select name="" id="">
            <option value="">$ USD</option>
            <option value="">$ USD</option>
            <option value="">$ USD</option>
          </select>
          <ShoppingCartIcon />
        </div>
      </div>
    );
  }
}
