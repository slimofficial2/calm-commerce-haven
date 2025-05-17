
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import NotFound from './NotFound'; // Assuming you have a NotFound component

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      setCurrentImageIndex(0); // Reset image index when product changes
    }
  }, [id]);

  if (product === undefined) {
    // Still loading or checking
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-lg text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (product === null) {
    return <NotFound />;
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.imageUrl];
  const currentImage = images[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      if (newQuantity < 1) return 1;
      if (product.stock && newQuantity > product.stock) return product.stock;
      return newQuantity;
    });
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars).fill(0).map((_, i) => <Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
        {halfStar && <Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {Array(emptyStars).fill(0).map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />)}
      </>
    );
  };


  return (
    <div className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
      <div className="mb-6">
        <Link to={product.categorySlug ? `/shop/${product.categorySlug}` : "/shop"} className="text-sm text-gray-600 hover:text-brand-primary flex items-center">
          <ChevronLeft size={16} className="mr-1" />
          Back to {product.category || 'Shop'}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-lg border bg-gray-100 shadow-sm">
            <img src={currentImage} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300" />
          </div>
          {images.length > 1 && (
            <>
              <Button variant="outline" size="icon" onClick={handlePrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white">
                <ChevronLeft size={20} />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white">
                <ChevronRight size={20} />
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-brand-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-5 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded border-2 overflow-hidden ${index === currentImageIndex ? 'border-brand-primary' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">{product.name}</h1>
          
          {product.rating && (
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {renderStars(product.rating.stars)}
              </div>
              <span className="text-sm text-gray-600">({product.rating.reviews} reviews)</span>
            </div>
          )}

          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-brand-primary mr-3">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-lg text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          {product.shortDescription && <p className="text-gray-600 mb-6">{product.shortDescription}</p>}

          {product.stock && (
            <p className={`text-sm mb-4 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} items in stock` : 'Out of stock'}
            </p>
          )}
          
          {product.stock && product.stock > 0 && (
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-md w-fit">
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="rounded-r-none h-10 w-10">
                  <Minus size={16} />
                </Button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  readOnly // Or implement onChange for direct input
                  className="w-12 text-center border-y-0 border-x focus:ring-0 focus:border-gray-300 h-10"
                  aria-label="Quantity"
                />
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="rounded-l-none h-10 w-10">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto flex-grow bg-brand-primary hover:bg-opacity-80 text-white" 
              disabled={!product.stock || product.stock === 0}
              onClick={() => console.log('Add to cart:', product.name, quantity)}
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => console.log('Add to wishlist:', product.name)}>
              <Heart size={20} className="mr-2" />
              Add to Wishlist
            </Button>
          </div>

          {product.brand && <p className="text-sm text-gray-500 mb-1">Brand: <span className="text-gray-700">{product.brand}</span></p>}
          {product.sku && <p className="text-sm text-gray-500 mb-1">SKU: <span className="text-gray-700">{product.sku}</span></p>}
          {product.category && <p className="text-sm text-gray-500 mb-4">Category: <Link to={product.categorySlug ? `/shop/${product.categorySlug}` : "/shop"} className="text-brand-primary hover:underline">{product.category}</Link></p>}


          {product.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Description</h2>
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>{product.description}</p>
                {product.details && (
                  <ul>
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* TODO: Add sections for Reviews, Related Products, etc. */}
    </div>
  );
};

export default ProductPage;

