import { useEffect, useRef, useState } from 'react';

// ─── Subtle candlestick chart + code rain background ───
const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);

    // Generate candlestick data
    const candleCount = Math.floor(w / 28);
    const candles: { x: number; open: number; close: number; high: number; low: number }[] = [];
    let price = h * 0.5;
    for (let i = 0; i < candleCount; i++) {
      const change = (Math.random() - 0.48) * 30;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 15;
      const low = Math.min(open, close) - Math.random() * 15;
      candles.push({ x: i * 28 + 14, open, close, high, low });
      price = close;
    }

    // Slow falling code characters
    const cols = Math.floor(w / 50);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * h / 20);
    const chars = '{}[]<>=>$01'.split('');

    let raf: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(3, 3, 5, 0.04)';
      ctx.fillRect(0, 0, w, h);

      // Draw candlesticks (very subtle)
      candles.forEach(c => {
        const green = c.close < c.open;
        const color = green ? 'rgba(0, 229, 255, 0.04)' : 'rgba(255, 107, 43, 0.04)';
        const wickColor = green ? 'rgba(0, 229, 255, 0.025)' : 'rgba(255, 107, 43, 0.025)';

        // Wick
        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(c.x, c.high);
        ctx.lineTo(c.x, c.low);
        ctx.stroke();

        // Body
        ctx.fillStyle = color;
        const top = Math.min(c.open, c.close);
        const bodyH = Math.max(Math.abs(c.close - c.open), 2);
        ctx.fillRect(c.x - 5, top, 10, bodyH);
      });

      // Slow code rain
      for (let i = 0; i < cols; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 50;
        const y = drops[i] * 50;
        const isLeft = x < w / 2;
        ctx.fillStyle = isLeft ? 'rgba(0, 229, 255, 0.035)' : 'rgba(255, 107, 43, 0.035)';
        ctx.font = '11px "Share Tech Mono", monospace';
        ctx.fillText(char, x, y);
        if (y > h && Math.random() > 0.99) drops[i] = 0;
        drops[i] += 0.15;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

// ─── Panel Card ───
interface PanelProps {
  title: string;
  tagline: string;
  features: string[];
  href: string;
  accentColor: string;
  accentGradient: string;
  index: string;
  hovered: boolean;
  onHover: (h: boolean) => void;
  otherHovered: boolean;
  side: 'left' | 'right';
  logoSrc: string;
}

const Panel = ({ title, tagline, features, href, accentColor, accentGradient, index, hovered, onHover, otherHovered, side, logoSrc }: PanelProps) => {
  const isExternal = href.startsWith('http');
  const shrink = otherHovered && !hovered;

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-cursor-color={accentColor}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative flex flex-col justify-between p-6 sm:p-8 md:p-12 transition-all duration-700 ease-out no-underline overflow-hidden group min-h-[45vh] md:min-h-0"
      style={{
        flex: hovered ? 1.8 : shrink ? 0.5 : 1,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at ${side === 'left' ? 'bottom left' : 'bottom right'}, ${accentColor}${hovered ? '14' : '08'} 0%, transparent 60%)`,
          opacity: shrink ? 0.3 : 1,
        }}
      />

      {/* Vertical divider line */}
      {side === 'left' && (
        <div className="absolute top-[10%] right-0 h-[80%] w-[1px] hidden md:block"
          style={{ background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)` }} />
      )}

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 transition-all duration-500"
        style={{ borderColor: hovered ? `${accentColor}60` : `${accentColor}15` }} />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 transition-all duration-500"
        style={{ borderColor: hovered ? `${accentColor}60` : `${accentColor}15` }} />

      {/* Logo + Index */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logoSrc}
            alt={title}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-all duration-500"
            style={{
              filter: hovered ? `drop-shadow(0 0 20px ${accentColor}40)` : 'none',
            }}
          />
        </div>
        <span
          className="text-[60px] sm:text-[80px] md:text-[100px] font-bold leading-none transition-all duration-500 select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: 'transparent',
            WebkitTextStroke: `1px ${accentColor}${hovered ? '25' : '08'}`,
          }}
        >
          {index}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map(f => (
            <span
              key={f}
              className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-3 py-1 transition-all duration-300"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: `${accentColor}90`,
                border: `1px solid ${accentColor}20`,
                background: hovered ? `${accentColor}0A` : 'transparent',
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] leading-[0.9] mb-3 transition-all duration-500"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            background: hovered ? accentGradient : 'none',
            color: hovered ? 'transparent' : 'rgba(255,255,255,0.85)',
            WebkitBackgroundClip: hovered ? 'text' : 'unset',
            WebkitTextFillColor: hovered ? 'transparent' : 'rgba(255,255,255,0.85)',
            textShadow: hovered ? 'none' : 'none',
          }}
        >
          {title}
        </h2>

        {/* Tagline */}
        <p
          className="text-xs sm:text-sm max-w-[320px] leading-relaxed mb-6 transition-colors duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            color: hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)',
          }}
        >
          {tagline}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <span
            className="text-xs tracking-[0.25em] uppercase transition-all duration-300"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: hovered ? accentColor : 'rgba(255,255,255,0.3)',
            }}
          >
            ENTER
          </span>
          <div
            className="h-[1px] transition-all duration-500"
            style={{
              width: hovered ? 60 : 30,
              background: hovered ? accentGradient : 'rgba(255,255,255,0.15)',
            }}
          />
          <span
            className="text-xs transition-all duration-300"
            style={{ color: hovered ? accentColor : 'rgba(255,255,255,0.15)' }}
          >
            →
          </span>
        </div>
      </div>
    </a>
  );
};

