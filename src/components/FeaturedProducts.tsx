
import React from 'react';
import ProductCard from './ProductCard';

const placeholderProducts = [
  { id: 1, name: "Modern Wireless Headphones", price: "$79.99", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", category: "Electronics", oldPrice: "$99.99" },
  { id: 2, name: "Stylish Smartwatch", price: "$199.00", imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", category: "Wearables" },
  { id: 3, name: "Ergonomic Office Chair", price: "$249.50", imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5382f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", category: "Furniture" },
  { id: 4, name: "Minimalist Backpack", price: "$45.00", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb68c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", category: "Accessories", oldPrice: "$55.00" },
  { id: 5, name: "HD Webcam for Streaming", price: "$59.99", imageUrl: "https://images.unsplash.com/photo-1616420319034-4966a019900a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViY2FtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", category: "Electronics" },
  { id: 6, name: "Insulated Water Bottle", price: "$25.00", imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", category: "Lifestyle" },
  { id: 7, name: "Portable Bluetooth Speaker", price: "$39.99", imageUrl: "https://images.unsplash.com/photo-1589100014375-7ac9238c1592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", category: "Audio" },
  { id: 8, name: "Organic Green Tea Set", price: "$19.75", imageUrl: "https://images.unsplash.com/photo-1576092762791-d07819c6c192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhJTIwc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", category: "Food & Drink" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
