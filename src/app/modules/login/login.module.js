import React, { Component } from "react";
import "./login.styles.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleInput = (_) => {
    this.setState({ [_.target.id]: _.target.value });
  };

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
            id="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleInput}
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
          id="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
