import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function onResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
