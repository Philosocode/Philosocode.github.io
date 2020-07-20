import React, { useState } from "react";
import anime from "animejs";
import { Waypoint } from "react-waypoint";

import Bolt from "../../icons/bolt.svg";
import Respond from "../../icons/respond.svg";
import PixelPerfect from "../../icons/pixel-perfect.svg";
import Pen from "../../icons/pen.svg";

const WhyIcons = () => {
  const [animationsRun, setAnimationRun] = useState(false);

  function triggerAnimations() {
    if (animationsRun) return;
    setAnimationRun(true);

    const EASING = "easeOutQuint";
    const INITIAL_DELAY = 500;

    anime({
      targets: ".js-bolt path",
      delay: INITIAL_DELAY,
      duration: 2000,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: EASING
    });

    anime({
      targets: ".js-respond path",
      duration: 2000,
      delay: INITIAL_DELAY + 500,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: EASING
    })

    anime({
      targets: ".js-pixel-perfect path",
      duration: 5000,
      delay: INITIAL_DELAY +  1000,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: EASING
    })

    anime({
      targets: ".js-pixel-perfect circle",
      duration: 1200,
      delay: INITIAL_DELAY +  1200,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: EASING
    })

    anime({
      targets: ".js-pen path",
      duration: 2500,
      delay: INITIAL_DELAY + 1500,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: EASING
    })

    anime({
      targets: ".js-pen circle",
      duration: 1500,
      delay: INITIAL_DELAY + 1700,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: EASING
    })
  }

  return (
    <div className="c-why__icons">
      {
        !animationsRun && <Waypoint onEnter={triggerAnimations} />
      }
      <div className="c-why__icon-container">
        <Bolt className="c-why__icon js-bolt" />
        <h5 className="c-heading c-heading--condensed c-heading--red">Performant</h5>
      </div>
      <div className="c-why__icon-container">
        <Respond className="c-why__icon js-respond" />
        <h5 className="c-heading c-heading--condensed c-heading--red">Responsive</h5>
      </div>
      <div className="c-why__icon-container">
        <PixelPerfect className="c-why__icon js-pixel-perfect" />
        <h5 className="c-heading c-heading--condensed c-heading--red">Pixel-Perfect</h5>
      </div>
      <div className="c-why__icon-container">
        <Pen className="c-why__icon js-pen" />
        <h5 className="c-heading c-heading--condensed c-heading--red">Crafted With Care</h5>
      </div>
    </div>
  )
}

/*
const WhyIcons = () => {
  const iconData = [
    { icon: FaBolt, text: "Performant" },
    { icon: FaExpandArrowsAlt, text: "Responsive" },
    { icon: FaRulerCombined, text: "Pixel-Perfect" },
    { icon: FaPenNib, text: "Crafted With Care" },
  ];

  return (
    <div className="c-why__icons">
      {
        iconData.map((data, idx) => (
        <div key={data.text} className="c-why__icon-container" data-aos="fade-up" data-aos-delay={idx * 200} data-aos-offset={300} data-aos-duration={500}>
          <data.icon className="c-why__icon" />
          <h5 className="c-heading c-heading--condensed c-heading--red">{data.text}</h5>
        </div>
        ))
      }
    </div>
  )
}
*/

export default WhyIcons;