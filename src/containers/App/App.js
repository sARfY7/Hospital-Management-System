import React, { Component } from "react";
import classes from "./App.css";
// import Login from "../../components/Login/Login";
import Dashboard from "../../components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        {/* <Login /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
