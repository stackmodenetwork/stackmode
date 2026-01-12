import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, ShoppingCart, Clock, ArrowLeft, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';

const featuredProduct = {
  id: 4,
  title: "The Key Steps To Profitability",
  excerpt: "The complete roadmap from beginner to profitable trader. Learn risk management, strategy development, and consistent execution.",
  category: "Trading Fundamentals",
  icon: GraduationCap,
  color: "text-blue-500",
  courseLink: "https://stackmodechris.systeme.io/trading",
  ebookLink: "https://stackmodechris.systeme.io/trading",
  benefits: [
    "Proven step-by-step trading framework",
    "Risk management strategies that protect your capital",
    "Psychology techniques to trade without emotion",
    "Real examples from profitable trades"
  ]
};

const upcomingProducts = [
  {
    id: 1,
    title: "Find the Next 100x Stock",
    excerpt: "Master the deep analysis framework to identify high-potential stocks.",
    category: "Stock Analysis",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    id: 2,
    title: "Neuro-Trading",
    excerpt: "Rewire your brain for stock market success using neuroscience.",
    category: "Trading Psychology",
    icon: Brain,
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Freedom Money",
    excerpt: "Master Bitcoin, private keys, and financial sovereignty.",
    category: "Cryptocurrency",
    icon: Bitcoin,
    color: "text-orange-500",
  }
];

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

      {/* Compact Hero + Featured Product */}
      <section className="pt-4 pb-6 md:pt-6 md:pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          {/* Page Title - Compact */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Courses & Books
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Transform from beginner to profitable trader with proven strategies.
            </p>
          </div>

          {/* Featured Product Card - Sales Optimized */}
          <article className="bg-gradient-to-br from-primary/5 via-card to-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-lg shadow-primary/10">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    AVAILABLE NOW
                  </span>
                  <span className="text-xs text-muted-foreground">{featuredProduct.category}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {featuredProduct.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {featuredProduct.excerpt}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-5 flex-1">
                  {featuredProduct.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <a 
                    href={featuredProduct.courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Video size={18} />
                    <span>Watch Full Course</span>
                  </a>
                  <a 
                    href={featuredProduct.ebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <BookOpen size={16} />
                    <span>Get the eBook</span>
                  </a>
                </div>
              </div>

              {/* Right: Visual/Icon */}
              <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <GraduationCap size={64} className="text-primary" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent text-background text-xs font-bold px-3 py-1.5 rounded-full">
                    Best Seller
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Coming Soon - Compact Grid */}
      <section className="pb-6 md:pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock size={18} className="text-muted-foreground" />
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {upcomingProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div 
                  key={product.id}
                  className="bg-card border border-border rounded-xl p-4 opacity-75"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 ${product.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-foreground text-sm leading-tight mb-1">
                        {product.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {product.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
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
