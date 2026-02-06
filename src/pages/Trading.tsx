import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { LazyCalendly } from '@/components/LazyCalendly';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { Calendar, Youtube, ArrowRight, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TradingBackground } from '@/components/TradingBackground';
import { StackFinderPromo } from '@/components/StackFinderPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { motion } from 'framer-motion';

// New modular trading components
import { TradingHero, TradingStackmodePromo, TradingFeatures, TradingCTASection, TradingAuditCTA, StackmodePerformanceChart } from '@/components/trading';
const Index = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth">
      <MainHeader />
      <TradingBackground />
      <FreeResourcesCTA variant="banner" />

      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-16 left-0 right-0 z-35 md:hidden transition-all duration-300 pointer-events-none ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-lg border-b border-primary/20 shadow-lg pointer-events-auto">
          <div className="px-4 py-2.5 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground/80">Ready to profit?</span>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-background font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md shadow-primary/20 flex-shrink-0">
              Join Academy →
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stackmode Academy Button */}
      <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 group transition-all duration-500 ${showStickyHeader ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
          <div className="relative flex items-center gap-2 bg-gradient-to-r from-primary to-emerald-400 hover:from-emerald-400 hover:to-primary text-background font-bold px-5 py-3 rounded-full shadow-xl shadow-primary/30 transition-all group-hover:scale-105">
            <Users size={18} />
            <span className="text-sm whitespace-nowrap">$50/mo - 75% OFF</span>
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
        </div>
      </a>

      {/* Main Content */}
      <section id="home" className="relative z-10">

        {/* HERO - The Hook */}
        <TradingHero />

        {/* StackFinder AI Tool - Under Hero, Compact */}
        <section className="max-w-4xl mx-auto mb-6 px-4">
          <StackFinderPromo variant="trading" />
        </section>

        {/* STACKMODE ACADEMY PROMO - Primary CTA */}
        <TradingStackmodePromo />

        {/* Performance Comparison Chart */}
        <section className="max-w-4xl mx-auto mb-6 px-4">
          <StackmodePerformanceChart />
        </section>

        {/* FREE 1-on-1 Trading Audit CTA */}
        <TradingAuditCTA />

        {/* FEATURES GRID */}
        <TradingFeatures />

        {/* Divider */}
        <div className="max-w-2xl mx-auto my-6 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Free Resources - Compact Link */}
        <section className="py-6 px-4">
          <Link to="/library" className="block max-w-4xl mx-auto group">
            <div className="bg-gradient-to-r from-primary/10 via-card to-primary/5 border border-primary/30 hover:border-primary/50 rounded-xl p-4 flex items-center justify-between gap-4 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Gift size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Free Trading Resources</h3>
                  <p className="text-xs text-muted-foreground">Guides, eBooks & video lessons</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </section>

        {/* SOCIAL PROOF - Compact */}
        <section id="results" className="mb-6 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
            Proven Results from <span className="text-primary">Real Traders</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-4">See what our community has achieved</p>
        </section>

        {/* Reviews Carousel */}
        <div className="mb-8 px-4">
          <ReviewsBackgroundCarousel />
        </div>

        {/* Calendly Widget - Reduced height on mobile */}
        <section className="mb-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                Book Your <span className="text-primary">Free Strategy Call</span>
              </h2>
              <p className="text-sm text-muted-foreground">Pick a time that works for you</p>
            </div>
            <div className="relative">
              <LazyCalendly url="https://calendly.com/stackmodechris/architecture?background_color=0a0b0d&text_color=ffffff&primary_color=22c55e" height={500} />
            </div>
          </div>
        </section>

        {/* YouTube Video - Compact */}
        <section className="mb-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 text-center">
              Watch: <span className="text-primary">$100 Profit in 15 Minutes</span>
            </h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-primary/50" 
                src="https://www.youtube.com/embed/Ay6AYak6sXE" 
                title="How I Made $100 in 15 Minutes" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                loading="lazy" 
              />
            </div>
          </div>
        </section>

        {/* FAQ Section - Compact */}
        <section className="mb-10 px-4">
          <div id="faq" className="max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="bg-card/50 border border-primary/20 rounded-lg px-3 overflow-hidden">
                <AccordionTrigger className="text-left text-sm text-foreground hover:text-primary hover:no-underline py-3">
                  What happens on the free strategy call?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3">
                  We review your trading situation, identify what's holding you back, and create a personalized roadmap. No pressure, no sales pitch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card/50 border border-primary/20 rounded-lg px-3 overflow-hidden">
                <AccordionTrigger className="text-left text-sm text-foreground hover:text-primary hover:no-underline py-3">
                  Do I need trading experience?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3">
                  Not at all! The mentorship is tailored to YOUR level, from complete beginner to advanced.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card/50 border border-primary/20 rounded-lg px-3 overflow-hidden">
                <AccordionTrigger className="text-left text-sm text-foreground hover:text-primary hover:no-underline py-3">
                  Mentorship vs Stackmode Academy?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3">
                  <strong className="text-foreground">Academy ($50/mo):</strong> Real-time trades, AI tools, courses. <strong className="text-foreground">Mentorship:</strong> Deep 1-on-1 coaching to become independent.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card/50 border border-primary/20 rounded-lg px-3 overflow-hidden">
                <AccordionTrigger className="text-left text-sm text-foreground hover:text-primary hover:no-underline py-3">
                  How much capital do I need?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-3">
                  Start with $100-500. Many students use prop firms to trade larger capital without personal risk.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-4">
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <a href="https://calendly.com/stackmodechris/architecture" target="_blank" rel="noopener noreferrer">
                  Book Your Free Call →
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section - Compact */}
        <section className="mb-8 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card/50 border border-primary/30 rounded-xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-primary/40">
                    <img src="/images/stackmodechris-about-new.png" alt="Stackmodechris" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <Link to="/about" className="group">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      About Stackmodechris
                    </h3>
                  </Link>
                  <p className="text-xs text-primary font-medium mb-1">Trading Mentor & Founder</p>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    Helping everyday people achieve financial freedom through stocks, options, futures, forex, and crypto.
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <a href="https://calendly.com/stackmodechris/architecture" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-primary/10 hover:bg-primary/20 text-primary px-2.5 py-1 rounded text-xs font-medium transition-colors">
                      <Calendar className="w-3 h-3" />
                      Free Call
                    </a>
                    <a href="https://www.youtube.com/@stackmodetrading" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-foreground/10 hover:bg-foreground/20 text-foreground px-2.5 py-1 rounded text-xs font-medium transition-colors">
                      <Youtube size={12} />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Credibility Section - More compact */}
        <BooksCredibilityPromo variant="compact" showHeading={false} className="mb-8" />

        {/* Universal Bottom CTA */}
        <UniversalPageBottom showBooks={false} />

      </section>

      <MainFooter />

      <div className="h-20 md:hidden" />
    </main>;
};
export default Index;