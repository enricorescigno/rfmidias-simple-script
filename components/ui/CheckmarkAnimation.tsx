
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckmarkAnimationProps {
  success?: boolean;
  className?: string;
}

const CheckmarkAnimation = ({ success = true, className }: CheckmarkAnimationProps) => {
  return (
    <div className={cn('inline-flex items-center justify-center', className)}>
      {success ? (
        <Check className="text-emerald-500 animate-[scale-in_0.3s_ease-out] h-5 w-5" />
      ) : (
        <X className="text-red-500 error-shake h-5 w-5" />
      )}
    </div>
  );
};

export { CheckmarkAnimation };
