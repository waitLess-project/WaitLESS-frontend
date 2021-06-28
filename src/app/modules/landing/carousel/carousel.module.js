import React, { Component } from "react";
import Tabs from "./tabs.component";
import "./carousel.styles.css";

export default class Carousel extends Component {
  pages = [
    {
      page: "start",
      Component: Tabs.Start,
    },
    {
      page: "about",
      Component: Tabs.About,
    },
    {
      page: "affiliates",
      Component: Tabs.Affiliates,
    },
    {
      page: "contact",
      Component: Tabs.Contact,
    },
  ];

  render() {
    return (
      <div className="carousel">
        <div onClick={() => this.props.moveTab(0)}>left</div>
        {this.pages.map(({ page, Component }) => {
          if (page === this.props.page) {
            return <Component />;
          }
        })}
        <div onClick={() => this.props.moveTab(1)}>right</div>
      </div>
    );
  }
}
