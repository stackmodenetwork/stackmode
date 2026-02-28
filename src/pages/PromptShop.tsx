import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  // Websites
  { id: 1, cat: 'websites' as const, title: 'Build a Full SaaS Landing Page', desc: 'Complete prompt to generate a professional SaaS landing page with hero, features, pricing & CTA sections.', price: '$4.99' },
  { id: 2, cat: 'websites' as const, title: 'E-Commerce Store Homepage', desc: 'Prompt pack for building a modern e-commerce storefront with product grids, filters & checkout flow.', price: '$3.99' },
  { id: 3, cat: 'websites' as const, title: 'Personal Brand Website Pack', desc: 'Build your personal brand site with portfolio, about section, testimonials & contact form.', price: '$5.99' },
  { id: 4, cat: 'websites' as const, title: 'Agency Portfolio Site', desc: 'Create a sleek agency portfolio with case studies, team section & animated service cards.', price: '$4.99' },
  // Presentations
  { id: 5, cat: 'presentations' as const, title: 'Pitch Deck Builder (10 Slides)', desc: 'AI-powered pitch deck prompt — generates problem, solution, market, traction & ask slides.', price: '$2.99' },
  { id: 6, cat: 'presentations' as const, title: 'Business Plan Presentation', desc: 'Complete business plan slide deck with financials, strategy & growth projections.', price: '$2.99' },
  { id: 7, cat: 'presentations' as const, title: 'Course Slide Deck Generator', desc: 'Generate professional course slides with sections, visuals & speaker notes.', price: '$1.99' },
  { id: 8, cat: 'presentations' as const, title: 'Investor Deck Prompt Pack', desc: 'Premium investor-ready deck with metrics, competitive analysis & exit strategy.', price: '$3.99' },
  // Images
  { id: 9, cat: 'images' as const, title: 'Cinematic Product Shot Prompt', desc: 'Generate studio-quality product photography with dramatic lighting & backgrounds.', price: 'FREE' },
  { id: 10, cat: 'images' as const, title: 'Brand Identity Image Pack', desc: 'Create logos, brand patterns, color palettes & visual identity elements.', price: '$2.99' },
  { id: 11, cat: 'images' as const, title: 'Social Media Visual Generator', desc: 'Instagram, TikTok & LinkedIn visual templates — scroll-stopping graphics.', price: '$1.99' },
  { id: 12, cat: 'images' as const, title: 'AI Portrait Prompts (10 styles)', desc: 'Professional AI portrait prompts in 10 distinct visual styles — headshots to editorial.', price: '$3.99' },
  // Videos
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

const PromptShop = () => {
  const [active, setActive] = useState<Category>('all');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = active === 'all' ? prompts : prompts.filter(p => p.cat === active);

  const scrollToSection = (cat: Category) => {
    setActive(cat);
    if (cat !== 'all' && sectionRefs.current[cat]) {
      sectionRefs.current[cat]!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const groupedSections: Category[] = ['websites', 'presentations', 'images', 'videos'];

  return (
    <div className="relative" style={{ background: 'var(--bg-primary)', overflowX: 'hidden' }}>
      <Helmet>
        <title>AI Prompt Shop | Stackmode.net — Prompts for Websites, Presentations, Images & Video</title>
        <meta name="description" content="Get premium AI prompts built by Christopher Robinson CEO. Templates for web design, HTML presentations, AI image generation & video creation." />
        <link rel="canonical" href="https://stackmode.net/prompt-shop" />
      </Helmet>

      <AnimatedBackground />
      <SiteNav />

      {/* SR-ONLY */}
      <div className="sr-only">
        <h1>AI Prompt Shop by Christopher Robinson CEO — Stackmode.net</h1>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center pt-14 pb-8 px-4">
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl mb-3 neon-green leading-relaxed" style={{
              fontFamily: "'Press Start 2P', monospace",
            }}>
              NO MORE GUESSING
            </h2>
            <h2 className="text-lg sm:text-2xl md:text-3xl mb-6 neon-green leading-relaxed" style={{
              fontFamily: "'Press Start 2P', monospace",
            }}>
              JUST ACTION
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg mb-8"
            style={{ fontFamily: "'Rajdhani', sans-serif", color: '#7a9bb5', fontWeight: 500 }}
          >
            Real prompts. Real results. Pick yours.
          </motion.p>

          {/* Category tabs with arrows */}
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
                  background: active === cat.id ? `${catColors[cat.id]}15` : 'transparent',
                  color: active === cat.id ? catColors[cat.id] : 'rgba(232,244,255,0.4)',
                  border: `1px solid ${active === cat.id ? `${catColors[cat.id]}50` : 'rgba(232,244,255,0.1)'}`,
                  boxShadow: active === cat.id ? `0 0 15px ${catColors[cat.id]}20` : 'none',
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <ChevronDown size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative z-10 py-12 px-4" style={{ background: 'var(--bg-secondary)' }}>
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
                <span className="text-[10px] sm:text-xs tracking-[0.1em]" style={{ fontFamily: "'Orbitron', sans-serif", color: '#e8f4ff' }}>
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
            /* Show all sections */
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
            /* Filtered view */
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

      {/* ═══ TRUST BAR ═══ */}
      <TrustBar />

      <SiteFooter />
    </div>
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
    {/* Terminal dots */}
    <div className="flex gap-1.5 mb-3">
      <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
      <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
      <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
    </div>

    {/* Category badge */}
    <span className="inline-block text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 rounded mb-3 self-start" style={{
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 700,
      background: `${color}15`,
      color: color,
      border: `1px solid ${color}30`,
    }}>
      {prompt.cat}
    </span>

    <h4 className="text-sm mb-2 font-bold" style={{ fontFamily: "'Orbitron', sans-serif", color: '#e8f4ff' }}>
      {prompt.title}
    </h4>
    <p className="text-xs leading-relaxed flex-1 mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", color: '#7a9bb5', fontWeight: 500 }}>
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

export default PromptShop;
