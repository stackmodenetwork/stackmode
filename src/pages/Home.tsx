import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, TrendingUp, Rocket, DollarSign, BookOpen, Brain, BarChart3, Eye, Target, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

const tracks = [
  {
    num: '01',
    title: 'Learn Coding & AI Development',
    icon: Code,
    color: 'from-violet-500/20 to-cyan-500/20',
    borderColor: 'border-violet-500/30',
    accentColor: 'text-violet-400',
    desc: 'Ship real websites, apps, and SaaS products using AI-powered development. No CS degree needed — learn the modern coding stack with Lovable, Claude, Cursor, and more.',
    items: ['AI-Powered Full-Stack Development', 'Ship & Launch Websites & Apps', 'Prompt Engineering Mastery', 'SaaS Product Builds', 'Chrome Extensions & Automations'],
    cta: 'Start Coding'
  },
  {
    num: '02',
    title: 'Master Trading & Investing',
    icon: TrendingUp,
    color: 'from-emerald-500/20 to-primary/20',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    desc: 'Stocks, crypto, options, and forex. Learn to read charts, manage risk, and build multiple income streams with proven strategies and AI-assisted analysis.',
    items: ['Technical & Fundamental Analysis', 'Stocks, Crypto, Options & Forex', 'Risk Management & Position Sizing', 'AI-Assisted Trade Scanning', 'Portfolio Building Strategies'],
    cta: 'Start Trading'
  },
  {
    num: '03',
    title: 'Content Monetization',
    icon: DollarSign,
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    desc: 'Turn your knowledge into revenue. Learn content creation, digital products, sales psychology, and how to build audiences that convert into paying customers.',
    items: ['Digital Product Creation', 'Sales Psychology & Copywriting', 'Audience Building & Funnels', 'Pricing & Monetization Strategy', 'Brand Building & Authority'],
    cta: 'Start Monetizing'
  },
  {
    num: '04',
    title: 'Asset Stacking & Wealth',
    icon: Rocket,
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    desc: 'Stack assets across multiple verticals — trading portfolios, digital products, real estate guides, car rental business models, and more. Coming soon modules included.',
    items: ['Trading Portfolio Stacking', 'Real Estate Guides (Coming Soon)', 'Car Rental Business Models (Coming Soon)', 'Multiple Income Architecture', 'Generational Wealth Planning'],
    cta: 'Start Stacking'
  },
];

const results = [
  { name: 'TRUE LEGACY', sub: 'Global Business Enterprise', stat: '340% traffic increase', quote: "Christopher's systems completely transformed my workflow. We saw a 340% traffic increase almost immediately after deploying the Stackmode frameworks." },
  { name: 'ZAHPHYSIQUE', sub: 'Health & Wellness Coaching', stat: '12x more booked calls', quote: "The Academy taught me how to automate my lead flow. I am getting 12x more booked calls than I ever was before." },
  { name: 'SWOLE JD', sub: 'Fitness Coaching Platform', stat: '500+ organic views in 72hrs', quote: "I launched a brand new coaching funnel heavily utilizing AI. Within 72 hours we hit 500+ organic views and converted first high-ticket clients." },
];

const stackfinderCode = `// StackFinder AI — Real-time Market Scanner
import { analyzeMarket } from '@stackmode/ai';

const scanner = new StackFinder({
  sectors: ['tech', 'energy', 'crypto'],
  strategy: 'momentum',
  riskLevel: 'moderate'
});

// AI scans 5,000+ assets in seconds
const signals = await scanner.scan();
// → [{ ticker: 'NVDA', signal: 'BUY', 
//    confidence: 94.2, entry: 142.50 }]`;

