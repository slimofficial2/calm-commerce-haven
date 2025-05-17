
import React from 'react';
import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Placeholder for social icons if needed

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-brand-primary">GlobalReach</h3>
            <p className="text-sm">Your one-stop shop for amazing products from around the globe.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-brand-primary">FAQ</Link></li>
              <li><Link to="/shop" className="hover:text-brand-primary">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shipping" className="hover:text-brand-primary">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-3">Stay Connected</h4>
            <p className="text-sm mb-2">Subscribe to our newsletter for updates and promotions.</p>
            {/* <div className="flex space-x-3">
              <a href="#" className="hover:text-brand-primary"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-primary"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-primary"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-primary"><Linkedin size={20} /></a>
            </div> */}
            <p className="text-xs mt-2">Social icons placeholder</p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GlobalReach Stores. All rights reserved.</p>
          <p className="mt-1">Powered by Lovable AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
