import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import TrustBar from '@/components/TrustBar';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';
import { useState, useEffect, memo } from 'react';
import { AnimatedTextRotator } from '@/components/ui/animated-text-rotator';
import BusinessProofBento from '@/components/BusinessProofBento';
import PillarsBentoGrid from '@/components/PillarsBentoGrid';
import BrandShowcaseBento from '@/components/BrandShowcaseBento';
import ToolsLogoGrid from '@/components/ToolsLogoGrid';
import ReviewsWall from '@/components/ReviewsWall';

/* ═══ TYPEWRITER ═══ */
const phrases = ['Building SaaS with AI...', 'Stacking digital assets...', 'Scanning markets with Stackfinder...', 'Generating revenue with prompts...', 'Optimizing trading algorithms...'];

const Typewriter = memo(() => {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const timeout = deleting ? 30 : 60;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < phrase.length) {setText(phrase.slice(0, charIdx + 1));setCharIdx((c) => c + 1);} else
      if (!deleting && charIdx === phrase.length) {setTimeout(() => setDeleting(true), 2000);} else
      if (deleting && charIdx > 0) {setText(phrase.slice(0, charIdx - 1));setCharIdx((c) => c - 1);} else
      {setDeleting(false);setPhraseIdx((p) => (p + 1) % phrases.length);}
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <div className="h-8 flex items-center justify-center">
      <span className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>{text}</span>
      <span className="inline-block w-0.5 h-5 ml-0.5 animate-pulse bg-white" />
    </div>);

});
Typewriter.displayName = 'Typewriter';

/* ═══ PROMPT PREVIEW ═══ */
const promptTabs = [
{ label: 'Algo Trading', text: 'Act as a Quant Analyst. Build a high-frequency Python algo using ccxt. Combine VWAP mean-reversion with RSI divergence filters. Enforce Kelly Criterion sizing and sub-millisecond PostgreSQL logging. Provide backtested R:R optimizations securely.' },
{ label: 'System Architecture', text: 'Act as a Principal Cloud Architect. Design a zero-trust microservices SaaS platform. Write Kubernetes manifests mapping Node.js gRPC services to a Redis/Postgres datastore. Guarantee 99.999% uptime for 1M+ concurrent TCP connections.' },
{ label: 'Quant Modeling', text: 'Act as an M&A Financial Modeler. Construct an institutional DCF & LBO Excel model. Integrate Python Monte Carlo simulations to run 10,000 WACC scenarios, outputting automated sensitivity tables and 10-year dynamic waterfall cohort projections.' }];


