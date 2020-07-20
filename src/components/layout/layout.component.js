/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import Header from "./header.component";
import Footer from "./footer.component";
import Loader from "../shared/loader.component";
import { ThemeContext } from "../../contexts/theme.context";
import BlazeLogo from "../../icons/blaze.svg";
import ZephyrLogo from "../../icons/zephyr.svg";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isBlaze } = useContext(ThemeContext);

  // Wait for localStorage fetch
  while (isBlaze === undefined) return null;

  const Logo = isBlaze
    ? <BlazeLogo className="c-loader__icon" />
    : <ZephyrLogo className="c-loader__icon c-loader__icon--zephyr" />


  if (isLoading) return <Loader Logo={Logo} finishLoading={() => setIsLoading(false)} />

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
