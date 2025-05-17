
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs"; // Import AboutUs page
import NotFound from "./pages/NotFound";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} /> 
              {/* Placeholder routes for Shop, Cart etc. - can be built out later */}
              <Route path="/shop" element={<ShopPlaceholderPage />} />
              <Route path="/cart" element={<GenericPlaceholderPage title="Shopping Cart" />} />
              <Route path="/wishlist" element={<GenericPlaceholderPage title="Your Wishlist" />} />
              <Route path="/account" element={<GenericPlaceholderPage title="Your Account" />} />
              <Route path="/product/:id" element={<GenericPlaceholderPage title="Product Details" />} />
              <Route path="/contact" element={<GenericPlaceholderPage title="Contact Us" />} />
              <Route path="/faq" element={<GenericPlaceholderPage title="FAQ" />} />
              <Route path="/shipping" element={<GenericPlaceholderPage title="Shipping & Returns" />} />
              <Route path="/privacy" element={<GenericPlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<GenericPlaceholderPage title="Terms of Service" />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Placeholder component for pages not yet fully built
const GenericPlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-lg text-gray-600">This page is under construction. Check back soon!</p>
  </div>
);

// Specific placeholder for shop to make it slightly different
const ShopPlaceholderPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-center mb-8">Our Shop</h1>
    <p className="text-lg text-gray-600 text-center mb-8">Browse our amazing collection of products. More coming soon!</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-gray-200 h-64 rounded-lg animate-pulse flex items-center justify-center">
          <p className="text-gray-500">Product Loading...</p>
        </div>
      ))}
    </div>
  </div>
);


export default App;
