
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-brand-primary">
          GlobalReach
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-brand-primary transition-colors">Home</Link>
          <Link to="/shop" className="text-gray-600 hover:text-brand-primary transition-colors">Shop</Link>
          <Link to="/about" className="text-gray-600 hover:text-brand-primary transition-colors">About Us</Link>
          <div className="relative">
            <Input type="search" placeholder="Search products..." className="pr-10 pl-4 py-2 border rounded-full w-64 focus:border-brand-primary" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/wishlist" className="text-gray-600 hover:text-brand-primary">
            <Heart size={24} />
          </Link>
          <Link to="/account" className="text-gray-600 hover:text-brand-primary">
            <User size={24} />
          </Link>
          <Link to="/cart" className="relative text-gray-600 hover:text-brand-primary">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 animate-fade-in">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-gray-600 hover:text-brand-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-brand-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <div className="relative py-2">
              <Input type="search" placeholder="Search products..." className="pr-10 pl-4 py-2 border rounded-full w-full focus:border-brand-primary" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex justify-around items-center pt-4 border-t mt-2">
              <Link to="/wishlist" className="text-gray-600 hover:text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>
                <Heart size={24} />
              </Link>
              <Link to="/account" className="text-gray-600 hover:text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>
                <User size={24} />
              </Link>
              <Link to="/cart" className="relative text-gray-600 hover:text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
