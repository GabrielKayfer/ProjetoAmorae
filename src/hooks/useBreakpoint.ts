import { useEffect, useState } from "react";

function getWindowWidth() {
  return typeof window === "undefined" ? 0 : window.innerWidth;
}

export function useBreakpoint() {
  const [width, setWidth] = useState(getWindowWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}
