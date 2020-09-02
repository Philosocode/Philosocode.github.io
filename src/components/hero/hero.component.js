import React, { useContext } from "react";
import { Waypoint } from "react-waypoint";

import { ANIMATION_DELAY, navLinks } from "../../shared/data.shared";
import { HeaderContext } from "../../contexts/header.context";
import { useMobileChecker } from "../../hooks/use-mobile-checker.hook";
import ParticlesBackground from "./particles-background.component";
import Waves from "../../icons/waves.svg";

const Hero = () => {
  const { setDarkHeader, setTransparentHeader } = useContext(HeaderContext);
  const isMobile = useMobileChecker();
  
  function getDelays() {
    const initialDelay = isMobile
      ? ANIMATION_DELAY * 3
      : (ANIMATION_DELAY + 50) * navLinks.length;
    const NUM_ELS_TO_ANIMATE = 5;
    const delays = [];
    
    for (let i = 1; i <= NUM_ELS_TO_ANIMATE; i++) {
      delays.push(initialDelay + (ANIMATION_DELAY * i));
    };

    return delays;
  }

  const delays = getDelays();

  return (
    <>
      <section className="o-grid c-hero__section" id="hero">
        <div className="o-grid__item--full c-hero__particles" style={{ animationDelay: `${delays[4] + 100}ms` }}>
          <ParticlesBackground />
        </div>
        <div className="o-grid__item o-grid__item--center c-hero__text">
          <h1
            className="c-hero__title"
            style={{ animationDelay: `${delays[0]}ms` }}
          >Tam Le</h1>
          <h2 className="c-hero__subtitle" style={{ animationDelay: `${delays[1]}ms` }}>Web Developer</h2>
          <p className="c-body-text c-hero__description" style={{ animationDelay: `${delays[2]}ms` }}>{
            "You have an idea. A vision for a product.\nI can help you build it.\nLet's work together and make it a reality."
          }</p>
          <Waypoint
            onEnter={setTransparentHeader}
            onLeave={setDarkHeader}
          />
        </div>
        <div className="o-grid__item--full">
          <Waves className="c-hero__waves" style={{ animationDelay: `${delays[3]}ms` }} />
        </div>
      </section>
    </>
  );
};

export default Hero;