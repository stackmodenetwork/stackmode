import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, Clock, ArrowLeft, Bell, Zap, Gift, Star, HelpCircle, Flame, Timer, ShoppingCart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect } from 'react';

// Sale end date - 7 days from now (resets on each visit for demo)
const getSaleEndDate = () => {
  const saved = sessionStorage.getItem('saleEndDate');
  if (saved) return new Date(saved);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  endDate.setHours(23, 59, 59, 999);
  sessionStorage.setItem('saleEndDate', endDate.toISOString());
  return endDate;
};

// Countdown component for urgency
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-1 text-xs font-mono">
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.days}d</span>
      <span>:</span>
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.hours}h</span>
      <span>:</span>
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.minutes}m</span>
      <span>:</span>
      <span className="bg-background/80 px-1.5 py-0.5 rounded">{timeLeft.seconds}s</span>
    </div>
  );
};

const premiumProducts = [
  {
    id: 1,
    title: "Before The HYPE",
    subtitle: "The Deep Analysis Framework",
    excerpt: "Master the proven research methodology to identify high-potential stocks before they explode. Fundamental + technical analysis combined.",
    category: "Stock Analysis",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/20",
    isAvailable: true,
    coursePrice: 50,
    courseOriginalPrice: 97,
    ebookPrice: 25,
    ebookOriginalPrice: 47,
    ebookLink: "https://stackmodechris.lemonsqueezy.com/checkout/buy/58e086f9-3f97-4bad-a634-50fe9b39da6e",
    courseLink: "https://stackmodechris.lemonsqueezy.com/checkout/buy/58e086f9-3f97-4bad-a634-50fe9b39da6e",
  },
  {
    id: 2,
    title: "Neuro-Trading",
    subtitle: "Rewire Your Brain for Success",
    excerpt: "Transform your trading psychology using neuroscience-backed techniques. Overcome fear, greed, and emotional trading forever.",
    category: "Trading Psychology",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    launchDate: new Date('2025-04-01'),
    isAvailable: false,
  },
  {
    id: 3,
    title: "Freedom Money",
    subtitle: "Mastering Bitcoin & Private Keys",
    excerpt: "Understand the future of money and secure your wealth with Bitcoin. Learn self-custody, private keys, and financial sovereignty.",
    category: "Cryptocurrency",
    icon: Bitcoin,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    launchDate: new Date('2025-05-01'),
    isAvailable: false,
  }
];

const freeProduct = {
  id: 4,
  title: "The Key Steps To Profitability",
  excerpt: "The complete roadmap from beginner to profitable trader. Learn risk management, strategy development, and consistent execution.",
  category: "Trading Fundamentals",
  icon: GraduationCap,
  courseLink: "https://stackmodechris.systeme.io/freecourse",
  ebookLink: "https://stackmodechris.systeme.io/freebook",
};