// ─── Split Hero ───
const SplitHero = () => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col" style={{ background: '#030305' }}>
      <TechBackground />

      {/* Scanline */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)' }} />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#C9A84C' }} />
          <span className="text-[10px] tracking-[0.3em] text-white/25" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            STACKMODE.NET
          </span>
        </div>
        <h1 className="text-sm sm:text-base tracking-[0.3em] text-white/40" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          CHOOSE YOUR PATH
        </h1>
        <span className="text-[10px] tracking-[0.2em] text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          2025
        </span>
      </header>

      {/* Panels */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row">
        <Panel
          side="left"
          title="STACKMODE ACADEMY"
          tagline="Learn to code with AI, create content that sells, and invest to multiply. The complete system for building real wealth."
          features={['AI CODE', 'CONTENT', 'TRADING']}
          href="/academy"
          accentColor="#00E5FF"
          accentGradient="linear-gradient(135deg, #00E5FF, #0099CC)"
          index="01"
          hovered={leftHover}
          onHover={setLeftHover}
          otherHovered={rightHover}
          logoSrc="/images/stackmode-logo-sm.png"
        />
        <Panel
          side="right"
          title="CEO TURBO"
          tagline="Premium websites, digital business cards, and brand strategy for entrepreneurs who refuse to blend in."
          features={['WEB DESIGN', 'NFC CARDS', 'BRANDING']}
          href="https://ceoturbo.com"
          accentColor="#FF6B2B"
          accentGradient="linear-gradient(135deg, #FF6B2B, #F0C040)"
          index="02"
          hovered={rightHover}
          onHover={setRightHover}
          otherHovered={leftHover}
          logoSrc="/images/ceoturbo-logo-new.png"
        />
      </div>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-4">
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          © STACKMODE
        </p>
        <div className="hidden sm:flex items-center gap-6">
          <span className="text-[9px] tracking-[0.2em] text-white/10" style={{ fontFamily: "'Share Tech Mono', monospace" }}>SCROLL ↓</span>
        </div>
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          stackmode.net
        </p>
      </footer>
    </section>
  );
};

export default SplitHero;
