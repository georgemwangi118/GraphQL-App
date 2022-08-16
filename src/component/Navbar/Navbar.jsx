import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../image/logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="left">
          <ul>
            <li>
              <Link to="/">women</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>
              <Link to="/">Kids</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <select name="" id="">
            <option value="">$ USD</option>
            <option value="">$ USD</option>
            <option value="">$ USD</option>
          </select>
          <Link to="/overlay">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    );
  }
}
