import { TrendingUp, Brain, GraduationCap, Bitcoin, Video, BookOpen, ShoppingCart } from 'lucide-react';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';

const products = [
  {
    id: 1,
    title: "Find the Next 100x Stock: The Deep Analysis Framework",
    excerpt: "Learn the proven research methodology to identify high-potential stocks before they explode. Master fundamental and technical analysis combined.",
    category: "Stock Analysis",
    icon: TrendingUp,
    color: "text-green-500",
    courseLink: "#",
    ebookLink: "#",
    amazonLink: "#"
  },
  {
    id: 2,
    title: "Neuro-Trading: Rewire Your Brain for Stock Market Success",
    excerpt: "Transform your trading psychology using neuroscience-backed techniques. Overcome fear, greed, and emotional trading forever.",
    category: "Trading Psychology",
    icon: Brain,
    color: "text-purple-500",
    courseLink: "#",
    ebookLink: "#",
    amazonLink: "#"
  },
  {
    id: 3,
    title: "Freedom Money: Mastering Bitcoin & Private Keys",
    excerpt: "Understand the future of money and how to secure your wealth with Bitcoin. Learn self-custody, private keys, and financial sovereignty.",
    category: "Cryptocurrency",
    icon: Bitcoin,
    color: "text-orange-500",
    courseLink: "#",
    ebookLink: "#",
    amazonLink: "#"
  },
  {
    id: 4,
    title: "The Key Steps To Profitability",
    excerpt: "The complete roadmap from beginner to profitable trader. Learn risk management, strategy development, and consistent execution.",
    category: "Trading Fundamentals",
    icon: GraduationCap,
    color: "text-blue-500",
    courseLink: "#",
    ebookLink: "#",
    amazonLink: "#"
  }
];

const Learn = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <MainHeader />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Courses & Books
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the markets with video courses and eBooks designed to transform you into a profitable trader.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <article 
                  key={product.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-card to-muted p-5 border-b border-border">
                    <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-3 ${product.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 flex-1">
                      {product.excerpt}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <a 
                        href={product.courseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
                      >
                        <Video size={16} />
                        <span>Watch Course</span>
                      </a>
                      <div className="grid grid-cols-2 gap-2">
                        <a 
                          href={product.ebookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-colors text-sm"
                        >
                          <BookOpen size={16} />
                          <span>eBook</span>
                        </a>
                        <a 
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 bg-orange-500/10 text-orange-500 font-medium rounded-lg hover:bg-orange-500/20 transition-colors text-sm"
                        >
                          <ShoppingCart size={16} />
                          <span>Amazon</span>
                        </a>
                      </div>
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

      <MainFooter />
    </main>
  );
};

export default Learn;
