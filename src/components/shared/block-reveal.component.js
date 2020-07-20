import React from "react";
import PropTypes from "prop-types";

const BlockReveal = ({ children, className, color, inline, offset, direction, noWrapper }) => {
  let containerClasses = "c-block-reveal";
  if (className) containerClasses += className;
  if (inline) containerClasses += " c-block-reveal--inline";

  const blockClasses = `c-block-reveal__block c-block-reveal__block--${color} is-${direction}`;
  const aosData = `reveal-${direction}`;
  
  const blockElement = <div className={blockClasses} data-aos={aosData} data-aos-offset={offset} />;

  if (noWrapper) return blockElement;
  return (
    <div className={containerClasses}>
      {blockElement}
      {children}
    </div>
  );
};

BlockReveal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
  color: PropTypes.oneOf(["black"]),
  inline: PropTypes.bool,
  noWrapper: PropTypes.bool,
  offset: PropTypes.number,
};

export default BlockReveal;