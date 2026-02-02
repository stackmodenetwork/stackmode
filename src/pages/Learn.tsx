import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, ArrowLeft, Gift, Star, HelpCircle, ShoppingCart, Check, Lock, ArrowRight, Shield, Zap, Sparkles, Phone, Briefcase, DollarSign, Youtube, Megaphone, Target, TrendingDown, BarChart3, Play, Download, Users, Headphones } from 'lucide-react';
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

// Trading Products - Empty array since individual products are removed, only bundle remains
const tradingProducts: Array<{
  id: number;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  icon: typeof TrendingUp;
  color: string;
  bgColor: string;
  isAvailable: boolean;
  coursePrice?: number;
  courseOriginalPrice?: number;
  ebookPrice?: number;
  ebookOriginalPrice?: number;
  ebookLink?: string;
  courseLink?: string;
  features?: string[];
}> = [];

// Business Products
const businessProducts = [{
  id: 10,
  title: "Scale To 6 Figures",
  subtitle: "The Complete Business Growth System",
  excerpt: "Master paid advertising, YouTube monetization, social media growth, and proven strategies to scale your business to $10K-$100K+ per month consistently.",
  category: "Business Growth",
  icon: Briefcase,
  color: "text-secondary",
  bgColor: "bg-secondary/10",
  isAvailable: true,
  comboPrice: 50,
  comboOriginalPrice: 250,
  comboLink: "https://whop.com/stackmode-network-llc",
  isBundle: true,
  features: [
    "Facebook & Instagram Ads Mastery",
    "YouTube Monetization Blueprint", 
    "Social Media Growth Strategies",
    "Scaling to 4-7 Figures Monthly",
    "Client Acquisition Systems",
    "Revenue Automation Frameworks"
  ]
}];

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
            "name": "Triple Threat Trading Bundle",
            "description": "Complete trading education package with all courses, eBooks, and live trading signals",
            "provider": {
              "@type": "Organization",
              "name": "Stackmode Network LLC"
            },
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }, {
            "@type": "Course",
            "position": 2,
            "name": "Scale To 6 Figures - Business Growth System",
            "description": "Master paid advertising, YouTube monetization, and business scaling",
            "provider": {
              "@type": "Organization",
              "name": "Stackmode Network LLC"
            },
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }, {
            "@type": "Course",
            "position": 3,
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
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30"
              >
                <Sparkles size={16} className="animate-pulse" />
                Your Education Hub
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
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
          >
            The Ultimate Educational Library — courses, eBooks, audiobooks, and tools to build real wealth.
          </motion.p>
              
              {/* Category Navigation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {/* Amazon Books - First for credibility */}
                <motion.button 
                  onClick={() => scrollToSection('books-section')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#232F3E] hover:bg-[#1a242f] text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-amber-500/20"
                >
                  <BookOpen size={18} className="text-[#FF9900]" />
                  <span>Amazon Books</span>
                  <span className="text-[#FF9900] font-bold text-xs">★</span>
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('free-section')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                >
                  <Gift size={18} />
                  Start Free
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('trading-section')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-card border border-primary/30 hover:border-primary/60 text-foreground px-5 py-3 rounded-xl font-medium transition-all"
                >
                  <TrendingUp size={18} className="text-primary" />
                  Trading
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('business-section')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-card border border-secondary/30 hover:border-secondary/60 text-foreground px-5 py-3 rounded-xl font-medium transition-all"
                >
                  <Briefcase size={18} className="text-secondary" />
                  Business
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                  Free Value First
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
                  Lifetime Updates
                </span>
              </motion.div>
            </div>

            {/* Hero Visual - Animated Cards Stack */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[400px]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl blur-3xl" />
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [-2, 0, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-48 bg-card border border-primary/30 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <TrendingUp size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Trading</div>
                      <div className="text-xs text-muted-foreground">3 Courses</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [2, 0, 2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-20 right-0 w-48 bg-card border border-secondary/30 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Briefcase size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Business</div>
                      <div className="text-xs text-muted-foreground">Scale to 6 Figs</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 2, delay: 1.3 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [-1, 1, -1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-10 w-56 bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/40 rounded-xl p-4 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Gift size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">FREE Course</div>
                      <div className="text-xs text-accent">Start Today</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">100% Free</span>
                    <span className="text-accent font-semibold">No Card Needed</span>
                  </div>
                </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-10 bg-card/80 backdrop-blur border border-primary/30 rounded-lg px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <DollarSign size={20} className="text-primary" />
                  <div>
                    <div className="font-bold text-lg text-primary">Real Results</div>
                    <div className="text-xs text-muted-foreground">Proven Success</div>
                  </div>
                </div>
              </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== STACKMODE NETWORK GROUP PROMO ==================== */}
      <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Better Than Individual Courses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why buy outdated courses when you can get constantly updated education for less?
              </p>
            </div>
          </ScrollReveal>
          <StackmodeGroupPromo variant="library" />
        </div>
      </section>

      {/* ==================== AMAZON BOOKS SECTION - MOVED UP ==================== */}
      <BooksCredibilityPromo variant="full" showHeading={true} className="bg-gradient-to-b from-amber-500/5 via-background to-background scroll-mt-20" />

      {/* ==================== FREE RESOURCES - HERO SECTION ==================== */}
      <section id="free-section" className="px-4 py-12 md:py-20 bg-gradient-to-b from-accent/5 via-primary/5 to-background scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
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

          {/* Free Resource Card - Enhanced */}
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

      {/* ==================== TRADING SECTION ==================== */}
      <section id="trading-section" className="px-4 py-12 md:py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
              >
                <TrendingUp size={24} className="text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trading Education</h2>
                <p className="text-muted-foreground text-sm">Master the markets with proven strategies</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent my-6" />
          </ScrollReveal>

          <div className="space-y-6">
            {/* Available Trading Products */}
            {tradingProducts.filter(p => p.isAvailable).map((product, index) => {
              const IconComponent = product.icon;
              return (
                <ScrollReveal key={product.id} delay={index * 0.1}>
                  <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
                    <div className="p-6 md:p-8">
                      {/* Product Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center ${product.color} flex-shrink-0`}>
                          <IconComponent size={28} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-xs font-medium text-muted-foreground">{product.category}</span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                              <Zap size={10} />
                              Bestseller
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{product.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {product.excerpt}
                      </p>

                      {/* What's Included */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {product.features?.map((feature, i) => <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                            <Check size={14} className="text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>)}
                      </div>

                      {/* Purchase Options */}
                      <div className="space-y-3">
                        {/* Bundle CTA */}
                        <a href={product.courseLink} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden block w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl p-4 sm:p-5 transition-all hover:scale-[1.01] active:scale-[0.99] border-2 border-primary/20 shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.6)]">
                          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 sm:px-3 py-1 rounded-bl-lg">
                            SAVE $32
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="flex -space-x-2 flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center border-2 border-primary-foreground/30">
                                  <Video size={14} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center border-2 border-primary-foreground/30">
                                  <BookOpen size={14} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                              </div>
                              <div className="min-w-0">
                                <div className="font-bold text-base sm:text-lg">Complete Bundle</div>
                                <div className="text-[10px] sm:text-xs opacity-90 flex items-center gap-1 sm:gap-2 flex-wrap">
                                  <span className="flex items-center gap-1"><Video size={10} className="sm:w-3 sm:h-3" /> Course</span>
                                  <span>+</span>
                                  <span className="flex items-center gap-1"><BookOpen size={10} className="sm:w-3 sm:h-3" /> eBook</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 pl-11 sm:pl-0">
                              <div className="text-left sm:text-right">
                                <span className="line-through opacity-60 text-xs sm:text-sm block">${product.courseOriginalPrice}</span>
                                <span className="text-2xl sm:text-3xl font-bold">${product.coursePrice}</span>
                              </div>
                              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-primary-foreground/20 text-[10px] sm:text-xs opacity-90 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                            <span>✓ Instant Access</span>
                            <span>✓ Lifetime Updates</span>
                            <span>✓ Best Value</span>
                          </div>
                        </a>

                        {/* eBook Only Option */}
                        <a href={product.ebookLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-muted/50 hover:bg-muted text-foreground rounded-xl p-3 sm:p-4 transition-colors">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <BookOpen size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground" />
                            <span className="font-medium text-sm sm:text-base">eBook Only</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="line-through text-muted-foreground text-xs sm:text-sm">${product.ebookOriginalPrice}</span>
                            <span className="font-bold text-sm sm:text-base">${product.ebookPrice}</span>
                          </div>
                        </a>
                      </div>

                      {/* Trust Signals */}
                      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Shield size={12} className="text-primary" /> Secure Checkout
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Star size={12} className="text-secondary" /> 5-Star Rated
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}

          {/* Ultimate Trading Bundle - GREEN THEME */}
          <ScrollReveal delay={0.2}>
            <motion.article 
              whileHover={{ scale: 1.005 }}
              className="bg-card border-2 border-emerald-500/40 rounded-2xl overflow-hidden hover:border-emerald-500/60 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
                <div className="p-6 md:p-8">
                  {/* Bundle Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0"
                    >
                      <Sparkles size={28} className="text-emerald-500" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-medium text-muted-foreground">Complete Trading System</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full"
                      >
                        <Star size={10} />
                        ULTIMATE VALUE
                      </motion.span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        Triple Threat Trading Bundle
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Everything you need to become a complete trader</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    Get the complete trading education package: all three courses, eBooks, and exclusive access to my live trading signals. This is the ultimate shortcut to trading mastery.
                  </p>

                  {/* What's Included - 4 Products */}
                  <div className="bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Gift size={16} className="text-emerald-500" />
                      Everything Included in This Bundle
                    </h4>
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Before The Hype */}
                      <StaggerItem>
                        <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp size={20} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">Before The HYPE</div>
                            <div className="text-xs text-muted-foreground">Course + eBook</div>
                          </div>
                        </div>
                      </StaggerItem>
                      
                      {/* Neuro Trading */}
                      <StaggerItem>
                        <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Brain size={20} className="text-accent" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">Neuro-Trading</div>
                            <div className="text-xs text-muted-foreground">Course + eBook</div>
                          </div>
                        </div>
                      </StaggerItem>
                      
                      {/* Freedom Money */}
                      <StaggerItem>
                        <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Bitcoin size={20} className="text-secondary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">Freedom Money</div>
                            <div className="text-xs text-muted-foreground">Course + eBook</div>
                          </div>
                        </div>
                      </StaggerItem>
                      
                      {/* Trading Signals */}
                      <StaggerItem>
                        <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3 border border-primary/30">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <BarChart3 size={20} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">Live Trading Signals</div>
                            <div className="text-xs text-primary">Included FREE ($20/mo value)</div>
                          </div>
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </div>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>3 Complete Courses</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>3 In-Depth eBooks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>Live Trading Signals</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>Lifetime Access</span>
                    </div>
                  </div>

                  {/* Purchase CTA */}
                  <motion.a 
                    href="https://whop.com/stackmode-network-llc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group relative overflow-hidden block w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:via-emerald-400 hover:to-green-400 text-white rounded-xl p-4 sm:p-5 transition-all border-2 border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)]"
                  >
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 sm:px-3 py-1 rounded-bl-lg">
                      $50/MONTH
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex -space-x-2 flex-shrink-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                            <TrendingUp size={14} className="sm:w-[18px] sm:h-[18px]" />
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                            <Brain size={14} className="sm:w-[18px] sm:h-[18px]" />
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                            <Bitcoin size={14} className="sm:w-[18px] sm:h-[18px]" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-base sm:text-lg">Join Stackmode Network</div>
                          <div className="text-[10px] sm:text-xs opacity-90">
                            All Courses + Tools + Live Signals
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 pl-11 sm:pl-0">
                        <div className="text-left sm:text-right">
                          <span className="line-through opacity-60 text-xs sm:text-sm block">$100/mo</span>
                          <span className="text-2xl sm:text-3xl font-bold">$50/mo</span>
                        </div>
                        <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/20 text-[10px] sm:text-xs opacity-90 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                      <span>✓ Always Updated</span>
                      <span>✓ Cancel Anytime</span>
                      <span>✓ $1000+ Value</span>
                    </div>
                  </motion.a>

                  {/* Trust Signals */}
                  <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Shield size={12} className="text-emerald-500" /> Secure Checkout
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Star size={12} className="text-emerald-500" /> Best Value
                    </span>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>

            {/* Coming Soon Trading */}
            <ScrollReveal delay={0.3}>
              <div className="pt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Coming Soon (Included in Triple Bundle)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tradingProducts.filter(p => !p.isAvailable).map(product => {
                    const IconComponent = product.icon;
                    return <article key={product.id} className="bg-card/50 border border-border rounded-xl p-4 opacity-70">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg ${product.bgColor} flex items-center justify-center ${product.color} flex-shrink-0`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-foreground truncate">{product.title}</h4>
                            <Lock size={14} className="text-muted-foreground flex-shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{product.subtitle}</p>
                        </div>
                      </div>
                    </article>;
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== BUSINESS SECTION - PURPLE THEME ==================== */}
      <section id="business-section" className="px-4 py-12 md:py-16 bg-gradient-to-b from-purple-500/5 to-background scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center"
              >
                <Briefcase size={24} className="text-purple-500" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Business Education</h2>
                <p className="text-muted-foreground text-sm">Scale your income with proven business systems</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-purple-500/50 via-purple-500/20 to-transparent my-6" />
          </ScrollReveal>

          <div className="space-y-6">
            {/* Business Combo Product */}
            {businessProducts.filter(p => p.isAvailable).map((product, index) => {
              const IconComponent = product.icon;
              return (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <motion.article 
                  whileHover={{ scale: 1.005 }}
                  className="bg-card border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                >
                  <div className="p-6 md:p-8">
                    {/* Premium Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0"
                        >
                          <IconComponent size={28} className="text-purple-500" />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-xs font-medium text-muted-foreground">{product.category}</span>
                            <motion.span 
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-full"
                            >
                              <DollarSign size={10} />
                              Premium Bundle
                            </motion.span>
                          </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                              {product.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{product.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {product.excerpt}
                      </p>

                      {/* What's Included - Highlighted */}
                      <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Sparkles size={16} className="text-purple-500" />
                          What's Inside This Bundle
                        </h4>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.features?.map((feature, i) => (
                            <StaggerItem key={i}>
                              <div className="flex items-start gap-2 text-sm text-foreground/80">
                                <Check size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      </div>

                      {/* Icons showing what's covered */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg"
                        >
                          <Megaphone size={16} className="text-purple-500" />
                          <span className="text-sm text-muted-foreground">Paid Ads</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg"
                        >
                          <Youtube size={16} className="text-red-500" />
                          <span className="text-sm text-muted-foreground">YouTube</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg"
                        >
                          <Target size={16} className="text-purple-500" />
                          <span className="text-sm text-muted-foreground">Client Acquisition</span>
                        </motion.div>
                      </div>

                      {/* Purchase CTA */}
                      <motion.a 
                        href={product.comboLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="group relative overflow-hidden block w-full bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 hover:from-purple-500 hover:via-purple-400 hover:to-fuchsia-400 text-white rounded-xl p-4 sm:p-5 transition-all border-2 border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]"
                      >
                        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 sm:px-3 py-1 rounded-bl-lg">
                          $50/MONTH
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex -space-x-2 flex-shrink-0">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                                <Video size={14} className="sm:w-[18px] sm:h-[18px]" />
                              </div>
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                                <BookOpen size={14} className="sm:w-[18px] sm:h-[18px]" />
                              </div>
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold text-base sm:text-lg">Join Stackmode Network</div>
                              <div className="text-[10px] sm:text-xs opacity-90">
                                All Business Courses + Updates
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 pl-11 sm:pl-0">
                            <div className="text-left sm:text-right">
                              <span className="line-through opacity-60 text-xs sm:text-sm block">$100/mo</span>
                              <span className="text-2xl sm:text-3xl font-bold">$50/mo</span>
                            </div>
                            <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/20 text-[10px] sm:text-xs opacity-90 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                          <span>✓ Always Updated</span>
                          <span>✓ Cancel Anytime</span>
                          <span>✓ $1000+ Value</span>
                        </div>
                      </motion.a>

                      {/* Trust Signals */}
                      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Shield size={12} className="text-purple-500" /> Secure Checkout
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Star size={12} className="text-purple-500" /> Premium Content
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMAZON BOOKS SECTION NOW MOVED UP AFTER STACKMODE PROMO */}

      {/* Social Proof */}
      <section className="py-12 md:py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
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
      <section className="py-12 md:py-16 px-4">
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
                  Do I need experience for the trading courses?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  No! Start with the free course for beginners. Premium courses build on those foundations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  What's included in the business bundle?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  The complete business bundle includes video courses and eBooks covering Facebook/Instagram ads, YouTube monetization, social media growth strategies, and proven systems to scale your income to 4-7 figures monthly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  How long do I have access?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  Lifetime access. Once purchased, it's yours forever including all future updates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  How do I access after purchase?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  Instant access. You'll receive an email with your download link within minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                  Is payment secure?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  100% secure! Your payment info is encrypted and never stored on our servers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-12 px-4 border-t border-border">
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
