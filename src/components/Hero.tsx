
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Estratégias de mídia <span className="text-rfmidias">que funcionam</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Soluções personalizadas para elevar sua presença digital e 
              alcançar resultados reais para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rfmidias hover:bg-rfmidias-light text-white px-8 py-6 text-base">
                Fale conosco
              </Button>
              <Button variant="outline" className="border-rfmidias text-rfmidias hover:bg-rfmidias hover:text-white px-8 py-6 text-base">
                Serviços
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-gray-200 w-full max-w-md h-64 md:h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagem Ilustrativa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
