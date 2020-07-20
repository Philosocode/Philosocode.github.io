import React, { createContext, useState, useEffect } from "react";

// Context
export const ThemeContext = createContext({
  isBlaze: false,
  setBlaze: () => {},
  setZephyr: () => {},
  toggleTheme: () => {}
});

// Provider
export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("theme") !== null) {
      document.body.setAttribute("data-theme", "zephyr");
      setisBlaze(false);
    }
    else {
      setisBlaze(true);
    }
  }, []);

  const [isBlaze, setisBlaze] = useState(undefined);

  function setZephyr() {
    document.body.setAttribute("data-theme", "zephyr");
    localStorage.setItem("theme", "zephyr");
    setisBlaze(false);
  }

  function setBlaze() {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    setisBlaze(true);
  }
  
  function toggleTheme() {
    if (isBlaze) setZephyr()
    else setBlaze();
  }

  return (
    <ThemeContext.Provider
      value={{ isBlaze, setBlaze, setZephyr, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}