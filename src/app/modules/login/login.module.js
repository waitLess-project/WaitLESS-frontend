import React, { Component } from "react";
import "./login.styles.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    return (
      <div>
        <h2 className="login-header">Member Login</h2>
        <span className="label">Username</span>
        <div className="input-inline-box">
          <div>
            <img src="#" alt="user-logo" />
          </div>
          <input
            type="text"
            value={this.state.username}
            placeholder="Username"
          />
        </div>
        <div className="input-inline-box">
          <div>
            <img src="#" alt="pw-logo" />
          </div>
          <span className="label">Password</span>
        </div>
        <input
          type="password"
          value={this.state.password}
          placeholder="Password"
        />
      </div>
    );
  }
}
