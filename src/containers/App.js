import React, { Component } from "react";
import classes from "./App.css";
import Login from "../components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Login />
      </div>
    );
  }
}

export default App;
