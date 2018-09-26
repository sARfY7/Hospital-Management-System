import React, { Component } from "react";
import classes from "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className={classes.Login}>
        <h1>LOGIN</h1>
        <div className={classes.FormElement}>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div className={classes.FormElement}>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div className={classes.FormElement}>
          <button>
            <i className="fas fa-sign-in-alt" />
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
