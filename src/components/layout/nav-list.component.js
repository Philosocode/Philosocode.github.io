import React from "react";
import { Link } from "gatsby";

import { navLinks, ANIMATION_DELAY } from "../../shared/data.shared";

const NavList = () => {
  function renderNavLinks() {
    return navLinks.map((navLink, idx) => (
      <li
        key={navLink.name}
        className="c-header__nav-item"
        style={{ animationDelay: (ANIMATION_DELAY * navLinks.length) - idx * ANIMATION_DELAY + "ms" }}
      >
        <Link
          className="c-heading c-heading--condensed c-header__nav-link"
          to={navLink.path}
        >
          {navLink.name}
        </Link>
      </li>
    ));
  }

  return (
    <nav role="navigation">
      <ul className="c-header__nav-list">{renderNavLinks()}</ul>
    </nav>
  );
};

export default NavList;
