import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { CookieConsent } from '@/components/CookieConsent';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { DualCallCTA } from '@/components/DualCallCTA';
import { TrustpilotWidget } from '@/components/TrustpilotWidget';
import { Briefcase, Check, Rocket, Target, Users, DollarSign, Lightbulb, Megaphone, Globe, Calendar, PlayCircle, BookOpen, X, ChevronLeft, ChevronRight, Star, Shield, Gift, ArrowRight, TrendingUp, Youtube, Zap, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BusinessBackground } from '@/components/BusinessBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { motion } from 'framer-motion';
const businessProofImages = [{
  src: "business-proof-1.png",
  alt: "Watch page ads revenue"
}, {
  src: "business-proof-3.png",
  alt: "Ad results and leads"
}, {
  src: "business-proof-4.png",
  alt: "YouTube impressions"
}, {
  src: "business-proof-5.png",
  alt: "Facebook ad activity"
}, {
  src: "business-proof-7.png",
  alt: "Content performance"
}, {
  src: "business-proof-8.png",
  alt: "Net revenue stats"
}, {
  src: "business-proof-11.png",
  alt: "Gross volume"
}, {
  src: "business-proof-12.png",
  alt: "Estimated revenue"
}, {
  src: "business-proof-13.png",
  alt: "Lifetime views"
}, {
  src: "business-proof-14.png",
  alt: "Views from shorts"
}, {
  src: "business-proof-18.png",
  alt: "Balance deposits"
}];
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
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
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
  return <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth">
        <MainHeader />
        
        {/* Dynamic Business Background */}
        <BusinessBackground variant="purple" />

        {/* Free Resources Banner */}
        <FreeResourcesCTA variant="banner" />

      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-16 left-0 right-0 z-35 md:hidden transition-all duration-300 pointer-events-none ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-lg border-b border-purple-500/20 shadow-lg pointer-events-auto">
          <div className="px-4 py-2.5 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground/80">Ready to grow?</span>
            <a href="https://whop.com/stackmode-network-llc" target="_blank" rel="noopener noreferrer" className="bg-purple-500 hover:bg-purple-500/90 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md shadow-purple-500/20 flex-shrink-0">
              Join Network →
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <header className="text-center mb-8 sm:mb-10 max-w-5xl mx-auto">
          <motion.div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
            <span className="text-purple-400 text-sm font-semibold">Business Education Hub</span>
          </motion.div>
          
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            Build Your <motion.span className="text-purple-400 inline-block" animate={{
            textShadow: ['0 0 0px rgb(168, 85, 247)', '0 0 20px rgb(168, 85, 247)', '0 0 0px rgb(168, 85, 247)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>Empire</motion.span>
          </motion.h1>
          
          <motion.p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }}>
            Stop grinding. Start building. Learn the exact systems I use to generate multiple income streams — from YouTube monetization to AI-powered business models.
          </motion.p>

          {/* Value Props */}
          <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }}>
            <div className="flex items-center gap-2 text-purple-400">
              <Check size={18} className="text-purple-400" />
              <span>AI-Powered Training</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Check size={18} className="text-purple-400" />
              <span>Always Updated</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Check size={18} className="text-purple-400" />
              <span>Real Results</span>
            </div>
          </motion.div>
        </header>

        {/* ========== STACKMODE NETWORK - TOP PRIORITY ========== */}
        <section className="max-w-5xl mx-auto mb-10 px-4">
          <ScrollReveal>
            <div className="text-center mb-6">
              <motion.div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 mb-3" animate={{
              scale: [1, 1.02, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                <Sparkles size={16} />
                Most Popular Choice
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Everything You Need in <span className="text-purple-400">One Place</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Why buy outdated courses when you can get constantly updated business training, AI tools, and a community for just $50/month?
              </p>
            </div>
            <StackmodeGroupPromo variant="business" />
          </ScrollReveal>
        </section>

        {/* ========== FREE CONSULTATION CTA ========== */}
        <section className="max-w-3xl mx-auto mb-10 px-4">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="inline-block bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Prefer 1-on-1 Guidance?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Let's Build Your Roadmap Together
              </h3>
            </div>
            <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer" className="block group">
              <motion.div className="relative bg-gradient-to-br from-card/80 via-card/60 to-purple-500/10 border-2 border-purple-500/30 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] group-hover:scale-[1.02]" whileHover={{
              scale: 1.01
            }}>
                <div className="absolute top-0 left-4 -translate-y-1/2 z-20">
                  <motion.div className="bg-purple-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap" animate={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    100% FREE — No Obligation
                  </motion.div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center pt-2">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Phone size={24} className="text-purple-400" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground">Free Business Strategy Call</h4>
                      <p className="text-sm text-muted-foreground">30-min personalized consultation</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-xl mx-auto">
                    Not sure where to start? Let's talk about your goals. I'll help you create a custom roadmap — whether you join the network or not.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span>Custom business strategy</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span>Marketing & growth advice</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span>Zero pressure</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-500/90 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-purple-500/25">
                    <Calendar size={20} />
                    <span>Book Your Free Call</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </a>
          </ScrollReveal>
        </section>

        {/* ========== REVIEWS/PROOF SECTION ========== */}
        <section className="max-w-7xl mx-auto mb-10 px-2">
          <ScrollReveal>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-3">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-purple-400 text-sm font-semibold">Real Results</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Verified Success From Our Community</h2>
            </div>
          </ScrollReveal>
          
          {/* Masonry Layout */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3">
            {businessProofImages.map((proof, index) => <div key={proof.src} onClick={() => setSelectedIndex(index)} className="break-inside-avoid mb-2 sm:mb-3 bg-card/30 border-2 border-purple-500/40 rounded-lg overflow-hidden hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer hover:scale-[1.02]">
                <img src={`/lovable-uploads/${proof.src}`} alt={proof.alt} className="w-full h-auto block" loading={index < 6 ? "eager" : "lazy"} />
              </div>)}
          </div>

          {/* Trust Badge */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-muted-foreground">Multiple Success Stories</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-muted-foreground">Increased Revenue</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-muted-foreground">Verified Results</span>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={isLightboxOpen} onOpenChange={open => !open && handleCloseLightbox()}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-purple-500/20 overflow-hidden">
            {selectedIndex !== null && <div className="relative flex items-center justify-center min-h-[50vh]">
                <button onClick={handleCloseLightbox} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110">
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <img src={`/lovable-uploads/${businessProofImages[selectedIndex].src}`} alt={businessProofImages[selectedIndex].alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
                <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110">
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 border border-border/50 text-sm text-muted-foreground">
                  {selectedIndex + 1} / {businessProofImages.length}
                </div>
              </div>}
          </DialogContent>
        </Dialog>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto mb-10">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-6">What You'll Learn Inside</h2>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.1}>
            {[{
            icon: Megaphone,
            title: 'Digital Marketing',
            desc: 'Master social media, content creation, and paid advertising to attract customers.'
          }, {
            icon: Target,
            title: 'Sales Funnels',
            desc: 'Build high-converting funnels that turn visitors into paying customers.'
          }, {
            icon: Lightbulb,
            title: 'Brand Building',
            desc: 'Create a memorable brand that stands out and builds trust with your audience.'
          }, {
            icon: Globe,
            title: 'Online Business',
            desc: 'Launch and scale e-commerce, coaching, or service-based businesses.'
          }, {
            icon: DollarSign,
            title: 'Multiple Income Streams',
            desc: 'Diversify your income with affiliate marketing, digital products, and more.'
          }, {
            icon: Users,
            title: 'Community Building',
            desc: 'Build a loyal audience and community around your brand.'
          }].map((item, i) => <StaggerItem key={i}>
                <motion.div className="bg-card/50 border border-border rounded-2xl p-6 hover:border-purple-500/50 transition-all h-full" whileHover={{
              y: -5,
              boxShadow: '0 10px 40px rgba(168,85,247,0.15)'
            }}>
                  <motion.div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4" whileHover={{
                scale: 1.1,
                rotate: 5
              }}>
                    <item.icon size={24} className="text-purple-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>)}
          </StaggerContainer>
        </section>

        {/* Self-Paced Learning Section */}
        

        {/* FAQ Section */}
        <AnimatedBlock delay={0.3} className="mb-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-card/50 border border-purple-500/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-purple-400 hover:no-underline py-4">
                  What kind of businesses can you help with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  I help with a wide range of online businesses including e-commerce, coaching/consulting, content creation, affiliate marketing, and service-based businesses. Whether you're starting from scratch or looking to scale, I can help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card/50 border border-purple-500/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-purple-400 hover:no-underline py-4">
                  Do I need experience to get started?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Not at all! I work with complete beginners to experienced entrepreneurs. The training is tailored to YOUR level and goals. I'll meet you where you are and help you build from there.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card/50 border border-purple-500/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-purple-400 hover:no-underline py-4">
                  What's included in the Stackmode Network?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  The network includes all our business courses, AI tools training, YouTube monetization strategies, social media growth systems, live coaching calls, and a private community — all for $50/month. Cancel anytime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card/50 border border-purple-500/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-purple-400 hover:no-underline py-4">
                  What happens on the free consultation call?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We'll discuss your business goals, current situation, and challenges. I'll provide actionable advice and outline a roadmap for your success. It's a no-pressure conversation to see if we're a good fit to work together.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AnimatedBlock>

        {/* Reviews Gallery */}
        <ReviewsGallery />
      </section>

      {/* ========== FOOTER SECTIONS ========== */}
      
      {/* Books Credibility Section */}
      <BooksCredibilityPromo variant="compact" showHeading={true} className="py-8" />

      {/* Free Resources Section */}
      <section className="py-8 px-4 bg-muted/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Link to="/library" className="block group">
            <motion.div className="bg-gradient-to-br from-background/95 via-background/90 to-purple-500/10 border-2 border-border/50 hover:border-purple-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]" whileHover={{
            scale: 1.01
          }}>
              <div className="text-center">
                <span className="inline-block bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Free Resources
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                  Start Learning for Free
                </h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                  Access free business guides, trading strategies, and educational content in our resource library
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[{
                  icon: TrendingUp,
                  title: 'Trading Guides',
                  desc: 'Free strategies'
                }, {
                  icon: Briefcase,
                  title: 'Business Tips',
                  desc: 'Growth tactics'
                }, {
                  icon: BookOpen,
                  title: 'eBooks',
                  desc: 'Deep dives'
                }, {
                  icon: Youtube,
                  title: 'Video Lessons',
                  desc: 'Visual learning'
                }].map((item, i) => <div key={i} className="bg-background rounded-xl p-4 border border-border/50 text-center group-hover:border-purple-500/30 transition-all duration-300 h-full">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>)}
                </div>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:from-purple-400 group-hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg group-hover:shadow-purple-500/30">
                  <Gift size={18} />
                  <span>Get FREE Resources Here</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Dual Call CTA */}
      <DualCallCTA />

      {/* Trustpilot Widget */}
      <section className="py-6 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <TrustpilotWidget />
        </div>
      </section>

      <MainFooter />
      <div className="h-28 md:hidden" />
      <CookieConsent />
      </main>;
};
export default Business;