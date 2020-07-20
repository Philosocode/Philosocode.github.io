import React from "react";

import SocialIcons from "../shared/social-icons.component";

const Footer = () => (
  <footer className="c-footer">
    <div className="c-footer__copyright">© Tam Le {new Date().getFullYear()}</div>
    <SocialIcons linkClass="c-footer__icon" />
  </footer>
);

export default Footer;