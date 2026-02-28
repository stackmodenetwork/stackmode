import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════
   CANDLESTICK + CODE CANVAS — Academy tile bg
   ═══════════════════════════════════════════════ */
const CandlestickCanvas = ({ active }: { active: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener('resize', resize);

    // Candlesticks
    const sticks: { x: number; y: number; vy: number; w: number; bodyH: number; wickH: number; green: boolean; opacity: number }[] = [];
    const count = 8;
    for (let i = 0; i < count; i++) {
      sticks.push({
        x: Math.random() * 600,
        y: Math.random() * 800,
        vy: -(0.2 + Math.random() * 0.4),
        w: 6 + Math.random() * 10,
        bodyH: 15 + Math.random() * 30,
        wickH: 8 + Math.random() * 15,
        green: Math.random() > 0.4,
        opacity: 0.15 + Math.random() * 0.2,
      });
    }

    // Code symbols
    const symbols = ['{ }', '< />', '( )', '[ ]', '=>',  '&&', '++'];
    const floaters: { x: number; y: number; vy: number; vx: number; sym: string; opacity: number; size: number }[] = [];
    for (let i = 0; i < 6; i++) {
      floaters.push({
        x: Math.random() * 600,
        y: Math.random() * 800,
        vy: -(0.1 + Math.random() * 0.3),
        vx: (Math.random() - 0.5) * 0.2,
        sym: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: 0.08 + Math.random() * 0.12,
        size: 10 + Math.random() * 6,
      });
    }

    let raf: number;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const alpha = active ? 1 : 0.6;

      // Draw candlesticks
      sticks.forEach(s => {
        s.y += s.vy;
        if (s.y < -60) { s.y = H + 30; s.x = Math.random() * W; }

        const color = s.green ? `rgba(0,255,136,${s.opacity * alpha})` : `rgba(255,60,60,${s.opacity * alpha * 0.7})`;
        // Wick
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.x + s.w / 2, s.y - s.wickH);
        ctx.lineTo(s.x + s.w / 2, s.y + s.bodyH + s.wickH);
        ctx.stroke();
        // Body
        ctx.fillStyle = color;
        ctx.fillRect(s.x, s.y, s.w, s.bodyH);
      });

      // Draw code symbols
      ctx.font = '600 14px "Share Tech Mono", monospace';
      floaters.forEach(f => {
        f.y += f.vy;
        f.x += f.vx;
        if (f.y < -20) { f.y = H + 20; f.x = Math.random() * W; }
        ctx.fillStyle = `rgba(0,255,136,${f.opacity * alpha})`;
        ctx.fillText(f.sym, f.x, f.y);
      });
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [active]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ═══════════════════════════════════════════════
   WEB DESIGN CANVAS — CEOTurbo tile bg
   ═══════════════════════════════════════════════ */
const WebDesignCanvas = ({ active }: { active: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener('resize', resize);

    // Browser windows
    const browsers: { x: number; y: number; vy: number; w: number; h: number; opacity: number }[] = [];
    for (let i = 0; i < 5; i++) {
      browsers.push({
        x: Math.random() * 500,
        y: Math.random() * 800,
        vy: -(0.15 + Math.random() * 0.35),
        w: 30 + Math.random() * 40,
        h: 22 + Math.random() * 30,
        opacity: 0.1 + Math.random() * 0.15,
      });
    }

    // Design shapes (circles, diamonds, lines)
    const shapes: { x: number; y: number; vy: number; vx: number; type: 'circle' | 'diamond' | 'line'; size: number; opacity: number }[] = [];
    for (let i = 0; i < 7; i++) {
      shapes.push({
        x: Math.random() * 600,
        y: Math.random() * 800,
        vy: -(0.1 + Math.random() * 0.3),
        vx: (Math.random() - 0.5) * 0.15,
        type: (['circle', 'diamond', 'line'] as const)[Math.floor(Math.random() * 3)],
        size: 4 + Math.random() * 8,
        opacity: 0.08 + Math.random() * 0.14,
      });
    }

    let raf: number;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const alpha = active ? 1 : 0.6;
      const cyan = (o: number) => `rgba(0,207,255,${o * alpha})`;

      // Browser frames
      browsers.forEach(b => {
        b.y += b.vy;
        if (b.y < -50) { b.y = H + 30; b.x = Math.random() * W; }

        ctx.strokeStyle = cyan(b.opacity);
        ctx.lineWidth = 1;
        // Frame
        ctx.strokeRect(b.x, b.y, b.w, b.h);
        // Title bar
        ctx.beginPath();
        ctx.moveTo(b.x, b.y + 6);
        ctx.lineTo(b.x + b.w, b.y + 6);
        ctx.stroke();
        // Dots
        for (let d = 0; d < 3; d++) {
          ctx.beginPath();
          ctx.arc(b.x + 4 + d * 5, b.y + 3, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = cyan(b.opacity * 0.8);
          ctx.fill();
        }
      });

      // Design shapes
      shapes.forEach(s => {
        s.y += s.vy;
        s.x += s.vx;
        if (s.y < -20) { s.y = H + 20; s.x = Math.random() * W; }

        ctx.strokeStyle = cyan(s.opacity);
        ctx.fillStyle = cyan(s.opacity * 0.4);
        ctx.lineWidth = 1;

        if (s.type === 'circle') {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (s.type === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y - s.size);
          ctx.lineTo(s.x + s.size, s.y);
          ctx.lineTo(s.x, s.y + s.size);
          ctx.lineTo(s.x - s.size, s.y);
          ctx.closePath();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.size * 3, s.y);
          ctx.stroke();
        }
      });
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [active]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ═══════════════════════════════════════════════
   CHOICE TILE — compact CTA card
   ═══════════════════════════════════════════════ */
interface ChoiceTileProps {
  href: string;
  isExternal?: boolean;
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  pills: string[];
  ctaText: string;
  accentColor: string;
  accentRgb: string;
  Canvas: React.FC<{ active: boolean }>;
  index: number;
}

const ChoiceTile = ({ href, isExternal, logo, logoAlt, title, subtitle, pills, ctaText, accentColor, accentRgb, Canvas, index }: ChoiceTileProps) => {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 cursor-pointer"
      style={{
        background: '#0a0a14',
        border: `1px solid rgba(${accentRgb}, ${hovered ? 0.45 : 0.1})`,
        boxShadow: hovered
          ? `0 0 40px rgba(${accentRgb}, 0.15), 0 8px 32px rgba(0,0,0,0.5)`
          : `0 4px 16px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Canvas background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas active={hovered} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `linear-gradient(180deg, rgba(10,10,20,0.3) 0%, rgba(10,10,20,0.75) 60%, rgba(10,10,20,0.92) 100%)`,
      }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500" style={{
        background: hovered
          ? `linear-gradient(90deg, transparent, ${accentColor}, transparent)`
          : `linear-gradient(90deg, transparent, rgba(${accentRgb}, 0.2), transparent)`,
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-3 sm:p-5 md:p-8 text-center">
        {/* Logo */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-2 sm:mb-3 transition-all duration-300 flex-shrink-0" style={{
          border: `2px solid rgba(${accentRgb}, ${hovered ? 0.6 : 0.2})`,
          boxShadow: hovered ? `0 0 24px rgba(${accentRgb}, 0.25)` : 'none',
        }}>
          <img src={logo} alt={logoAlt} className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Title block */}
        <div className="mb-2 sm:mb-3 flex-shrink-0">
          <h2 className="leading-none mb-0.5 sm:mb-1" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(18px, 4vw, 42px)',
            color: '#f0f0f0',
            letterSpacing: '0.04em',
          }}>
            {title}
          </h2>
          <p className="leading-tight" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(13px, 2.8vw, 26px)',
            color: accentColor,
            letterSpacing: '0.06em',
          }}>
            {subtitle}
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 mb-3 sm:mb-4 flex-shrink-0">
          {pills.map(p => (
            <span key={p} className="text-[8px] sm:text-[10px] md:text-[11px] tracking-wide px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all duration-300" style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              background: hovered ? `rgba(${accentRgb}, 0.15)` : `rgba(${accentRgb}, 0.06)`,
              color: accentColor,
              border: `1px solid rgba(${accentRgb}, 0.15)`,
            }}>{p}</span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl group/cta inline-flex transition-all duration-500 flex-shrink-0" style={{
          border: `2px solid rgba(${accentRgb}, ${hovered ? 0.7 : 0.3})`,
          boxShadow: hovered ? `0 0 20px rgba(${accentRgb}, 0.2)` : 'none',
        }}>
          <div className="absolute inset-0 transition-transform duration-400 -translate-x-full group-hover/cta:translate-x-0" style={{ background: accentColor }} />
          <span className="relative z-10 px-4 sm:px-8 md:px-10 py-1.5 sm:py-2.5 md:py-3 text-[11px] sm:text-[15px] md:text-[17px] tracking-[0.12em] font-bold transition-colors duration-300 group-hover/cta:text-[#04040a] whitespace-nowrap" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: hovered ? '#fff' : accentColor,
          }}>
            {ctaText}
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline h-full">
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className="no-underline h-full">
      {inner}
    </Link>
  );
};

/* ═══════════════════════════════════════════════
   SR-ONLY SEO CONTENT
   ═══════════════════════════════════════════════ */
const SeoContent = () => (
  <div className="sr-only">
    <h1>Stackmode Academy — Learn AI, Coding, Software &amp; Trading Online | Christopher Robinson (StackmodeChris)</h1>
    <h2>AI and Software Development Courses by StackmodeChris — Best Online Academy 2026</h2>
    <h2>Stock Trading and Crypto Investing School Online — Learn to Trade Stocks Options Forex Crypto</h2>
    <h2>CEO Turbo — NFC Digital Business Cards — Website Design — Brand Boost</h2>
    <p>
      Stackmode Academy is the ultimate online school for AI, coding, software development, and trading/investing. Founded by Christopher Robinson, known as StackmodeChris, based in Atlanta, Georgia. CEO Turbo offers premium web design, NFC digital business cards, brand boost strategy, and ad revenue optimization.
    </p>
  </div>
);

/* ═══════════════════════════════════════════════
   SPLIT HERO — MAIN EXPORT
   ═══════════════════════════════════════════════ */
const SplitHero = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SeoContent />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-8" style={{
        height: 48,
        background: 'rgba(4,4,10,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div className="flex items-center gap-1">
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: '0.12em', color: '#f0f0f0' }}>
            STACK<span style={{ color: '#00ff88' }}>MODE</span>
          </span>
          <span className="mx-2 text-[10px] text-foreground/20">×</span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: '0.12em', color: '#f0f0f0' }}>
            CEO<span style={{ color: '#00cfff' }}>TURBO</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[9px] tracking-[0.2em]" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#333' }}>
            {time}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[8px] sm:text-[9px] tracking-[0.15em] uppercase" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#444' }}>
              Online
            </span>
          </div>
        </div>
      </header>

      {/* Main section */}
      <section className="relative w-full min-h-[100dvh] pt-[48px] flex flex-col" style={{ background: '#04040a' }}>
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 py-6 sm:py-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-5 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full" style={{
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <span className="text-[8px] sm:text-[10px] tracking-[0.25em] uppercase" style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: 'rgba(255,255,255,0.4)',
              }}>
                Christopher Robinson • StackmodeChris
              </span>
            </div>
            <h2 className="text-[12px] sm:text-[15px] tracking-[0.3em] uppercase" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.35em',
            }}>
              Choose Your Path
            </h2>
          </motion.div>

          {/* Two side-by-side tiles */}
          <div className="w-full max-w-3xl grid grid-cols-2 gap-3 sm:gap-5 md:gap-6" style={{ minHeight: 'clamp(220px, 45vw, 420px)' }}>
            <ChoiceTile
              href="/academy"
              logo="/images/stackmode-logo-sm.png"
              logoAlt="Stackmode Academy Christopher Robinson StackmodeChris"
              title="STACKMODE"
              subtitle="ACADEMY"
              pills={['Code', 'Trade', 'AI']}
              ctaText="JOIN NOW →"
              accentColor="#00ff88"
              accentRgb="0,255,136"
              Canvas={CandlestickCanvas}
              index={0}
            />
            <ChoiceTile
              href="https://ceoturbo.com"
              isExternal
              logo="/images/ceoturbo-logo-new.png"
              logoAlt="CEO Turbo Christopher Robinson website design brand"
              title="DESIGN YOUR"
              subtitle="WEBSITE & BRAND"
              pills={['Sites', 'Cards', 'Brand']}
              ctaText="GET STARTED →"
              accentColor="#00cfff"
              accentRgb="0,207,255"
              Canvas={WebDesignCanvas}
              index={1}
            />
          </div>

          {/* Social strip */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 sm:gap-8 mt-5 sm:mt-8 pb-4"
            style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, letterSpacing: '0.2em' }}
            aria-label="Social media links for Christopher Robinson StackmodeChris"
          >
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/christopherrobinsonceo/' },
              { label: 'YouTube', href: 'https://www.youtube.com/@ChristopherRobinson-CEO' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@stackmodechris___' },
              { label: 'Discord', href: 'https://discord.gg/5zYWSWGMYm' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="uppercase transition-colors duration-300 hover:text-primary"
                style={{ color: 'rgba(255,255,255,0.15)' }}
              >
                {s.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Scanline */}
      <div className="fixed inset-0 z-[9990] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      }} />
    </>
  );
};

export default SplitHero;
