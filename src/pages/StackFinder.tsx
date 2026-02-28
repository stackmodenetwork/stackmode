import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';

const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

/* ═══ TICKER DATA ═══ */
const tickers = [
  { symbol: 'AAPL', price: '189.42', change: '+2.34%', up: true },
  { symbol: 'TSLA', price: '248.91', change: '+5.12%', up: true },
  { symbol: 'NVDA', price: '875.30', change: '+3.87%', up: true },
  { symbol: 'AMZN', price: '178.22', change: '-1.05%', up: false },
  { symbol: 'MSFT', price: '415.60', change: '+1.28%', up: true },
  { symbol: 'META', price: '505.75', change: '+2.91%', up: true },
  { symbol: 'GOOG', price: '141.80', change: '-0.42%', up: false },
  { symbol: 'AMD', price: '172.45', change: '+4.56%', up: true },
  { symbol: 'PLTR', price: '24.80', change: '+6.12%', up: true },
  { symbol: 'SOFI', price: '8.92', change: '-2.30%', up: false },
];

/* ═══ STOCK TABLE DATA ═══ */
const stockRows = [
  { ticker: 'NVDA', name: 'NVIDIA Corp', sector: 'Technology', score: 94, signal: 'STRONG BUY', color: '#39ff14' },
  { ticker: 'PLTR', name: 'Palantir Tech', sector: 'Technology', score: 88, signal: 'BUY', color: '#39ff14' },
  { ticker: 'TSLA', name: 'Tesla Inc', sector: 'Auto/EV', score: 76, signal: 'HOLD', color: '#ffd700' },
  { ticker: 'AMZN', name: 'Amazon.com', sector: 'E-Commerce', score: 82, signal: 'BUY', color: '#39ff14' },
  { ticker: 'SOFI', name: 'SoFi Tech', sector: 'Fintech', score: 61, signal: 'WATCH', color: '#ff6b1a' },
];

/* ═══ TICKER MARQUEE ═══ */
const TickerMarquee = () => (
  <div className="relative z-10 overflow-hidden" style={{ background: 'rgba(4,6,14,0.95)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}>
    <div className="flex animate-marquee py-2" style={{ width: 'max-content' }}>
      {[...Array(3)].flatMap((_, g) =>
        tickers.map((t, i) => (
          <span key={`${g}-${i}`} className="flex items-center gap-2 px-4 text-xs" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: '#e8f4ff', fontWeight: 700 }}>{t.symbol}</span>
            <span style={{ color: 'rgba(232,244,255,0.4)' }}>${t.price}</span>
            <span style={{ color: t.up ? '#39ff14' : '#ff4444', fontWeight: 600 }}>{t.change}</span>
          </span>
        ))
      )}
    </div>
  </div>
);

/* ═══ FEATURE CARDS ═══ */
const features = [
  { tag: '#FILTER', title: 'Smart Filters', desc: 'Screen thousands of stocks by sector, market cap, volume, and momentum — instantly.', code: 'filter(sector="TECH", cap>10B, vol>1M)' },
  { tag: '#DATA', title: 'Real-Time Data', desc: 'Live price feeds, earnings calendars, and institutional flow data at your fingertips.', code: 'stream(feed="LIVE", latency<50ms)' },
  { tag: '#AI', title: 'AI Insights', desc: 'Machine learning models score each stock on momentum, sentiment, and risk.', code: 'ai.score(model="v3", confidence>0.85)' },
];

