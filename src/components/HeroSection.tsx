
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-secondary via-sky-100 to-pink-100 py-20 md:py-32 animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Discover Your Next Favorite Thing
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore a world of unique products, curated just for you. Quality, style, and unbeatable prices.
        </p>
        <Link to="/shop">
          <Button size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-transform hover:scale-105">
            Shop Now
          </Button>
        </Link>
      </div>
      {/* Optional: Add background image or illustration here */}
      {/* Example: <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-20" /> */}
    </div>
  );
};

export default HeroSection;
