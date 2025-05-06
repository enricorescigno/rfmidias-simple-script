
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import CustomCursor from '@/components/CustomCursor';
import HeroLP from '@/components/lp/HeroLP';
import ModelsLP from '@/components/lp/ModelsLP';
import ContactLP from '@/components/lp/ContactLP';
import LPHeader from '@/components/lp/LPHeader';
import LPFooter from '@/components/lp/LPFooter';

const LP = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <ScrollReveal />
      <LPHeader />
      
      <main className="overflow-x-hidden w-full pt-16 pb-10">
        <HeroLP />
        <div className="py-10"></div> {/* Spacer between sections */}
        <ModelsLP />
        <div className="py-6"></div> {/* Spacer between sections */}
        <ContactLP />
      </main>
      
      <LPFooter />
    </div>
  );
};

export default LP;
