import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Copy, Check } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

type Filter = 'all' | 'website' | 'image' | 'video' | 'trading' | 'free' | 'premium';

const filters: {id: Filter;label: string;}[] = [
{ id: 'all', label: 'All' },
{ id: 'website', label: 'Website' },
{ id: 'image', label: 'Image' },
{ id: 'video', label: 'Video' },
{ id: 'trading', label: 'Trading' },
{ id: 'free', label: 'Free' },
{ id: 'premium', label: '⭐ Premium' }];


const prompts = [
{ cat: 'website', tier: 'free', title: 'Portfolio Website Starter', desc: 'Build a clean, modern portfolio in 60 seconds. Full prompt included.', preview: '"Create a dark-mode portfolio website for [YOUR NAME], a [ROLE]. Include: animated hero with particle background, project showcase grid with hover animations, skills section with progress bars, testimonials carousel, and contact form. Use [COLOR_1] and [COLOR_2] as accent colors..."', fullPrompt: 'Create a dark-mode portfolio website for [YOUR NAME], a [ROLE]. Include the following sections:\n\n1. Hero Section: Animated particle background with your name, title, and a brief tagline. Add a smooth scroll-down indicator.\n\n2. About Section: A two-column layout with your photo on the left and a short bio on the right. Include social media icons.\n\n3. Project Showcase: A responsive grid of project cards with hover animations that reveal project details. Each card should have a thumbnail, title, tech stack tags, and links to live demo / GitHub.\n\n4. Skills Section: Categorized skill bars with percentage indicators. Categories: Frontend, Backend, Tools & Platforms.\n\n5. Testimonials: A carousel of client/colleague quotes with name, role, and avatar.\n\n6. Contact Form: Name, email, subject, and message fields with validation. Include a subtle send animation on submit.\n\nUse [COLOR_1] as the primary accent and [COLOR_2] as the secondary accent. Typography: Use a modern sans-serif for headings and a clean monospace for code snippets. Make it fully responsive for mobile, tablet, and desktop.' },
{ cat: 'trading', tier: 'premium', title: 'Institutional Algo Strategy', desc: 'Complete algorithmic trading system with VWAP, RSI divergence, Kelly Criterion sizing, and auto backtesting.', preview: '"Act as a quantitative hedge fund analyst. Build a Python trading algo with VWAP deviation at ±2σ Bollinger confluence... [PREMIUM — 847 words]"', fullPrompt: 'Act as a quantitative hedge fund analyst with 15+ years experience at a top-tier fund. Build a complete Python algorithmic trading system with the following specifications:\n\n1. SIGNAL ENGINE:\n- VWAP deviation detector at ±2σ with Bollinger Band confluence\n- RSI divergence filter (bullish/bearish) with momentum confirmation\n- Volume profile analysis with POC (Point of Control) identification\n- Multi-timeframe alignment check (1m, 5m, 15m, 1H)\n\n2. RISK MANAGEMENT:\n- Kelly Criterion position sizing with half-Kelly conservative mode\n- Maximum drawdown circuit breaker at -2% daily, -5% weekly\n- Correlation-adjusted portfolio heat mapping\n- Dynamic stop-loss using ATR(14) × 1.5 multiplier\n\n3. EXECUTION:\n- Sub-millisecond order routing via ccxt unified API\n- Smart order routing across 3+ exchanges\n- Slippage estimation and limit order optimization\n- PostgreSQL logging for every tick, signal, and execution\n\n4. BACKTESTING:\n- Walk-forward optimization with 70/30 train/test split\n- Monte Carlo simulation (10,000 iterations) for robustness\n- Sharpe ratio, Sortino ratio, and max drawdown reporting\n- Transaction cost modeling (commission + spread + slippage)\n\nOutput clean, production-ready Python code with type hints, docstrings, and unit tests.' },
{ cat: 'image', tier: 'premium', title: 'Brand Identity Suite', desc: 'Complete Midjourney prompt system for logos, brand kits, product photography, and social media assets.', preview: '"You are a world-class brand identity designer. Create a complete brand system for [COMPANY NAME] in the [INDUSTRY] space... [PREMIUM — 634 words]"', fullPrompt: 'You are a world-class brand identity designer with 20 years of experience at agencies like Pentagram, Collins, and Wolff Olins. Create a complete brand identity system for [COMPANY NAME] in the [INDUSTRY] space.\n\nDELIVERABLE 1 — PRIMARY LOGO:\nMidjourney prompt: "Minimalist logo design for [COMPANY NAME], [INDUSTRY] company. Clean geometric lettermark, modern sans-serif typography, [COLOR_PALETTE] color scheme. Professional corporate identity, vector-ready, white background --ar 1:1 --v 6 --style raw"\n\nDELIVERABLE 2 — ICON/FAVICON:\n"Simplified icon version of [COMPANY NAME] logo, single letter or abstract mark, works at 16x16px, [PRIMARY_COLOR] on white, minimal detail --ar 1:1 --v 6"\n\nDELIVERABLE 3 — SOCIAL MEDIA KIT:\n"Professional social media banner for [COMPANY NAME], [INDUSTRY] brand, featuring logo placement, tagline area, gradient background using [COLOR_1] to [COLOR_2], modern corporate aesthetic --ar 16:9 --v 6"\n\nDELIVERABLE 4 — PRODUCT PHOTOGRAPHY:\n"Premium product photography style for [PRODUCT], studio lighting, [MATERIAL] texture, [COLOR] background, commercial advertising quality, 8K detail --ar 4:5 --v 6"\n\nDELIVERABLE 5 — BRAND GUIDELINES:\nProvide a written brand guide covering: typography pairing, color codes (HEX, RGB, CMYK), spacing rules, do/don\'t usage examples, and tone of voice guidelines.' },
{ cat: 'video', tier: 'free', title: 'YouTube Hook Generator', desc: '5 proven hook formulas that stop the scroll. Free to use right now.', preview: '"Generate 5 YouTube video hooks for a video about [TOPIC]. Each hook must: open with a bold claim or shocking stat..."', fullPrompt: 'Generate 5 YouTube video hooks for a video about [TOPIC]. Each hook must follow one of these proven formulas:\n\nHook 1 — The Bold Claim: Open with a controversial or surprising statement that challenges conventional wisdom. Example structure: "Everything you know about [TOPIC] is wrong, and here\'s why..."\n\nHook 2 — The Shocking Stat: Lead with a jaw-dropping statistic that creates urgency. Example: "97% of people who try [TOPIC] fail because of this one mistake..."\n\nHook 3 — The Story Loop: Start mid-story to create an open loop the viewer needs to close. Example: "I was about to quit [TOPIC] forever — until I discovered this..."\n\nHook 4 — The Direct Challenge: Address the viewer personally and challenge them. Example: "If you\'re still doing [COMMON MISTAKE], you\'re literally leaving money on the table..."\n\nHook 5 — The Curiosity Gap: Tease a secret or insider knowledge. Example: "The top 1% of [TOPIC] experts all do this one thing that nobody talks about..."\n\nFor each hook, also provide:\n- A suggested thumbnail text (max 4 words)\n- The first 15 seconds of script after the hook\n- Why this hook works psychologically' },
{ cat: 'website', tier: 'premium', title: 'SaaS Landing Page Builder', desc: 'Complete SaaS landing page with hero, features, pricing table, testimonials, FAQ, and animated CTA.', preview: '"You are a senior full-stack developer and conversion-rate optimizer. Build a complete SaaS landing page... [PREMIUM — 1,100+ words]"', fullPrompt: 'You are a senior full-stack developer and conversion-rate optimization specialist. Build a complete, high-converting SaaS landing page with the following sections:\n\n1. HERO SECTION:\n- Headline: Bold, benefit-driven (max 8 words)\n- Subheadline: Clarify the value proposition in one sentence\n- CTA button: High-contrast, action-oriented text\n- Social proof bar: "Trusted by 10,000+ teams" with logo strip\n- Hero image/video: Product screenshot or demo animation\n\n2. PROBLEM → SOLUTION:\n- 3 pain points your target audience faces\n- How your product solves each one\n- Before/after comparison visual\n\n3. FEATURES GRID:\n- 6 features in a 3×2 bento grid layout\n- Each: icon, title (3 words), description (1 sentence)\n- Hover animations with subtle scale transform\n\n4. PRICING TABLE:\n- 3 tiers: Starter, Pro, Enterprise\n- Highlight "Most Popular" tier\n- Annual/Monthly toggle\n- Feature comparison checkmarks\n\n5. TESTIMONIALS:\n- 3 customer quotes with photo, name, company, role\n- Star ratings\n- Carousel on mobile, grid on desktop\n\n6. FAQ ACCORDION:\n- 5 common questions with expandable answers\n- Schema markup for SEO\n\n7. FINAL CTA:\n- Urgency-driven headline\n- Email capture + CTA button\n- Trust badges (SSL, money-back guarantee)\n\nUse React + Tailwind CSS. Make it fully responsive. Dark mode by default.' },
{ cat: 'trading', tier: 'premium', title: 'DCF + LBO Financial Model', desc: 'Institutional-grade DCF and LBO model with Monte Carlo simulation for 10,000 scenarios.', preview: '"Build a complete institutional DCF and LBO model in Python/Excel... [PREMIUM — 920 words]"', fullPrompt: 'Build a complete institutional-grade DCF (Discounted Cash Flow) and LBO (Leveraged Buyout) financial model with the following specifications:\n\n1. DCF MODEL:\n- 10-year explicit forecast period with terminal value (Gordon Growth + Exit Multiple)\n- Revenue build-up: bottom-up by segment with growth assumptions\n- EBITDA bridge: gross margin → SG&A → R&D → EBITDA\n- Working capital modeling: DSO, DIO, DPO with seasonal adjustments\n- CapEx split: maintenance vs growth\n- WACC calculation: CAPM for cost of equity, after-tax cost of debt\n- Sensitivity tables: WACC vs terminal growth rate matrix\n\n2. LBO MODEL:\n- Sources & Uses table with debt tranches (Senior, Mezzanine, PIK)\n- Debt schedule with mandatory amortization and cash sweep\n- Management equity rollover and option pool\n- 5-year hold period with multiple exit scenarios\n- IRR and MOIC calculations at various exit multiples\n- Credit metrics: Debt/EBITDA, Interest Coverage, Fixed Charge Coverage\n\n3. MONTE CARLO SIMULATION:\n- 10,000 scenario iterations\n- Variable inputs: revenue growth (±3σ), margins (±2σ), exit multiple (±1σ)\n- Output: IRR distribution histogram, probability of achieving target returns\n- VaR (Value at Risk) at 95% and 99% confidence levels\n\n4. OUTPUT:\n- Executive summary dashboard\n- Automated sensitivity tables\n- Chart package: waterfall, tornado, distribution plots\n\nProvide in Python with pandas, numpy, scipy, and matplotlib. Include Excel template formulas as comments.' },
];


