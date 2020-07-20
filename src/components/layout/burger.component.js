import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { HeaderContext } from "../../contexts/header.context";

export const Burger = ({ menuOpen, toggleMenu }) => {
  const { isDark } = useContext(HeaderContext);

  const containerClasses = classNames({
    "c-burger__container": true,
    "is-open": menuOpen,
    "is-hero": !isDark
  });

  return (
    <div
      className={containerClasses}
      onClick={toggleMenu}
      role="button"
    >
      <div className="c-burger__line"></div>
    </div>
  );
};

Burger.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};