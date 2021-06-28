import React from "react";

export default class CircleIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: this.props.fill,
    };
  }

  render() {
    return (
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="5"
          stroke="black"
          stroke-width="2"
          fill={this.state.fill ? "none" : "#12110b"}
        />
      </svg>
    );
  }
}
