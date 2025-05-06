
import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import LPFooter from '@/components/lp/LPFooter';
import LPHeader from '@/components/lp/LPHeader';
import ModelDetail from '@/components/lp/ModelDetail';

const LPModelo1 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: 'palette', text: 'Design exclusivo e personalizado para sua marca' },
    { icon: 'search-check', text: 'Otimização completa para mecanismos de busca (SEO)' },
    { icon: 'cloud-upload', text: 'Hospede conosco ou receba o projeto completo' },
    { icon: 'timer', text: 'Tempo de carregamento ultra-rápido' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <LPHeader />
      
      <main className="overflow-x-hidden w-full pb-10">
        <ModelDetail 
          title="Landing Page de Vendas" 
          description="Landing page direta e objetiva, projetada para conversões rápidas por meio de um link de vendas. Ideal para lançamentos e produtos pontuais."
          image="/lovable-uploads/3128431d-6664-49a5-8d44-841e7c78a4f7.png"
          benefits={benefits}
          price="R$1800,00"
          showContactForm={true}
          paymentLink="https://mpago.li/1KhaYWC"
        />
      </main>
      
      <LPFooter />
    </div>
  );
};

export default LPModelo1;
