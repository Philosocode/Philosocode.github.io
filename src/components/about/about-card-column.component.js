import React from "react";
import PropTypes from "prop-types";

const AboutCardColumn = ({ heading, items }) => (
  <div className="c-about__column">
    <h4 className="c-about__column-heading">{heading}</h4>
    <ul className="c-about__list">
      {
        items.map(item => (
          <li key={item} className="c-body-text c-body-text--small c-about__list-item">{item}</li>
        ))
      }
    </ul>
  </div>
);

AboutCardColumn.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutCardColumn;