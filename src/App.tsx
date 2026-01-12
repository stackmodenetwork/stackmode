import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useEffect, useState, useCallback, memo, lazy, Suspense } from "react";

// Lazy load pages for better initial load performance
const Index = lazy(() => import("./pages/Index"));
const Learn = lazy(() => import("./pages/Learn"));
const About = lazy(() => import("./pages/About"));
const DMCAPolicy = lazy(() => import("./pages/DMCAPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Optimized animated routes wrapper with reduced re-renders
const AnimatedRoutes = memo(() => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(location);

  const handleTransition = useCallback(() => {
    setCurrentLocation(location);
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsVisible(true);
    });
  }, [location]);

  useEffect(() => {
    if (location.pathname !== currentLocation.pathname) {
      setIsVisible(false);
      const timeout = setTimeout(handleTransition, 150);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, currentLocation.pathname, handleTransition]);

  return (
    <div
      className={`will-change-transform transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-3'
      }`}
    >
      <Suspense fallback={<PageLoader />}>
        <Routes location={currentLocation}>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/dmca" element={<DMCAPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
});

AnimatedRoutes.displayName = 'AnimatedRoutes';

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
