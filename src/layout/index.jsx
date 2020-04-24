import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import Footer from "../components/NewFooter/Footer";
import ContentFrame from '../components/ContentFrame/ContentFrame';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    console.log(this.props)
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {/* {children} */}
        <ContentFrame />
        <Footer className="layout-footer" config={config} />
      </div>
    );
  }
}
