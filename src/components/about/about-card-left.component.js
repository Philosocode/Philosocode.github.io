import React from "react";
import BlockReveal from "../shared/block-reveal.component";

const AboutCardLeft = () => {
  const description = `I’m Tam, a web developer based in Alberta, Canada.
  
  On the front-end, you’ll find me sketching out wireframes, working on mockups, or crafting usable, interactive interfaces. On the back-end, you’ll find me designing APIs, tinkering with databases, or setting up web servers.
  
  I’ve had the opportunity to work with some amazing individuals and startups to build awesome websites. I hope we’ll get the chance to work together and create something great!`;

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