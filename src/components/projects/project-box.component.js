import React from "react";
import Image from "gatsby-image";
import PropTypes from "prop-types";

const ProjectBox = ({ description, idx, imageFluid, title, url }) => (
  <div className="c-project__container" data-aos="fade-up" data-aos-duration={500} data-aos-delay={(idx * 200) + 100}>
    <div className="c-project__text">
      <h3 className="c-project__title">{title}</h3>
      <p className="c-project__description">{description}</p>
      <a className="c-button c-button--dark c-button--go" href={url}>
        Visit Site
        <span className="c-project__arrow">&rarr;</span>
      </a>
    </div>
    <div className="c-project__image-container">
      <Image className="c-project__image" fluid={imageFluid} loading="eager" alt={title} />
    </div>
  </div>
);

ProjectBox.propTypes = {
  description: PropTypes.string.isRequired,
  imageFluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ProjectBox;