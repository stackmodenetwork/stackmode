import { Helmet } from 'react-helmet-async';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';
import TrustBar from '@/components/TrustBar';

type Category = 'all' | 'websites' | 'presentations' | 'images' | 'videos';

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'ALL', icon: '⚡' },
  { id: 'websites', label: 'WEBSITES', icon: '🌐' },
  { id: 'presentations', label: 'PRESENTATIONS', icon: '📊' },
  { id: 'images', label: 'IMAGES', icon: '🎨' },
  { id: 'videos', label: 'VIDEOS', icon: '🎬' },
];

const prompts = [
  { id: 1, cat: 'websites' as const, title: 'Build a Full SaaS Landing Page', desc: 'Complete prompt to generate a professional SaaS landing page with hero, features, pricing & CTA sections.', price: '$4.99' },
  { id: 2, cat: 'websites' as const, title: 'E-Commerce Store Homepage', desc: 'Prompt pack for building a modern e-commerce storefront with product grids, filters & checkout flow.', price: '$3.99' },
  { id: 3, cat: 'websites' as const, title: 'Personal Brand Website Pack', desc: 'Build your personal brand site with portfolio, about section, testimonials & contact form.', price: '$5.99' },
  { id: 4, cat: 'websites' as const, title: 'Agency Portfolio Site', desc: 'Create a sleek agency portfolio with case studies, team section & animated service cards.', price: '$4.99' },
  { id: 5, cat: 'presentations' as const, title: 'Pitch Deck Builder (10 Slides)', desc: 'AI-powered pitch deck prompt — generates problem, solution, market, traction & ask slides.', price: '$2.99' },
  { id: 6, cat: 'presentations' as const, title: 'Business Plan Presentation', desc: 'Complete business plan slide deck with financials, strategy & growth projections.', price: '$2.99' },
  { id: 7, cat: 'presentations' as const, title: 'Course Slide Deck Generator', desc: 'Generate professional course slides with sections, visuals & speaker notes.', price: '$1.99' },
  { id: 8, cat: 'presentations' as const, title: 'Investor Deck Prompt Pack', desc: 'Premium investor-ready deck with metrics, competitive analysis & exit strategy.', price: '$3.99' },
  { id: 9, cat: 'images' as const, title: 'Cinematic Product Shot Prompt', desc: 'Generate studio-quality product photography with dramatic lighting & backgrounds.', price: 'FREE' },
  { id: 10, cat: 'images' as const, title: 'Brand Identity Image Pack', desc: 'Create logos, brand patterns, color palettes & visual identity elements.', price: '$2.99' },
  { id: 11, cat: 'images' as const, title: 'Social Media Visual Generator', desc: 'Instagram, TikTok & LinkedIn visual templates — scroll-stopping graphics.', price: '$1.99' },
  { id: 12, cat: 'images' as const, title: 'AI Portrait Prompts (10 styles)', desc: 'Professional AI portrait prompts in 10 distinct visual styles — headshots to editorial.', price: '$3.99' },
  { id: 13, cat: 'videos' as const, title: 'YouTube Hook Script Prompt', desc: 'Generate viral-worthy YouTube opening hooks that keep viewers watching.', price: 'FREE' },
  { id: 14, cat: 'videos' as const, title: 'Short-Form Video Story Arc', desc: 'TikTok & Reels script structure — hook, story, CTA in 60 seconds.', price: '$1.99' },
  { id: 15, cat: 'videos' as const, title: 'Faceless Channel Content Pack', desc: 'Complete faceless YouTube channel system — scripts, thumbnails & editing notes.', price: '$4.99' },
  { id: 16, cat: 'videos' as const, title: 'Product Demo Video Script', desc: 'Professional product demo script with feature highlights & conversion hooks.', price: '$2.99' },
];

const catColors: Record<Category, string> = {
  all: '#39ff14',
  websites: '#ff6b1a',
  presentations: '#00e5ff',
  images: '#ff2d9b',
  videos: '#b44fff',
};

/* ═══ ROTATING HERO PHRASES ═══ */
const heroRotatingPhrases = [
  'Guessing',
  'Making Errors',
  'Wasting Credits',
  'Overthinking',
  'Starting Over',
];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % heroRotatingPhrases.length), 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative" style={{ minWidth: '200px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={heroRotatingPhrases[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="text-muted-foreground"
        >
          {heroRotatingPhrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/* ═══ FLOATING CODE WINDOW ═══ */
const codeLines = [
  '> loading prompt...',
  '> building website ✓',
  '> revenue: $4,200/mo',
  '> prompt loaded ✓',
  '> next: [SCALE]',
  '> output: ready ✓',
];

const FloatingCodeWindow = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          setTimeout(() => setVisibleLines(0), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72"
      style={{ animation: 'float 4s ease-in-out infinite' }}
    >
      <div className="terminal-card p-4" style={{ boxShadow: '0 0 40px rgba(57,255,20,0.12)' }}>
        <div className="flex gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
        </div>
        <div className="space-y-1.5">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[11px] font-mono"
              style={{ color: line.includes('✓') ? '#39ff14' : line.includes('$') ? '#ffd700' : '#00e5ff' }}
            >
              {line}
            </motion.p>
          ))}
          <span className="inline-block w-2 h-4 animate-pulse" style={{ background: '#39ff14' }} />
        </div>
      </div>
    </motion.div>
  );
};

