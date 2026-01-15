import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, Clock, ArrowLeft, Bell, Zap, Gift, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { useState, useEffect } from 'react';

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
    launchDate: new Date('2025-03-01'),
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
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Trading Courses & eBooks | StackmodeChris - Learn to Trade Profitably</title>
        <meta name="description" content="Master stock trading with StackmodeChris's proven courses and eBooks. Learn risk management, trading psychology, and strategies that actually work." />
        <meta name="keywords" content="trading course, stock trading, learn to trade, trading psychology, risk management, profitable trading" />
        <link rel="canonical" href="https://stackmodechris.com/learn" />
      </Helmet>

      <MainHeader />

      {/* Compact Hero */}
      <section className="pt-4 pb-4 md:pt-6 md:pb-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-6">
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
                  {/* Urgency Banner */}
                  <div className={`${product.bgColor} px-4 py-2 flex items-center justify-between`}>
                    <span className="text-xs font-bold text-foreground flex items-center gap-1">
                      <Clock size={12} />
                      LAUNCHING IN
                    </span>
                    <CountdownTimer targetDate={product.launchDate} />
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

                    {/* Waitlist Button */}
                    <button 
                      disabled
                      className="w-full py-2.5 bg-muted text-muted-foreground font-semibold rounded-lg flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
                    >
                      <Clock size={16} />
                      <span>Coming Soon</span>
                    </button>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-12 -right-8 rotate-45 bg-accent text-background text-[10px] font-bold px-10 py-1">
                    COMING SOON
                  </div>
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
