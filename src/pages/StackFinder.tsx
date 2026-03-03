import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

/* ═══ TICKER DATA ═══ */
const tickers = [
  { symbol: 'NVDA', price: '875.30', change: '+3.87%', up: true },
  { symbol: 'TSLA', price: '248.91', change: '+5.12%', up: true },
  { symbol: 'AAPL', price: '189.42', change: '+2.34%', up: true },
  { symbol: 'AMD', price: '172.45', change: '+4.56%', up: true },
  { symbol: 'PLTR', price: '24.80', change: '+6.12%', up: true },
  { symbol: 'META', price: '505.75', change: '+2.91%', up: true },
  { symbol: 'MSFT', price: '415.60', change: '+1.28%', up: true },
  { symbol: 'AMZN', price: '178.22', change: '-1.05%', up: false },
  { symbol: 'GOOG', price: '141.80', change: '-0.42%', up: false },
  { symbol: 'SOFI', price: '8.92', change: '-2.30%', up: false },
];

/* ═══ SCANNER TABLE DATA ═══ */
const scannerRows = [
  { ticker: 'NVDA', price: '$875.30', change: '+3.87%', changeUp: true, score: 94, signal: 'STRONG BUY', signalColor: '#28c840' },
  { ticker: 'PLTR', price: '$24.80', change: '+6.12%', changeUp: true, score: 88, signal: 'BUY', signalColor: '#28c840' },
  { ticker: 'TSLA', price: '$248.91', change: '+5.12%', changeUp: true, score: 76, signal: 'HOLD', signalColor: '#666' },
  { ticker: 'AMD', price: '$172.45', change: '+4.56%', changeUp: true, score: 82, signal: 'BUY', signalColor: '#28c840' },
  { ticker: 'SOFI', price: '$8.92', change: '-2.30%', changeUp: false, score: 41, signal: 'AVOID', signalColor: '#ff5f57' },
];

/* ═══ GATE ROWS ═══ */
const gateRows = [
  { ticker: 'MSFT', fit: '94%', stack: '8.7', signal: 'BUY' },
  { ticker: 'AAPL', fit: '82%', stack: '7.4', signal: 'HOLD' },
  { ticker: 'GOOG', fit: '91%', stack: '8.5', signal: 'BUY' },
  { ticker: 'AMZN', fit: '88%', stack: '8.1', signal: 'BUY' },
];

/* ═══ TICKER MARQUEE ═══ */
const TickerMarquee = () => (
  <div className="overflow-hidden border-b border-border" style={{ background: '#060606' }}>
    <div className="flex animate-marquee py-2" style={{ width: 'max-content' }}>
      {[...Array(3)].flatMap((_, g) =>
        tickers.map((t, i) => (
          <span key={`${g}-${i}`} className="flex items-center gap-2 px-4 text-xs font-medium">
            <span className="font-bold text-foreground">{t.symbol}</span>
            <span className="text-muted-foreground">${t.price}</span>
            <span style={{ color: t.up ? '#28c840' : '#ff5f57' }} className="font-semibold">{t.change}</span>
          </span>
        ))
      )}
    </div>
  </div>
);

