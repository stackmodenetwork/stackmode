import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import TrustBar from '@/components/TrustBar';
import { useState, useEffect, memo, useCallback } from 'react';

/* ═══ TYPEWRITER ═══ */
const typewriterPhrases = [
  'Building SaaS with AI...',
  'Stacking digital assets...',
  'Scanning markets with Stackfinder...',
  'Generating revenue with prompts...',
  'Optimizing trading algorithms...',
];

const Typewriter = memo(() => {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIdx];
    const timeout = deleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < phrase.length) {
        setText(phrase.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === phrase.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIdx > 0) {
        setText(phrase.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setPhraseIdx(p => (p + 1) % typewriterPhrases.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <div className="h-8 flex items-center">
      <span className="text-sm sm:text-base font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {text}
      </span>
      <span className="inline-block w-0.5 h-5 ml-0.5 animate-pulse bg-white" />
    </div>
  );
});
Typewriter.displayName = 'Typewriter';

/* ═══ PROMPT PREVIEW WIDGET ═══ */
const promptTabs = [
  { label: 'Algo Trading', text: 'Act as a Quant Analyst. Build a high-frequency Python algo using ccxt. Combine VWAP mean-reversion with RSI divergence filters. Enforce Kelly Criterion sizing and sub-millisecond PostgreSQL logging. Provide backtested R:R optimizations securely.' },
  { label: 'System Architecture', text: 'Act as a Principal Cloud Architect. Design a zero-trust microservices SaaS platform. Write Kubernetes manifests mapping Node.js gRPC services to a Redis/Postgres datastore. Guarantee 99.999% uptime for 1M+ concurrent TCP connections.' },
  { label: 'Quant Modeling', text: 'Act as an M&A Financial Modeler. Construct an institutional DCF & LBO Excel model. Integrate Python Monte Carlo simulations to run 10,000 WACC scenarios, outputting automated sensitivity tables and 10-year dynamic waterfall cohort projections.' },
];

const PromptPreview = memo(() => {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const text = promptTabs[active].text;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex gap-2 mb-0 overflow-x-auto scrollbar-hide">
        {promptTabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-t-lg transition-colors"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: i === active ? '#111' : 'transparent',
              color: i === active ? '#fff' : 'rgba(255,255,255,0.4)',
              border: i === active ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
              borderBottom: 'none',
            }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-b-xl rounded-tr-xl p-4 sm:p-6" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
          <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Space Grotesk', sans-serif" }}>Terminal</span>
        </div>
        <p className="text-sm font-mono leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', minHeight: 80 }}>
          {displayed}<span className="inline-block w-0.5 h-4 ml-0.5 animate-pulse bg-white" />
        </p>
        <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>AI Generated Output</span>
          <Link to="/prompt-shop" className="text-xs font-semibold text-white hover:underline flex items-center gap-1">
            Get This Prompt →
          </Link>
        </div>
      </div>
    </div>
  );
});
PromptPreview.displayName = 'PromptPreview';

