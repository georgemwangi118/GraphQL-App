import React, { Component } from "react";
import "./product.scss";
import products from "../Category/data";

export default class Product extends Component {
  render() {
    const product = products[0];
    return (
      <div>
        <div className="product-view">
          <div className="images-left">
            <img src={product.image} alt="img" />
            <img src={product.image} alt="img" />
            <img src={product.image} alt="img" />
          </div>
          <div className="main-image">
            <img src={product.image} alt="img" />
          </div>
          <div className="details">
            <p>{product.name}</p>
            <p>Size:</p>
            <div>sizes</div>
            <p>Color:</p>
            <div>colors</div>
            <p>Price: </p>
            <p>${product.price}</p>
            <p>Amount</p>
            <button className="btn">ADD TO CART</button>
            <p>{product.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
