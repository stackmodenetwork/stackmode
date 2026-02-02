import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { LazyCalendly } from '@/components/LazyCalendly';
import { OptimizedVideo } from '@/components/OptimizedVideo';
import { CookieConsent } from '@/components/CookieConsent';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { MainHeader } from '@/components/MainHeader';
import { Check, Users, HelpCircle, Calendar, BookOpen, PlayCircle, Youtube, ArrowRight } from 'lucide-react';
import { ConnectWithMe } from '@/components/ConnectWithMe';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TradingBackground } from '@/components/TradingBackground';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StackFinderPromo } from '@/components/StackFinderPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { motion } from 'framer-motion';

// New modular trading components
import { TradingHero, TradingStackmodePromo, TradingFeatures, TradingCTASection, TradingAuditCTA } from '@/components/trading';

const Index = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth">
      <MainHeader />
      <TradingBackground />
      <FreeResourcesCTA variant="banner" />

      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-16 left-0 right-0 z-35 md:hidden transition-all duration-300 pointer-events-none ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-lg border-b border-primary/20 shadow-lg pointer-events-auto">
          <div className="px-4 py-2.5 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground/80">Ready to profit?</span>
            <a href="https://whop.com/stackmode-network-llc" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-background font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md shadow-primary/20 flex-shrink-0">
              Join Network →
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stackmode Network Button */}
      <a
        href="https://whop.com/stackmode-network-llc"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 group transition-all duration-500 ${showStickyHeader ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}
      >
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

        {/* STACKMODE NETWORK PROMO - Primary CTA (First as requested) */}
        <TradingStackmodePromo />

        {/* StackFinder AI Tool Section - Right after Stackmode promo */}
        <section className="max-w-5xl mx-auto mb-8 px-4">
          <StackFinderPromo variant="trading" />
        </section>

        {/* FREE 1-on-1 Trading Audit CTA */}
        <TradingAuditCTA />


        {/* FEATURES GRID */}
        <TradingFeatures />

        {/* CTA OPTIONS - Mentorship vs Network */}
        <TradingCTASection />

        {/* Divider */}
        <div className="max-w-2xl mx-auto my-8 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Courses & Books Section */}
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Prefer Self-Paced Learning?</h3>
            <p className="text-sm text-muted-foreground">Master trading on your own schedule with our courses and eBooks</p>
          </div>
          
          <Link to="/library" className="block group">
            <div className="relative bg-gradient-to-r from-primary/5 via-card to-emerald-500/5 border border-primary/20 rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] group-hover:scale-[1.01]">
              <div className="absolute top-0 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl" />
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-br from-primary/20 to-emerald-900/30 rounded-xl border border-primary/30 flex flex-col items-center justify-center gap-2 shadow-lg">
                    <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    <span className="text-[10px] sm:text-xs text-primary font-medium">Courses</span>
                  </div>
                  <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-br from-primary/20 to-emerald-900/30 rounded-xl border border-primary/30 flex flex-col items-center justify-center gap-2 shadow-lg -ml-2 transform rotate-3">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    <span className="text-[10px] sm:text-xs text-primary font-medium">eBooks</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <span>Courses & Books</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Popular</span>
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">Learn proven strategies at your own pace with video courses and comprehensive trading guides</p>
                  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs sm:text-sm text-foreground/70">
                    <span className="flex items-center gap-1"><Check size={14} className="text-primary" /> Instant Access</span>
                    <span className="flex items-center gap-1"><Check size={14} className="text-primary" /> Lifetime Updates</span>
                    <span className="flex items-center gap-1"><Check size={14} className="text-primary" /> Beginner Friendly</span>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-primary to-emerald-500 hover:from-emerald-500 hover:to-primary text-background font-semibold text-sm sm:text-base px-5 py-3 rounded-lg text-center transition-all flex items-center gap-2 group-hover:gap-3 shadow-lg shadow-primary/20">
                    <span>Browse Library</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* SOCIAL PROOF */}
        <section id="results" className="mb-8 sm:mb-12 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Proven Results from <span className="text-primary">Real Traders</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">See what our community has achieved, Alhamdulillah</p>
          </motion.div>
        </section>

        {/* Featured Testimonial */}
        <AnimatedBlock delay={0.2} className="mb-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-gradient-to-br from-card via-card/80 to-card border-2 border-primary/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-6xl text-primary/20">!</div>
              <div className="relative z-10">
                <p className="text-lg sm:text-xl text-foreground/90 italic mb-4 leading-relaxed">"Everything you've taught me is literally bread and butter bro"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold">Verified Student</p>
                    <p className="text-muted-foreground text-sm">Stackmode Member</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-secondary">★</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Reviews Gallery */}
        <AnimatedBlock delay={0.3} className="mb-12">
          <ReviewsGallery />
        </AnimatedBlock>

        {/* Calendly Widget */}
        <AnimatedBlock delay={0.4} className="mb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Schedule Your <span className="text-primary">Free Strategy Call</span>
              </h2>
              <p className="text-muted-foreground">Pick a time that works for you</p>
            </div>
            <div className="relative">
              <LazyCalendly url="https://calendly.com/stackmodechris/tradingmastermindcoaching?background_color=0a0b0d&text_color=ffffff&primary_color=22c55e" height={650} />
            </div>
          </div>
        </AnimatedBlock>

        {/* YouTube Video */}
        <AnimatedBlock delay={0.5} className="mb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">Watch: <span className="text-primary">$100 Profit in 15 Minutes</span></h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-primary/50" src="https://www.youtube.com/embed/Ay6AYak6sXE" title="How I Made $100 in 15 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          </div>
        </AnimatedBlock>

        {/* FAQ Section */}
        <AnimatedBlock delay={0.6} className="mb-16">
          <div id="faq" className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
                <HelpCircle size={18} className="text-primary" />
                <span className="text-primary text-sm font-bold">FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">Everything you need to know before joining</p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  What happens on the free strategy call?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  On your free call, we will review your current trading situation, identify what is holding you back, and create a personalized roadmap to help you become profitable. No pressure, no sales pitch — just real value and guidance tailored to your goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  Do I need trading experience to join?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Not at all! I work with complete beginners to advanced traders. The mentorship is tailored to YOUR level. Whether you have never placed a trade or you have been trading for years, I will meet you where you are and help you level up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  What is the difference between mentorship and the Stackmode Network?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <strong className="text-foreground">Stackmode Network ($50/month):</strong> You receive my exact trade entries, stop losses, and take profits in real-time, plus AI trading tools and a library of courses. Great for copying my trades while you learn.<br /><br />
                  <strong className="text-foreground">Mentorship:</strong> Deep 1-on-1 coaching where I teach you the WHY behind every trade. You will learn to find your own setups and become an independent, profitable trader.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  How much capital do I need to start trading?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  You can start with as little as $100-500. I will teach you proper risk management so you can grow your account safely. Many of my students also use prop firms to trade with larger capital without risking their own money.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  How long until I see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Results vary based on your dedication and time invested. Most students start seeing improvements within 4-8 weeks of consistent practice. Some have become consistently profitable within 2-3 months. The key is following the process and staying disciplined.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Still have questions? Let us chat on your free call!</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4">
                <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
                  Book Your Free Call →
                </a>
              </Button>
            </div>
          </div>
        </AnimatedBlock>

        {/* About Section */}
        <AnimatedBlock delay={0.7} className="mb-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-primary/30 rounded-2xl p-6 md:p-10 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/40 shadow-lg shadow-primary/20">
                    <img src="/images/stackmodechris-about-new.png" alt="Stackmodechris - Trading Mentor" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <Link to="/about" className="group">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      About Stackmodechris
                    </h2>
                  </Link>
                  <p className="text-primary font-medium mb-4">Trading Mentor & Founder of Stackmode Network</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Christopher Robinson, known online as Stackmodechris, is a passionate trader and mentor dedicated to helping everyday people achieve financial freedom through the markets. With expertise spanning stocks, options, futures, forex, and crypto, Stackmodechris has built a thriving community of traders who learn to read price action and execute high-probability setups.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors" href="https://calendly.com/stackmodechris/tradingmastermindcoaching">
                      <Calendar className="w-4 h-4" />
                      Speak With Me For FREE
                    </a>
                    <a href="https://www.youtube.com/@stackmodetrading" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Youtube size={16} />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Books Credibility Section */}
        <BooksCredibilityPromo variant="compact" showHeading={true} className="mb-12" />

        {/* Bottom CTA */}
        <section className="py-12 px-4 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to <span className="text-primary">Stop Gambling</span> and Start Trading?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join the Stackmode Network today and get access to live trades, AI tools, and constantly-updated education.
              </p>
              <motion.a
                href="https://whop.com/stackmode-network-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-emerald-400 hover:from-emerald-400 hover:to-primary text-background font-bold text-lg px-10 py-5 rounded-xl shadow-xl shadow-primary/30 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Users size={22} />
                <span>Join Stackmode Network — $50/mo</span>
                <ArrowRight size={22} />
              </motion.a>
              <p className="text-xs text-muted-foreground mt-4">75% OFF • Cancel anytime • Instant access</p>
            </motion.div>
          </div>
        </section>

        {/* Social Connect */}
        <ScrollReveal delay={0.2}>
          <ConnectWithMe />
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 pt-8 pb-28 md:pb-12">
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Stackmode Network LLC. All rights reserved.
            </p>
            <SocialShareButtons title="Learn How To Trade Profitably with Stackmodechris" />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
            <Link to="/dmca-policy" className="hover:text-foreground transition-colors">DMCA Policy</Link>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </main>
  );
};

export default Index;
