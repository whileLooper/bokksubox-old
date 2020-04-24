import React, { Component } from "react";
import { Link } from "gatsby";
import { SocialMediaLinks } from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
          <div className="footer-links">
            {SocialMediaLinks(config)}
          </div>
      </footer>
    );
  }
}

export default Footer;
