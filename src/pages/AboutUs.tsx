
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-[calc(100vh-200px)]"> {/* Adjust min-h based on header/footer height */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 text-center">About GlobalReach Stores</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2025, GlobalReach Stores started with a simple idea: to make unique and high-quality products from around the world accessible to everyone. We envisioned a platform where discovery meets convenience, where shopping is not just a transaction but an experience.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              From humble beginnings, we've grown into a trusted online marketplace, constantly curating new items and striving to provide the best possible service to our valued customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to connect you with a diverse range of products that enhance your life. We are committed to:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
              <li>Offering high-quality items at competitive prices.</li>
              <li>Ensuring a seamless and secure shopping experience.</li>
              <li>Providing exceptional customer support.</li>
              <li>Fostering a community built on trust and satisfaction.</li>
              <li>Promoting sustainable and ethical sourcing where possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              At GlobalReach, we're more than just an e-commerce store. We are a team of passionate individuals dedicated to bringing you the best. We carefully select our products, work closely with our suppliers, and listen to our customers to continuously improve.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We believe in transparency, quality, and a customer-first approach. Thank you for choosing GlobalReach Stores. We look forward to serving you!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
