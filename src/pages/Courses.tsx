import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, TrendingUp, Bitcoin, BarChart3, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "5 Common Mistakes New Traders Make (And How to Avoid Them)",
    excerpt: "Learn the top pitfalls that destroy trading accounts and discover proven strategies to protect your capital from day one.",
    category: "Trading Psychology",
    date: "January 8, 2026",
    readTime: "5 min read",
    icon: BookOpen,
    color: "text-purple-500"
  },
  {
    id: 2,
    title: "Understanding Support and Resistance: The Foundation of Price Action",
    excerpt: "Master the basics of technical analysis with this deep dive into support and resistance levels that every trader must know.",
    category: "Technical Analysis",
    date: "January 5, 2026",
    readTime: "7 min read",
    icon: BarChart3,
    color: "text-blue-500"
  },
  {
    id: 3,
    title: "Crypto vs Stocks: Which Market Should You Trade in 2026?",
    excerpt: "A comprehensive comparison of cryptocurrency and stock markets to help you decide where to focus your trading efforts.",
    category: "Market Analysis",
    date: "January 2, 2026",
    readTime: "6 min read",
    icon: Bitcoin,
    color: "text-orange-500"
  },
  {
    id: 4,
    title: "Risk Management: The #1 Skill That Separates Winners from Losers",
    excerpt: "Discover why 90% of traders fail and how proper risk management can put you in the winning 10%.",
    category: "Risk Management",
    date: "December 28, 2025",
    readTime: "8 min read",
    icon: TrendingUp,
    color: "text-green-500"
  },
  {
    id: 5,
    title: "How to Use Prop Firms to Trade with $100K+ Without Risking Your Own Money",
    excerpt: "Learn how to leverage funded trading accounts to scale your profits without putting your savings at risk.",
    category: "Prop Trading",
    date: "December 22, 2025",
    readTime: "6 min read",
    icon: TrendingUp,
    color: "text-cyan-500"
  },
  {
    id: 6,
    title: "The Complete Guide to Trading Futures: NAS100, US30, and More",
    excerpt: "Everything you need to know about trading index futures, from margin requirements to trading strategies.",
    category: "Futures Trading",
    date: "December 18, 2025",
    readTime: "10 min read",
    icon: BarChart3,
    color: "text-yellow-500"
  }
];

const Courses = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <span className="text-lg font-bold text-primary">STACKMODE COURSES</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Trading Education Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Free trading insights, strategies, and market analysis to help you become a profitable trader.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <article 
                  key={post.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Card Header with Icon */}
                  <div className="bg-gradient-to-br from-card to-muted p-6 border-b border-border">
                    <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-4 ${post.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Coming Soon Overlay */}
                  <div className="px-6 pb-6">
                    <div className="text-center py-2 bg-muted rounded-lg text-sm text-muted-foreground">
                      Coming Soon
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-card to-background border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Want Personalized Trading Guidance?
          </h2>
          <p className="text-muted-foreground mb-6">
            Skip the guesswork and get 1-on-1 mentorship from StackmodeChris himself.
          </p>
          <a 
            href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-background font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Book Your Free Strategy Call →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-border hidden sm:inline">|</span>
            <a href="https://stackmodechris.systeme.io/termsandconditions" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="https://stackmodechris.systeme.io/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Stackmode Network LLC
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Courses;
