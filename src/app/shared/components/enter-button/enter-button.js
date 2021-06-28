import React, { Component } from "react";
import { Link } from "react-router-dom";

export class EnterButton extends Component {
  render() {
    return (
      <Link to="/login">
        <button
          className={this.props.buttonClassName}
          style={{ cursor: "pointer" }}
        >
          <img
            className={this.props.imageClassName}
            src={this.props.imageSource}
          />
        </button>
      </Link>
    );
  }
}

export default enter - button;
