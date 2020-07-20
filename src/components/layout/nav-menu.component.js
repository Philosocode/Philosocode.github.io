import React from "react";
import ScrollLock from "react-scrolllock";
import { Link } from "gatsby";
import classNames from "classnames";
import PropTypes from "prop-types";

import { navLinks } from "../../shared/data.shared";
import NavMobile from "./nav-mobile.component";
import SocialIcons from "../shared/social-icons.component";

export const NavMenu = ({ menuOpen, toggleMenu }) => {
  const menuBackgroundClasses = classNames({ 
    "c-menu__background": true, 
    "is-open": menuOpen 
  });

  const menuNavClasses = classNames({
    "c-menu__nav": true, 
    "is-open": menuOpen 
  });

  const menuLinkClasses = classNames({
    "c-menu__link": true,
    "is-animated": menuOpen
  });

  const dividerClasses = classNames({
    "c-menu__divider": true,
    "is-animated": menuOpen
  });

  return (
    <div className="c-menu__container" onClick={toggleMenu} onKeyPress={toggleMenu} role="menu" tabIndex={0}>
      <div className={menuBackgroundClasses}>&nbsp;</div>
      <nav className={menuNavClasses}>
        <ul className="c-menu__list">
          {
            navLinks.map((link, idx) => (
              <li key={link.name} className="c-menu__item">
                <Link
                  to={`${link.path}`}
                  className={menuLinkClasses}
                  style={{ animationDelay: `${300 + (150 * idx)}ms` }}
                >{link.name}</Link>
              </li>
            ))
          }
          <div className={dividerClasses} style={{ animationDelay: "1200ms" }}></div>
          <SocialIcons animated={menuOpen} alignStart linkClass="c-menu__icon" />
        </ul>
      </nav>
      <ScrollLock isActive={menuOpen} />
    </div>
  );
}

NavMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default NavMobile;