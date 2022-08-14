import React from "react";
import "./App.css";
import Category from "./component/Category/Category";
import Navbar from "./component/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Category />
      </>
    );
  }
}

export default App;
