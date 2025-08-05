import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PopularRoutesSection from '../components/home/PopularRoutesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ServiceCoverageSection from '../components/home/ServiceCoverageSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PopularRoutesSection />
      <WhyChooseSection />
      <ServiceCoverageSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;