const testimonials = [
{ name: 'Marcus T.', text: 'The AI Trading prompt showed me how to analyze SPY charts in ChatGPT. Made my first profitable swing trade the same week.' },
{ name: 'Destiny W.', text: 'The asset stacking course broke down exactly how to stack income streams. I now have 4 running simultaneously.' },
{ name: 'Jaylon B.', text: 'The Midjourney image prompts are insane. My product photos look like a $10K shoot. Clients can\'t believe it.' },
{ name: 'Priya M.', text: 'Stackfinder spotted NVDA before it ran 8%. The AI scanner is the real deal.' },
{ name: 'Kevin L.', text: "Christopher's Academy teaches AI tools I actually use every day. ROI in the first week." },
{ name: 'Alexis R.', text: 'Used the SaaS landing page prompt to build my entire site in Lovable. Saved me $3,000 in designer fees.' }];


/* Terminal prompt preview */
const promptTabs = [
{ label: 'Algo Trading', text: 'Act as a Quant Analyst. Build a high-frequency Python algo using ccxt. Combine VWAP mean-reversion with RSI divergence filters. Enforce Kelly Criterion sizing and sub-millisecond PostgreSQL logging.' },
{ label: 'System Architecture', text: 'Act as a Principal Cloud Architect. Design a zero-trust microservices SaaS platform. Write Kubernetes manifests mapping Node.js gRPC services to a Redis/Postgres datastore.' },
{ label: 'Quant Modeling', text: 'Act as an M&A Financial Modeler. Construct an institutional DCF & LBO Excel model. Integrate Python Monte Carlo simulations to run 10,000 WACC scenarios.' }];


