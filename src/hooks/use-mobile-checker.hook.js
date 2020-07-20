import { useState, useEffect } from "react";

export const useMobileChecker = () => { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  function updateIsMobile() {
    const isMobile = !(window.innerWidth > 650);
    setIsMobile(isMobile);
  }

  return isMobile;
 }