/* ═══ PILLAR CARD ═══ */
const PillarCard = ({ number, title, desc, items, link, linkText, delay }: {
  number: string; title: string; desc: string; items: string[]; link: string; linkText: string; delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card relative"
  >
    <div className="absolute top-4 left-4 text-5xl font-bold" style={{ color: 'rgba(255,255,255,0.05)', fontFamily: "'Barlow Condensed', sans-serif" }}>
      {number}
    </div>
    <div className="pt-12">
      <h3 className="text-xl mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{title}</h3>
      <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{desc}</p>
      <div className="flex flex-col gap-2 mb-6">
        {items.map(item => (
          <span key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="text-white">✓</span> {item}
          </span>
        ))}
      </div>
      <Link to={link} className="text-sm font-semibold text-white hover:underline">{linkText} →</Link>
    </div>
  </motion.div>
);

/* ═══ SHOWCASE CARD ═══ */
const ShowcaseCard = ({ img, badge, title, sub }: { img: string; badge: string; title: string; sub: string }) => (
  <div className="glass-card overflow-hidden p-0">
    <img src={img} alt={title} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-4">
      <span className="text-[10px] uppercase tracking-wider mb-2 inline-block" style={{ color: 'rgba(255,255,255,0.5)' }}>{badge}</span>
      <h3 className="text-lg mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{title}</h3>
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</p>
    </div>
  </div>
);

/* ═══ MAIN LANDING PAGE ═══ */
const Landing = () => (
  <div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Stackmode — Master AI. Stack Assets. Build Wealth. | Christopher Robinson CEO</title>
      <meta name="description" content="AI software, trading strategies, investing, and digital asset stacking by Christopher Robinson CEO. Courses, prompts, tools & more." />
      <link rel="canonical" href="https://stackmode.net" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net" />
      <meta property="og:title" content="Stackmode — Master AI. Stack Assets. Build Wealth." />
    </Helmet>

    <SiteNav />

    <div className="sr-only">
      <h1>Stackmode.net — AI Software, Trading & Asset Stacking by Christopher Robinson CEO (StackmodeChris)</h1>
    </div>

    {/* ═══ HERO ═══ */}
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src="/images/sm-logo-new.png" alt="Stackmode Logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6" 
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl mb-4"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1.1 }}
      >
        Master AI. Stack Assets.<br />Build Wealth.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-base sm:text-lg max-w-xl mb-4"
        style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}
      >
        AI software, trading strategies, investing, and digital asset stacking — by Christopher Robinson, CEO
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <Typewriter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-3 mt-6"
      >
        <Link to="/academy" className="btn-primary btn-lg">Join the Academy →</Link>
        <Link to="/prompt-shop" className="btn-glass btn-lg">Browse Prompts →</Link>
      </motion.div>

      <PromptPreview />
    </section>

    {/* ═══ SOCIAL PROOF BAR ═══ */}
    <div className="proof-bar">
      <div className="container">
        <div className="proof-bar__inner">
          <span className="proof-bar__item">
            <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /></svg>
            Active Community
          </span>
          <span className="proof-bar__item">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            50+ countries
          </span>
          <span className="proof-bar__item">
            <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            $100K+ revenue
          </span>
          <span className="proof-bar__item">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            5-star rated
          </span>
        </div>
      </div>
    </div>

    {/* ═══ TRUST BAR ═══ */}
    <TrustBar />

    {/* ═══ THREE PILLARS ═══ */}
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">The Framework</p>
          <h2 className="section-header__title">Three Pillars of Wealth</h2>
          <p className="section-header__subtitle">Master all three. Stack your income streams. Build generational wealth.</p>
        </div>
        <div className="grid-3">
          <PillarCard number="01" title="AI Software Mastery" desc="Build websites, apps, and automations using AI. No coding needed."
            items={['Generate complete SaaS websites', 'Automate business workflows', 'Build AI-powered client tools']}
            link="/academy" linkText="Learn AI" delay={0} />
          <PillarCard number="02" title="Trading & Asset Stacking" desc="Trade stocks, crypto & forex. Stack multiple income streams for long-term wealth."
            items={['Technical analysis foundations', 'Stocks, crypto & forex strategies', 'Risk management & position sizing']}
            link="/academy" linkText="Learn Trading" delay={0.1} />
          <PillarCard number="03" title="Write Like a Pro" desc="AI-powered copywriting for ads, emails, landing pages, and social media."
            items={['Email sequences that convert', 'Ad copy that stops the scroll', 'Landing pages that close deals']}
            link="/prompt-shop" linkText="Learn Copy" delay={0.2} />
        </div>
      </div>
    </section>

    {/* ═══ VERIFIED RESULTS ═══ */}
    <section className="section section--glass">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Verified Results</h2>
          <p className="section-header__subtitle">Real clients. Real results. Built by Christopher Robinson.</p>
        </div>
        <div className="grid-3">
          <ShowcaseCard img="https://ceoturbo.com/wp-content/uploads/2025/01/Untitled-design-3.png" badge="500+ views in 3 days" title="SWOLE JD" sub="Fitness & Coaching" />
          <ShowcaseCard img="https://ceoturbo.com/wp-content/uploads/2025/01/Untitled-design-4.png" badge="$100K+ revenue" title="Stackmode Academy" sub="AI Education Platform" />
          <ShowcaseCard img="https://ceoturbo.com/wp-content/uploads/2025/01/Untitled-design-5.png" badge="12x more booked calls" title="ZAHPHYSIQUE" sub="Health & Wellness" />
          <ShowcaseCard img="https://ceoturbo.com/wp-content/uploads/2025/02/Screenshot-2025-02-09-213223.png" badge="340% traffic increase" title="TRUE LEGACY" sub="Global Business Launch" />
          <ShowcaseCard img="https://ceoturbo.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-170752-1.png" badge="Professional authority" title="TRUE LEGACY GLOBAL" sub="Wellness Enterprise" />
          <ShowcaseCard img="https://ceoturbo.com/wp-content/uploads/2024/12/Screenshot-2024-12-25-035858.png" badge="1,000+ followers gained" title="7UVHAVIN" sub="Music & Entertainment" />
        </div>
      </div>
    </section>

    {/* ═══ BRAND BOOST BRIDGE ═══ */}
    <section className="section text-center">
      <div className="container" style={{ maxWidth: 700 }}>
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Done For You</p>
        <h2 className="section-header__title">Want us to build it for you?</h2>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          Skip the learning curve. We'll build your AI systems, funnels, and brand identity giving you a completely finished, revenue-ready business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/brand-boost" className="btn-primary btn-lg">Explore Brand Boost</Link>
          <a href="https://calendly.com/stackmode" target="_blank" rel="noopener noreferrer" className="btn-glass btn-lg">Book Discovery Call</a>
        </div>
      </div>
    </section>

    {/* ═══ ACADEMY CTA ═══ */}
    <section className="section section--glass">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-header__title" style={{ textAlign: 'left' }}>Stackmode Academy</h2>
            <p className="text-base sm:text-lg mb-6" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Step inside the academy to master AI workflows, algorithmic trading, and digital asset stacking. Stop watching from the sidelines.
            </p>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              Enroll in the Academy
            </a>
          </div>
          <div className="flex justify-center">
            <div className="glass-card text-center" style={{ padding: '4rem', borderRadius: 20 }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24 mx-auto">
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                <path d="M6 10.27v5.38C6 17.5 8.69 19 12 19s6-1.5 6-3.35v-5.38l-6 2.73-6-2.73z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default Landing;
