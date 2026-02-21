import { Helmet } from 'react-helmet-async';
import { ArrowRight, Gift, BookOpen, Headphones, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const FREE_LINK = 'https://stackmodechris.systeme.io/free-education';

const books = [
  {
    title: 'Neuro Trading',
    image: '/images/books/neuro-trading.jpg',
    link: 'https://a.co/d/0bz50oF',
    audiobookLink: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAaGWdZbM',
    tagline: 'Master the psychology of trading',
    bullets: [
      'Why 90% of traders lose — and how to be in the 10%',
      'Emotional discipline techniques used by pros',
      'Build a trading mindset that prints long-term',
    ],
  },
  {
    title: 'Before The HYPE',
    image: '/images/books/before-the-hype-2026.jpg',
    link: 'https://a.co/d/eSgONXa',
    audiobookLink: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAaaVspUM',
    tagline: 'Get in before the crowd',
    bullets: [
      'Spot opportunities before they go mainstream',
      'Crypto, stocks & emerging markets explained simply',
      'Real strategies — not hype, not gambling',
    ],
  },
  {
    title: 'Freedom Money',
    image: '/images/books/freedom-money.jpg',
    link: 'https://a.co/d/91RUksI',
    audiobookLink: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAaqV_pVM',
    tagline: 'Build real financial freedom',
    bullets: [
      'Step-by-step blueprint to escape the 9-to-5',
      'How to build multiple income streams',
      'Protect & grow your money like the wealthy do',
    ],
  },
];

const Library = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Books & Audiobooks | Stackmode Academy by Christopher Robinson (StackmodeChris)</title>
        <meta name="description" content="Read or listen to Stackmode Academy books by Christopher Robinson (StackmodeChris) on Amazon Kindle, Paperback, and Google Play Audiobooks. Master trading psychology, asset stacking, and financial freedom." />
        <link rel="canonical" href="https://stackmode.net/library" />
      </Helmet>

      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode Academy Christopher Robinson StackmodeChris" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-foreground font-mono">STACKMODE ACADEMY</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
              >
                <ArrowRight size={14} className="rotate-180" />
                Home
              </Link>
              <a
                href={FREE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-4 py-2 rounded-lg transition-all text-sm"
              >
                <Gift size={16} />
                Free Education
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-14 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-5">
              <BookOpen size={16} className="text-amber-500" />
              <span className="text-amber-500 text-sm font-bold">THE STACKMODE LIBRARY</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Books & Audiobooks
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
              Real investing & business knowledge — no fluff. Available on <span className="text-foreground font-semibold">Amazon Kindle</span>, <span className="text-foreground font-semibold">Paperback</span>, and <span className="text-foreground font-semibold">Google Play Audio</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground/70 text-sm mt-3">eBook / Audiobook — $9.99 · Paperback — $19.99</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Books */}
      <section className="px-4 pb-16">
        <StaggerContainer className="max-w-4xl mx-auto space-y-6">
          {books.map((book) => (
            <StaggerItem key={book.title}>
              <div className="bg-card/60 border border-border/50 rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row gap-5 sm:gap-7 items-center sm:items-start">
                {/* Book Cover */}
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                  <img
                    src={book.image}
                    alt={`${book.title} by Christopher Robinson StackmodeChris - Stackmode Academy`}
                    className="w-32 sm:w-36 h-auto rounded-xl border border-border/50 group-hover:border-amber-500/50 transition-all group-hover:scale-105 shadow-lg"
                  />
                </a>

                {/* Book Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{book.title}</h2>
                  <p className="text-amber-500 font-medium text-sm mb-3">{book.tagline}</p>

                  <ul className="space-y-2 mb-5">
                    {book.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Star size={13} className="text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-5 py-2.5 rounded-lg transition-all text-sm shadow-md shadow-amber-500/15"
                    >
                      <ShoppingCart size={15} />
                      Buy on Amazon
                    </a>
                    <a
                      href={book.audiobookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-foreground font-medium px-5 py-2.5 rounded-lg transition-all text-sm"
                    >
                      <Headphones size={15} className="text-primary" />
                      Google Play Audiobook
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Free Education CTA */}
      <section className="py-14 px-4 pb-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center bg-card/60 border border-amber-500/20 rounded-2xl p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
              <Gift size={14} className="text-amber-500" />
              <span className="text-amber-500 text-xs font-bold">100% FREE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Want to learn for free first?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Get free access to key investing & business fundamentals. No email required. No tricks.
            </p>
            <a
              href={FREE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-lg"
            >
              <Gift size={20} />
              Get Free Educational Access
              <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-muted-foreground/50">Stackmode Academy | Founded by Christopher Robinson | StackmodeChris | The #1 Academy for AI Software, Trading & Asset Stacking | stackmode.net</p>
        <p className="text-[10px] text-muted-foreground/30 mt-1">© {new Date().getFullYear()} Stackmode Academy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Library;
