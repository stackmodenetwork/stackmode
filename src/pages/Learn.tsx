import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, ArrowLeft, Gift, Star, HelpCircle, ShoppingCart, Check, Lock, ArrowRight, Shield, Zap, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const premiumProducts = [{
  id: 1,
  title: "Before The HYPE",
  subtitle: "The Deep Analysis Framework",
  excerpt: "Master the proven research methodology to identify high-potential stocks before they explode.",
  category: "Stock Analysis",
  icon: TrendingUp,
  color: "text-primary",
  bgColor: "bg-primary/10",
  isAvailable: true,
  coursePrice: 65,
  courseOriginalPrice: 97,
  ebookPrice: 25,
  ebookOriginalPrice: 47,
  ebookLink: "https://stackmode-net.kit.com/products/before-the-hype-100-x-stock-finder-e-book?step=checkout",
  courseLink: "https://stackmodechris.lemonsqueezy.com/checkout/buy/58e086f9-3f97-4bad-a634-50fe9b39da6e",
  features: ["Find 100x Stocks Before They Rally", "Complete eBook Guide", "Real Trade Breakdowns", "Lifetime Updates"]
}, {
  id: 2,
  title: "Neuro-Trading",
  subtitle: "Rewire Your Brain for Success",
  excerpt: "Transform your trading psychology using neuroscience-backed techniques.",
  category: "Trading Psychology",
  icon: Brain,
  color: "text-accent",
  bgColor: "bg-accent/10",
  isAvailable: false
}, {
  id: 3,
  title: "Freedom Money",
  subtitle: "Mastering Bitcoin & Private Keys",
  excerpt: "Understand the future of money and secure your wealth with Bitcoin.",
  category: "Cryptocurrency",
  icon: Bitcoin,
  color: "text-secondary",
  bgColor: "bg-secondary/10",
  isAvailable: false
}];
const freeProduct = {
  id: 4,
  title: "The Key Steps To Profitability",
  excerpt: "The complete roadmap from beginner to profitable trader. Learn risk management, strategy development, and consistent execution.",
  category: "Trading Fundamentals",
  icon: GraduationCap,
  courseLink: "https://stackmodechris.systeme.io/freecourse",
  ebookLink: "https://stackmodechris.systeme.io/freebook"
};
const Learn = () => {
  return <main className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Trading Courses & eBooks | Learn Stock Trading | StackmodeChris</title>
        <meta name="description" content="Master stock trading with StackmodeChris's proven courses and eBooks. Learn fundamental analysis, trading psychology, and strategies that actually work." />
        <meta name="keywords" content="trading course, stock trading course, learn to trade stocks, trading psychology course, stock analysis course, trading eBook, profitable trading strategies, StackmodeChris course, trading education, beginner trading course" />
        <link rel="canonical" href="https://stackmode.net/library" />
        
        <meta property="og:title" content="Trading Courses & eBooks | StackmodeChris" />
        <meta property="og:description" content="Master stock trading with proven courses. Learn fundamental analysis, trading psychology, and strategies that work." />
        <meta property="og:url" content="https://stackmode.net/library" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trading Courses & eBooks | StackmodeChris" />
        <meta name="twitter:description" content="Master stock trading with proven courses." />

        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "StackmodeChris Trading Courses",
          "description": "Premium trading education courses and eBooks",
          "itemListElement": [{
            "@type": "Course",
            "position": 1,
            "name": "Before The HYPE - Stock Analysis Course",
            "description": "Master the proven research methodology to identify high-potential stocks",
            "provider": {
              "@type": "Organization",
              "name": "Stackmode Network LLC"
            },
            "offers": {
              "@type": "Offer",
              "price": "65",
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

      {/* Minimal Sale Banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-2.5 px-4">
        <p className="text-center text-sm font-medium text-primary">
          🎉 Limited Time: 30% OFF Premium Courses
        </p>
      </div>

      {/* Clean Hero */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4 mx-[8px]">
            <Gift size={14} />
            Get My FREE Course & eBook Available Below
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learn The Strategies Wall Street <span className="text-primary">Doesn't Want You To Know</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            Exclusive courses and eBooks that helped my clients turn into Profitable Traders. Start with a free download — no catch.
          </p>
          
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

      {/* Free Course - Clean Card */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Gift size={18} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Free Resource</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {freeProduct.title}
                </h2>
                <p className="text-muted-foreground mb-4 md:mb-0">
                  {freeProduct.excerpt}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <a href={freeProduct.courseLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Video size={18} />
                  Free Course
                </a>
                <a href={freeProduct.ebookLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-medium px-6 py-3 rounded-xl transition-colors">
                  <BookOpen size={18} />
                  Free eBook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Products */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-6">Premium Courses</h2>
          
          <div className="space-y-6">
            {/* Available Product - Featured */}
            {premiumProducts.filter(p => p.isAvailable).map(product => {
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

                    {/* What's Included - Compact */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features?.map((feature, i) => <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <Check size={14} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>)}
                    </div>

                    {/* Purchase Options - Clean */}
                    <div className="space-y-3">
                      {/* Bundle CTA - Hero Option with Glow */}
                      <div className="group relative overflow-hidden w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl p-4 sm:p-5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer border-2 border-primary/20 shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.6)]">
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
                      </div>

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

                    {/* Trust Signals - Minimal */}
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

            {/* Coming Soon - Compact Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Coming Soon</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {premiumProducts.filter(p => !p.isAvailable).map(product => {
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

      {/* Social Proof - Cleaner */}
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

      {/* FAQ - Minimal */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={20} className="text-muted-foreground" />
            <h2 className="text-xl font-semibold text-foreground">Common Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                Do I need trading experience?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                No! Start with the free course for beginners. Premium courses build on those foundations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                How long do I have access?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                Lifetime access. Once purchased, it's yours forever including all future updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                How do I access after purchase?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                Instant access. You'll receive an email with your download link within minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-4">
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

      {/* Final CTA - Subtle */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-xl mx-auto text-center">
          <Sparkles size={24} className="text-accent mx-auto mb-3" />
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Want Personalized Guidance?
          </h2>
          <p className="text-muted-foreground mb-5 text-sm">
            Book a free strategy call to discuss your trading goals.
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