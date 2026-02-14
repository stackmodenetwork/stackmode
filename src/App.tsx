import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useEffect, useState, useCallback, memo, lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Coding = lazy(() => import("./pages/Coding"));
const BuildYourWebsite = lazy(() => import("./pages/BuildYourWebsite"));
const Library = lazy(() => import("./pages/Learn"));
const About = lazy(() => import("./pages/About"));
const DMCAPolicy = lazy(() => import("./pages/DMCAPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } },
});

const AnimatedRoutes = memo(() => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(location);

  const handleTransition = useCallback(() => {
    setCurrentLocation(location);
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
    <div className={`will-change-transform transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      <Suspense fallback={<PageLoader />}>
        <Routes location={currentLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/buildyourwebsite" element={<BuildYourWebsite />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/dmca" element={<DMCAPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          {/* Redirects for old routes */}
          <Route path="/investing" element={<Navigate to="/" replace />} />
          <Route path="/business" element={<Navigate to="/" replace />} />
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
