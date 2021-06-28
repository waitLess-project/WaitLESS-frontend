import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tab from "./tab/tab.module";
import Carousel from "./carousel/carousel.module";
import "./landing.style.css";

import { BasicButton } from "../../shared/components/basic-button/basic-button";
import { ImageButton } from "../../shared/components/image-button/image-button";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ["start", "about", "affiliates", "contact"],
      index: 0,
    };
  }

  indexChange = () => {
    let temp = this.state.index;
    this.setState({
      index: temp + 1 >= this.state.page.length ? 0 : temp + 1,
    });
  };

  render() {
    return (
      <div className="landingPage">
        <Tab page={this.state.page[this.state.index]} />
        <Carousel />
      </div>
    );
  }
}
