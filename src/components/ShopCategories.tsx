
import React from 'react';
import CategoryCard from './CategoryCard';
import { shopCategories } from '@/data/categories';

const ShopCategories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Shop by Category</h2>
      <p className="text-lg text-gray-600 text-center mb-10">Explore our wide range of product categories.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {shopCategories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            categorySlug={category.slug}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
