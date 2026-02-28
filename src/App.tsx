import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import CursorParticles from "./components/CursorParticles";
import CursorGridBackground from "./components/CursorGridBackground";

const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const PromptShop = lazy(() => import("./pages/PromptShop"));
const StackFinder = lazy(() => import("./pages/StackFinder"));
const BrandBoost = lazy(() => import("./pages/BrandBoost"));
const Shop = lazy(() => import("./pages/Learn"));
const Library = lazy(() => import("./pages/Library"));
const DMCAPolicy = lazy(() => import("./pages/DMCAPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
    <div className="w-8 h-8 border-2 border-neon-green border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CursorGridBackground />
        <CursorParticles />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/academy" element={<Home />} />
              <Route path="/prompt-shop" element={<PromptShop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/stackfinder" element={<StackFinder />} />
              <Route path="/brand-boost" element={<BrandBoost />} />
              <Route path="/dmca" element={<DMCAPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/coding" element={<Navigate to="/academy" replace />} />
              <Route path="/investing" element={<Navigate to="/" replace />} />
              <Route path="/business" element={<Navigate to="/" replace />} />
              <Route path="/buildyourwebsite" element={<Navigate to="/" replace />} />
              <Route path="/library" element={<Library />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
