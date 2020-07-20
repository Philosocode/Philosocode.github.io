import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";

import { throttle } from "../../shared/helpers.shared";
import { ANIMATION_DELAY, navLinks } from "../../shared/data.shared";
import { HeaderContext } from "../../contexts/header.context";
import { ThemeContext } from "../../contexts/theme.context";
import { useMobileChecker } from "../../hooks/use-mobile-checker.hook";
import BlazeLogo from "../../icons/blaze.svg";
import ZephyrLogo from "../../icons/zephyr.svg";
import NavMobile from "./nav-mobile.component";
import NavList from "./nav-list.component";
import ScrollLock from "react-scrolllock";

const Header = () => {
  const { isDark } = useContext(HeaderContext);
  const { isBlaze, toggleTheme } = useContext(ThemeContext);
  const [pageAnimating, setPageAnimating] = useState(false);
  const isMobile = useMobileChecker();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const animationDelay = isMobile
    ? (ANIMATION_DELAY + 50)
    : (ANIMATION_DELAY + 30) * navLinks.length;

  const headerClasses = classNames({
    "c-header": true,
    "is-hidden": scrollDirection === "down",
    "is-dark": isDark
  });

  const logoAttributes = {
    onClick: handleClick,
    style: { animationDelay: `${animationDelay}ms` }
  };

  const pageClasses = classNames({
    "c-header__page": true,
    "is-active": pageAnimating
  });
  
  const throttledHandler = throttle(handleScroll, 200);
  
  useEffect(() => {
    window.addEventListener('scroll', throttledHandler);
    return () => { window.removeEventListener('scroll', throttledHandler); }
  }, [throttledHandler]);

  function handleScroll() {
    // FROM: https://github.com/bchiang7/v4/blob/master/src/components/nav.js
    const fromTop = window.scrollY;
    const DELTA = 5;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA) return;

    if (fromTop < DELTA) {
      setScrollDirection("up");
    }
    else if (fromTop > lastScrollTop) {
      if (scrollDirection !== 'down') setScrollDirection("down");
    }
    else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') setScrollDirection("up");
    }

    setLastScrollTop(fromTop);
  };

  function handleClick() {
    setPageAnimating(true);
    setTimeout(() => toggleTheme(), 500);
    setTimeout(() => setPageAnimating(false), 2500);
  }

  return (
    <>
      <header className={headerClasses}>
        <div className="c-header__logo-container" aria-label="Logo">
          <div className="c-header__logo-background"></div>
          {
            isBlaze 
              ? <BlazeLogo className="c-header__logo" {...logoAttributes} />
              : <ZephyrLogo className="c-header__logo is-zephyr" {...logoAttributes} />
          }
        </div>
        {
          isMobile
            ? <NavMobile />
            : <NavList />
        }
      </header>
      <div className={pageClasses}></div>
      <ScrollLock isActive={pageAnimating} />
    </>
  );
 }

export default Header;