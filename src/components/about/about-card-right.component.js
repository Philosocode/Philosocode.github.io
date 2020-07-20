import React from "react";

import AboutCardColumn from "./about-card-column.component";
import BlockReveal from "../shared/block-reveal.component";

const AboutCardRight = () => {
  const languages = [
    "HTML",
    "S(CSS)",
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
  ];
  const tools = [
    "React",
    "Redux",
    "Node.js",
    "Express",
    "WordPress",
    "Firebase",
  ];

  return (
    <div className="c-about__card c-about__card--right">
      <BlockReveal color="black" direction="right" offset={300} noWrapper />
      <div className="c-about__right-content">
        <h2>Tech</h2>
        <div className="c-about__grid">
          <AboutCardColumn heading="Languages" items={languages} />
          <AboutCardColumn heading="Tools" items={tools} />
        </div>
      </div>
    </div>
  );
};

export default AboutCardRight;
