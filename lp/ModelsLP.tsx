
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { useIsMobile } from "@/hooks/use-mobile";

interface ModelCardProps {
  image: string;
  title: string;
  bulletPoints: string[];
  price: number;
  url: string;
  index: number;
  paymentLink: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  image,
  title,
  bulletPoints,
  price,
  url,
  index,
  paymentLink
}) => {
  // Define price styles based on model index
  const getPriceStyle = () => {
    switch (index) {
      case 0:
        // Silver (Modelo 1)
        return "text-[#C0C0C0]";
      case 1:
        // Silver to Bronze gradient (Modelo 2)
        return "text-transparent bg-clip-text bg-gradient-to-r from-[#C0C0C0] to-[#CD7F32]";
      case 2:
        // Bronze (Modelo 3)
        return "text-[#CD7F32]";
      case 3: // Gold (Modelo 4) - keep original gold gradient
      default:
        return "text-transparent bg-clip-text gold-gradient";
    }
  };

  return <Card className="bg-dark-lighter border border-gold/20 overflow-hidden animated-card flex flex-col h-full min-w-[280px] max-w-[280px] md:min-w-0 md:max-w-full flex-shrink-0 md:flex-shrink snap-start">
      <div className="aspect-video overflow-hidden p-4">
        <img src={image} alt={title} className="w-full h-full object-contain max-w-full mx-auto transition-transform duration-500 hover:scale-105" loading="lazy" decoding="async"/>
      </div>
      <CardHeader className="pt-6 pb-2">
        <h3 className="text-xl font-semibold text-gold">{title}</h3>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-col justify-between h-full">
          <div>
            <ul className="text-sm text-gray-300 mb-6 min-h-[96px] list-none space-y-1">
              {bulletPoints.map((point, idx) => <li key={idx} className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/60 mr-2 flex-shrink-0"></span>
                  {point}
                </li>)}
            </ul>
            <p className="text-sm text-gray-300 mb-2">Investimento a partir de:</p>
            <div className="text-lg font-bold mb-4">
              <AnimatedNumber end={price} duration={2} delay={0} prefix="R$" className={getPriceStyle()} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-col gap-4 pt-4 pb-6">
        <Button 
          className="w-full px-6 py-5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(227,179,65,0.4)] bg-[#E3B341] text-black hover:bg-[#D6A93C]" 
          onClick={() => window.open(paymentLink, "_blank")}
        >
          <span>Comprar Agora</span>
        </Button>
        <Link to={url} className="w-full">
          <Button className="w-full border border-gold text-gold bg-transparent hover:text-white px-6 py-5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <span className="button-text">Ver modelo completo</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>;
};

const ModelsLP = () => {
  const models = [{
    image: "/lovable-uploads/3128431d-6664-49a5-8d44-841e7c78a4f7.png", // ICONE 01 para Landing Page de Vendas
    title: "Landing Page de Vendas",
    bulletPoints: ["Landing Page Eficiente", "Até 4 dobras personalizadas", "Link de vendas integrado", "Perfeito para produtos ou lançamentos"],
    price: 1800,
    url: "/lpmodelo1",
    paymentLink: "https://mpago.li/1KhaYWC"
  }, {
    image: "/lovable-uploads/cf775c2a-c125-497e-9bcb-9a215e2379e6.png", // ICONE 02 para Landing Page de Autoridade
    title: "Landing Page de Autoridade",
    bulletPoints: ["Landing Page institucional básica", "Até 6 dobras personalizadas", "Integração com formulário de contato, Google Maps e redes sociais", "Otimizado para mobile", "SEO básico incluído"],
    price: 2300,
    url: "/lpmodelo2",
    paymentLink: "https://mpago.li/1fkK8Dm"
  }, {
    image: "/lovable-uploads/7af47f70-9819-45a6-a53f-668792094ab6.png", // ICONE 03 para Landing Page de Captação Estratégica
    title: "Landing Page de Captação Estratégica",
    bulletPoints: ["Landing Page institucional completa", "Até 6 dobras personalizadas", "Coleta de Leads para Remarketing", "SEO profissional incluído", "Suporte Básico"],
    price: 2800,
    url: "/lpmodelo3",
    paymentLink: "https://mpago.li/2pzquVr"
  }, {
    image: "/lovable-uploads/7ada6562-9940-45cc-902f-6a67b2222e0a.png", // ICONE 04 para Landing Page Corporativa Avançada
    title: "Landing Page Corporativa Avançada",
    bulletPoints: ["Site institucional completo", "Tudo que o pacote anterior", "100% Personalizado", "Formulário Integrado", "Preparação de integração com email", "Suporte Completo"],
    price: 3800,
    url: "/lpmodelo4",
    paymentLink: "https://mpago.li/33tCjxK"
  }];
  
  return <section id="modelos" className="py-20 px-6 bg-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text gold-gradient">
            Modelos
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Escolha o modelo que melhor se adapta às necessidades do seu negócio
          </p>
          
          {/* Indicador de scroll lateral no mobile */}
          <div className="md:hidden w-full flex flex-col items-center mt-8 space-y-1">
            <svg
              className="w-6 h-6 text-[#FFD700] animate-bounce-right"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-sm text-[#FFD700]">Deslize para o lado</span>
          </div>
        </div>
        
        <div className="w-full overflow-x-auto md:overflow-visible rounded-3xl">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 snap-x snap-mandatory md:gap-8 mt-12 pb-6 md:pb-0 rounded-full">
            {models.map((model, index) => <div key={index} className={`reveal stagger-${index + 1}`}>
                <ModelCard {...model} index={index} />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default ModelsLP;
