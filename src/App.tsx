import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { AuthProvider } from "@/contexts/AuthContext";

const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const PromptShop = lazy(() => import("./pages/PromptShop"));
const StackFinder = lazy(() => import("./pages/StackFinder"));
const BrandBoost = lazy(() => import("./pages/BrandBoost"));
const Library = lazy(() => import("./pages/Library"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ShopImagePrompts = lazy(() => import("./pages/ShopImagePrompts"));
const ShopVideoPrompts = lazy(() => import("./pages/ShopVideoPrompts"));
const ShopPresentationPrompts = lazy(() => import("./pages/ShopPresentationPrompts"));
const BusinessCards = lazy(() => import("./pages/BusinessCards"));
const DMCAPolicy = lazy(() => import("./pages/DMCAPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/academy" element={<Home />} />
                <Route path="/shop" element={<PromptShop />} />
                <Route path="/shop/image-prompts" element={<ShopImagePrompts />} />
                <Route path="/shop/video-prompts" element={<ShopVideoPrompts />} />
                <Route path="/shop/presentation-prompts" element={<ShopPresentationPrompts />} />
                <Route path="/stackfinder" element={<StackFinder />} />
                <Route path="/brand-boost" element={<BrandBoost />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/library" element={<Library />} />
                <Route path="/businesscards" element={<BusinessCards />} />
                <Route path="/dmca" element={<DMCAPolicy />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                {/* Redirects */}
                <Route path="/prompt-shop" element={<Navigate to="/shop" replace />} />
                <Route path="/coding" element={<Navigate to="/academy" replace />} />
                <Route path="/investing" element={<Navigate to="/" replace />} />
                <Route path="/business" element={<Navigate to="/" replace />} />
                <Route path="/buildyourwebsite" element={<Navigate to="/brand-boost" replace />} />
                <Route path="/about" element={<Navigate to="/" replace />} />
                <Route path="/login" element={<Navigate to="/auth" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
