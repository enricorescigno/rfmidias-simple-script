
import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface RippleButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode;
}

const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, className, ...props }, ref) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
      } else {
        setIsRippling(false);
      }
    }, [coords]);

    useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      props.onClick?.(e);
    };

    return (
      <Button
        ref={ref}
        className={cn('premium-button', className)}
        onClick={handleClick}
        {...props}
      >
        {isRippling && (
          <span
            className="ripple"
            style={{
              left: coords.x,
              top: coords.y
            }}
          />
        )}
        {children}
      </Button>
    );
  }
);

RippleButton.displayName = 'RippleButton';

export { RippleButton };
