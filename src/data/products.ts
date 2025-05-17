
import { Lightbulb, Leaf, Sofa } from 'lucide-react'; // Example icons

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  images?: string[];
  description: string;
  category: string; // Could be a slug or name
  categorySlug?: string;
  rating?: {
    stars: number;
    reviews: number;
  };
  stock?: number;
  details?: string[];
  shortDescription?: string;
  brand?: string;
  sku?: string;
  tags?: string[];
}

export const sampleProducts: Product[] = [
  {
    id: 'modern-minimalist-lamp',
    name: 'Modern Minimalist Lamp',
    price: 79.99,
    oldPrice: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1507401931838-0c6068953e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', // Placeholder
    images: [
      'https://images.unsplash.com/photo-1507401931838-0c6068953e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1517991104128-1d20a0895646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1614140290092-195900555049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
    description: "Illuminate your space with this sleek Modern Minimalist Lamp. Its clean lines and warm glow create a cozy ambiance in any room. Perfect for contemporary homes, it features an energy-efficient LED bulb and a durable matte finish. Easy to assemble and operate.",
    shortDescription: "Sleek, modern, and energy-efficient.",
    category: 'Home Decor',
    categorySlug: 'home-decor',
    rating: { stars: 4.5, reviews: 120 },
    stock: 25,
    details: [
      "Matte black finish",
      "Energy-efficient LED bulb included",
      "Height: 45cm, Base Diameter: 15cm",
      "Touch-sensitive controls"
    ],
    brand: "LuminaStyle",
    sku: "LS-MML-001",
    tags: ["lamp", "lighting", "minimalist", "modern"]
  },
  {
    id: 'eco-friendly-tote-bag',
    name: 'Eco-Friendly Jute Tote Bag',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1591561930773-2d7197ce7afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', // Placeholder
    description: "Carry your essentials sustainably with our Eco-Friendly Jute Tote Bag. Made from 100% natural jute fibers, it's durable, biodegradable, and stylish. Features comfortable cotton handles and a spacious interior, perfect for shopping, beach trips, or everyday use.",
    shortDescription: "Sustainable, durable, and stylish carryall.",
    category: 'Accessories',
    categorySlug: 'accessories',
    rating: { stars: 4.8, reviews: 85 },
    stock: 50,
    brand: "EarthThreads",
    sku: "ET-JTB-003",
    tags: ["tote bag", "eco-friendly", "sustainable", "jute"]
  },
  {
    id: 'velvet-throw-pillow',
    name: 'Luxury Velvet Throw Pillow',
    price: 39.50,
    imageUrl: 'https://images.unsplash.com/photo-1600121906901-35538715940d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', // Placeholder
    description: "Add a touch of elegance to your living space with our Luxury Velvet Throw Pillow. Crafted from premium, soft velvet, this pillow offers both comfort and style. Available in a range of rich colors to complement your decor. Includes a plush, hypoallergenic insert.",
    shortDescription: "Plush comfort meets elegant design.",
    category: 'Home Decor',
    categorySlug: 'home-decor',
    rating: { stars: 4.7, reviews: 210 },
    stock: 30,
    brand: "ComfyCushions",
    sku: "CC-VTP-005",
    tags: ["pillow", "velvet", "luxury", "decor"]
  },
  // Add more sample products as needed
];

// You might also want to fetch products from an API in a real application
export const getProductById = (id: string): Product | undefined => {
  console.log(`Fetching product with ID: ${id}`);
  const product = sampleProducts.find(p => p.id === id);
  console.log("Found product:", product);
  return product;
};

