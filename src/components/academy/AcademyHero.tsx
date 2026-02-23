import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Typing Terminal ── */
const TerminalCode = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentChar, setCurrentChar] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const codeLines = [
    { text: '// stackmode_ai.py — AI Trading Scanner', color: 'rgba(255,255,255,0.3)' },
    { text: 'import openai, pandas as pd', color: '#00ff88' },
    { text: 'from stackfinder import Scanner', color: '#00ff88' },
    { text: '', color: '' },
    { text: 'class AITrader:', color: '#f0f0f0' },
    { text: '  def __init__(self, api_key):', color: '#f0f0f0' },
    { text: '    self.ai = openai.Client(api_key)', color: 'rgba(0,255,136,0.7)' },
    { text: '    self.scanner = Scanner("breakout")', color: 'rgba(0,255,136,0.7)' },
    { text: '', color: '' },
    { text: '  async def analyze(self, ticker):', color: '#f0f0f0' },
    { text: '    data = pd.read_csv(f"{ticker}.csv")', color: 'rgba(0,255,136,0.7)' },
    { text: '    signal = self.scanner.detect(data)', color: 'rgba(0,255,136,0.7)' },
    { text: '    if signal.confidence > 0.85:', color: '#f0f0f0' },
    { text: '      return "🟢 BUY SIGNAL"', color: '#00ff88' },
    { text: '', color: '' },
    { text: 'bot = AITrader(os.getenv("KEY"))', color: 'rgba(0,255,136,0.6)' },
    { text: 'result = await bot.analyze("NVDA")', color: 'rgba(0,255,136,0.6)' },
    { text: '>>> 🟢 BUY SIGNAL — Confidence: 92%', color: '#00ff88' },
  ];

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const line = codeLines[currentLine];
    if (line.text === '') {
      setLines(prev => [...prev, '']);
      setCurrentLine(prev => prev + 1);
      setCurrentChar(0);
      return;
    }

    if (currentChar <= line.text.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
        if (currentChar === line.text.length) {
          setLines(prev => [...prev, line.text]);
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }
      }, 22);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, currentChar]);

  return (
    <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden" style={{
      border: '1px solid rgba(0,255,136,0.12)',
      background: 'rgba(0,0,0,0.5)',
    }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: 'rgba(0,255,136,0.05)', borderBottom: '1px solid rgba(0,255,136,0.08)' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,87,0.6)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,189,46,0.6)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(39,201,63,0.6)' }} />
        </div>
        <span className="text-[9px] ml-2" style={{ fontFamily: "'Share Tech Mono', monospace", color: 'rgba(0,255,136,0.4)' }}>
          stackmode_ai.py — AI Trading Bot
        </span>
      </div>
      {/* Code area */}
      <div ref={containerRef} className="p-3 overflow-hidden" style={{ height: 220, fontFamily: "'Share Tech Mono', monospace", fontSize: 11, lineHeight: 1.6 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: codeLines[i]?.color || 'rgba(255,255,255,0.5)', minHeight: 18 }}>
            {line || '\u00A0'}
          </div>
        ))}
        {currentLine < codeLines.length && (
          <div style={{ color: codeLines[currentLine]?.color || '#f0f0f0' }}>
            {codeLines[currentLine].text.substring(0, currentChar)}
            <span className="inline-block w-[6px] h-[14px] ml-[1px] align-middle animate-pulse" style={{ background: 'rgba(0,255,136,0.7)' }} />
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Mini Candlestick Chart ── */
const MiniChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 320;
    canvas.height = 80;

    let candles = Array.from({ length: 18 }, (_, i) => {
      const o = 40 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
      const c = o + (Math.random() - 0.4) * 12;
      return { o, c, h: Math.max(o, c) + Math.random() * 6, l: Math.min(o, c) - Math.random() * 6 };
    });

    let raf: number;
    let lastUpdate = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (now - lastUpdate > 2000) {
        lastUpdate = now;
        candles.shift();
        const last = candles[candles.length - 1];
        const o = last.c;
        const c = o + (Math.random() - 0.4) * 12;
        candles.push({ o, c, h: Math.max(o, c) + Math.random() * 6, l: Math.min(o, c) - Math.random() * 6 });
      }

      let minP = Infinity, maxP = -Infinity;
      candles.forEach(c => { minP = Math.min(minP, c.l); maxP = Math.max(maxP, c.h); });
      const range = maxP - minP || 1;
      const toY = (p: number) => H - ((p - minP) / range) * H * 0.85 - H * 0.07;
      const barW = W / candles.length;

      candles.forEach((c, i) => {
        const x = i * barW + barW / 2;
        const bull = c.c >= c.o;
        ctx.strokeStyle = bull ? 'rgba(0,255,136,0.35)' : 'rgba(255,60,80,0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x, toY(c.h)); ctx.lineTo(x, toY(c.l)); ctx.stroke();
        ctx.fillStyle = bull ? 'rgba(0,255,136,0.15)' : 'rgba(255,60,80,0.1)';
        const top = toY(Math.max(c.o, c.c));
        const bot = toY(Math.min(c.o, c.c));
        ctx.fillRect(x - barW * 0.3, top, barW * 0.6, Math.max(bot - top, 1));
      });

      // MA line
      ctx.strokeStyle = 'rgba(0,255,136,0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      candles.forEach((_, i) => {
        let sum = 0, cnt = 0;
        for (let j = Math.max(0, i - 3); j <= i; j++) { sum += (candles[j].o + candles[j].c) / 2; cnt++; }
        const y = toY(sum / cnt);
        const x = i * barW + barW / 2;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.stroke();
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto mt-3 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(0,255,136,0.08)', background: 'rgba(0,0,0,0.3)' }}>
      <div className="flex items-center justify-between px-3 py-1" style={{ borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
        <span className="text-[8px]" style={{ fontFamily: "'Share Tech Mono', monospace", color: 'rgba(0,255,136,0.4)' }}>STACKFINDER · LIVE SCANNER</span>
        <span className="text-[8px] animate-pulse" style={{ fontFamily: "'Share Tech Mono', monospace", color: 'rgba(0,255,136,0.5)' }}>● LIVE</span>
      </div>
      <canvas ref={canvasRef} className="w-full" style={{ height: 80 }} />
    </div>
  );
};

export const AcademyHero = () => (
  <section className="relative flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden" style={{ background: '#080c08' }}>
    {/* Subtle grid — very faint */}
    <div className="absolute inset-0 opacity-[0.025]" style={{
      backgroundImage: 'linear-gradient(rgba(0,255,136,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.2) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
    }} />
    {/* Subtle radial glow */}
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(0,255,136,0.04) 0%, transparent 70%)',
    }} />

    <div className="relative z-10 w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 }} className="mb-3">
          <Link to="/">
            <img src="/images/sm-logo-new.png" alt="Stackmode Academy Christopher Robinson StackmodeChris" className="w-14 h-14 rounded-full object-cover mx-auto shadow-lg cursor-pointer" style={{ border: '2px solid rgba(0,255,136,0.25)', boxShadow: '0 0 16px rgba(0,255,136,0.1)' }} />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4"
          style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)' }}>
          <Star size={11} style={{ color: '#00ff88', fill: '#00ff88' }} />
          <span className="text-[10px] font-medium" style={{ color: 'rgba(0,255,136,0.8)', fontFamily: "'Share Tech Mono', monospace" }}>Founded by Christopher Robinson</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
          style={{ color: '#f0f0f0', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
          STACKMODE ACADEMY — LEARN AI SOFTWARE, TRADING & ASSET STACKING
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm mb-5 max-w-lg mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'DM Sans', sans-serif" }}>
          Build software with AI. Learn to trade the markets. Stack your assets and build wealth. Zero experience required.
        </motion.p>
      </div>

      {/* Terminal + Chart side by side on desktop */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <TerminalCode />
        <div className="flex flex-col justify-center">
          <MiniChart />
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {['AI Coding', 'Stock Trading', 'Crypto', 'Web Dev', 'Automation'].map(label => (
              <span key={label} className="inline-flex items-center gap-1 text-[9px] px-2.5 py-1 rounded-full" style={{
                color: 'rgba(0,255,136,0.7)',
                background: 'rgba(0,255,136,0.04)',
                border: '1px solid rgba(0,255,136,0.1)',
                fontFamily: "'Share Tech Mono', monospace",
              }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center">
        <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-lg transition-all text-sm hover:scale-[1.02]"
          style={{
            background: 'rgba(0,255,136,0.12)',
            color: '#00ff88',
            border: '1.5px solid rgba(0,255,136,0.35)',
            boxShadow: '0 0 20px rgba(0,255,136,0.1)',
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.1em',
            fontSize: 17,
          }}>
          <GraduationCap size={18} />
          JOIN THE STACKMODE ACADEMY — $50/MO
        </a>
        <p className="mt-3 text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>4.9★ rating · Cancel anytime</p>
      </motion.div>
    </div>
  </section>
);
