/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"

import "normalize.css";
import '@brainhubeu/react-carousel/lib/style.css';
import "aos/dist/aos.css";
import "./src/styles/styles.scss";

import { HeaderProvider } from "./src/contexts/header.context";
import { ThemeProvider } from "./src/contexts/theme.context";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <HeaderProvider>
      {element}
    </HeaderProvider>
  </ThemeProvider>
)