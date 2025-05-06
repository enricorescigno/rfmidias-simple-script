
import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import LPFooter from '@/components/lp/LPFooter';
import LPHeader from '@/components/lp/LPHeader';
import ModelDetail from '@/components/lp/ModelDetail';

const LPModelo2 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: 'target', text: 'Modelo Personalizado para Posicionamento Digital' },
    { icon: 'user-check', text: 'Experiência de usuário premium e intuitiva' },
    { icon: 'zap', text: 'Tempo de carregamento ultra-rápido' },
    { icon: 'layout-dashboard', text: 'Design exclusivo e personalizado' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <LPHeader />
      
      <main className="overflow-x-hidden w-full pb-10">
        <ModelDetail 
          title="Landing Page de Autoridade" 
          description="Crie presença e fortaleça sua marca com uma landing page informativa e visualmente atrativa. Ideal para tráfego orgânico e redirecionamento para redes sociais, elevando a percepção de autoridade."
          image="/lovable-uploads/cf775c2a-c125-497e-9bcb-9a215e2379e6.png"
          benefits={benefits}
          price="R$2300,00"
          showContactForm={true}
          paymentLink="https://mpago.li/1fkK8Dm"
        />
      </main>
      
      <LPFooter />
    </div>
  );
};

export default LPModelo2;
