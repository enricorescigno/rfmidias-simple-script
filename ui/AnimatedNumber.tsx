
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
}

const AnimatedNumber = ({ 
  end, 
  duration = 2, 
  delay = 0, 
  className = "", 
  prefix = "" 
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      // Apply delay if specified
      const timeoutId = setTimeout(() => {
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const updateCounter = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / (duration * 1000), 1);
          
          // Easing function for smoother animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * end);
          
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(updateCounter);
      }, delay * 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, end, duration, delay]);

  // Format number as Brazilian currency format (1.500,00)
  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  return (
    <span ref={counterRef} className={className}>
      {prefix}{formatNumber(count)}
    </span>
  );
};

export default AnimatedNumber;
