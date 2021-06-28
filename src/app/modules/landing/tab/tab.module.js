import React, { Component } from "react";
import CircleIcon from "./circle-svg";
import "./tab.styles.css";

export default class Tab extends Component {
  render() {
    return (
      <div className="tab">
        <div className="page-tab">
          <span>Start</span>
          <CircleIcon fill={this.props.page === "start"} />
        </div>
        <div className="page-tab">
          <span>About</span>
          <CircleIcon fill={this.props.page === "about"} />
        </div>
        <div className="page-tab">
          <span>Affiliates</span>
          <CircleIcon fill={this.props.page === "affiliates"} />
        </div>
        <div className="page-tab">
          <span>Contact</span>
          <CircleIcon fill={this.props.page === "contact"} />
        </div>
      </div>
    );
  }
}
