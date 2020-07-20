import React, { useState } from "react";

import { Burger } from "./burger.component";
import { NavMenu } from "./nav-menu.component";

const NavMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() { setMenuOpen(!menuOpen); }

  return (
    <>
      <Burger menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default NavMobile;