
import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 lg:px-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-rfmidias">
              RFMidias
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-rfmidias transition-colors duration-200">
              Home
            </a>
            <a href="#servicos" className="text-gray-600 hover:text-rfmidias transition-colors duration-200">
              Serviços
            </a>
            <a href="#contato" className="text-gray-600 hover:text-rfmidias transition-colors duration-200">
              Contato
            </a>
          </nav>
          
          <div className="flex items-center">
            <Button 
              variant="outline" 
              className="hidden md:flex border-rfmidias text-rfmidias hover:bg-rfmidias hover:text-white"
            >
              Orçamento
            </Button>
            <button className="md:hidden p-2 text-gray-600 hover:text-rfmidias">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
