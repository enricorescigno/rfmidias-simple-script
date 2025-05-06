import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Palette, SearchCheck, CloudUpload, Timer, Target, UserCheck, Zap, LayoutDashboard, FileText, Database, Headset, UserCog, LayoutTemplate, Split } from 'lucide-react';
import ContactForm from './ModelContactForm';
import { useToast } from "@/components/ui/use-toast";
import ScrollReveal from '@/components/ScrollReveal';
import { useLocation } from 'react-router-dom';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

interface BenefitItem {
  icon: string;
  text: string;
}

interface ModelDetailProps {
  title: string;
  description: string;
  image: string;
  benefits: BenefitItem[] | string[];
  price?: string;
  showContactForm?: boolean;
  paymentLink?: string;
}

const ModelDetail: React.FC<ModelDetailProps> = ({ 
  title, 
  description, 
  image, 
  benefits, 
  price,
  showContactForm = false,
  paymentLink
}) => {
  const { toast } = useToast();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const handleGetThisModel = () => {
    // If there's a payment link, redirect to it
    if (paymentLink) {
      window.open(paymentLink, "_blank");
      return;
    }
    
    // Otherwise use the previous scroll behavior
    toast({
      title: "Ação registrada!",
      description: "Você será direcionado para o formulário abaixo.",
      duration: 3000,
    });
    
    // Only scroll to form if it exists
    if (showContactForm) {
      const formElement = document.getElementById("model-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For models without form, show another toast
      toast({
        title: "Informação",
        description: "Este modelo não possui formulário de contato disponível.",
        duration: 3000,
      });
    }
  };
  
  // Extract numeric price value for animation
  const getPriceValue = () => {
    if (!price) return 0;
    // Extract numeric value (remove R$ and possibly convert comma to dot)
    const numericValue = parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.'));
    return numericValue;
  };

  // Determine style class based on current path
  const getPriceStyle = () => {
    switch(currentPath) {
      case '/lpmodelo1':
        return "text-[#C0C0C0]"; // Silver
      case '/lpmodelo2':
        return "text-transparent bg-clip-text bg-gradient-to-r from-[#C0C0C0] to-[#CD7F32]"; // Silver to Bronze
      case '/lpmodelo3':
        return "text-[#CD7F32]"; // Bronze
      case '/lpmodelo4':
      default:
        return "text-gold"; // Gold
    }
  };

  // Get button style based on current path to match price color
  const getButtonStyle = () => {
    switch(currentPath) {
      case '/lpmodelo1':
        return "bg-[#C0C0C0] hover:bg-[#C0C0C0]/90 text-black"; // Silver
      case '/lpmodelo2':
        return "bg-gradient-to-r from-[#C0C0C0] to-[#CD7F32] hover:opacity-90 text-black"; // Silver to Bronze
      case '/lpmodelo3':
        return "bg-[#CD7F32] hover:bg-[#CD7F32]/90 text-black"; // Bronze
      case '/lpmodelo4':
      default:
        return "bg-[#E3B341] hover:bg-[#E3B341]/90 text-black"; // Gold - Updated to match the "Quero esse modelo" button
    }
  };

  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette': return <Palette className="h-6 w-6 text-gold" />;
      case 'search-check': return <SearchCheck className="h-6 w-6 text-gold" />;
      case 'cloud-upload': return <CloudUpload className="h-6 w-6 text-gold" />;
      case 'timer': return <Timer className="h-6 w-6 text-gold" />;
      case 'target': return <Target className="h-6 w-6 text-gold" />;
      case 'user-check': return <UserCheck className="h-6 w-6 text-gold" />;
      case 'zap': return <Zap className="h-6 w-6 text-gold" />;
      case 'layout-dashboard': return <LayoutDashboard className="h-6 w-6 text-gold" />;
      case 'file-text': return <FileText className="h-6 w-6 text-gold" />;
      case 'database': return <Database className="h-6 w-6 text-gold" />;
      case 'headset': return <Headset className="h-6 w-6 text-gold" />;
      case 'user-cog': return <UserCog className="h-6 w-6 text-gold" />;
      case 'layout-template': return <LayoutTemplate className="h-6 w-6 text-gold" />;
      case 'split': return <Split className="h-6 w-6 text-gold" />;
      default: return <ShieldCheck className="h-6 w-6 text-gold" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <ScrollReveal />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 px-6 bg-dark-lighter relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter opacity-80"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text gold-gradient"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
                wordBreak: 'break-word',
                hyphens: 'auto'
              }}
            >
              {title}
            </h1>
            <p 
              className="text-xl text-gray-300 mb-10"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                lineHeight: '1.4'
              }}
            >
              {description}
            </p>
            {price && (
              <div className="mt-10">
                <p 
                  className="text-lg text-gray-300"
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.4'
                  }}
                >
                  Investimento a partir de:
                </p>
                <div className="text-3xl font-bold mt-2">
                  <AnimatedNumber 
                    end={getPriceValue()} 
                    duration={2}
                    prefix="R$"
                    className={getPriceStyle()}
                  />
                </div>
                
                {/* Updated Buy Now Button to match "Quero esse modelo" button */}
                <div className="mt-4 flex justify-center">
                  <Button 
                    onClick={paymentLink ? () => window.open(paymentLink, "_blank") : handleGetThisModel}
                    className="py-6 px-8 rounded-full text-lg bg-[#E3B341] hover:bg-[#E3B341]/90 text-black font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                    aria-label="Comprar este modelo agora e ser redirecionado ao formulário"
                    role="button"
                  >
                    Comprar Agora
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Featured Image section */}
      <section className="py-16 px-6 bg-dark mb-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto reveal">
            <div className="relative rounded-lg overflow-hidden border border-gold/20 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
              <img src={image} alt={title} className="w-full h-auto object-cover" loading="lazy" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-center">
                <Button 
                  onClick={paymentLink ? () => window.open(paymentLink, "_blank") : handleGetThisModel}
                  className="py-6 px-8 rounded-full text-lg bg-[#E3B341] hover:bg-[#E3B341]/90 text-black font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                >
                  Quero esse modelo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Grid */}
      <section className="py-16 px-6 bg-dark-lighter mb-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto reveal">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text gold-gradient"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                lineHeight: '1.3',
                wordBreak: 'break-word',
                hyphens: 'auto'
              }}
            >
              Benefícios e Diferenciais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`p-6 border border-gold/20 rounded-lg bg-dark reveal stagger-${index + 1}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-2">
                      {typeof benefit === 'string' ? (
                        <ShieldCheck className="h-6 w-6 text-gold" />
                      ) : (
                        renderIcon(benefit.icon)
                      )}
                    </div>
                    <p 
                      className="text-lg text-gray-200"
                      style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.4'
                      }}
                    >
                      {typeof benefit === 'string' ? benefit : benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form - conditionally rendered based on showContactForm prop */}
      {showContactForm && (
        <section id="model-form" className="py-16 px-6 bg-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter opacity-80"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 reveal">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text gold-gradient"
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    lineHeight: '1.3',
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  Precisa de ajuda da nossa equipe?
                </h2>
                <p 
                  className="text-gray-300 text-lg mb-10"
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.4'
                  }}
                >
                  Preencha o formulário abaixo e entraremos em contato para ajudá-lo a escolher o melhor pacote para o seu negócio
                </p>
              </div>
              
              <ContactForm modelTitle={title} modelPrice={price} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ModelDetail;
