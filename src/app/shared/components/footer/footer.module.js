import React, { Component } from "react";
import "./footer.styles.css";

export default class Footer extends Component {
    
  render() {
    return (
      <footer className="footer">
        <button className="footer-btn">Call A Waiter</button>
        <button className="footer-btn">Thanks for Dining With Us!</button>
        <button className="footer-btn">Got a Problem? Contact Us</button>
      </footer>
    );
  }
}
