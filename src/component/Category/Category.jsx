import React, { Component } from "react";
import "./category.scss";
import products from "./data";

export default class Category extends Component {
  render() {
    return (
      <div>
        <h1>Category name</h1>
        <div className="product-container">
          {products.map((product, i) => (
            <div key={i} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                <strong>{product.price}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
