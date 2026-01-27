import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, ArrowLeft, Gift, Star, HelpCircle, ShoppingCart, Check, Lock, ArrowRight, Shield, Zap, Sparkles, Phone, Briefcase, DollarSign, Youtube, Megaphone, Target, TrendingDown, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  comboPrice: 250,
  comboOriginalPrice: 497,
  comboLink: "https://stackmodechris.lemonsqueezy.com/checkout/buy/business-scale-combo",
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

      {/* Phone Call CTA Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border-y border-primary/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <a href="tel:6787758532" className="flex items-center justify-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
              <div className="relative bg-primary/20 border border-primary/50 rounded-full p-2 group-hover:bg-primary/30 transition-colors">
                <Phone size={18} className="text-primary" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-foreground font-semibold text-sm sm:text-base">
                Have Questions? Call Now: <span className="text-primary">(678) 775-8532</span>
              </span>
              <span className="hidden sm:inline text-muted-foreground text-sm ml-2">
                — Get instant answers & book your session
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 bg-primary/20 border border-primary/40 text-primary text-xs font-medium px-3 py-1 rounded-full group-hover:bg-primary/30 transition-colors">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Available Now
            </span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4 mx-[8px]">
            <Gift size={14} />
            Free Resources Available Below
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your <span className="text-primary">Education Hub</span> for Trading & Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            Whether you want to master the markets or scale your business, I've got the resources to help you succeed.
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button 
              onClick={() => scrollToSection('trading-section')}
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-5 py-2.5 rounded-xl font-medium transition-colors"
            >
              <TrendingUp size={18} />
              Trading Education
            </button>
            <button 
              onClick={() => scrollToSection('business-section')}
              className="inline-flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 text-secondary px-5 py-2.5 rounded-xl font-medium transition-colors"
            >
              <Briefcase size={18} />
              Business Education
            </button>
            <button 
              onClick={() => scrollToSection('books-section')}
              className="inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 px-5 py-2.5 rounded-xl font-medium transition-colors"
            >
              <BookOpen size={18} />
              Books
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Free Value First
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Lifetime Access
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Instant Download
            </span>
          </div>
        </div>
      </section>

      {/* ==================== FREE RESOURCES ==================== */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Gift size={20} className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Free Resources</h2>
          </div>

          {/* Free Trading & Business Resource */}
          <div className="bg-gradient-to-br from-accent/5 via-secondary/5 to-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-1">
                <TrendingUp size={16} className="text-accent" />
                <Briefcase size={16} className="text-secondary" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent uppercase tracking-wide">Free Trading & Business Resource</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {freeResource.title}
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-0">
                  {freeResource.excerpt}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <a href={freeResource.courseLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Video size={18} />
                  Free Course
                </a>
                <a href={freeResource.ebookLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-accent/50 text-foreground font-medium px-6 py-3 rounded-xl transition-colors">
                  <BookOpen size={18} />
                  Free eBook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRADING SECTION ==================== */}
      <section id="trading-section" className="px-4 py-12 md:py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trading Education</h2>
              <p className="text-muted-foreground text-sm">Master the markets with proven strategies</p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent my-6" />

          <div className="space-y-6">
            {/* Available Trading Products */}
            {tradingProducts.filter(p => p.isAvailable).map(product => {
              const IconComponent = product.icon;
              return <article key={product.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
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
              </article>;
            })}

            {/* Ultimate Trading Bundle */}
            <article className="bg-card border-2 border-accent/40 rounded-2xl overflow-hidden hover:border-accent/60 transition-colors shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)]">
              <div className="p-6 md:p-8">
                {/* Bundle Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={28} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-medium text-muted-foreground">Complete Trading System</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        <Star size={10} />
                        ULTIMATE VALUE
                      </span>
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
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-accent/20 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Gift size={16} className="text-accent" />
                    Everything Included in This Bundle
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Before The Hype */}
                    <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">Before The HYPE</div>
                        <div className="text-xs text-muted-foreground">Course + eBook</div>
                      </div>
                    </div>
                    
                    {/* Neuro Trading */}
                    <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Brain size={20} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">Neuro-Trading</div>
                        <div className="text-xs text-muted-foreground">Course + eBook</div>
                      </div>
                    </div>
                    
                    {/* Freedom Money */}
                    <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Bitcoin size={20} className="text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">Freedom Money</div>
                        <div className="text-xs text-muted-foreground">Course + eBook</div>
                      </div>
                    </div>
                    
                    {/* Trading Signals */}
                    <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3 border border-primary/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <BarChart3 size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">Live Trading Signals</div>
                        <div className="text-xs text-primary">Included FREE ($20/mo value)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    <span>3 Complete Courses</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    <span>3 In-Depth eBooks</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    <span>Live Trading Signals</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    <span>Lifetime Access</span>
                  </div>
                </div>

                {/* Purchase CTA */}
                <a href="https://stackmodechris.lemonsqueezy.com/checkout/buy/triple-trading-bundle" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden block w-full bg-gradient-to-r from-accent via-accent to-accent/80 hover:from-accent/90 hover:via-accent/90 hover:to-accent/70 text-accent-foreground rounded-xl p-4 sm:p-5 transition-all hover:scale-[1.01] active:scale-[0.99] border-2 border-accent/30 shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)] hover:shadow-[0_0_35px_rgba(var(--accent-rgb),0.6)]">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 sm:px-3 py-1 rounded-bl-lg">
                    SAVE $247
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex -space-x-2 flex-shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center border-2 border-accent-foreground/30">
                          <TrendingUp size={14} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center border-2 border-accent-foreground/30">
                          <Brain size={14} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center border-2 border-accent-foreground/30">
                          <Bitcoin size={14} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-base sm:text-lg">Get the Triple Bundle</div>
                        <div className="text-[10px] sm:text-xs opacity-90">
                          All 3 Courses + eBooks + Trading Signals
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 pl-11 sm:pl-0">
                      <div className="text-left sm:text-right">
                        <span className="line-through opacity-60 text-xs sm:text-sm block">$497</span>
                        <span className="text-2xl sm:text-3xl font-bold">$250</span>
                      </div>
                      <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-accent-foreground/20 text-[10px] sm:text-xs opacity-90 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                    <span>✓ Instant Access</span>
                    <span>✓ Lifetime Updates</span>
                    <span>✓ Signals Included</span>
                  </div>
                </a>

                {/* Trust Signals */}
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield size={12} className="text-accent" /> Secure Checkout
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Star size={12} className="text-secondary" /> Best Value
                  </span>
                </div>
              </div>
            </article>

            {/* Coming Soon Trading */}
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
          </div>
        </div>
      </section>

      {/* ==================== BUSINESS SECTION ==================== */}
      <section id="business-section" className="px-4 py-12 md:py-16 bg-gradient-to-b from-secondary/5 to-background scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Briefcase size={24} className="text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Business Education</h2>
              <p className="text-muted-foreground text-sm">Scale your income with proven business systems</p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent my-6" />

          <div className="space-y-6">
            {/* Business Combo Product */}
            {businessProducts.filter(p => p.isAvailable).map(product => {
              const IconComponent = product.icon;
              return <article key={product.id} className="bg-card border-2 border-secondary/30 rounded-2xl overflow-hidden hover:border-secondary/50 transition-colors shadow-[0_0_30px_rgba(var(--secondary-rgb),0.15)]">
                <div className="p-6 md:p-8">
                  {/* Premium Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center ${product.color} flex-shrink-0`}>
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-medium text-muted-foreground">{product.category}</span>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                            <DollarSign size={10} />
                            Premium Bundle
                          </span>
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
                  <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-secondary" />
                      What's Inside This Bundle
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features?.map((feature, i) => <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>)}
                    </div>
                  </div>

                  {/* Icons showing what's covered */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <Megaphone size={16} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">Paid Ads</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <Youtube size={16} className="text-red-500" />
                      <span className="text-sm text-muted-foreground">YouTube</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <Target size={16} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">Client Acquisition</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <BarChart3 size={16} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">Scaling Systems</span>
                    </div>
                  </div>

                  {/* Purchase CTA */}
                  <a href={product.comboLink} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden block w-full bg-gradient-to-r from-secondary via-secondary to-secondary/80 hover:from-secondary/90 hover:via-secondary/90 hover:to-secondary/70 text-secondary-foreground rounded-xl p-5 sm:p-6 transition-all hover:scale-[1.01] active:scale-[0.99] border-2 border-secondary/20 shadow-[0_0_30px_rgba(var(--secondary-rgb),0.4)] hover:shadow-[0_0_40px_rgba(var(--secondary-rgb),0.6)]">
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                      SAVE $247
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2 flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-foreground/20 flex items-center justify-center border-2 border-secondary-foreground/30">
                            <Video size={18} />
                          </div>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-foreground/20 flex items-center justify-center border-2 border-secondary-foreground/30">
                            <BookOpen size={18} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg sm:text-xl">Complete Course + eBook Bundle</div>
                          <div className="text-xs sm:text-sm opacity-90">Everything you need to scale to 6+ figures/month</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3 pl-12 sm:pl-0">
                        <div className="text-left sm:text-right">
                          <span className="line-through opacity-60 text-sm block">${product.comboOriginalPrice}</span>
                          <span className="text-3xl sm:text-4xl font-bold">${product.comboPrice}</span>
                        </div>
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-secondary-foreground/20 text-xs sm:text-sm opacity-90 flex items-center justify-center gap-4 flex-wrap">
                      <span>✓ Instant Access</span>
                      <span>✓ Lifetime Updates</span>
                      <span>✓ 6-Figure Blueprint</span>
                    </div>
                  </a>

                  {/* Trust Signals */}
                  <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Shield size={12} className="text-secondary" /> Secure Checkout
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <DollarSign size={12} className="text-secondary" /> Results Guaranteed
                    </span>
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      {/* ==================== BOOKS SECTION ==================== */}
      <section id="books-section" className="px-4 py-12 md:py-16 bg-gradient-to-b from-amber-500/5 to-background scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with Amazon Branding */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <BookOpen size={24} className="text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Books by Stackmodechris</h2>
                <p className="text-muted-foreground text-sm">Available in Kindle & Paperback</p>
              </div>
            </div>
            {/* Amazon Logo */}
            <div className="flex items-center gap-2 bg-[#232F3E] px-4 py-2 rounded-lg">
              <span className="text-white font-bold text-lg tracking-tight">amazon</span>
              <span className="text-amber-400 text-xl leading-none">→</span>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-amber-500/50 via-amber-500/20 to-transparent my-6" />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Neuro Trading Book */}
            <a 
              href="https://www.amazon.com/dp/B0GJRBW4SQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src="/images/books/neuro-trading.jpg" 
                  alt="Neuro Trading Book Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                  BESTSELLER
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={16} className="text-purple-500" />
                  <span className="text-xs font-medium text-muted-foreground">Trading Psychology</span>
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-purple-500 transition-colors">
                  Neuro Trading
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  Master the mental game of trading. Control emotions & make better decisions.
                </p>
                
                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Kindle eBook</span>
                    <span className="font-bold text-foreground">$9.99</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Paperback</span>
                    <span className="font-bold text-foreground">$19.99</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold py-2.5 px-4 rounded-lg transition-colors">
                  <ShoppingCart size={16} />
                  <span>Buy on Amazon</span>
                </div>
              </div>
            </a>

            {/* Before The Hype Book */}
            <a 
              href="https://www.amazon.com/Before-HYPE-Investors-Spotting-Timing-ebook/dp/B0GJQWWH7X/ref=tmm_kin_swatch_0"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src="/images/books/before-the-hype.png" 
                  alt="Before The Hype Book Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">
                  NEW RELEASE
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">Investment Strategy</span>
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  Before The Hype
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  Learn how to buy low & sell high. Spot opportunities before the crowd.
                </p>
                
                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Kindle eBook</span>
                    <span className="font-bold text-foreground">$9.99</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Paperback</span>
                    <span className="font-bold text-foreground">$19.99</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold py-2.5 px-4 rounded-lg transition-colors">
                  <ShoppingCart size={16} />
                  <span>Buy on Amazon</span>
                </div>
              </div>
            </a>

            {/* Freedom Money Book */}
            <a 
              href="https://www.amazon.com/dp/B0GJRMVRGR"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src="/images/books/freedom-money.jpg" 
                  alt="Freedom Money Book Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded">
                  TRENDING
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bitcoin size={16} className="text-amber-500" />
                  <span className="text-xs font-medium text-muted-foreground">Crypto & Finance</span>
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-amber-500 transition-colors">
                  Freedom Money
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  Understand Bitcoin and cryptocurrency. Build financial freedom with digital assets.
                </p>
                
                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Kindle eBook</span>
                    <span className="font-bold text-foreground">$9.99</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Paperback</span>
                    <span className="font-bold text-foreground">$19.99</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold py-2.5 px-4 rounded-lg transition-colors">
                  <ShoppingCart size={16} />
                  <span>Buy on Amazon</span>
                </div>
              </div>
            </a>
          </div>

          {/* Amazon Trust Badge */}
          <div className="mt-8 p-4 bg-card border border-border rounded-xl">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF9900]/20 flex items-center justify-center">
                  <Shield size={16} className="text-[#FF9900]" />
                </div>
                <span className="text-muted-foreground">Secure Amazon Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF9900]/20 flex items-center justify-center">
                  <Zap size={16} className="text-[#FF9900]" />
                </div>
                <span className="text-muted-foreground">Instant Kindle Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF9900]/20 flex items-center justify-center">
                  <Star size={16} className="text-[#FF9900]" />
                </div>
                <span className="text-muted-foreground">5-Star Rated Author</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="text-secondary fill-secondary" />)}
            </div>
            <h2 className="text-2xl font-bold text-foreground">What Students Say</h2>
          </div>
          <ReviewsGallery />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={20} className="text-muted-foreground" />
            <h2 className="text-xl font-semibold text-foreground">Common Questions</h2>
          </div>
          
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-xl mx-auto text-center">
          <Sparkles size={24} className="text-accent mx-auto mb-3" />
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Want Personalized Guidance?
          </h2>
          <p className="text-muted-foreground mb-5 text-sm">
            Book a free strategy call to discuss your goals.
          </p>
          <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
            Book Free Call
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <MainFooter />
    </main>;
};

export default Learn;
