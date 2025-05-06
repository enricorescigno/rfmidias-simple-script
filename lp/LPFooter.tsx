
import React from 'react';
import { Instagram, Linkedin, MessageSquare, Mail } from 'lucide-react';

const LPFooter = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-light py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Logo and about */}
          <div className="space-y-4">
            <h3 className="text-gold font-bold text-2xl mb-4">
              <span className="font-montserrat">RF</span> Mídias
            </h3>
            <p className="text-gray-300">
              Transformamos negócios, não apenas campanhas.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/midias.rf/" 
                className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="https://www.linkedin.com/company/rescigno-figueiroa-m%C3%ADdias/" 
                className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5581991512441" 
                className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 group">
                <Mail className="h-4 w-4 text-gold transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                <a href="mailto:contato@rfmidias.com.br" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  contato@rfmidias.com.br
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <MessageSquare className="h-4 w-4 text-gold transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                <a href="https://api.whatsapp.com/send/?phone=5581991512441" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  +55 (81) 99151-2441
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Fique por dentro das novidades</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold outline-none flex-grow min-w-0"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gold text-dark font-medium rounded-lg hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {year} RF Mídias. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/50 to-transparent"></div>
      
      {/* Hidden tracking div as requested */}
      <div id="lp-tracking" className="hidden"></div>
    </footer>
  );
};

export default LPFooter;
