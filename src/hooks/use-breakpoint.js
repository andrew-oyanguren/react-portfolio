import { useState, useEffect } from 'react';

const useBreakpoint = (breakpoint) => {
  const [screenWidth, setScreenWidth] = useState(window.visualViewport.width);

  /* Runs at load time to set a screen width */
  useEffect(() => {
    // timeoutId for debouncing handler
    let timeoutId = null;

    // Updates state to new innerwidth.
    const screenResizeHandler = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setScreenWidth(window.visualViewport.width), 150);
    };

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
  };
};

export default useBreakpoint;