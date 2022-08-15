import React from "react";
import "./App.css";
import Category from "./component/Category/Category";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Category />} />
        </Routes>
      </>
    );
  }
}

export default App;