const Learn = () => {
  const [saleEndDate] = useState(() => getSaleEndDate());
  const [saleTimeLeft, setSaleTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = saleEndDate.getTime() - now;
      
      if (distance > 0) {
        setSaleTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [saleEndDate]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Trading Courses & eBooks | StackmodeChris - Learn to Trade Profitably</title>
        <meta name="description" content="Master stock trading with StackmodeChris's proven courses and eBooks. Learn risk management, trading psychology, and strategies that actually work." />
        <meta name="keywords" content="trading course, stock trading, learn to trade, trading psychology, risk management, profitable trading" />
        <link rel="canonical" href="https://stackmodechris.com/learn" />
      </Helmet>

      <MainHeader />

      {/* URGENCY BANNER */}
      <div className="bg-gradient-to-r from-red-600 via-accent to-red-600 text-background py-3 px-4 animate-pulse">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <Flame size={20} className="animate-bounce" />
            <span className="font-bold text-sm sm:text-base">🔥 FLASH SALE - UP TO 50% OFF!</span>
            <Flame size={20} className="animate-bounce" />
          </div>
          <div className="flex items-center gap-2 bg-background/20 rounded-lg px-3 py-1">
            <Timer size={16} />
            <span className="font-mono font-bold text-sm">
              {saleTimeLeft.days}d {saleTimeLeft.hours}h {saleTimeLeft.minutes}m {saleTimeLeft.seconds}s
            </span>
          </div>
        </div>
      </div>

      {/* Compact Hero */}
      <section className="pt-4 pb-4 md:pt-6 md:pb-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-sm font-bold mb-3 animate-pulse">
              <Sparkles size={16} />
              LIMITED TIME OFFER - PRICES GO UP SOON!
              <Sparkles size={16} />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Courses & Books
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Transform from beginner to profitable trader with proven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Coming Soon Products */}
      <section className="pb-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} className="text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Premium Courses Coming Soon</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {premiumProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <article 
                  key={product.id}
                  className={`relative bg-gradient-to-br from-card to-muted/30 border-2 ${product.borderColor} rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300`}
                >
                  {/* Banner */}
                  <div className={`${product.bgColor} px-4 py-2 flex items-center justify-between`}>
                    {product.isAvailable ? (
                      <>
                        <span className="text-xs font-bold text-foreground flex items-center gap-1">
                          <Zap size={12} className="text-accent" />
                          AVAILABLE NOW
                        </span>
                        <span className="text-xs font-bold text-accent animate-pulse">🔥 HOT</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs font-bold text-foreground flex items-center gap-1">
                          <Clock size={12} />
                          LAUNCHING IN
                        </span>
                        <CountdownTimer targetDate={product.launchDate!} />
                      </>
                    )}
                  </div>

                  <div className="p-4">
                    {/* Icon & Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center ${product.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {product.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {product.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-2">
                      {product.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.excerpt}
                    </p>

                    {/* CTA Buttons */}
                    {product.isAvailable ? (
                      <div className="space-y-3">
                        {/* Course Button */}
                        <a 
                          href={product.courseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative w-full py-4 bg-gradient-to-r from-green-500 via-accent to-green-500 text-background font-bold rounded-xl flex flex-col items-center justify-center gap-1 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <div className="flex items-center gap-2">
                            <Video size={20} />
                            <span className="text-lg">🎓 Get Full Course</span>
                            <ShoppingCart size={18} />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="line-through text-background/60 text-sm">${product.courseOriginalPrice}</span>
                            <span className="bg-background text-accent px-3 py-0.5 rounded-full text-lg font-black">${product.coursePrice}</span>
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">SAVE 48%</span>
                          </div>
                        </a>
                        
                        {/* eBook Button */}
                        <a 
                          href={product.ebookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-full py-3 bg-gradient-to-r from-card via-muted to-card border-2 border-accent text-foreground font-bold rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <div className="flex items-center gap-2">
                            <BookOpen size={18} />
                            <span>📖 Get eBook Only</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="line-through text-muted-foreground text-sm">${product.ebookOriginalPrice}</span>
                            <span className="text-accent group-hover:text-background font-black text-lg">${product.ebookPrice}</span>
                            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">47% OFF</span>
                          </div>
                        </a>

                        {/* Urgency text */}
                        <p className="text-center text-xs text-red-400 font-medium flex items-center justify-center gap-1">
                          <Flame size={12} />
                          Only {Math.floor(Math.random() * 5) + 3} left at this price!
                          <Flame size={12} />
                        </p>
                      </div>
                    ) : (
                      <button 
                        disabled
                        className="w-full py-2.5 bg-muted text-muted-foreground font-semibold rounded-lg flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
                      >
                        <Clock size={16} />
                        <span>Coming Soon</span>
                      </button>
                    )}
                  </div>

                  {/* Corner Badge */}
                  {product.isAvailable ? (
                    <div className="absolute top-14 -right-8 rotate-45 bg-red-500 text-white text-[10px] font-bold px-10 py-1.5 shadow-lg animate-pulse">
                      🔥 50% OFF
                    </div>
                  ) : (
                    <div className="absolute top-12 -right-8 rotate-45 bg-muted text-muted-foreground text-[10px] font-bold px-10 py-1">
                      COMING SOON
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Resource Section */}
      <section className="pb-6 md:pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Gift size={18} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Free Resource</h2>
          </div>

          <article className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/20 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                    100% FREE
                  </span>
                  <span className="text-xs text-muted-foreground">{freeProduct.category}</span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {freeProduct.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {freeProduct.excerpt}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="sm:w-48 p-5 sm:border-l border-t sm:border-t-0 border-border flex flex-col justify-center gap-2">
                <a 
                  href={freeProduct.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  <Video size={16} />
                  <span>Free Course</span>
                </a>
                <a 
                  href={freeProduct.ebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-colors text-sm"
                >
                  <BookOpen size={16} />
                  <span>Free eBook</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 md:py-12 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star size={18} className="text-accent fill-accent" />
            <h2 className="text-lg font-semibold text-foreground">What Students Are Saying</h2>
            <Star size={18} className="text-accent fill-accent" />
          </div>
          <ReviewsGallery />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HelpCircle size={18} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                Do I need trading experience to start?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                No! The free course "Key Steps To Profitability" is designed for complete beginners. It covers everything from the basics of market analysis to risk management. The premium courses build on these foundations for more advanced strategies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                What makes these courses different from others?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                These courses are built from real trading experience, not theory. StackmodeChris shares the exact strategies and psychology techniques that transformed his trading. You get actionable frameworks, not fluff.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                How long do I have access to the courses?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                Once you enroll, you get lifetime access. This includes all future updates and additions to the course material. Learn at your own pace, revisit lessons anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                What's the difference between courses and 1-on-1 mentorship?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                Courses are self-paced learning with structured content. 1-on-1 mentorship provides personalized guidance, live feedback on your trades, and direct access to StackmodeChris for questions. Mentorship accelerates your progress with customized advice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                When will the premium courses be available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                Premium courses are launching throughout 2025. "Before The HYPE" launches in March, "Neuro-Trading" in April, and "Freedom Money" in May. Start with the free course now to build your foundation!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 px-4 bg-gradient-to-br from-card to-background border-t border-border mt-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Want 1-on-1 Trading Mentorship?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Get personalized guidance from StackmodeChris himself.
          </p>
          <a 
            href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-background font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 active:scale-95"
          >
            Book Your Free Strategy Call →
          </a>
        </div>
      </section>

      <MainFooter />
    </main>
  );
};

export default Learn;