/* ═══ DASHBOARD PREVIEW ═══ */
const DashboardPreview = () => {
  const [activeRow, setActiveRow] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveRow(p => (p + 1) % stockRows.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="terminal-card overflow-hidden" style={{ boxShadow: '0 0 80px rgba(0,229,255,0.08)' }}>
      <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
        <span className="ml-3 text-[10px] tracking-[0.2em]" style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff' }}>
          STACKFINDER v2.1 — MARKET SCANNER
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[9px]" style={{ fontFamily: "'Orbitron', sans-serif", color: '#39ff14' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#39ff14' }} />
          LIVE
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(0,229,255,0.08)' }}>
              {['TICKER', 'NAME', 'SECTOR', 'SCORE', 'SIGNAL'].map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-[10px] tracking-wider" style={{ color: 'rgba(0,229,255,0.5)', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stockRows.map((row, i) => (
              <tr key={row.ticker}
                className="transition-colors"
                style={{
                  background: i === activeRow ? 'rgba(0,229,255,0.05)' : 'transparent',
                  borderBottom: '1px solid rgba(0,229,255,0.04)',
                }}>
                <td className="px-4 py-2.5 font-bold" style={{ color: '#e8f4ff' }}>{row.ticker}</td>
                <td className="px-4 py-2.5" style={{ color: 'rgba(232,244,255,0.5)' }}>{row.name}</td>
                <td className="px-4 py-2.5" style={{ color: 'rgba(232,244,255,0.3)' }}>{row.sector}</td>
                <td className="px-4 py-2.5 font-bold" style={{ color: row.color }}>{row.score}</td>
                <td className="px-4 py-2.5">
                  <span className="text-[9px] px-2 py-0.5 rounded" style={{
                    background: `${row.color}15`,
                    color: row.color,
                    border: `1px solid ${row.color}30`,
                  }}>{row.signal}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ═══ WAITLIST FORM ═══ */
const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="terminal-card p-6 sm:p-8 max-w-lg mx-auto">
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
      </div>
      <h3 className="text-sm mb-2" style={{ fontFamily: "'Press Start 2P', monospace", color: '#00e5ff' }}>
        JOIN THE BETA
      </h3>
      <p className="text-sm mb-5 text-muted-foreground">Get early access to StackFinder when we launch.</p>
      {submitted ? (
        <p className="text-sm neon-green" style={{ fontFamily: "'Orbitron', sans-serif" }}>✓ You're on the list. We'll be in touch.</p>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-3 py-2 rounded text-sm"
            style={{
              background: 'rgba(0,229,255,0.05)',
              border: '1px solid rgba(0,229,255,0.15)',
              color: '#e8f4ff',
              fontFamily: "'Orbitron', sans-serif",
              outline: 'none',
            }}
          />
          <button
            onClick={() => { if (email.includes('@')) setSubmitted(true); }}
            className="btn-cta text-xs px-4"
          >
            [ SUBMIT ]
          </button>
        </div>
      )}
    </div>
  );
};

/* ═══ MAIN PAGE ═══ */
const StackFinder = () => (
  <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
    <Helmet>
      <title>StackFinder | AI-Powered Stock Scanner & Market Analysis Tool</title>
      <meta name="description" content="StackFinder by Stackmode — AI-powered stock screening, real-time market data, and smart filters. Stop guessing. Start finding winning investments." />
      <meta name="keywords" content="stackfinder, stock scanner, ai stock analysis, market screener, stackmode, christopher robinson, investing tool" />
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://stackmode.net/stackfinder" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net/stackfinder" />
      <meta property="og:title" content="StackFinder — AI Stock Scanner by Stackmode" />
      <meta property="og:description" content="Find winning stocks faster. AI-powered screening, real-time data, and institutional flow insights." />
      <meta property="og:site_name" content="Stackmode.net" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChristopherRCEO" />
    </Helmet>

    <AnimatedBackground />
    <SiteNav />

    <div className="sr-only">
      <h1>StackFinder — AI-Powered Stock Scanner & Market Analysis by Christopher Robinson</h1>
    </div>

    {/* Ticker */}
    <div className="pt-14">
      <TickerMarquee />
    </div>

    {/* Hero */}
    <section className="relative z-10 py-16 sm:py-24 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
        style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(24px, 5vw, 48px)', color: '#00e5ff', textShadow: '0 0 30px rgba(0,229,255,0.4)' }}
      >
        STACKFINDER
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg sm:text-xl mb-3"
        style={{ fontFamily: "'Orbitron', sans-serif", color: '#e8f4ff', fontWeight: 600 }}
      >
        Stop Guessing. Start Finding.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-muted-foreground"
      >
        Proprietary stock screening software with AI-powered insights, real-time data feeds, and smart filters — built for serious investors who want an edge.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-xs sm:text-sm">
          [ ACCESS STACKFINDER → ]
        </a>
        <a href="#waitlist" className="btn-ghost text-xs sm:text-sm">[ JOIN BETA WAITLIST ]</a>
      </motion.div>
    </section>

    {/* Feature Cards */}
    <section className="relative z-10 py-12 px-4">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 sm:gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="terminal-card p-5"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
            </div>
            <span className="text-[9px] tracking-[0.2em] mb-2 block" style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff' }}>{f.tag}</span>
            <h3 className="text-sm mb-2" style={{ fontFamily: "'Press Start 2P', monospace", color: '#e8f4ff' }}>{f.title}</h3>
            <p className="text-sm mb-4 text-muted-foreground">{f.desc}</p>
            <div className="rounded px-3 py-1.5 text-[10px]" style={{
              background: 'rgba(0,229,255,0.05)',
              border: '1px solid rgba(0,229,255,0.1)',
              fontFamily: "'Orbitron', sans-serif",
              color: '#39ff14',
            }}>
              &gt; {f.code}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Dashboard Preview */}
    <section className="relative z-10 py-16 sm:py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs sm:text-sm mb-8 neon-cyan"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        DASHBOARD PREVIEW
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>

    {/* Waitlist */}
    <section id="waitlist" className="relative z-10 py-16 sm:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <WaitlistForm />
      </motion.div>
    </section>

    <SiteFooter />
  </div>
);

export default StackFinder;
