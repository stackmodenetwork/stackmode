import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, Play, FileText } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Find the Next 100x Stock: The Deep Analysis Framework",
    excerpt: "Learn the proven research methodology to identify high-potential stocks before they explode. Master fundamental and technical analysis combined.",
    category: "Stock Analysis",
    icon: TrendingUp,
    color: "text-green-500",
    duration: "4+ hours"
  },
  {
    id: 2,
    title: "Neuro-Trading: Rewire Your Brain for Stock Market Success",
    excerpt: "Transform your trading psychology using neuroscience-backed techniques. Overcome fear, greed, and emotional trading forever.",
    category: "Trading Psychology",
    icon: Brain,
    color: "text-purple-500",
    duration: "3+ hours"
  },
  {
    id: 3,
    title: "Freedom Money: Mastering Bitcoin & Private Keys",
    excerpt: "Understand the future of money and how to secure your wealth with Bitcoin. Learn self-custody, private keys, and financial sovereignty.",
    category: "Cryptocurrency",
    icon: Bitcoin,
    color: "text-orange-500",
    duration: "2+ hours"
  },
  {
    id: 4,
    title: "The Key Steps To Profitability Course",
    excerpt: "The complete roadmap from beginner to profitable trader. Learn risk management, strategy development, and consistent execution.",
    category: "Trading Fundamentals",
    icon: GraduationCap,
    color: "text-blue-500",
    duration: "5+ hours"
  }
];

const books = [
  {
    id: 1,
    title: "Find the Next 100x Stock: The Deep Analysis Framework",
    excerpt: "A comprehensive guide to identifying high-potential stocks before they make massive moves. Learn the research methodology used by top investors.",
    category: "Stock Analysis",
    icon: TrendingUp,
    color: "text-green-500",
    pages: "200+ pages"
  },
  {
    id: 2,
    title: "Neuro-Trading: Rewire Your Brain for Stock Market Success",
    excerpt: "Unlock your trading potential by understanding how your brain works. Master the mental game that separates winners from losers.",
    category: "Trading Psychology",
    icon: Brain,
    color: "text-purple-500",
    pages: "180+ pages"
  },
  {
    id: 3,
    title: "Freedom Money: Mastering Bitcoin & Private Keys",
    excerpt: "Take control of your financial future with Bitcoin. Learn self-custody, private key management, and the path to true financial freedom.",
    category: "Cryptocurrency",
    icon: Bitcoin,
    color: "text-orange-500",
    pages: "150+ pages"
  },
  {
    id: 4,
    title: "The Key Steps To Profitability",
    excerpt: "Your complete guide to building a profitable trading career. From mindset to execution, everything you need to succeed.",
    category: "Trading Fundamentals",
    icon: BookOpen,
    color: "text-blue-500",
    pages: "220+ pages"
  }
];

const Learn = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <span className="text-lg font-bold text-primary">STACKMODE LEARNING</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Learning Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the markets with video courses and books designed to transform you into a profitable trader.
          </p>
        </div>
      </section>

      {/* Video Courses Section */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Video className="text-primary" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Video Courses</h2>
              <p className="text-sm text-muted-foreground">Learn by watching — visual, step-by-step training</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <article 
                  key={course.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                >
                  <div className="bg-gradient-to-br from-card to-muted p-5 border-b border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl bg-background flex items-center justify-center ${course.color}`}>
                        <IconComponent size={22} />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                        <Play size={12} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {course.excerpt}
                    </p>
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

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-border"></div>
      </div>

      {/* Books Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="text-primary" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Books</h2>
              <p className="text-sm text-muted-foreground">Learn by reading — in-depth knowledge at your own pace</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {books.map((book) => {
              const IconComponent = book.icon;
              return (
                <article 
                  key={book.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                >
                  <div className="bg-gradient-to-br from-card to-muted p-5 border-b border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl bg-background flex items-center justify-center ${book.color}`}>
                        <IconComponent size={22} />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                        <FileText size={12} />
                        <span>{book.pages}</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {book.category}
                    </span>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {book.excerpt}
                    </p>
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
            © 2026 Stackmode Network LLC
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Learn;