import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, ArrowLeft, Gift, Star, HelpCircle, ShoppingCart, Check, Lock, ArrowRight, Shield, Zap, Sparkles, Phone, Briefcase, DollarSign, Youtube, Megaphone, Target, TrendingDown, BarChart3, Play, Download, Users, Headphones, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TradingBackground } from '@/components/TradingBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { motion } from 'framer-motion';

// Free Resources
const freeResource = {
  id: 4,
  title: "The Key Steps To Profitability",
  excerpt: "The complete roadmap covering both trading AND business fundamentals. Learn risk management, strategy development, business scaling basics, and consistent execution for success in any market.",
  category: "Trading & Business Fundamentals",
  icon: GraduationCap,
  courseLink: "https://stackmodechris.systeme.io/freecourse",
  ebookLink: "https://stackmodechris.systeme.io/freebook"
};

const Learn = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <main className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Trading & Business Courses | Learn Stock Trading & Scale Your Business | StackmodeChris</title>
        <meta name="description" content="Master stock trading and grow your business with StackmodeChris's proven courses and eBooks. Trading strategies and business scaling systems that work." />
        <meta name="keywords" content="trading course, stock trading course, business course, youtube monetization, facebook ads course, scaling business, trading eBook, StackmodeChris course" />
        <link rel="canonical" href="https://stackmode.net/library" />
        
        <meta property="og:title" content="Trading & Business Courses | StackmodeChris" />
        <meta property="og:description" content="Master stock trading and scale your business with proven courses." />
        <meta property="og:url" content="https://stackmode.net/library" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trading & Business Courses | StackmodeChris" />
        <meta name="twitter:description" content="Master trading and business with proven courses." />

        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "StackmodeChris Courses",
          "description": "Premium trading and business education courses",
          "itemListElement": [{
            "@type": "Course",
            "position": 1,
            "name": "Stackmode Network Membership",
            "description": "Complete trading and business education with live signals and AI tools",
            "provider": {
              "@type": "Organization",
              "name": "Stackmode Network LLC"
            },
            "offers": {
              "@type": "Offer",
              "price": "50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }, {
            "@type": "Course",
            "position": 2,
            "name": "The Key Steps To Profitability",
            "description": "Free trading course covering fundamentals and strategy development",
            "provider": {
              "@type": "Organization",
              "name": "Stackmode Network LLC"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }]
        })}
        </script>
      </Helmet>

      <MainHeader />

      {/* ==================== ANIMATED HERO SECTION ==================== */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <TradingBackground />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30"
            >
              <Sparkles size={16} className="animate-pulse" />
              Your Complete Education Hub
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Learn How To{' '}
              <motion.span 
                className="text-primary inline-block"
                animate={{ 
                  textShadow: ['0 0 0px hsl(var(--primary))', '0 0 20px hsl(var(--primary))', '0 0 0px hsl(var(--primary))']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Make Money
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Stop buying outdated courses. Get constantly updated education, live coaching, AI tools, and a real community — all for $50/month.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                Free Resources Available
              </span>
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Zap size={14} className="text-accent" />
                </div>
                Instant Access
              </span>
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Star size={14} className="text-secondary" />
                </div>
                Always Updated
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== STACKMODE NETWORK - TOP PRIORITY ==================== */}
      <section className="px-4 py-10 md:py-12 bg-gradient-to-b from-background via-purple-500/5 to-background">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 mb-3"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} />
                Most Popular Choice
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Everything in <span className="text-purple-400">One Membership</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why buy individual courses when you can get ALL our trading education, business training, AI tools, and live coaching for just $50/month? Cancel anytime.
              </p>
            </div>
          </ScrollReveal>
          <StackmodeGroupPromo variant="library" />
        </div>
      </section>

      {/* ==================== AMAZON BOOKS SECTION ==================== */}
      <BooksCredibilityPromo variant="full" showHeading={true} className="bg-gradient-to-b from-amber-500/5 via-background to-background scroll-mt-20" />

      {/* ==================== FREE RESOURCES SECTION ==================== */}
      <section id="free-section" className="px-4 py-10 md:py-14 bg-gradient-to-b from-accent/5 via-primary/5 to-background scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-primary/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-accent/30"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift size={16} className="animate-bounce" />
                100% FREE — No Credit Card Required
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Your Journey <span className="text-accent">Today</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get instant access to proven strategies that cover both trading AND business fundamentals — completely free.
              </p>
            </div>
          </ScrollReveal>

          {/* Free Resource Card */}
          <ScrollReveal delay={0.2}>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative bg-gradient-to-br from-card via-card to-accent/5 border-2 border-accent/30 rounded-3xl p-8 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(var(--accent-rgb),0.15)]"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -right-3 md:top-4 md:right-4 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                ⚡ Instant Access
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg"
                  >
                    <GraduationCap size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-primary" />
                      <span className="text-xs font-medium text-primary">Trading</span>
                      <span className="text-xs text-muted-foreground">+</span>
                      <Briefcase size={14} className="text-secondary" />
                      <span className="text-xs font-medium text-secondary">Business</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {freeResource.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  {freeResource.excerpt}
                </p>

                {/* What You'll Learn */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Target, text: "Risk Management", color: "text-primary" },
                    { icon: TrendingUp, text: "Strategy Development", color: "text-accent" },
                    { icon: Briefcase, text: "Business Scaling", color: "text-secondary" },
                    { icon: BarChart3, text: "Consistent Execution", color: "text-amber-500" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3"
                    >
                      <item.icon size={18} className={item.color} />
                      <span className="text-sm font-medium text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href={freeResource.courseLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  >
                    <Play size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Get Free Course</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a 
                    href={freeResource.ebookLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center justify-center gap-3 bg-card border-2 border-accent/40 hover:border-accent text-foreground font-semibold px-8 py-4 rounded-xl transition-all"
                  >
                    <Download size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-lg">Download Free eBook</span>
                  </motion.a>
                </div>

                {/* Trust Signals */}
                <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-border/50">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent" /> No Credit Card
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent" /> Instant Download
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent" /> Beginner Friendly
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent" /> Trading + Business
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 md:py-12 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="text-secondary fill-secondary" />)}
              </div>
              <h2 className="text-2xl font-bold text-foreground">What Students Say</h2>
            </div>
          </ScrollReveal>
          <ReviewsGallery />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle size={20} className="text-muted-foreground" />
              <h2 className="text-xl font-semibold text-foreground">Common Questions</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  What's included in the Stackmode Network?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  The network includes all our trading courses (Before The HYPE, Neuro Trading, Freedom Money), business scaling courses, AI tools training, live weekly coaching calls, trading signals, and access to our private community. Everything for $50/month, cancel anytime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  Do I need experience to get started?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  No! Start with the free course for beginners. The Stackmode Network has content for all levels, from complete beginners to advanced traders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  How is this different from other trading courses?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  Unlike static courses that become outdated, the Stackmode Network is constantly updated with new strategies, market analysis, and AI tools. Plus you get live coaching and a real community — not just videos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  Can I cancel anytime?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  Yes! There are no contracts or commitments. Cancel anytime with one click. No questions asked.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  Is payment secure?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  100% secure! All payments are processed through Whop with bank-level encryption. Your payment info is never stored on our servers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA - Personalized Guidance */}
      <section className="py-10 px-4 border-t border-border">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={24} className="text-accent mx-auto mb-3" />
            </motion.div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Want Personalized Guidance?
            </h2>
            <p className="text-muted-foreground mb-5 text-sm">
              Book a free strategy call to discuss your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a 
                href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-500/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Calendar size={18} />
                FREE Trading Mentorship Call
                <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                href="https://calendly.com/stackmodechris/businessconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-500/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Calendar size={18} />
                FREE Business Growth Call
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <MainFooter />
    </main>;
};

export default Learn;
