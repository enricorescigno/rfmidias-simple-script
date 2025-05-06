
import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import LPFooter from '@/components/lp/LPFooter';
import LPHeader from '@/components/lp/LPHeader';
import ModelDetail from '@/components/lp/ModelDetail';

const LPModelo4 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: 'layout-template', text: 'Design exclusivo e personalizado para sua marca' },
    { icon: 'split', text: 'Integração com subdomínios e menus' },
    { icon: 'headset', text: 'Suporte técnico prioritário' },
    { icon: 'file-text', text: 'Formulários inteligentes com alta taxa de conversão' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <LPHeader />
      
      <main className="overflow-x-hidden w-full pb-10">
        <ModelDetail 
          title="Landing Page Corporativa Avançada" 
          description="Ideal para negócios que buscam presença digital completa, com formulário integrado, seções informativas, redirecionamento para subdomínios e menu personalizado."
          image="/lovable-uploads/7ada6562-9940-45cc-902f-6a67b2222e0a.png"
          benefits={benefits}
          price="R$3800,00"
          showContactForm={true}
          paymentLink="https://mpago.li/33tCjxK"
        />
      </main>
      
      <LPFooter />
    </div>
  );
};

export default LPModelo4;
