
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string | number;
  name: string;
  price: string;
  imageUrl: string;
  category?: string;
  oldPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl, category, oldPrice }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative w-full h-60 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          {category && (
            <span className="absolute top-2 left-2 bg-brand-accent text-white text-xs font-semibold px-2 py-1 rounded">
              {category}
            </span>
          )}
           <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors"
            onClick={(e) => { e.preventDefault(); console.log('Add to wishlist:', name);}}
          >
            <Heart size={18} />
          </Button>
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-brand-primary transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center mb-3">
          <p className="text-xl font-bold text-brand-primary mr-2">{price}</p>
          {oldPrice && <p className="text-sm text-gray-500 line-through">{oldPrice}</p>}
        </div>
        <div className="mt-auto">
          <Button 
            className="w-full bg-brand-primary hover:bg-blue-700 text-white transition-colors"
            onClick={() => console.log('Add to cart:', name)}
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
