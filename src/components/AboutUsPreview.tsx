
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Sparkles } from 'lucide-react';

const AboutUsPreview = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            {/* Replace with a relevant image or illustration */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-xl object-cover w-full h-80 md:h-96"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <Sparkles className="inline-block mr-2 text-brand-accent h-8 w-8" />
              More Than Just a Store
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At GlobalReach, we're passionate about connecting you with quality products and exceptional service. We believe in building a community and offering a shopping experience that's both enjoyable and trustworthy.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to bring the world's best to your doorstep, with a focus on innovation, sustainability, and customer satisfaction.
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                <Users className="mr-2 h-5 w-5" /> Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreview;
