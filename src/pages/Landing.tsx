import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';

import SplitHero from '@/components/landing/SplitHero';
import CustomCursor from '@/components/landing/CustomCursor';

const AcademySection = lazy(() => import('@/components/landing/AcademySection'));
const BrandBoostSection = lazy(() => import('@/components/landing/BrandBoostSection'));
const WebDesignSection = lazy(() => import('@/components/landing/WebDesignSection'));
const DigitalCardsSection = lazy(() => import('@/components/landing/DigitalCardsSection'));
const LandingFooter = lazy(() => import('@/components/landing/LandingFooter'));

const Landing = () => (
  <div className="relative" style={{ background: '#030305' }}>
    <Helmet>
      <title>Stackmode | Choose Your Path | Christopher Robinson</title>
      <meta name="description" content="Stackmode by Christopher Robinson (StackmodeChris) — Choose your path: Stackmode Academy for AI software & trading, or CEO Turbo for website design & brand growth." />
      <link rel="canonical" href="https://stackmode.net/" />
    </Helmet>

    <CustomCursor />

    {/* Scanline overlay */}
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.02]"
      style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)' }} />

    <SplitHero />

    <Suspense fallback={null}>
      <AcademySection />
      <BrandBoostSection />
      <WebDesignSection />
      <DigitalCardsSection />
      <LandingFooter />
    </Suspense>
  </div>
);

export default Landing;
