
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, LayoutGrid } from 'lucide-react'; // Using LayoutGrid as a generic icon
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  name: string;
  imageUrl: string;
  categorySlug: string;
  icon?: React.ElementType; // Optional specific icon
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl, categorySlug, icon: IconComponent }) => {
  const IconToShow = IconComponent || LayoutGrid;

  return (
    <Link to={`/shop/${categorySlug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 h-full flex flex-col">
        <CardHeader className="p-0 relative">
          <div className="aspect-video overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <IconToShow className="h-8 w-8 text-white mb-2" />
            <CardTitle className="text-xl font-semibold text-white">{name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 mt-auto bg-slate-50 dark:bg-slate-900">
          <div className="flex justify-between items-center text-sm text-brand-primary group-hover:text-brand-accent">
            <span>View Products</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
