
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import SolutionsSection from '@/components/SolutionsSection';
import CasesSection from '@/components/CasesSection';
import ClientsSection from '@/components/ClientsSection';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Preload background images if needed
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden w-full">
      <CustomCursor />
      <ScrollReveal />
      <Header />
      
      <main className="overflow-x-hidden w-full">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <CasesSection />
        <SolutionsSection />
        <ClientsSection />
        <CallToAction />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
