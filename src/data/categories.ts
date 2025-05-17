
import { LayoutGrid, Shirt, Home, Heart, Bike, Puzzle, Car, BookOpen } from 'lucide-react'; // Importing more specific icons if needed

// Note: Shirt, Home, Heart, Bike, Puzzle, Car, BookOpen might not be in the allowed list.
// Fallback to LayoutGrid if specific icons are not available or restricted.
// For this implementation, we will try to use them if they are, otherwise CategoryCard defaults to LayoutGrid.
// The allowed list is: "arrow-down", "arrow-up", "arrow-left", "arrow-right", "shopping-bag", "shopping-cart", "category", "list", "grid-2x2", "grid-3x3", "grid-4x4", "layout-grid", "layout-list", "chevron-down", "chevron-up", "chevron-left", "chevron-right".
// So, we must use one of these. 'LayoutGrid' or 'CategoryIcon' (aliased from 'category') are good choices.

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  icon?: React.ElementType; // Lucide icon component
}

export const shopCategories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    imageUrl: '/placeholder.svg', // Replace with actual image or better placeholder
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    imageUrl: '/placeholder.svg', 
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    slug: 'home-garden',
    imageUrl: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&q=60',
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'beauty-health',
    name: 'Beauty & Health',
    slug: 'beauty-health',
    imageUrl: '/placeholder.svg',
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'sports-outdoors',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=60',
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'toys-hobbies',
    name: 'Toys & Hobbies',
    slug: 'toys-hobbies',
    imageUrl: '/placeholder.svg',
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'automotive',
    name: 'Automotive',
    slug: 'automotive',
    imageUrl: '/placeholder.svg',
    icon: LayoutGrid, // Using an allowed icon
  },
  {
    id: 'books-audible',
    name: 'Books & Audible',
    slug: 'books-audible',
    imageUrl: '/placeholder.svg',
    icon: LayoutGrid, // Using an allowed icon
  },
];
