import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
      </div>
    );
  }
}

export default Login;
