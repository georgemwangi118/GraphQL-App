import React from "react";
import "./App.css";

import Category from "./component/Category/Category";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./component/Product/Product";
import CartOverlay from "./component/CartOverlay/CartOverlay";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/overlay" element={<CartOverlay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </>
    );
  }
}

export default App;
