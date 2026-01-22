import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { CookieConsent } from '@/components/CookieConsent';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { MainHeader } from '@/components/MainHeader';
import { Briefcase, Check, Rocket, Target, Users, DollarSign, Lightbulb, Megaphone, Globe, Phone, Calendar, Youtube, Instagram, Linkedin, Facebook, PlayCircle, BookOpen, X, ChevronLeft, ChevronRight, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from '@/components/ui/dialog';
const businessProofImages = [
  { src: "business-proof-1.png", alt: "Watch page ads revenue" },
  { src: "business-proof-3.png", alt: "Ad results and leads" },
  { src: "business-proof-4.png", alt: "YouTube impressions" },
  { src: "business-proof-5.png", alt: "Facebook ad activity" },
  { src: "business-proof-7.png", alt: "Content performance" },
  { src: "business-proof-8.png", alt: "Net revenue stats" },
  { src: "business-proof-11.png", alt: "Gross volume" },
  { src: "business-proof-12.png", alt: "Estimated revenue" },
  { src: "business-proof-13.png", alt: "Lifetime views" },
  { src: "business-proof-14.png", alt: "Views from shorts" },
  { src: "business-proof-18.png", alt: "Balance deposits" },
];

const Business = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isLightboxOpen = selectedIndex !== null;

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % businessProofImages.length);
    }
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + businessProofImages.length) % businessProofImages.length);
    }
  }, [selectedIndex]);

  const handleCloseLightbox = () => setSelectedIndex(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goNext, goPrev]);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth animate-page-load">
      <MainHeader />

      {/* Phone Call CTA Banner */}
      <div className="bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 border-y border-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <a href="tel:6787758532" className="flex items-center justify-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30" />
              <div className="relative bg-accent/20 border border-accent/50 rounded-full p-2 group-hover:bg-accent/30 transition-colors">
                <Phone size={18} className="text-accent" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-foreground font-semibold text-sm sm:text-base">
                Ready to Scale? Call Now: <span className="text-accent">(678) 775-8532</span>
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-16 left-0 right-0 z-35 md:hidden transition-all duration-300 pointer-events-none ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-lg border-b border-accent/20 shadow-lg pointer-events-auto">
          <div className="px-4 py-2.5 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground/80">Ready to grow?</span>
            <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-background font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md shadow-accent/20 flex-shrink-0">
              Book FREE Call →
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <header className="text-center mb-8 sm:mb-12 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4 animate-pulse">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
            <span className="text-accent text-sm font-semibold">Business Education Hub</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Build Your <span className="text-accent">Empire</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Learn how to start, grow, and scale a profitable online business. From idea to execution — we'll guide you every step of the way.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-accent">
              <Check size={18} className="text-accent" />
              <span>1-on-1 Consulting</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Check size={18} className="text-accent" />
              <span>Proven Strategies</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Check size={18} className="text-accent" />
              <span>Real Results</span>
            </div>
          </div>
        </header>

        {/* Proof/Reviews Section */}
        <section className="max-w-7xl mx-auto mb-12 px-2">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-3">
              <Check size={16} className="text-accent" />
              <span className="text-accent text-sm font-semibold">Real Results</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Verified Success</h2>
          </div>
          
          {/* Masonry Layout - No Dead Space */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3">
            {businessProofImages.map((proof, index) => (
              <div 
                key={proof.src}
                onClick={() => setSelectedIndex(index)}
                className="break-inside-avoid mb-2 sm:mb-3 bg-card/30 border-2 border-accent/60 rounded-lg overflow-hidden hover:border-accent hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              >
                <img 
                  src={`/lovable-uploads/${proof.src}`} 
                  alt={proof.alt} 
                  className="w-full h-auto block" 
                  loading={index < 6 ? "eager" : "lazy"} 
                />
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-muted-foreground">Multiple Success Stories</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-muted-foreground">Increased Customer Revenue</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Verified Results</span>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={isLightboxOpen} onOpenChange={open => !open && handleCloseLightbox()}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-accent/20 overflow-hidden">
            {selectedIndex !== null && (
              <div className="relative flex items-center justify-center min-h-[50vh]">
                {/* Close Button */}
                <button onClick={handleCloseLightbox} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Previous Button */}
                <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110">
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>

                {/* Image */}
                <img 
                  src={`/lovable-uploads/${businessProofImages[selectedIndex].src}`} 
                  alt={businessProofImages[selectedIndex].alt} 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg" 
                />

                {/* Next Button */}
                <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110">
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 border border-border/50 text-sm text-muted-foreground">
                  {selectedIndex + 1} / {businessProofImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-8">What You'll Learn</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Digital Marketing */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Megaphone size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground text-sm">Master social media, content creation, and paid advertising to attract customers.</p>
            </div>

            {/* Sales Funnels */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sales Funnels</h3>
              <p className="text-muted-foreground text-sm">Build high-converting funnels that turn visitors into paying customers.</p>
            </div>

            {/* Brand Building */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Brand Building</h3>
              <p className="text-muted-foreground text-sm">Create a memorable brand that stands out and builds trust with your audience.</p>
            </div>

            {/* Online Business */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Globe size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Online Business</h3>
              <p className="text-muted-foreground text-sm">Launch and scale e-commerce, coaching, or service-based businesses.</p>
            </div>

            {/* Revenue Streams */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <DollarSign size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Multiple Income Streams</h3>
              <p className="text-muted-foreground text-sm">Diversify your income with affiliate marketing, digital products, and more.</p>
            </div>

            {/* Community Building */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Building</h3>
              <p className="text-muted-foreground text-sm">Build a loyal audience and community around your brand.</p>
            </div>
          </div>
        </section>

        {/* Main CTA */}
        <section className="max-w-3xl mx-auto mb-12">
          <a 
            href="https://calendly.com/stackmodechris/businessconsulting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/50 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] group-hover:scale-[1.02]">
              <div className="absolute top-0 left-4 -translate-y-1/2 z-20">
                <div className="bg-accent text-background text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                  Free Strategy Session
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Rocket size={28} className="text-accent" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">1-on-1 Business Consulting</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-xl mx-auto">
                  Get personalized guidance on starting or scaling your business. Let's create a custom roadmap for your success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    <span>Custom business strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    <span>Marketing & sales advice</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    <span>No obligation</span>
                  </div>
                </div>
                
                <div className="bg-accent hover:bg-accent/90 text-background font-semibold text-base sm:text-lg px-8 py-4 rounded-lg inline-block transition-colors">
                  Book Your Free Call →
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Self-Paced Learning Section */}
        <section className="max-w-3xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Prefer Self-Paced Learning?</h3>
            <p className="text-sm text-muted-foreground">Master business growth on your own schedule with our courses and eBooks</p>
          </div>
          
          <Link to="/library" className="block group">
            <div className="relative bg-gradient-to-r from-orange-950/60 via-card to-orange-950/60 border border-orange-500/20 rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group-hover:scale-[1.01]">
              {/* Background glow effects */}
              <div className="absolute top-0 left-1/4 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-orange-400/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5">
                {/* Cards Preview */}
                <div className="flex items-center gap-3">
                  {/* Video Course Card */}
                  <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-br from-orange-600/20 to-orange-900/30 rounded-xl border border-orange-500/30 flex flex-col items-center justify-center gap-2 shadow-lg">
                    <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                    <span className="text-[10px] sm:text-xs text-orange-300 font-medium">Courses</span>
                  </div>
                  
                  {/* Book Card */}
                  <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-br from-orange-600/20 to-orange-900/30 rounded-xl border border-orange-500/30 flex flex-col items-center justify-center gap-2 shadow-lg -ml-2 transform rotate-3">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                    <span className="text-[10px] sm:text-xs text-orange-300 font-medium">eBooks</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <span>Courses & Books</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">Popular</span>
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">Learn proven business strategies at your own pace with video courses and comprehensive guides</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs sm:text-sm text-foreground/70">
                    <span className="flex items-center gap-1"><Check size={14} className="text-orange-400" /> Instant Access</span>
                    <span className="flex items-center gap-1"><Check size={14} className="text-orange-400" /> Lifetime Updates</span>
                    <span className="flex items-center gap-1"><Check size={14} className="text-orange-400" /> Beginner Friendly</span>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-lg text-center transition-all flex items-center gap-2 group-hover:gap-3 shadow-lg shadow-orange-500/20">
                    <span>Browse Library</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* FAQ Section */}
        <AnimatedBlock delay={0.3} className="mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-card/50 border border-accent/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-4">
                  What kind of businesses can you help with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  I help with a wide range of online businesses including e-commerce, coaching/consulting, content creation, affiliate marketing, and service-based businesses. Whether you're starting from scratch or looking to scale, I can help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card/50 border border-accent/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-4">
                  Do I need experience to get started?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Not at all! I work with complete beginners to experienced entrepreneurs. The consulting is tailored to YOUR level and goals. I'll meet you where you are and help you build from there.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card/50 border border-accent/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-4">
                  How much capital do I need to start?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Many online businesses can be started with minimal investment. During our call, we'll discuss your budget and find the best approach for your situation. Some strategies require almost no upfront cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card/50 border border-accent/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-4">
                  What happens on the free consultation call?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We'll discuss your business goals, current situation, and challenges. I'll provide actionable advice and outline a roadmap for your success. It's a no-pressure conversation to see if we're a good fit to work together.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Button asChild className="bg-accent hover:bg-accent/90 text-background font-bold px-8 py-4">
                <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer">
                  Book Your Free Call →
                </a>
              </Button>
            </div>
          </div>
        </AnimatedBlock>

        {/* About Section */}
        <AnimatedBlock delay={0.4} className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/30 rounded-2xl p-6 md:p-10 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-accent/40 shadow-lg shadow-accent/20">
                    <img src="/images/stackmodechris-about-new.png" alt="Stackmodechris - Business Mentor" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    About Stackmodechris
                  </h2>
                  <p className="text-accent font-medium mb-4">Business Strategist & Founder of Stackmode Network</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond trading, I'm passionate about helping entrepreneurs build and scale their businesses. With experience in digital marketing, content creation, and brand building, I've helped clients create multiple streams of income.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors" href="https://calendly.com/stackmodechris/businessconsulting">
                      <Calendar className="w-4 h-4" />
                      Book Free Consultation
                    </a>
                    <Link to="/trading" className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Briefcase size={16} />
                      View Trading Education
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Social Share */}
        <AnimatedBlock delay={0.5} className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-6">
              Ready to Build Your Business Empire? Let's Make It Happen.
            </p>
            <SocialShareButtons className="justify-center" />
          </div>
        </AnimatedBlock>

        {/* Final CTA */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-background font-bold text-base md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-lg w-full transform hover:scale-105 transition-all shadow-2xl">
            <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer">
              🚀 BOOK YOUR FREE BUSINESS CONSULTATION
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-mono">⚡ Limited Slots Available - Don't Miss Out</p>
        </div>

        {/* Social Links */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Connect With Me
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a href="https://www.youtube.com/@stackmodechris" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-card/50 border border-border hover:border-red-500/50 rounded-xl p-5 transition-all hover:bg-card/80 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <Youtube size={24} className="text-red-500" />
              </div>
              <span className="text-foreground font-medium text-sm">YouTube</span>
            </a>
            
            <a href="https://www.instagram.com/stackmodechris_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-card/50 border border-border hover:border-pink-500/50 rounded-xl p-5 transition-all hover:bg-card/80 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <Instagram size={24} className="text-pink-500" />
              </div>
              <span className="text-foreground font-medium text-sm">Instagram</span>
            </a>
            
            <a href="https://www.linkedin.com/in/christopher-robinson-119a01234/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-card/50 border border-border hover:border-blue-500/50 rounded-xl p-5 transition-all hover:bg-card/80 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Linkedin size={24} className="text-blue-500" />
              </div>
              <span className="text-foreground font-medium text-sm">LinkedIn</span>
            </a>
            
            <a href="https://www.facebook.com/share/17cn4N587n/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-card/50 border border-border hover:border-blue-600/50 rounded-xl p-5 transition-all hover:bg-card/80 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <Facebook size={24} className="text-blue-600" />
              </div>
              <span className="text-foreground font-medium text-sm">Facebook</span>
            </a>
          </div>
        </div>

        <div className="h-8 md:h-12"></div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
              Terms & Conditions
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="/dmca" className="text-muted-foreground hover:text-accent transition-colors">
              DMCA Policy
            </a>
          </div>
          
          <div className="border border-border rounded-lg p-4 bg-muted/20">
            <h4 className="text-xs text-muted-foreground mb-2">Earnings Disclaimer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Business success involves substantial effort and risk. Past results are not indicative of future performance. 
              The information provided is for educational purposes only. Individual results will vary based on effort, market conditions, and other factors.
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2026 Stackmode Network LLC. All Rights Reserved.
          </p>
        </div>
      </footer>
      
      <div className="h-28 md:hidden" />
      <CookieConsent />
    </main>
  );
};

export default Business;
