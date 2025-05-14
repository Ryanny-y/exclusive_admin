import { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  console.log(windowSize);
  

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(window.debounceResizeTimeout);
      window.debounceResizeTimeout = setTimeout(() => {
        setWindowSize(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowResize;
