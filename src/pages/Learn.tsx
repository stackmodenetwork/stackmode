import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, Clock, ArrowLeft, Gift, Star, HelpCircle, Flame, ShoppingCart, Sparkles, Check, Lock, ArrowRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect } from 'react';

// Sale end date - 3 days from now (resets on each session)
const getSaleEndDate = () => {
  const saved = sessionStorage.getItem('saleEndDate');
  if (saved) return new Date(saved);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  endDate.setHours(23, 59, 59, 999);
  sessionStorage.setItem('saleEndDate', endDate.toISOString());
  return endDate;
};

// Countdown Timer component
const CountdownTimer = ({
  targetDate,
  large = false
}: {
  targetDate: Date;
  large?: boolean;
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(distance % (1000 * 60) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  if (large) {
    return <div className="flex items-center justify-center gap-2 sm:gap-3">
        <div className="flex flex-col items-center">
          <span className="bg-background text-foreground font-bold text-xl sm:text-2xl px-3 py-2 rounded-lg min-w-[3rem] text-center">{timeLeft.days}</span>
          <span className="text-[10px] text-muted-foreground mt-1">DAYS</span>
        </div>
        <span className="text-foreground text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-background text-foreground font-bold text-xl sm:text-2xl px-3 py-2 rounded-lg min-w-[3rem] text-center">{timeLeft.hours}</span>
          <span className="text-[10px] text-muted-foreground mt-1">HRS</span>
        </div>
        <span className="text-foreground text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-background text-foreground font-bold text-xl sm:text-2xl px-3 py-2 rounded-lg min-w-[3rem] text-center">{timeLeft.minutes}</span>
          <span className="text-[10px] text-muted-foreground mt-1">MIN</span>
        </div>
        <span className="text-foreground text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-background text-foreground font-bold text-xl sm:text-2xl px-3 py-2 rounded-lg min-w-[3rem] text-center animate-pulse">{timeLeft.seconds}</span>
          <span className="text-[10px] text-muted-foreground mt-1">SEC</span>
        </div>
      </div>;
  }
  return <div className="flex items-center gap-1 text-xs font-mono">
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.days}d</span>
      <span>:</span>
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.hours}h</span>
      <span>:</span>
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.minutes}m</span>
      <span>:</span>
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.seconds}s</span>
    </div>;
};
const premiumProducts = [{
  id: 1,
  title: "Before The HYPE",
  subtitle: "The Deep Analysis Framework",
  excerpt: "Master the proven research methodology to identify high-potential stocks before they explode. Fundamental + technical analysis combined.",
  category: "Stock Analysis",
  icon: TrendingUp,
  color: "text-green-500",
  bgColor: "bg-green-500/10",
  borderColor: "border-green-500/40",
  glowColor: "hover:shadow-green-500/30",
  buttonColor: "bg-green-500 hover:bg-green-600",
  isAvailable: true,
  coursePrice: 65,
  courseOriginalPrice: 97,
  ebookPrice: 25,
  ebookOriginalPrice: 47,
  ebookLink: "https://stackmodechris.lemonsqueezy.com/checkout/buy/58e086f9-3f97-4bad-a634-50fe9b39da6e",
  courseLink: "https://stackmodechris.lemonsqueezy.com/checkout/buy/58e086f9-3f97-4bad-a634-50fe9b39da6e",
  features: ["Video Course (2+ Hours)", "Complete eBook Guide", "Stock Screening Templates", "Lifetime Access + Updates"]
}, {
  id: 2,
  title: "Neuro-Trading",
  subtitle: "Rewire Your Brain for Success",
  excerpt: "Transform your trading psychology using neuroscience-backed techniques. Overcome fear, greed, and emotional trading forever.",
  category: "Trading Psychology",
  icon: Brain,
  color: "text-purple-500",
  bgColor: "bg-purple-500/10",
  borderColor: "border-purple-500/30",
  isAvailable: false
}, {
  id: 3,
  title: "Freedom Money",
  subtitle: "Mastering Bitcoin & Private Keys",
  excerpt: "Understand the future of money and secure your wealth with Bitcoin. Learn self-custody, private keys, and financial sovereignty.",
  category: "Cryptocurrency",
  icon: Bitcoin,
  color: "text-orange-500",
  bgColor: "bg-orange-500/10",
  borderColor: "border-orange-500/30",
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
  const [saleEndDate] = useState(() => getSaleEndDate());
  return <main className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Trading Courses & eBooks | Learn Stock Trading | StackmodeChris</title>
        <meta name="description" content="Master stock trading with StackmodeChris's proven courses and eBooks. Learn fundamental analysis, trading psychology, and strategies that actually work. 50% OFF limited time sale!" />
        <meta name="keywords" content="trading course, stock trading course, learn to trade stocks, trading psychology course, stock analysis course, trading eBook, profitable trading strategies, StackmodeChris course, trading education, beginner trading course" />
        <link rel="canonical" href="https://stackmode.net/learn" />
        
        <meta property="og:title" content="Trading Courses & eBooks | 50% OFF Sale | StackmodeChris" />
        <meta property="og:description" content="Master stock trading with proven courses. Learn fundamental analysis, trading psychology, and strategies that work. Limited time 50% OFF!" />
        <meta property="og:url" content="https://stackmode.net/learn" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trading Courses & eBooks | StackmodeChris" />
        <meta name="twitter:description" content="Master stock trading with proven courses. 50% OFF limited time sale!" />

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
            "description": "Master the proven research methodology to identify high-potential stocks before they explode",
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
            "description": "Free trading course covering fundamentals, risk management, and strategy development",
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

      {/* URGENCY BANNER - Sticky */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-3 px-4 sticky top-16 sm:top-20 md:top-24 z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center">
          <Flame size={20} className="animate-pulse" />
          <span className="font-bold text-sm sm:text-base">🔥 50% OFF FLASH SALE - FOR A LIMITED TIME ONLY!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 pb-4 md:pt-8 md:pb-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Learn Trading That <span className="text-primary">Actually Works</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Join 500+ students who transformed from beginners to profitable traders with these proven courses.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Check size={16} className="text-primary" /> Lifetime Access</span>
              <span className="flex items-center gap-1"><Check size={16} className="text-primary" /> Instant Download</span>
              <span className="flex items-center gap-1"><Check size={16} className="text-primary" /> No Experience Needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* FREE COURSE SECTION - First */}
      <section className="pb-8 px-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-b border-primary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-3">
              <Gift size={16} />
              100% FREE - NO CREDIT CARD REQUIRED
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Start Learning For Free</h2>
          </div>

          <article className="bg-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <GraduationCap size={40} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {freeProduct.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {freeProduct.excerpt}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <a href={freeProduct.courseLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
                      <Video size={18} />
                      Get Free Course
                    </a>
                    <a href={freeProduct.ebookLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-semibold px-6 py-3 rounded-xl transition-colors">
                      <BookOpen size={18} />
                      Get Free eBook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FEATURED: Available Product */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {premiumProducts.filter(p => p.isAvailable).map(product => {
          const IconComponent = product.icon;
          return <article key={product.id} className={`relative bg-gradient-to-br from-card via-card to-green-950/20 border-2 ${product.borderColor} rounded-3xl overflow-hidden shadow-2xl ${product.glowColor} hover:shadow-xl transition-all duration-500`}>
                {/* Sale Ribbon */}
                <div className="absolute top-6 -right-12 rotate-45 bg-red-500 text-white text-sm font-bold px-14 py-2 shadow-lg z-10">
                  50% OFF
                </div>

                <div className="p-6 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className={`w-20 h-20 rounded-2xl ${product.bgColor} flex items-center justify-center ${product.color} flex-shrink-0`}>
                      <IconComponent size={40} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{product.category}</span>
                        <span className="text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                          <Zap size={12} />
                          BESTSELLER
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {product.title}
                      </h2>
                      <p className="text-primary font-medium mb-3">
                        {product.subtitle}
                      </p>
                      <p className="text-muted-foreground">
                        {product.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="bg-muted/50 rounded-2xl p-5 mb-8">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Gift size={18} className="text-accent" />
                      What's Included:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features?.map((feature, i) => <div key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>)}
                    </div>
                  </div>

                  {/* Purchase Options */}
                  <div className="space-y-4">
                    {/* MAIN CTA: Course + eBook Combo */}
                    <a href={product.courseLink} target="_blank" rel="noopener noreferrer" className="group relative block w-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:scale-[1.02] active:scale-[0.98]">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                              <ShoppingCart size={28} />
                            </div>
                            <div className="text-center md:text-left">
                              <div className="text-lg md:text-xl font-bold mb-1">📚 Complete Course + eBook Bundle</div>
                              <div className="text-sm text-white/80">Best Value • Instant Access • Lifetime Updates</div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center md:items-end gap-1">
                            <div className="flex items-center gap-2">
                              <span className="line-through text-white/60 text-lg">${product.courseOriginalPrice}</span>
                              <span className="text-3xl md:text-4xl font-black">${product.coursePrice}</span>
                            </div>
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">SAVE ${(product.courseOriginalPrice || 0) - (product.coursePrice || 0)}</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-2 text-white font-semibold">
                          <span>Buy Now - Instant Access</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>

                    {/* Secondary CTA: eBook Only */}
                    <a href={product.ebookLink} target="_blank" rel="noopener noreferrer" className="group block w-full bg-card border-2 border-border hover:border-primary/50 rounded-xl p-4 transition-all duration-300 hover:bg-primary/5">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                            <BookOpen size={20} className="text-muted-foreground" />
                          </div>
                          <div className="text-center sm:text-left">
                            <div className="font-semibold text-foreground">📖 eBook Only</div>
                            <div className="text-xs text-muted-foreground">Digital PDF Download</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="line-through text-muted-foreground">${product.ebookOriginalPrice}</span>
                          <span className="text-xl font-bold text-foreground">${product.ebookPrice}</span>
                          <span className="text-xs text-primary font-medium">47% OFF</span>
                        </div>
                      </div>
                    </a>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Shield size={14} className="text-green-500" /> Secure Payment</span>
                      <span className="flex items-center gap-1"><Check size={14} className="text-green-500" /> Instant Download</span>
                      <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> 5-Star Rated</span>
                    </div>
                  </div>
                </div>
              </article>;
        })}
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={18} className="text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Coming Soon</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {premiumProducts.filter(p => !p.isAvailable).map(product => {
            const IconComponent = product.icon;
            return <article key={product.id} className={`relative bg-card/50 border ${product.borderColor} rounded-xl p-5 opacity-75`}>
                  <div className="absolute top-3 right-3">
                    <Lock size={16} className="text-muted-foreground" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center ${product.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{product.title}</h3>
                      <p className="text-xs text-primary">{product.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{product.excerpt}</p>
                  
                  <div className="flex items-center justify-center">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">Coming Soon</span>
                  </div>
                </article>;
          })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trusted by Profitable Students</h2>
            <p className="text-muted-foreground">See what traders are saying about our courses</p>
          </div>
          <ReviewsGallery />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-14 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle size={24} className="text-primary mx-auto mb-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know before you buy</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                Do I need trading experience to start?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <strong className="text-foreground">No!</strong> The free course "Key Steps To Profitability" is designed for complete beginners. It covers everything from the basics of market analysis to risk management. The premium courses build on these foundations for more advanced strategies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                What makes these courses different?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                These courses are built from <strong className="text-foreground">real trading experience</strong>, not theory. StackmodeChris shares the exact strategies and psychology techniques that transformed his trading. You get actionable frameworks you can use immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                How long do I have access?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <strong className="text-foreground">Lifetime access!</strong> Once you purchase, you own it forever. This includes all future updates and additions to the course material. Learn at your own pace, revisit lessons anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                How do I access the course after purchase?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <strong className="text-foreground">Instant access!</strong> After your purchase is complete, you'll receive an email with your download link and login credentials. You can start learning within minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                Is my payment secure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <strong className="text-foreground">100% secure.</strong> We use LemonSqueezy, a trusted payment processor used by thousands of businesses. Your payment information is encrypted and never stored on our servers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles size={32} className="text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get personalized 1-on-1 mentorship from StackmodeChris and accelerate your path to profitability.
          </p>
          <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/30">
            Book Your FREE Strategy Call
            <ArrowRight size={20} />
          </a>
          <p className="text-xs text-muted-foreground mt-4">No obligation • 100% Free • Limited spots available</p>
        </div>
      </section>

      <MainFooter />
    </main>;
};
export default Learn;