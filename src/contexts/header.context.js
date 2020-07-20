import React, { createContext, useState } from "react";

// Context
export const HeaderContext = createContext({
  isDark: false,
  isHidden: false,
  setDarkHeader: () => {},
  setTransparentHeader: () => {},
  toggleHidden: () => {}
});

// Provider
export const HeaderProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  function setDarkHeader() {
    setIsDark(true);
  }

  function setTransparentHeader() {
    setIsDark(false);
  }

  function toggleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <HeaderContext.Provider
      value={{ isDark, isHidden, setDarkHeader, setTransparentHeader, toggleHidden }}
    >
      {children}
    </HeaderContext.Provider>
  )
}