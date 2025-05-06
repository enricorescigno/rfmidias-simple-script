
import { useState, useEffect, RefObject } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export const useMouseParallax = (ref: RefObject<HTMLElement>, intensity: number = 5) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoother spring config for more fluid movement
  const springConfig = { damping: 20, stiffness: 120 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (!ref.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      
      // Calculate the mouse position relative to the card
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      
      // Map to a range from -1 to 1, with 0 being the center
      const mappedX = (relativeX / rect.width) * 2 - 1;
      const mappedY = (relativeY / rect.height) * 2 - 1;

      // Apply intensity with a slight buffer to prevent clipping at edges
      x.set(mappedX * intensity * 0.8); // Reduce intensity slightly
      y.set(mappedY * intensity * 0.8);
    };

    const handleMouseLeave = () => {
      // Smoothly reset position when mouse leaves
      x.set(0);
      y.set(0);
    };

    // Add custom event listener for the entire document to ensure smooth tracking
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      
      // Only apply effect when mouse is near the card
      const buffer = 100; // Extra area around card to keep tracking
      if (
        e.clientX >= rect.left - buffer &&
        e.clientX <= rect.right + buffer &&
        e.clientY >= rect.top - buffer &&
        e.clientY <= rect.bottom + buffer
      ) {
        handleMouseMove(e);
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    ref.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      if (ref.current) {
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [ref, intensity, x, y]);

  return { x: springX, y: springY };
};
