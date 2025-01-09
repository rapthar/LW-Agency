import React, { createContext, useContext, useEffect, useState } from 'react';

interface ParallaxContextType {
  scrollY: number;
}

const ParallaxContext = createContext<ParallaxContextType>({ scrollY: 0 });

export const useParallax = () => useContext(ParallaxContext);

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Request animation frame for smooth updates
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContext.Provider value={{ scrollY }}>
      {children}
    </ParallaxContext.Provider>
  );
}