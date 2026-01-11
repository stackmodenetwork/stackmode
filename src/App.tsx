import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import About from "./pages/About";
import DMCAPolicy from "./pages/DMCAPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== currentLocation.pathname) {
      // Start exit animation
      setIsVisible(false);
      
      // After exit, update location and start enter animation
      const timeout = setTimeout(() => {
        setCurrentLocation(location);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsVisible(true);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [location, currentLocation]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-3'
      }`}
    >
      <Routes location={currentLocation}>
        <Route path="/" element={<Index />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/books" element={<Learn />} />
        <Route path="/courses" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/dmca" element={<DMCAPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
          <BottomNavigation />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
