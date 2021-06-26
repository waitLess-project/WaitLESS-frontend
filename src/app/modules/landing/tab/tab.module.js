import React, { Component } from "react";
import CircleIcon from "./circle-svg";

export default class Tab extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Start</span>
          <CircleIcon fill={this.props.page === "start"} />
          <span>About</span>
          <CircleIcon fill={this.props.page === "about"} />
          <span>Affiliates</span>
          <CircleIcon fill={this.props.page === "affiliates"} />
          <span>Contact</span>
          <CircleIcon fill={this.props.page === "contact"} />
        </div>
      </div>
    );
  }
}
