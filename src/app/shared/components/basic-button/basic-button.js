import { Component } from "react";

/**
 * When using props try the naming convention of
 * this.props.<componentName><TheDataYouWantToChangeOrUpdate>
 */
export class BasicButton extends Component {
    
  render() {
    return (
      <button className={this.props.className} style={{ cursor: "pointer" }}>
        {this.props.basicButtonText}
      </button>
    );
  }
}
