import React, { Component } from "react";
import "./category.scss";
import { gql } from "@apollo/client";
import products from "./data";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        brand
        description
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: products,
    };
  }

  render() {
    const styles = {
      position: "absolute",
      bottom: 0,
      right: "10px",
      color: "green",
    };
    return (
      <div className="category-container">
        <h1 className="header">Category name</h1>
        <div className="product-container">
          {products.map((product, i) => (
            <div key={i} className="product">
              <div className="relative" style={{ position: "relative" }}>
                <Link to="/product" className="link">
                  <img src={product.image} alt={product.name} />
                </Link>
                <ShoppingCart style={styles} />
              </div>

              <Link to="/product" className="link">
                <h3>{product.name}</h3>
              </Link>

              <p>
                <strong>${product.price}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
