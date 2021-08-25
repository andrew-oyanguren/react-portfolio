import { useState, useEffect } from 'react';

const useBreakpoint = (breakpoint) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /* Runs at load time to set a screen width */
  useEffect(() => {
    // Updates state to new innerwidth.
    const screenResizeHandler = () => setScreenWidth(window.innerWidth);

    // Listens to "resize" event, updates state on resize.
    window.addEventListener('resize', screenResizeHandler);

    // Cleanup Function: Removes event listener on window.
    return () => {
      window.removeEventListener('resize', screenResizeHandler);
    };
  }, []);

  /* Helper constant for navigation breakpoint */
  const customBreakpoint = screenWidth > breakpoint;

  return {
    customBreakpoint,
    screenWidth
  };
};

export default useBreakpoint;