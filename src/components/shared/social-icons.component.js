import React from "react";
import classNames from "classnames";

import { socialIcons } from "../../shared/data.shared";

const SocialIcons = ({ animated, alignStart, linkClass }) => { 
  let linkClasses = "c-social__link ";
  if (linkClass) linkClasses += linkClass;

  const listClasses = classNames({
    "c-social__icons": true,
    "c-social__icons--start": alignStart,
    "is-animated": animated
  });

  return (
    <ul className={listClasses} style={{ animationDelay: "1400ms" }}>
      {
        socialIcons.map(icon => (
          <li key={icon.link} className="c-social__icon">
            <a className={linkClasses} href={icon.link} target="_blank" rel="noopener noreferrer">
              <icon.icon />
            </a>
          </li>
        ))
      }
    </ul>
  );
 };

export default SocialIcons;