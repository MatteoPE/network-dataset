import React, { Component } from "react";
import Homepage from "../Homepage";
import NavBar from "../NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Homepage />
      </>
    );
  }
}

export default App;
