import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Animated Background — floating code + candlesticks ── */
const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    // Floating code snippets
    const snippets = [
      'import openai', 'async def analyze():', 'signal.confidence > 0.85',
      'return "BUY"', 'pd.read_csv()', 'class AITrader:', 'await bot.run()',
      'scanner.detect(data)', 'self.model.predict()', 'np.array(prices)',
      'def backtest():', 'yield stream.next()', 'api_key = os.getenv()',
      'torch.tensor()', 'model.fit(X, y)', 'plt.plot(returns)',
    ];

    interface FloatItem {
      x: number; y: number; text: string; speed: number; opacity: number; size: number;
    }
    const items: FloatItem[] = [];
    const initItems = () => {
      items.length = 0;
      const count = Math.min(Math.floor(canvas.width / 60), 18);
      for (let i = 0; i < count; i++) {
        items.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: snippets[Math.floor(Math.random() * snippets.length)],
          speed: 0.15 + Math.random() * 0.3,
          opacity: 0.03 + Math.random() * 0.06,
          size: 9 + Math.random() * 3,
        });
      }
    };
    initItems();

    // Mini candlesticks in background
    const candleCount = 30;
    let candles: { o: number; c: number; h: number; l: number }[] = [];
    let price = 50;
    for (let i = 0; i < candleCount; i++) {
      const change = (Math.random() - 0.45) * 10;
      const o = price;
      const c = o + change;
      candles.push({ o, c, h: Math.max(o, c) + Math.random() * 5, l: Math.min(o, c) - Math.random() * 5 });
      price = c;
    }
    let lastCandleTime = 0;

    let raf: number;
    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Draw faint grid
      ctx.strokeStyle = 'rgba(255,255,255,0.015)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Candlestick chart — bottom half, very faint
      if (now - lastCandleTime > 2500) {
        lastCandleTime = now;
        candles.shift();
        const last = candles[candles.length - 1];
        const o2 = last.c;
        const c2 = o2 + (Math.random() - 0.45) * 10;
        candles.push({ o: o2, c: c2, h: Math.max(o2, c2) + Math.random() * 5, l: Math.min(o2, c2) - Math.random() * 5 });
      }

      let minP = Infinity, maxP = -Infinity;
      candles.forEach(c => { minP = Math.min(minP, c.l); maxP = Math.max(maxP, c.h); });
      const range = maxP - minP || 1;
      const chartTop = H * 0.55;
      const chartH = H * 0.35;
      const toY = (p: number) => chartTop + chartH - ((p - minP) / range) * chartH;
      const barW = W / candleCount;

      candles.forEach((c, i) => {
        const x = i * barW + barW / 2;
        const bull = c.c >= c.o;
        ctx.strokeStyle = bull ? 'rgba(0,255,136,0.06)' : 'rgba(255,60,80,0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x, toY(c.h)); ctx.lineTo(x, toY(c.l)); ctx.stroke();
        ctx.fillStyle = bull ? 'rgba(0,255,136,0.04)' : 'rgba(255,60,80,0.03)';
        const top = toY(Math.max(c.o, c.c));
        const bot = toY(Math.min(c.o, c.c));
        ctx.fillRect(x - barW * 0.3, top, barW * 0.6, Math.max(bot - top, 1));
      });

      // MA line
      ctx.strokeStyle = 'rgba(0,255,136,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      candles.forEach((_, i) => {
        let sum = 0, cnt = 0;
        for (let j = Math.max(0, i - 4); j <= i; j++) { sum += (candles[j].o + candles[j].c) / 2; cnt++; }
        const y = toY(sum / cnt);
        const x = i * barW + barW / 2;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Floating code snippets
      ctx.textAlign = 'left';
      items.forEach(item => {
        ctx.globalAlpha = item.opacity;
        ctx.fillStyle = '#00ff88';
        ctx.font = `${item.size}px "Share Tech Mono", monospace`;
        ctx.fillText(item.text, item.x, item.y);
        ctx.globalAlpha = 1;

        item.y -= item.speed;
        item.x += Math.sin(now * 0.001 + item.y * 0.01) * 0.15;
        if (item.y < -20) {
          item.y = H + 20;
          item.x = Math.random() * W;
          item.text = snippets[Math.floor(Math.random() * snippets.length)];
        }
      });

      // Gradient mesh glow — subtle
      const grad = ctx.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.35, W * 0.5);
      grad.addColorStop(0, 'rgba(0,255,136,0.015)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ── Compact Typing Terminal ── */
const TerminalCode = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentChar, setCurrentChar] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const codeLines = [
    { text: '// stackmode_ai.py — AI Scanner', color: 'rgba(255,255,255,0.3)' },
    { text: 'import openai, pandas as pd', color: '#00ff88' },
    { text: 'from stackfinder import Scanner', color: '#00ff88' },
    { text: '', color: '' },
    { text: 'class AITrader:', color: '#f0f0f0' },
    { text: '  def __init__(self, key):', color: '#f0f0f0' },
    { text: '    self.ai = openai.Client(key)', color: 'rgba(0,255,136,0.7)' },
    { text: '    self.scanner = Scanner("brk")', color: 'rgba(0,255,136,0.7)' },
    { text: '', color: '' },
    { text: '  async def analyze(self, tkr):', color: '#f0f0f0' },
    { text: '    sig = self.scanner.detect(tkr)', color: 'rgba(0,255,136,0.7)' },
    { text: '    if sig.confidence > 0.85:', color: '#f0f0f0' },
    { text: '      return "🟢 BUY SIGNAL"', color: '#00ff88' },
    { text: '', color: '' },
    { text: '>>> 🟢 BUY — Confidence: 92%', color: '#00ff88' },
  ];

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timeout = setTimeout(() => {
        setLines([]); setCurrentLine(0); setCurrentChar(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
    const line = codeLines[currentLine];
    if (line.text === '') {
      setLines(prev => [...prev, '']);
      setCurrentLine(prev => prev + 1); setCurrentChar(0);
      return;
    }
    if (currentChar <= line.text.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
        if (currentChar === line.text.length) {
          setLines(prev => [...prev, line.text]);
          setCurrentLine(prev => prev + 1); setCurrentChar(0);
        }
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine]);

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [lines, currentChar]);

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden" style={{
      border: '1px solid rgba(0,255,136,0.1)',
      background: 'rgba(4,4,10,0.7)',
      backdropFilter: 'blur(8px)',
    }}>
      <div className="flex items-center gap-2 px-3 py-1" style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,95,87,0.5)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,189,46,0.5)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(39,201,63,0.5)' }} />
        </div>
        <span className="text-[8px] ml-1" style={{ fontFamily: "'Share Tech Mono', monospace", color: 'rgba(255,255,255,0.2)' }}>
          stackmode_ai.py
        </span>
      </div>
      <div ref={containerRef} className="p-2.5 overflow-hidden" style={{ height: 160, fontFamily: "'Share Tech Mono', monospace", fontSize: 10, lineHeight: 1.55 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: codeLines[i]?.color || 'rgba(255,255,255,0.5)', minHeight: 16 }}>
            {line || '\u00A0'}
          </div>
        ))}
        {currentLine < codeLines.length && (
          <div style={{ color: codeLines[currentLine]?.color || '#f0f0f0' }}>
            {codeLines[currentLine].text.substring(0, currentChar)}
            <span className="inline-block w-[5px] h-[12px] ml-[1px] align-middle animate-pulse" style={{ background: 'rgba(0,255,136,0.7)' }} />
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
    canvas.width = 320; canvas.height = 70;

    let candles = Array.from({ length: 18 }, (_, i) => {
      const o = 40 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
      const c = o + (Math.random() - 0.4) * 12;
      return { o, c, h: Math.max(o, c) + Math.random() * 6, l: Math.min(o, c) - Math.random() * 6 };
    });
    let raf: number, lastUpdate = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      if (now - lastUpdate > 2000) {
        lastUpdate = now;
        candles.shift();
        const last = candles[candles.length - 1];
        const o = last.c, c = o + (Math.random() - 0.4) * 12;
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
      ctx.strokeStyle = 'rgba(0,255,136,0.25)'; ctx.lineWidth = 1; ctx.beginPath();
      candles.forEach((_, i) => {
        let sum = 0, cnt = 0;
        for (let j = Math.max(0, i - 3); j <= i; j++) { sum += (candles[j].o + candles[j].c) / 2; cnt++; }
        const x = i * barW + barW / 2;
        i === 0 ? ctx.moveTo(x, toY(sum / cnt)) : ctx.lineTo(x, toY(sum / cnt));
      });
      ctx.stroke();
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden" style={{
      border: '1px solid rgba(255,255,255,0.04)',
      background: 'rgba(4,4,10,0.5)',
      backdropFilter: 'blur(8px)',
    }}>
      <div className="flex items-center justify-between px-3 py-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <span className="text-[8px]" style={{ fontFamily: "'Share Tech Mono', monospace", color: 'rgba(255,255,255,0.2)' }}>STACKFINDER · LIVE</span>
        <span className="text-[8px] animate-pulse" style={{ fontFamily: "'Share Tech Mono', monospace", color: 'rgba(0,255,136,0.5)' }}>● LIVE</span>
      </div>
      <canvas ref={canvasRef} className="w-full" style={{ height: 70 }} />
    </div>
  );
};

