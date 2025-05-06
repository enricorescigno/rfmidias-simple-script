
import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import LPFooter from '@/components/lp/LPFooter';
import LPHeader from '@/components/lp/LPHeader';
import ModelDetail from '@/components/lp/ModelDetail';

const LPModelo3 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: 'file-text', text: 'Formulários inteligentes com alta taxa de conversão' },
    { icon: 'database', text: 'Integração com CRM e ferramentas de marketing' },
    { icon: 'headset', text: 'Suporte técnico prioritário' },
    { icon: 'user-cog', text: 'Experiência de usuário premium' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <LPHeader />
      
      <main className="overflow-x-hidden w-full pb-10">
        <ModelDetail 
          title="Landing Page de Captação Estratégica" 
          description="Uma estrutura voltada para conversão de leads qualificados com suporte a campanhas de remarketing e formação de base de clientes. Perfeita para estratégias de funil de vendas e automações."
          image="/lovable-uploads/7af47f70-9819-45a6-a53f-668792094ab6.png"
          benefits={benefits}
          price="R$2800,00"
          showContactForm={true}
          paymentLink="https://mpago.li/2pzquVr"
        />
      </main>
      
      <LPFooter />
    </div>
  );
};

export default LPModelo3;
