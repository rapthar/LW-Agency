import React, { useRef, useEffect, useState } from 'react';
import { useParallax } from './ParallaxProvider';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  direction?: 'up' | 'down';
  offset?: number;
}

export default function ParallaxSection({
  children,
  speed = 0.2,
  className = '',
  as: Component = 'div',
  direction = 'up',
  offset = 0
}: ParallaxSectionProps) {
  const { scrollY } = useParallax();
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setElementTop(entry.boundingClientRect.top + window.scrollY);
        }
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const calculateTransform = () => {
    if (!isVisible) return 0;
    
    const scrollPosition = scrollY - elementTop;
    const factor = direction === 'up' ? -1 : 1;
    const parallaxOffset = (scrollPosition * speed * factor) + offset;
    
    // Limit the parallax effect
    const maxOffset = 200;
    return Math.min(Math.max(parallaxOffset, -maxOffset), maxOffset);
  };

  return (
    <Component
      ref={elementRef}
      className={`relative ${className}`}
      style={{
        transform: `translate3d(0, ${calculateTransform()}px, 0)`,
        willChange: 'transform',
        transition: 'transform 0.1s linear'
      }}
    >
      {children}
    </Component>
  );
}