/* ═══ MAIN PAGE ═══ */
const StackFinder = () => (
  <div className="bg-background text-foreground" style={{ overflowX: 'hidden' }}>
    <Helmet>
      <title>Stackfinder | Stackmode | Christopher Robinson CEO</title>
      <meta name="description" content="Stackmode.net by Christopher Robinson CEO. Stackfinder AI stock screener with real-time data, smart filters, and AI insights for investments." />
      <meta name="keywords" content="Christopher Robinson, Christopher Robinson CEO, Stackmodechris, Stackfinder, AI stock screener, stock trading, investing, AI trading, real-time data, market scanner" />
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://stackmode.net/stackfinder" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net/stackfinder" />
      <meta property="og:title" content="Stackfinder — AI-Powered Stock Screening | Stackmode" />
      <meta property="og:description" content="Proprietary AI stock screener with real-time data and smart filters by Christopher Robinson CEO." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChristopherRCEO" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Person", "@id": "https://stackmode.net/#christopher-robinson", "name": "Christopher Robinson", "alternateName": "Stackmodechris", "jobTitle": "CEO" },
          { "@type": "Organization", "@id": "https://stackmode.net/#organization", "name": "Stackmode Network LLC", "url": "https://stackmode.net" },
          { "@type": "WebSite", "@id": "https://stackmode.net/#website", "url": "https://stackmode.net", "name": "Stackmode.net" }
        ]
      })}</script>
    </Helmet>

    <TickerMarquee />
    <SiteNav />

    <h1 className="sr-only">Stackfinder — AI-Powered Stock Screening by Christopher Robinson CEO</h1>

    {/* ═══ HERO ═══ */}
    <section className="section text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="section-header__title" style={{ letterSpacing: '0.05em' }}
      >
        STACKFINDER
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-xl sm:text-2xl font-semibold italic text-foreground mb-3"
      >
        Stop Guessing. Start Finding.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="section-header__subtitle mb-8"
      >
        Proprietary stock screening software with AI-powered insights, real-time data feeds, and smart filters — built for serious investors who want an edge.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Access Stackfinder →</a>
      </motion.div>
    </section>

    {/* ═══ FEATURES ═══ */}
    <section className="section">
      <div className="container">
        <div className="grid-3">
          {/* Smart Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card">
            <div className="mb-4">
              <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Smart Filters</h3>
            <p className="text-sm text-muted-foreground">Screen thousands of stocks by sector, market cap, volume, and momentum — instantly.</p>
          </motion.div>

          {/* Real-Time Data */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card">
            <div className="mb-4">
              <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Real-Time Data</h3>
            <p className="text-sm text-muted-foreground mb-4">Live price feeds, earnings calendars, and institutional flow data at your fingertips.</p>
            <div className="rounded-lg overflow-hidden" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
                <span className="ml-2 text-[10px] text-muted-foreground">feed.js</span>
              </div>
              <div className="p-3 font-mono text-xs space-y-1">
                <div><span className="text-muted-foreground">$ </span><span className="text-foreground font-semibold">stream</span> --live NVDA TSLA</div>
                <div style={{ color: '#28c840' }}>✓ NVDA $875.30 ↑3.87%</div>
                <div style={{ color: '#28c840' }}>✓ TSLA $248.91 ↑5.12%</div>
              </div>
            </div>
          </motion.div>

          {/* AI Insights */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card">
            <div className="mb-4">
              <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
                <circle cx="12" cy="15" r="2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">AI Insights</h3>
            <p className="text-sm text-muted-foreground mb-4">Machine learning models score each stock on momentum, sentiment, and risk.</p>
            <div className="rounded-lg overflow-hidden" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
                <span className="ml-2 text-[10px] text-muted-foreground">ai-score.py</span>
              </div>
              <div className="p-3 font-mono text-xs space-y-1">
                <div><span className="text-muted-foreground">{'>>> '}</span><span className="text-foreground font-semibold">score</span>("NVDA")</div>
                <div style={{ color: '#28c840' }}>✓ Score: 94 — STRONG BUY</div>
                <div className="text-muted-foreground">→ Momentum: A+ | Sentiment: A</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI TRADING CHAT DEMO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 max-w-[800px] mx-auto"
        >
          <div className="rounded-xl overflow-hidden" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
              <span className="ml-3 text-xs font-semibold text-muted-foreground tracking-wide">Stackfinder AI Agent</span>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="rounded-xl px-4 py-3 text-sm max-w-[80%]" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  Scan for tech stocks with extreme momentum and &gt;20% revenue growth this quarter.
                </div>
              </div>
              {/* Bot response */}
              <div className="flex justify-start">
                <div className="rounded-xl px-4 py-3 text-sm max-w-[85%]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <strong>Scanning 8,400+ specific AI and Tech equities...</strong><br /><br />
                  Top Match Found: <strong>NVDA</strong><br />
                  <span style={{ color: '#00ff88', fontWeight: 600 }}>+265% YoY Revenue Growth</span><br /><br />
                  <strong>Momentum Chart:</strong>
                  <div className="flex items-end gap-2 mt-3 h-[160px]">
                    <div className="w-10 rounded-t" style={{ height: '40px', background: 'rgba(255,255,255,0.15)' }} />
                    <div className="w-10 rounded-t" style={{ height: '65px', background: 'rgba(255,255,255,0.15)' }} />
                    <div className="w-10 rounded-t" style={{ height: '110px', background: 'rgba(255,255,255,0.15)' }} />
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
                      className="w-10 rounded-t origin-bottom"
                      style={{ height: '160px', background: '#28c840' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══ MARKET SCANNER ═══ */}
    <section className="section section--glass">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Market Scanner Preview</h2>
          <p className="section-header__subtitle">See how Stackfinder ranks top opportunities in real-time.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="overflow-x-auto mb-8"
        >
          <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['Ticker', 'Price', 'Change', 'AI Score', 'Signal'].map(h => (
                  <th key={h} className="text-left p-4 text-muted-foreground font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scannerRows.map((row, i) => (
                <tr key={row.ticker} style={{ borderBottom: i < scannerRows.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <td className="p-4 font-bold text-foreground">{row.ticker}</td>
                  <td className="p-4 text-foreground">{row.price}</td>
                  <td className="p-4 font-medium" style={{ color: row.changeUp ? '#28c840' : '#ff5f57' }}>{row.change}</td>
                  <td className="p-4 font-semibold text-foreground">{row.score}</td>
                  <td className="p-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded" style={{
                      background: row.signalColor,
                      color: row.signalColor === '#666' ? '#fff' : '#000',
                    }}>{row.signal}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>

    {/* ═══ PREMIUM UNLOCK GATE ═══ */}
    <section className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Blurred scrolling rows behind */}
      <div className="relative overflow-hidden" style={{ height: '300px', filter: 'blur(6px)', opacity: 0.5, maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}>
        <div className="flex flex-col gap-4 p-5 animate-gate-scroll">
          {[...gateRows, ...gateRows].map((row, i) => (
            <div key={i} className="flex justify-between font-mono text-xs sm:text-sm p-4 rounded-md" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span>{row.ticker}</span>
              <span>AI SYSTEM FIT: {row.fit}</span>
              <span>STACK SCORE: {row.stack}</span>
              <span>SIGNAL: {row.signal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[480px] p-8 sm:p-10 rounded-xl text-center" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}>
        <svg className="w-8 h-8 mx-auto mb-6 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground uppercase mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Unlock Premium Stackfinder</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Get AI stack scores, buy/sell signals, sector fit ratings, and your personalized asset roadmap.</p>
        <ul className="text-left space-y-3 mb-6">
          {['Full AI Stack Score Breakdown', 'Personalized Asset Roadmap', 'Real-Time Signal Alerts'].map(f => (
            <li key={f} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg w-full justify-center mb-4">
          Start Premium — Subscribe Now →
        </a>
        <p className="text-xs text-muted-foreground" style={{ opacity: 0.5 }}>Premium members get full access · Cancel anytime</p>
      </div>
    </section>

    {/* ═══ CTA ═══ */}
    <section className="section text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="section-header__title mb-3">Ready to Trade Smarter?</h2>
        <p className="section-header__subtitle mb-8">Join Stackmode Academy for full access to Stackfinder, AI trading signals, and live market sessions.</p>
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Join the Academy →</a>
      </motion.div>
    </section>

    <SiteFooter />
  </div>
);

export default StackFinder;
