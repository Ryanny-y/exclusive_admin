import { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(window.debounceResizeTimeout);
      // window.debounceResizeTimeout = setTimeout(() => {
      //   setWindowSize(window.innerWidth);
      // }, 200);
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowResize;
