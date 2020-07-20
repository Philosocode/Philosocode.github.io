import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { aosHeadingAttributes } from "../../shared/data.shared";

const SectionHeader = ({ alignment, color, children }) => { 
  const headerClasses = classNames({
    "c-section__header": true,
    "c-section__header--red": color === "red",
    "c-section__header--black": color === "black",
    "c-section__header--grey": color === "grey",
    "c-section__header--white": color === "white",
  });

  const headingClasses = classNames({
    "c-heading c-section__heading": true,
  });

  return (
    <div className={headerClasses} {...aosHeadingAttributes}>
      { alignment !== "left" && <div className="c-section__line c-section__line--left"></div> }
      <h2 className={headingClasses}>{children}</h2>
      { alignment !== "right" && <div className="c-section__line c-section__line--right"></div> }
    </div>
  )
 };

SectionHeader.propTypes = {
  color: PropTypes.oneOf(["red", "black", "grey", "white"]),
  alignment: PropTypes.oneOf(["left", "right"]),
}

export default SectionHeader;