const TerminalWidget = memo(() => {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const text = promptTabs[active].text;
    const interval = setInterval(() => {
      if (i < text.length) {setDisplayed(text.slice(0, i + 1));i++;} else
      clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="max-w-lg w-full">
        <div className="flex gap-1 mb-0 overflow-x-auto scrollbar-hide">
        {promptTabs.map((t, i) =>
        <button key={i} onClick={() => setActive(i)}
        className="px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider rounded-t-lg transition-colors whitespace-nowrap"
        style={{ background: i === active ? '#111' : 'transparent', color: i === active ? '#fff' : 'rgba(255,255,255,0.3)', border: i === active ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent', borderBottom: 'none' }}>
            {t.label}
          </button>
        )}
      </div>
      <div className="rounded-b-xl rounded-tr-xl p-4" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
          <span className="text-[10px] ml-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Terminal</span>
        </div>
        <p className="text-xs font-mono leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', minHeight: 60 }}>
          {displayed}<span className="inline-block w-0.5 h-3 ml-0.5 animate-pulse bg-white" />
        </p>
        <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-[9px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>AI Generated Output</span>
          <button onClick={() => document.getElementById('prompt-vault')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-semibold text-white hover:underline cursor-pointer bg-transparent border-none p-0">Get This Prompt →</button>
        </div>
      </div>
    </div>);

});
TerminalWidget.displayName = 'TerminalWidget';

const PromptShop = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const initialFilter = (searchParams.get('filter') as Filter) || 'all';
  const [activeFilter, setActiveFilter] = useState<Filter>(initialFilter);
  const [selectedPrompt, setSelectedPrompt] = useState<typeof prompts[0] | null>(null);
  const [copied, setCopied] = useState(false);
  const { isSubscribed, user } = useAuth();

  useEffect(() => {
    const f = (searchParams.get('filter') as Filter) || 'all';
    setActiveFilter(f);
  }, [searchParams]);

  const handleCopy = () => {
    if (selectedPrompt?.fullPrompt) {
      navigator.clipboard.writeText(selectedPrompt.fullPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const filtered = prompts.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'free') return p.tier === 'free';
    if (activeFilter === 'premium') return p.tier === 'premium';
    return p.cat === activeFilter;
  });

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>AI Prompt Shop — Copy. Paste. Create. | Stackmode</title>
        <meta name="description" content="150+ AI prompts for websites, images, video, and trading. Free samples available. Premium unlocks everything." />
        <link rel="canonical" href="https://stackmode.net/shop" />
      </Helmet>

      <SiteNav />

      {/* Hero — Split */}
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="section-header__eyebrow mb-2">The Prompt Library</p>
              <h1 className="text-5xl sm:text-6xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1.1 }}>
                Copy. Paste.<br />Create.
              </h1>
              <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                AI software, trading strategies, investing, and digital asset stacking — by Christopher Robinson, CEO
              </p>
              <div className="flex gap-6 mb-6">
                <div><span className="text-2xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>150+</span><br /><span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Prompts</span></div>
                <div><span className="text-2xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>All AIs</span><br /><span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Compatible</span></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex justify-center lg:justify-end">
              <TerminalWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vault */}
      <section className="section" id="prompt-vault">
        <div className="container">
          <div className="section-header">
            <p className="section-header__eyebrow">The Vault</p>
            <h2 className="section-header__title">Featured Prompts</h2>
            <p className="section-header__subtitle">See exactly what you get. Free samples available. Premium unlocks everything.</p>
          </div>

          {/* Filters */}
          <div className="relative mb-10">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide px-1 py-1 lg:flex-wrap lg:justify-center">
              {filters.map((f) =>
              <button key={f.id} onClick={() => setActiveFilter(f.id)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap flex-shrink-0"
              style={{
                background: activeFilter === f.id ? '#fff' : 'transparent',
                color: activeFilter === f.id ? '#000' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${activeFilter === f.id ? '#fff' : 'rgba(255,255,255,0.1)'}`
              }}>
                  {f.label}
                </button>
              )}
            </div>
            {/* Mobile scroll hint */}
            <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to right, transparent, #000)' }} />
          </div>

          {/* Prompt Cards */}
          <div className="grid-3">
            {filtered.map((p, i) =>
            <motion.div key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card flex flex-col">
              
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold"
                style={{ background: p.tier === 'free' ? 'rgba(39,201,63,0.1)' : 'rgba(255,215,0,0.1)', color: p.tier === 'free' ? '#27c93f' : '#ffd700', border: `1px solid ${p.tier === 'free' ? 'rgba(39,201,63,0.2)' : 'rgba(255,215,0,0.2)'}` }}>
                    {p.tier === 'free' ? 'FREE' : '⭐ PREMIUM'}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.cat}</span>
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{p.title}</h3>
                <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.desc}</p>
                <p className="text-xs font-mono mb-4 flex-1" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{p.preview}</p>
                <div>
                  {p.tier === 'free' ?
                <button onClick={() => { setSelectedPrompt(p); setCopied(false); }} className="btn-primary btn-sm w-full">Get Free Prompt →</button> :
                <button onClick={() => { setSelectedPrompt(p); setCopied(false); }} className="btn-glass btn-sm w-full">View Prompt →</button>
                }
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </section>

      {/* How It Works */}
      
























      

      {/* Student Success */}
      























      

      {/* Prompt Copy Dialog */}
      <Dialog open={!!selectedPrompt} onOpenChange={(open) => !open && setSelectedPrompt(null)}>
        <DialogContent className="w-[95vw] max-w-xl mx-auto" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.5rem' }}>
              {selectedPrompt?.title}
            </DialogTitle>
            <DialogDescription className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {selectedPrompt?.tier === 'free' || isSubscribed
                ? 'Copy the prompt below and paste it into any AI tool.'
                : 'This is a premium prompt. Subscribe to unlock the full version.'}
            </DialogDescription>
          </DialogHeader>
          <div className="relative mt-3">
            {selectedPrompt?.tier === 'free' || isSubscribed ? (
              <>
                <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap rounded-lg p-4 max-h-[50vh] overflow-y-auto" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.08)', lineHeight: 1.6 }}>
                  {selectedPrompt?.fullPrompt}
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-2 rounded-lg transition-all"
                  style={{ background: copied ? 'rgba(39,201,63,0.15)' : 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {copied ? <Check className="w-4 h-4" style={{ color: '#27c93f' }} /> : <Copy className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.6)' }} />}
                </button>
              </>
            ) : (
              <div className="relative rounded-lg overflow-hidden min-h-[240px] sm:min-h-[280px]" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <pre className="text-xs font-mono whitespace-pre-wrap p-4 sm:p-6" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, filter: 'blur(6px)', userSelect: 'none' }}>
                  {selectedPrompt?.preview}{'\n\n'}{selectedPrompt?.preview}
                </pre>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-8" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.4) 100%)' }}>
                  <span className="text-xs uppercase tracking-wider px-4 py-1.5 rounded-full font-bold" style={{ background: 'rgba(255,215,0,0.15)', color: '#ffd700', border: '1px solid rgba(255,215,0,0.25)' }}>
                    ⭐ Premium Content
                  </span>
                  <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 320 }}>
                    Unlock all 150+ premium prompts with a Stackmode subscription.
                  </p>
                  {user ? (
                    <a href="https://buy.stripe.com/aFa4gBdw3dd92ZK3nR43S0C" className="btn-primary px-6 py-2.5 text-sm font-bold mt-1">Subscribe — $7.99/mo →</a>
                  ) : (
                    <a href={`/auth?redirect=${encodeURIComponent(location.pathname + location.search)}`} className="btn-primary px-6 py-2.5 text-sm font-bold mt-1">Login to Subscribe — $7.99/mo →</a>
                  )}
                </div>
              </div>
            )}
          </div>
          {(selectedPrompt?.tier === 'free' || isSubscribed) && (
            <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {copied ? '✓ Copied to clipboard' : 'Click the icon to copy'}
            </p>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>);

};

export default PromptShop;