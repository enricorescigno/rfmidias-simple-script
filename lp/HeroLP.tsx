
import React from "react";
import { Button } from "@/components/ui/button";
import FloatingElements from "../FloatingElements";

const HeroLP = () => {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 px-6 bg-dark overflow-hidden">
      <FloatingElements count={6} colorScheme="gold" minSize={8} maxSize={15} />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Text */}
          <div className="space-y-8 reveal" data-animate-direction="left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                lineHeight: '1.2',
                wordBreak: 'break-word',
                hyphens: 'auto'
              }}
            >
              <span className="text-transparent bg-clip-text gold-gradient">Adquira o site ideal para aumentar o lucro do seu negócio</span>
            </h1>
            
            <h2 
              className="text-xl md:text-2xl font-medium text-gray-300 mt-6"
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                lineHeight: '1.4'
              }}
            >
              Sites sob medida em 4 pacotes, com entrega rápida e eficiente
            </h2>
            
            <p 
              className="text-2xl md:text-3xl font-semibold text-gold"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
                lineHeight: '1.4'
              }}
            >
              Escale seu negócio com presença digital de verdade.
            </p>
            
            <div className="pt-4">
              <a href="#modelos" className="opacity-0 animate-fade-in delay-[800ms] inline-block">
                <Button className="button-gradient border border-gold text-gold hover:text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <span className="button-text">Conheça nossos modelos</span>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="reveal" data-animate-direction="right">
            <div className="bg-dark-lighter backdrop-blur-md border border-gold/20 rounded-xl p-8 shadow-lg shadow-gold/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-30"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                <img alt="Landing page visual representation" style={{ objectPosition: "center" }} className="max-w-none w-[100%] h-auto object-contain transform-gpu" src="/lovable-uploads/e394ed4a-b868-43ff-939d-9cb859038cb0.png" loading="lazy" decoding="async" fetchPriority="high"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLP;