/* ═══ PROMPT CARD ═══ */
const PromptCard = ({ prompt, color, delay }: { prompt: typeof prompts[0]; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.4, delay }}
    className="terminal-card p-4 flex flex-col h-full"
  >
    <div className="flex gap-1.5 mb-3">
      <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
      <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
      <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
    </div>

    <span className="inline-block text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 rounded mb-3 self-start" style={{
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 700,
      background: `${color}12`,
      color: color,
      border: `1px solid ${color}25`,
    }}>
      {prompt.cat}
    </span>

    <h4 className="text-sm mb-2 font-bold text-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      {prompt.title}
    </h4>
    <p className="text-xs leading-relaxed flex-1 mb-4 text-muted-foreground" style={{ fontWeight: 500 }}>
      {prompt.desc}
    </p>

    <div className="flex items-center justify-between">
      <span className="text-sm font-bold" style={{
        fontFamily: "'Orbitron', sans-serif",
        color: prompt.price === 'FREE' ? '#39ff14' : '#ffd700',
      }}>
        {prompt.price}
      </span>
      <button className="btn-cta text-[9px] py-1.5 px-3">[ USE → ]</button>
    </div>
  </motion.div>
);

/* ═══ MAIN PAGE ═══ */
const PromptShop = () => {
  const [active, setActive] = useState<Category>('all');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (cat: Category) => {
    setActive(cat);
    if (cat !== 'all' && sectionRefs.current[cat]) {
      sectionRefs.current[cat]!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const groupedSections: Category[] = ['websites', 'presentations', 'images', 'videos'];
  const filtered = active === 'all' ? prompts : prompts.filter(p => p.cat === active);

  return (
    <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
      <Helmet>
        <title>AI Prompt Shop | Stackmode.net — Prompts for Websites, Presentations, Images & Video</title>
        <meta name="description" content="Get premium AI prompts built by Christopher Robinson CEO. Templates for web design, HTML presentations, AI image generation & video creation." />
        <link rel="canonical" href="https://stackmode.net/prompt-shop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stackmode.net/prompt-shop" />
        <meta property="og:title" content="AI Prompt Shop | Stackmode.net" />
        <meta property="og:description" content="Premium AI prompts for websites, presentations, images & video by Christopher Robinson CEO." />
        <meta property="og:site_name" content="Stackmode.net" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ChristopherRCEO" />
      </Helmet>

      <AnimatedBackground />
      <SiteNav />

      <div className="sr-only">
        <h1>AI Prompt Shop by Christopher Robinson CEO — Stackmode.net</h1>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 min-h-[65vh] flex items-center justify-center pt-14 pb-8 px-4">
        <div className="text-center max-w-3xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
              Stop <RotatingWord />
            </p>
            <p className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
              Start <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full" style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.3)' }}>
                <span>✏️</span> <span className="neon-green" style={{ textShadow: '0 0 10px #39ff14' }}>Creating</span>
              </span> Prompts.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base mb-8 text-muted-foreground max-w-xl mx-auto"
            style={{ fontWeight: 500 }}
          >
            Create custom AI prompts for marketing, writing, coding, or teaching — in seconds.
          </motion.p>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded text-[10px] sm:text-xs tracking-[0.1em] uppercase transition-all group"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 600,
                  background: active === cat.id ? `${catColors[cat.id]}12` : 'transparent',
                  color: active === cat.id ? catColors[cat.id] : 'rgba(232,244,255,0.3)',
                  border: `1px solid ${active === cat.id ? `${catColors[cat.id]}40` : 'rgba(232,244,255,0.08)'}`,
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <ChevronDown size={12} className="opacity-40 group-hover:opacity-80 transition-opacity" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Floating code window */}
          <FloatingCodeWindow />
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative z-10 py-12 px-4" style={{ background: 'rgba(4,6,14,0.95)' }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {[
            { num: '01', text: 'PICK YOUR PROMPT' },
            { num: '02', text: 'COPY & PASTE INTO AI' },
            { num: '03', text: 'GET YOUR RESULT' },
          ].map((step, i) => (
            <div key={step.num} className="flex items-center gap-3">
              <div className="terminal-card px-4 py-3 text-center">
                <span className="text-[10px] tracking-[0.2em] block mb-1 neon-green" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  [{step.num}]
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.1em] text-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  {step.text}
                </span>
              </div>
              {i < 2 && <span className="hidden sm:block text-neon-green text-lg">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROMPT GRID ═══ */}
      <section className="relative z-10 py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {active === 'all' ? (
            groupedSections.map(cat => {
              const catPrompts = prompts.filter(p => p.cat === cat);
              const catInfo = categories.find(c => c.id === cat)!;
              return (
                <div key={cat} ref={el => { sectionRefs.current[cat] = el; }} className="mb-16 scroll-mt-20">
                  <h3 className="text-sm sm:text-base mb-6 flex items-center gap-2" style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: catColors[cat],
                    textShadow: `0 0 10px ${catColors[cat]}60`,
                  }}>
                    <span>{catInfo.icon}</span> {catInfo.label}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {catPrompts.map((p, i) => (
                      <PromptCard key={p.id} prompt={p} color={catColors[cat]} delay={i * 0.05} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div ref={el => { sectionRefs.current[active] = el; }} className="scroll-mt-20">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filtered.map((p, i) => (
                  <PromptCard key={p.id} prompt={p} color={catColors[active]} delay={i * 0.05} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <TrustBar />
      <SiteFooter />
    </div>
  );
};

export default PromptShop;
