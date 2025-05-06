
import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingElements from '@/components/FloatingElements';

const LPCompraEfetuada = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Disable GhostMode specifically for this page
    document.body.classList.add('disable-ghost-mode');
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('disable-ghost-mode');
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <ScrollReveal />
      <FloatingElements count={4} colorScheme="gold" />
      
      <main className="container mx-auto px-6 py-32 md:py-40 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text gold-gradient">
            Obrigado! Agradecemos pela confiança.
          </h1>
          
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-gold-light via-gold to-gold-dark mb-10"></div>
          
          <p className="text-xl text-gray-300">
            Nosso time entrará em contato para agendar sua reunião de alinhamento exclusiva nas próximas <span className="text-transparent bg-clip-text gold-gradient font-semibold">12 horas</span>.
          </p>
          
          <div className="mt-16 animate-glow">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="2" className="checkmark-circle" />
              <path d="M25 40L35 50L55 30" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="checkmark-check" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LPCompraEfetuada;
