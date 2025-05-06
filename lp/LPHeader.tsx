import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const LPHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'solid-header' : 'transparent-header'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center h-full">
          <img src="/lovable-uploads/672ef9a7-cec0-4d3d-b850-0676cbbae3ff.png" alt="RF Mídias" className="max-h-[36px] md:max-h-[48px] w-auto object-contain transition-all duration-300 animate-fade-in" loading="lazy" decoding="async"/>
        </Link>

        <div className="hidden md:block">
          <Link to="/lpoptions" className="inline-block">
            <Button className="border border-gold hover:bg-gold/20 text-gold px-6 py-2 rounded-full transition-all duration-300">
              <span className="button-text">Veja os Modelos</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>;
};
export default LPHeader;