const Academy = () => (
  <div className="bg-background min-h-screen">
    <Helmet>
      <title>Stackmode Academy — AI, Coding, Trading & Asset Stacking | Christopher Robinson</title>
      <meta name="description" content="The complete school for stacking wins, assets, and money. Learn coding, trading, content monetization, and wealth building — taught by Christopher Robinson, CEO of Stackmode." />
      <link rel="canonical" href="https://stackmode.net/academy" />
      <meta property="og:title" content="Stackmode Academy — Stack Wins. Stack Assets. Stack Money." />
      <meta property="og:description" content="Learn coding, trading, content monetization & asset stacking. One enrollment, unlimited growth." />
    </Helmet>

    <SiteNav />

    {/* Hero */}
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">By Christopher Robinson, CEO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Stack Wins. Stack Assets.<br />
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Stack Money.</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            The complete school for building wealth with AI, coding, trading, content monetization, and asset stacking. One enrollment. Unlimited growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              Join the Academy
            </a>
            <a href="#tracks" className="btn-glass btn-lg">See What's Inside</a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* What You'll Learn — 4 Tracks */}
    <section id="tracks" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Four Tracks. One Platform.
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Master every skill that builds real wealth — coding, trading, monetization, and asset stacking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {tracks.map((track, i) => (
            <motion.div
              key={track.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${track.color} border ${track.borderColor} rounded-xl p-5 sm:p-6 overflow-hidden`}
            >
              <div className="absolute top-4 right-4 text-5xl font-bold text-foreground/[0.03]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {track.num}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-lg bg-card/60 border border-border/50 flex items-center justify-center`}>
                    <track.icon size={18} className={track.accentColor} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {track.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{track.desc}</p>
                <div className="flex flex-col gap-1.5 mb-5">
                  {track.items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <CheckCircle2 size={13} className={track.accentColor} />
                      {item}
                    </span>
                  ))}
                </div>
                <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card/80 border border-border/50 text-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:bg-card transition-colors">
                  {track.cta} <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* StackFinder Section — with code example */}
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-5 items-center">
            {/* Left — Code Preview */}
            <div className="bg-card/80 border border-border/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] text-muted-foreground ml-2 font-mono">stackfinder.ts</span>
              </div>
              <pre className="p-4 text-[11px] sm:text-xs text-foreground/80 font-mono leading-relaxed overflow-x-auto">
                <code>{stackfinderCode}</code>
              </pre>
            </div>

            {/* Right — CTA */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-cyan-400">INCLUDED WITH ACADEMY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                StackFinder AI Scanner
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our proprietary AI tool scans 5,000+ assets in real-time — stocks, crypto, and ETFs. Get high-probability trade signals, sector rankings, and AI-powered watchlists. Built by Christopher using the same skills taught in the Academy.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Eye, label: 'AI Watchlist' },
                  { icon: BarChart3, label: 'Sector IQ' },
                  { icon: Brain, label: 'Scout AI Chat' },
                  { icon: Target, label: 'Smart Signals' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-1">
                    <f.icon size={11} className="text-cyan-400" />
                    <span className="text-[10px] text-foreground/70">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/stackfinder" className="inline-flex items-center gap-2 bg-cyan-500 text-background font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-cyan-400 transition-colors">
                  <Rocket size={14} />
                  Explore StackFinder
                  <ArrowRight size={14} />
                </Link>
                <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/50 text-foreground/70 text-sm px-5 py-2.5 rounded-lg hover:bg-card/80 transition-colors">
                  Join & Get Access
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Results */}
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Verified Results
          </h2>
          <p className="text-muted-foreground text-sm">Real members. Real outcomes.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {results.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/60 border border-border/50 rounded-xl p-5"
            >
              <div className="text-primary font-bold text-lg mb-1">{r.stat}</div>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">"{r.quote}"</p>
              <div className="border-t border-border/30 pt-3">
                <div className="text-xs font-bold text-foreground">{r.name}</div>
                <div className="text-[10px] text-muted-foreground">{r.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 sm:py-20 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          Enroll in Stackmode Academy
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Coding. Trading. Monetization. Asset Stacking. Everything you need to build wealth — in one place.
        </p>
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg inline-flex items-center gap-2">
          Join the Academy <ArrowRight size={16} />
        </a>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default Academy;
