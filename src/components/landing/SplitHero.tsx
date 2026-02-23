import { useEffect, useRef, useState } from 'react';

// ─── Matrix Rain Background ───
const MatrixRain = () => {
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

    const cols = Math.floor(w / 20);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * h / 20);
    const chars = '01アイウエオカキクケコ{}[]<>/=$▲▼◆'.split('');

    let raf: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(3, 3, 5, 0.08)';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < cols; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 20;
        const y = drops[i] * 20;
        const isLeft = x < w / 2;
        ctx.fillStyle = isLeft ? 'rgba(201, 168, 76, 0.10)' : 'rgba(0, 229, 255, 0.10)';
        ctx.font = '14px "Share Tech Mono", monospace';
        ctx.fillText(char, x, y);
        if (y > h && Math.random() > 0.98) drops[i] = 0;
        drops[i] += 0.4;
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
  index: string;
  hovered: boolean;
  onHover: (h: boolean) => void;
  otherHovered: boolean;
  side: 'left' | 'right';
}

const Panel = ({ title, tagline, features, href, accentColor, index, hovered, onHover, otherHovered, side }: PanelProps) => {
  const isExternal = href.startsWith('http');
  const shrink = otherHovered && !hovered;

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-cursor-color={accentColor}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative flex flex-col justify-end p-6 sm:p-8 md:p-12 transition-all duration-700 ease-out no-underline overflow-hidden group min-h-[45vh] md:min-h-0"
      style={{
        flex: hovered ? 1.8 : shrink ? 0.5 : 1,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at ${side === 'left' ? 'bottom left' : 'bottom right'}, ${accentColor}${hovered ? '12' : '06'} 0%, transparent 60%)`,
          opacity: shrink ? 0.3 : 1,
        }}
      />

      {/* Vertical divider line */}
      {side === 'left' && (
        <div className="absolute top-[10%] right-0 h-[80%] w-[1px] hidden md:block"
          style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}20, transparent)` }} />
      )}

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 transition-all duration-500"
        style={{ borderColor: hovered ? `${accentColor}60` : `${accentColor}15` }} />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 transition-all duration-500"
        style={{ borderColor: hovered ? `${accentColor}60` : `${accentColor}15` }} />

      {/* Index number */}
      <div className="relative z-10 mb-auto">
        <span
          className="text-[80px] sm:text-[100px] md:text-[140px] font-bold leading-none transition-all duration-500 select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: 'transparent',
            WebkitTextStroke: `1px ${accentColor}${hovered ? '30' : '10'}`,
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
                color: `${accentColor}80`,
                border: `1px solid ${accentColor}15`,
                background: hovered ? `${accentColor}08` : 'transparent',
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0.05em] leading-[0.9] mb-3 transition-all duration-500"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: hovered ? accentColor : 'rgba(255,255,255,0.85)',
            textShadow: hovered ? `0 0 40px ${accentColor}30` : 'none',
          }}
        >
          {title}
        </h2>

        {/* Tagline */}
        <p
          className="text-xs sm:text-sm text-white/35 max-w-[320px] leading-relaxed mb-6 transition-colors duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            color: hovered ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.35)',
          }}
        >
          {tagline}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-3 group/cta">
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
              background: hovered ? accentColor : 'rgba(255,255,255,0.15)',
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
      <MatrixRain />

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
          accentColor="#C9A84C"
          index="01"
          hovered={leftHover}
          onHover={setLeftHover}
          otherHovered={rightHover}
        />
        <Panel
          side="right"
          title="CEO TURBO"
          tagline="Premium websites, digital business cards, and brand strategy for entrepreneurs who refuse to blend in."
          features={['WEB DESIGN', 'NFC CARDS', 'BRANDING']}
          href="https://ceoturbo.com"
          accentColor="#00E5FF"
          index="02"
          hovered={rightHover}
          onHover={setRightHover}
          otherHovered={leftHover}
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
