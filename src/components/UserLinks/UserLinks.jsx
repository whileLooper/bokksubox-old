import React, { Component } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map((link) => (
      <a href={link.url}>
        <button type="button" key={link.label}>
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export const SocialMediaLinks = (config) => {
  const { userLinks } = config;
  const getIcon = (label) => {
    switch (label) {
      case "Instagram":
        return <FaInstagram />;
      case "Facebook":
        return <FaFacebookF />;
      case "Twitter":
        return <FaTwitter />;
      default:
        return null;
    }
  };
  return (
    <>
      {userLinks.map((link) => {
        return <a href={link.url}>{getIcon(link.label)}</a>;
      })}
    </>
  );
};

export default UserLinks;
