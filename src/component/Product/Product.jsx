import React, { Component } from "react";
import "./product.scss";

export default class Product extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="images">
            <p>images here</p>
          </div>
          <p>main image</p>
          <div className="details">
            <p>title</p>
            <p>Size:</p>
            <div>sizes</div>
            <p>Color:</p>
            <div>colors</div>
            <p>Price:</p>
            <p>Amount</p>
            <button>ADD TO CART</button>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}