export const AcademyHero = () => (
  <section className="relative flex items-center justify-center px-4 py-6 sm:py-16 overflow-hidden" style={{ background: '#04040a' }}>
    <HeroBackground />

    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none z-[5]" style={{
      backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
    }} />

    <div className="relative z-10 w-full max-w-4xl mx-auto">
      <div className="text-center mb-3 sm:mb-5">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 }} className="mb-2 sm:mb-3">
          <Link to="/">
            <img src="/images/sm-logo-new.png" alt="Stackmode Academy Christopher Robinson StackmodeChris" className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover mx-auto shadow-lg cursor-pointer" style={{ border: '2px solid rgba(0,255,136,0.2)', boxShadow: '0 0 20px rgba(0,255,136,0.08)' }} />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-2 sm:mb-3"
          style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.1)' }}>
          <Star size={11} style={{ color: '#00ff88', fill: '#00ff88' }} />
          <span className="text-[10px] font-medium" style={{ color: 'rgba(0,255,136,0.7)', fontFamily: "'Share Tech Mono', monospace" }}>Founded by Christopher Robinson</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight"
          style={{ color: '#f0f0f0', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
          STACKMODE ACADEMY — LEARN AI SOFTWARE, CODING, TRADING & ASSET STACKING
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm mb-3 sm:mb-4 max-w-lg mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}>
          Build software with AI. Learn to trade the markets. Stack your assets and build wealth. Zero experience required.
        </motion.p>
      </div>

      {/* CTA — always visible, above fold on mobile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-center mb-5 sm:mb-8">
        <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-lg transition-all text-sm hover:scale-[1.02]"
          style={{
            background: 'rgba(0,255,136,0.08)',
            color: '#00ff88',
            border: '1.5px solid rgba(0,255,136,0.3)',
            boxShadow: '0 0 30px rgba(0,255,136,0.08)',
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.1em',
            fontSize: 17,
          }}>
          <GraduationCap size={18} />
          JOIN THE STACKMODE ACADEMY — $50/MO
        </a>
        <p className="mt-2 text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>4.9★ rating · Cancel anytime</p>
      </motion.div>

      {/* Terminal + Chart — compact, shown on all screens */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
        <TerminalCode />
        <div className="flex flex-col justify-center gap-2">
          <MiniChart />
          <div className="flex flex-wrap justify-center gap-1.5 mt-1">
            {['AI Coding', 'Stock Trading', 'Crypto', 'Web Dev', 'Automation'].map(label => (
              <span key={label} className="inline-flex items-center gap-1 text-[8px] px-2 py-0.5 rounded-full" style={{
                color: 'rgba(0,255,136,0.5)',
                background: 'rgba(0,255,136,0.03)',
                border: '1px solid rgba(0,255,136,0.07)',
                fontFamily: "'Share Tech Mono', monospace",
              }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
