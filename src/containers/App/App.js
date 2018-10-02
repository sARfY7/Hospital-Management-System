import React, { Component } from "react";
import classes from "./App.css";
import Login from "../../components/Login/Login";
import Dashboard from "../../components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    isAuthenticated: true,
    message: null
  };

  authenticate = (uname, pass) => {
    if (uname === "test" && pass === "test") {
      this.setState({ ...this.state, isAuthenticated: true });
    } else {
      this.setState({
        ...this.state,
        message: "Username or Password is wrong"
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          {this.state.isAuthenticated ? (
            <Dashboard />
          ) : (
            <Login auth={this.authenticate} msg={this.state.message} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