const PromptPreview = memo(() => {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const text = promptTabs[active].text;
    const interval = setInterval(() => {
      if (i < text.length) {setDisplayed(text.slice(0, i + 1));i++;} else
      clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex gap-2 mb-0 overflow-x-auto scrollbar-hide">
        {promptTabs.map((tab, i) =>
        <button key={i} onClick={() => setActive(i)}
        className="px-4 py-2 text-xs font-medium tracking-wider whitespace-nowrap rounded-t-lg transition-colors"
        style={{ background: i === active ? '#111' : 'transparent', color: i === active ? '#fff' : 'rgba(255,255,255,0.4)', borderTop: i === active ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent', borderLeft: i === active ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent', borderRight: i === active ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent', borderBottom: 'none' }}>
            {tab.label}
          </button>
        )}
      </div>
      <div className="rounded-b-xl rounded-tr-xl p-4 sm:p-6" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
          <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Terminal</span>
        </div>
        <p className="text-sm font-mono leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', minHeight: 80 }}>
          {displayed}<span className="inline-block w-0.5 h-4 ml-0.5 animate-pulse bg-white" />
        </p>
        <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>AI Generated Output</span>
          <Link to="/shop" className="text-xs font-semibold text-white hover:underline">Get This Prompt →</Link>
        </div>
      </div>
    </div>);

});
PromptPreview.displayName = 'PromptPreview';

/* ═══ SHOWCASE CARD ═══ */
const ShowcaseCard = ({ img, badge, title, sub }: {img: string;badge: string;title: string;sub: string;}) =>
<div className="glass-card overflow-hidden p-0">
    <img src={img} alt={title} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-4">
      <span className="text-[10px] tracking-wider mb-2 inline-block" style={{ color: 'rgba(255,255,255,0.5)' }}>{badge}</span>
      <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>{title}</h3>
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</p>
    </div>
  </div>;


/* ═══ BUILD YOUR BRAND CARDS ═══ */
const brandCards = [
{ title: 'Logo & Brand Identity', desc: 'Generate full brand kits — logo concepts, color palettes, typography systems.', tools: 'Midjourney · DALL-E · Ideogram' },
{ title: 'Full Websites', desc: 'Build complete landing pages, SaaS sites, and portfolio pages.', tools: 'Lovable · Claude · Cursor' },
{ title: 'Pitch Decks & Presentations', desc: 'Investor-ready decks that look designed, not generated.', tools: 'ChatGPT · Claude · Gamma' },
{ title: 'Video Scripts & Content', desc: 'YouTube hooks, Reel scripts, and TikTok formats that match your voice.', tools: 'ChatGPT · Claude' },
{ title: 'Product Photography', desc: 'Studio-quality product images with one prompt.', tools: 'Midjourney · Firefly · DALL-E 3' },
{ title: 'Business Cards', desc: 'Design ultra-premium, print-ready business cards.', tools: 'Midjourney · Print · Brand Identity' }];


/* ═══ TESTIMONIALS ═══ */
const testimonials = [
{ name: 'Marcus T.', text: 'The AI Trading prompt showed me how to analyze SPY charts in ChatGPT. Made my first profitable swing trade the same week.' },
{ name: 'Destiny W.', text: 'The asset stacking course broke down exactly how to stack income streams. I now have 4 running simultaneously.' },
{ name: 'Jaylon B.', text: 'The Midjourney image prompts are insane. My product photos look like a $10K shoot. Clients can\'t believe it.' },
{ name: 'Priya M.', text: 'Stackfinder spotted NVDA before it ran 8%. The AI scanner is the real deal.' },
{ name: 'Kevin L.', text: "Christopher's Academy teaches AI tools I actually use every day. ROI in the first week." },
{ name: 'Alexis R.', text: 'Used the SaaS landing page prompt to build my entire site in Lovable. Saved me $3,000 in designer fees.' }];


const Landing = () =>
<div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Stackmode — Master AI. Stack Assets. Build Wealth. | Christopher Robinson CEO</title>
      <meta name="description" content="AI software, trading strategies, investing, and digital asset stacking by Christopher Robinson CEO." />
      <link rel="canonical" href="https://stackmode.net" />
    </Helmet>

    <SiteNav />
    <div className="sr-only"><h1>Stackmode.net — AI Software, Trading & Asset Stacking by Christopher Robinson CEO</h1></div>

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12">
      <motion.img initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
    src="/images/sm-logo-new.png" alt="Stackmode Logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6" />
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
    className="text-4xl sm:text-6xl md:text-7xl mb-4" style={{ fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
        Master{' '}
        <AnimatedTextRotator words={['AI Software', 'Trading Systems', 'Digital Assets', 'Brand Building']} interval={2800} />
        .<br />Build Wealth.
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
    className="text-base sm:text-lg max-w-xl mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
        AI software, trading strategies, investing, and digital asset stacking — by Christopher Robinson, CEO
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}><Typewriter /></motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-3 mt-6">
        <Link to="/academy" className="btn-primary btn-lg">Join the Academy →</Link>
        <Link to="/shop" className="btn-glass btn-lg">Browse Prompts →</Link>
      </motion.div>
      <PromptPreview />
    </section>

    {/* PROOF BAR */}
    <div className="proof-bar">
      <div className="container">
        <div className="proof-bar__inner">
          {[
        { icon: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5', label: 'Active Community' },
        { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z', label: '50+ countries' },
        { icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', label: '$100K+ revenue' },
        { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z', label: '5-star rated' }].
        map((item) =>
        <span key={item.label} className="proof-bar__item">
              <svg viewBox="0 0 24 24"><path d={item.icon} /></svg>
              {item.label}
            </span>
        )}
        </div>
      </div>
    </div>
    

    <BusinessProofBento />

    

    <ToolsLogoGrid />

    

    {/* CLIENT SHOWCASE */}
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Client Work</p>
          <h2 className="section-header__title" style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}>Websites We've Built</h2>
          <p className="section-header__subtitle">Real clients. Real results. Built by Christopher Robinson.</p>
        </div>
      </div>
      <ImageAutoSlider
      speed={20}
      images={[
      { title: "Swole JD — Fitness & Coaching", src: "/images/showcase/client-jd.png" },
      { title: "True Legacy — Global Business", src: "/images/showcase/client-legacy.png" },
      { title: "7uvhavin — Music & Entertainment", src: "/images/showcase/client-7uvhavin.png" },
      { title: "CEO Turbo — Growth Platform", src: "/images/showcase/client-ceoturbo.png" }]
      } />
    
    </section>

    {/* DONE FOR YOU BRIDGE */}
    <section className="section text-center section--glass">
      <div className="container" style={{ maxWidth: 700 }}>
        <p className="text-xs tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Done For You</p>
        <h2 className="section-header__title">Want us to build it for you?</h2>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Skip the learning curve. We'll build your AI systems, funnels, and brand identity giving you a completely finished, revenue-ready business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/brand-boost" className="btn-primary btn-lg">Explore Brand Boost</Link>
          <a href="https://calendly.com/stackmodechris/turboboost" target="_blank" rel="noopener noreferrer" className="btn-glass btn-lg">Book Discovery Call</a>
        </div>
      </div>
    </section>

    {/* ACADEMY CTA */}
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <p className="text-xs tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Stackmode Academy</p>
            <h2 className="section-header__title" style={{ textAlign: 'left' }}>
              Learn the exact frameworks I use to stack assets, automate trading, and dominate AI.
            </h2>
            <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Step inside the academy to master AI workflows, algorithmic trading, and digital asset stacking. Stop watching from the sidelines and join a community of builders engineering their financial freedom.
            </p>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              Enroll in the Academy
            </a>
          </div>
          <div>
            <div className="glass-card">
              <p className="text-xs tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Brand Boost</p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>1-on-1 AI system builds, SEO, and website optimization for your business.</p>
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>What You Get</h3>
              <div className="boost-checklist">
                <span className="boost-checklist__item">Custom AI system for your business</span>
                <span className="boost-checklist__item">Complete website design & development</span>
                <span className="boost-checklist__item">SEO optimization & traffic growth</span>
                <span className="boost-checklist__item">1-on-1 strategy calls with Christopher</span>
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs mb-1" style={{ fontWeight: 600, fontSize: 16 }}>Real Results</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <span>340% traffic increase</span>
                  <span>12x more booked calls</span>
                  <span>$100K+ revenue</span>
                  <span>Professional brand authority</span>
                </div>
              </div>
              <Link to="/brand-boost" className="btn-glass btn-sm mt-4 inline-block">Book a Strategy Call →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ReviewsWall />

    {/* FINAL CTA */}
    








  

    <SiteFooter />
  </div>;


export default Landing;