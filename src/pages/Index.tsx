
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutUsPreview from '@/components/AboutUsPreview';

const Index = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedProducts />
      <AboutUsPreview />
      {/* You can add more sections here like:
          - Categories section
          - Special offers / promotions
          - Testimonials
          - Blog preview
      */}
    </div>
  );
};

export default Index;
