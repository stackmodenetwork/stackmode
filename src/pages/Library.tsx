import { Helmet } from 'react-helmet-async';
import { ArrowRight, Gift, BookOpen, Headphones, Star, ShoppingCart, GraduationCap, MessageCircle, Mic, Globe, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { useState, useEffect } from 'react';

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
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyHeader(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen" style={{ background: '#04040a' }}>
      <Helmet>
        <title>Books & Audiobooks | Stackmode Academy by Christopher Robinson (StackmodeChris)</title>
        <meta name="description" content="Read or listen to Stackmode Academy books by Christopher Robinson (StackmodeChris) on Amazon Kindle, Paperback, and Google Play Audiobooks. Master trading psychology, asset stacking, and financial freedom." />
        <link rel="canonical" href="https://stackmode.net/library" />
      </Helmet>

      {/* Top Category Bar — matches Academy */}
      <nav className="relative z-50 backdrop-blur-md border-b" style={{ background: 'rgba(4,4,10,0.95)', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden sm:flex items-center justify-center gap-2 py-2.5 flex-wrap">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors bg-foreground/10 hover:bg-foreground/20 text-foreground border border-border/50">
              <ArrowRight size={14} className="rotate-180 flex-shrink-0" /> Choose Your Path
            </Link>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold px-4 py-2 rounded-full transition-all text-xs"
              style={{ background: '#00ff88', color: '#030305' }}>
              <GraduationCap size={14} className="flex-shrink-0" />
              Join The Academy
            </a>
            <Link to="/academy" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors" style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <ArrowRight size={14} className="rotate-180 flex-shrink-0" /> Academy Home
            </Link>
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors" style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <MessageCircle size={14} className="flex-shrink-0" /> Discord
            </a>
            <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 border border-border/50 transition-colors">
              <Mic size={14} className="flex-shrink-0" /> Podcast
            </a>
            <a href="tel:+16787758532" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full text-background transition-colors bg-accent">
              <Phone size={14} className="flex-shrink-0" /> Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center justify-between py-2.5">
            <Link to="/" className="inline-flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full transition-all text-[11px] bg-foreground/10 text-foreground border border-border/50">
              <ArrowRight size={14} className="rotate-180 flex-shrink-0" /> Choose Your Path
            </Link>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full transition-all text-[11px]"
              style={{ background: '#00ff88', color: '#030305' }}>
              <GraduationCap size={14} className="flex-shrink-0" />
              Join The Academy
            </a>
            <button onClick={() => setMobileNavOpen(prev => !prev)}
              className="p-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}>
              {mobileNavOpen ? <X size={18} className="text-primary" /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileNavOpen && (
            <div className="sm:hidden pb-3 space-y-1 animate-fade-in">
              <Link to="/academy" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-card/50 transition-colors">
                <ArrowRight size={16} className="text-primary rotate-180" /> Academy Home
              </Link>
              <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-card/50 transition-colors">
                <MessageCircle size={16} className="text-primary" /> Discord
              </a>
              <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-card/50 transition-colors">
                <Mic size={16} className="text-primary" /> Podcast
              </a>
              <a href="tel:+16787758532" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold text-background bg-accent transition-colors mt-1">
                <Phone size={16} /> Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-transform duration-300 ${showStickyHeader ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ background: 'rgba(4,4,10,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 focus:outline-none">
              <img src="/images/sm-logo-new.png" alt="Stackmode Academy" className="w-9 h-9 rounded-full object-cover" loading="lazy" />
              <span className="text-sm font-bold text-foreground font-mono">STACKMODE LIBRARY</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/academy" className="inline-flex items-center gap-1.5 font-medium px-3 py-1.5 rounded-lg transition-all text-[10px] sm:text-xs text-foreground/70 hover:text-foreground border border-border/50">
                <ArrowRight size={12} className="rotate-180" /> Academy
              </Link>
              <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-[10px] sm:text-xs"
                style={{ background: '#00ff88', color: '#030305' }}>
                <GraduationCap size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="sm:hidden">Join</span>
                <span className="hidden sm:inline">Join The Academy</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-14 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(245,158,11,0.03), transparent)' }} />
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
              <div className="border rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row gap-5 sm:gap-7 items-center sm:items-start" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                  <img src={book.image} alt={`${book.title} by Christopher Robinson StackmodeChris`}
                    className="w-32 sm:w-36 h-auto rounded-xl border border-border/50 group-hover:border-amber-500/50 transition-all group-hover:scale-105 shadow-lg"
                    loading="lazy" width={144} height={216} />
                </a>
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
                    <a href={book.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-5 py-2.5 rounded-lg transition-all text-sm shadow-md shadow-amber-500/15">
                      <ShoppingCart size={15} /> Buy on Amazon
                    </a>
                    <a href={book.audiobookLink} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-foreground font-medium px-5 py-2.5 rounded-lg transition-all text-sm">
                      <Headphones size={15} className="text-primary" /> Google Play Audiobook
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
          <div className="max-w-2xl mx-auto text-center rounded-2xl p-8 sm:p-10" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,158,11,0.15)' }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
              <Gift size={14} className="text-amber-500" />
              <span className="text-amber-500 text-xs font-bold">100% FREE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Want to learn for free first?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Get free access to key investing & business fundamentals. No email required. No tricks.
            </p>
            <a href={FREE_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-lg">
              <Gift size={20} /> Get Free Educational Access <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 px-4" style={{ background: '#04040a', borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/50">Stackmode Academy | Founded by Christopher Robinson | StackmodeChris | The #1 Academy for AI Software, Trading & Asset Stacking | stackmode.net</p>
          <p className="text-[10px] text-muted-foreground/30 mt-1">© {new Date().getFullYear()} Stackmode Academy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Library;
