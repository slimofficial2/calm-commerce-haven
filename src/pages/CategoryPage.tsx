
import React from 'react';
import { useParams } from 'react-router-dom';
import { shopCategories } from '@/data/categories'; // To find category name

// Using the existing GenericPlaceholderPage structure for now
const GenericPlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-lg text-gray-600">Products for this category are coming soon. Check back later!</p>
    {/* Future: Add product listing for the category here */}
  </div>
);

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const category = shopCategories.find(cat => cat.slug === categoryName);
  const pageTitle = category ? `${category.name} Products` : 'Category Products';

  return <GenericPlaceholderPage title={pageTitle} />;
};

export default CategoryPage;
