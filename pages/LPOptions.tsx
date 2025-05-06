
import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import LPHeader from '@/components/lp/LPHeader';
import LPFooter from '@/components/lp/LPFooter';
import ModelsLP from '@/components/lp/ModelsLP';

const LPOptions = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <ScrollReveal />
      <LPHeader />
      
      <main className="overflow-x-hidden w-full pt-36 pb-10">
        <ModelsLP />
      </main>
      
      <LPFooter />
    </div>
  );
};

export default LPOptions;
