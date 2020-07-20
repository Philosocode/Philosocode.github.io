import React, { useEffect } from "react";
import anime from "animejs";
import PropTypes from "prop-types";

// FROM: https://github.com/bchiang7/v4/blob/master/src/components/loader.js
const Loader = ({ Logo, finishLoading }) => {
  useEffect(() => {
    animate();
    // eslint-disable-next-line
  }, []);

  function animate() {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: ".c-loader__circle",
        opacity: 1,
        duration: 0
      })
      .add({
        targets: ".c-loader__circle",
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: ".c-loader__icon",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: ".c-loader__content",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".c-loader__background",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0
      })
  }

  return (
    <div className="c-loader__background">
      <div className="c-loader__content">
        <svg width="168" height="168" className="c-loader__svg">
          <circle cx="82" cy="82" r="60" className="c-loader__circle"></circle>
        </svg>
        { Logo }
      </div>
    </div>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
