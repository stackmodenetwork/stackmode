import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, TrendingUp, Brain, Target, DollarSign, LineChart } from 'lucide-react';

const books = [
  {
    id: 1,
    title: "The Complete Guide to Price Action Trading",
    excerpt: "Master the art of reading charts without indicators. Learn to identify support, resistance, and key price patterns that professional traders use.",
    category: "Technical Analysis",
    icon: LineChart,
    color: "text-blue-500"
  },
  {
    id: 2,
    title: "Trading Psychology: Mastering Your Mindset",
    excerpt: "Discover why 90% of traders fail and how to develop the mental discipline needed for consistent profitability.",
    category: "Trading Psychology",
    icon: Brain,
    color: "text-purple-500"
  },
  {
    id: 3,
    title: "Risk Management Fundamentals",
    excerpt: "Learn the #1 skill that separates winning traders from losing traders. Position sizing, stop losses, and capital preservation strategies.",
    category: "Risk Management",
    icon: Target,
    color: "text-green-500"
  },
  {
    id: 4,
    title: "From Zero to Funded: The Prop Firm Playbook",
    excerpt: "A step-by-step guide to passing prop firm challenges and trading with $100K+ without risking your own capital.",
    category: "Prop Trading",
    icon: DollarSign,
    color: "text-yellow-500"
  },
  {
    id: 5,
    title: "Futures Trading Simplified",
    excerpt: "Everything you need to know about trading NAS100, US30, and other index futures. From margin requirements to winning strategies.",
    category: "Futures Trading",
    icon: TrendingUp,
    color: "text-cyan-500"
  },
  {
    id: 6,
    title: "The Stackmode Trading Blueprint",
    excerpt: "My complete trading system revealed. The exact strategies, setups, and rules I use to trade profitably every day.",
    category: "Trading Strategy",
    icon: BookOpen,
    color: "text-orange-500"
  }
];

const Books = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <span className="text-lg font-bold text-primary">STACKMODE BOOKS</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Trading Book Library
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential reading materials to help you become a consistently profitable trader. Knowledge is power.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => {
              const IconComponent = book.icon;
              return (
                <article 
                  key={book.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Card Header with Icon */}
                  <div className="bg-gradient-to-br from-card to-muted p-6 border-b border-border">
                    <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-4 ${book.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {book.category}
                    </span>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {book.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {book.excerpt}
                    </p>
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
            <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            <span className="text-border hidden sm:inline">|</span>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-border hidden sm:inline">|</span>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Stackmode Network LLC
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Books;
