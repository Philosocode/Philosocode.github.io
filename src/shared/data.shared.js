import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { path: "#about", name: "About" },
  { path: "#process", name: "Process" },
  { path: "#featured", name: "Featured" },
  { path: "#projects", name: "Projects" },
  { path: "#testimonials", name: "Testimonials" },
  { path: "#contact", name: "Contact" },
]

export const socialIcons = [
  { icon: FaEnvelope, link: "mailto:hello@tamxle.com" },
  { icon: FaGithub, link: "https://github.com/Philosocode" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/tamxle/" }
];

export const aosHeadingAttributes = {
  "data-aos": "fade-up",
  "data-aos-offset": 300,
  "data-aos-duration": 500,
};

export const ANIMATION_DELAY = 150;