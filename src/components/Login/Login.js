import React, { Component } from "react";
import classes from "./Login.css";

class Login extends Component {
  state = {
    username: null,
    password: null
  };

  usernameHandler = event => {
    this.setState({ ...this.state, username: event.target.value });
  };

  passwordHandler = event => {
    this.setState({ ...this.state, password: event.target.value });
  };

  render() {
    return (
      <div className={classes.Login}>
        <h1>LOGIN</h1>
        <div className={classes.FormElement}>
          <label htmlFor="">Username</label>
          <input type="text" onChange={event => this.usernameHandler(event)} />
        </div>
        <div className={classes.FormElement}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={event => this.passwordHandler(event)}
          />
        </div>
        <div className={classes.FormElement}>
          <button
            onClick={() =>
              this.props.auth(this.state.username, this.state.password)
            }
          >
            <i className="fas fa-sign-in-alt" />
            Login
          </button>
          <h4>{this.props.msg}</h4>
        </div>
      </div>
    );
  }
}

export default Login;
