import React from "react";
import BlockReveal from "../shared/block-reveal.component";

const AboutCardLeft = () => {
  const description = `I'm Tam, a developer who is driven to create beautiful, usable products that please the eye and delight the user.

  My knowledge of full-stack development, meticulous attention to detail, and focus on best practices enable me to build clean, scalable, and performant applications.

  Currently, I'm working towards a BS. Computer Science with a minor in Mathematics.`;

  return (
      <div className="c-about__card c-about__card--left">
        <BlockReveal color="black" direction="right">
        <div className="c-about__left-content">
          <h2>Hello!</h2>
          <p className="c-body-text c-body-text--small c-body-text--light">{description}</p>
        </div>
        </BlockReveal>
      </div>
  )
};

export default AboutCardLeft;