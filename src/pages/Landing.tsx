import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// ─── Animated Background Canvas ───
const BackgroundCanvas = () => {
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

    // Floating symbols
    const symbols = '$ { } < > / ▲ ▼ ◆ ⟨ ⟩ :: => [] ()'.split(' ');
    const particles: { x: number; y: number; s: string; speed: number; opacity: number; size: number; rot: number; color: string }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        s: symbols[Math.floor(Math.random() * symbols.length)],
        speed: 0.15 + Math.random() * 0.35,
        opacity: 0.03 + Math.random() * 0.05,
        size: 12 + Math.random() * 16,
        rot: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '#C9A84C' : '#00D4FF',
      });
    }

    // Grid lines
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.03)';
      ctx.lineWidth = 0.5;
      const gap = 80;
      for (let x = 0; x < w; x += gap) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gap) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    };

    // Candlestick lines
    const candles: { x: number; y: number; dx: number; dy: number; color: string }[] = [];
    for (let i = 0; i < 6; i++) {
      candles.push({
        x: Math.random() * w, y: Math.random() * h,
        dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
        color: i % 2 === 0 ? 'rgba(201,168,76,0.06)' : 'rgba(0,212,255,0.06)',
      });
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      drawGrid();

      // Draw candle drift lines
      for (const c of candles) {
        c.x += c.dx; c.y += c.dy;
        if (c.x < 0 || c.x > w) c.dx *= -1;
        if (c.y < 0 || c.y > h) c.dy *= -1;
        ctx.beginPath();
        ctx.strokeStyle = c.color;
        ctx.lineWidth = 2;
        ctx.moveTo(c.x, c.y - 20);
        ctx.lineTo(c.x, c.y + 20);
        ctx.moveTo(c.x - 6, c.y - 8);
        ctx.lineTo(c.x + 6, c.y - 8);
        ctx.lineTo(c.x + 6, c.y + 8);
        ctx.lineTo(c.x - 6, c.y + 8);
        ctx.closePath();
        ctx.stroke();
      }

      // Floating symbols
      for (const p of particles) {
        p.y -= p.speed;
        p.rot += 0.002;
        if (p.y < -30) { p.y = h + 30; p.x = Math.random() * w; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.s, 0, 0);
        ctx.restore();
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

// ─── Custom Cursor ───
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (dotRef.current) { dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`; }
      if (ringRef.current) { ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Listen for hover events on circles
    const handleOver = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      setHoverColor(target.dataset.cursorColor || null);
    };
    const handleOut = () => setHoverColor(null);

    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-cursor-color]').forEach(el => {
        el.addEventListener('mouseenter', handleOver);
        el.addEventListener('mouseleave', handleOut);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // Initial bind
    document.querySelectorAll('[data-cursor-color]').forEach(el => {
      el.addEventListener('mouseenter', handleOver);
      el.addEventListener('mouseleave', handleOut);
    });

    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); observer.disconnect(); };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ringColor = hoverColor || '#C9A84C';
  const ringSize = hoverColor ? 50 : 40;

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 z-[10000] pointer-events-none w-[10px] h-[10px] rounded-full" style={{ background: '#C9A84C', boxShadow: '0 0 12px #C9A84C' }} />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full border-2 transition-all duration-200"
        style={{ width: ringSize, height: ringSize, borderColor: ringColor, boxShadow: `0 0 15px ${ringColor}40`, marginLeft: ringSize === 50 ? -5 : 0, marginTop: ringSize === 50 ? -5 : 0 }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
};

// ─── Path Circle Button ───
interface PathCircleProps {
  title: string;
  titleColor: string;
  description: string;
  tags: string[];
  href: string;
  accentColor: string;
  glowColor: string;
  logoSrc: string;
  logoAlt: string;
  spinDirection: 'normal' | 'reverse';
}

const PathCircle = ({ title, titleColor, description, tags, href, accentColor, glowColor, logoSrc, logoAlt, spinDirection }: PathCircleProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-cursor-color={accentColor}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center gap-4 no-underline transition-transform duration-500"
      style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
    >
      {/* Spinning border ring */}
      <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${accentColor}, transparent, ${accentColor}, transparent)`,
            animation: `spin 6s linear infinite ${spinDirection === 'reverse' ? 'reverse' : 'normal'}`,
            padding: 3,
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))',
          }}
        />
        {/* Inner circle */}
        <div
          className="absolute inset-[6px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(circle at center, ${glowColor} 0%, #030508 70%)`,
            boxShadow: hovered ? `0 0 60px ${accentColor}30, inset 0 0 40px ${accentColor}15` : `inset 0 0 20px ${accentColor}08`,
            transition: 'box-shadow 0.4s ease',
          }}
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            style={{ filter: `drop-shadow(0 0 20px ${accentColor}50)` }}
          />
        </div>
      </div>

      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl tracking-wider"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: titleColor }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="text-xs sm:text-sm text-white/40 text-center max-w-[260px]"
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium border"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              color: accentColor,
              borderColor: `${accentColor}40`,
              background: `${accentColor}08`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Enter text */}
      <span
        className="text-xs font-semibold tracking-[0.3em] uppercase transition-opacity duration-300"
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          color: accentColor,
          opacity: hovered ? 1 : 0,
        }}
      >
        ENTER →
      </span>
    </a>
  );
};

// ─── Landing Page ───
const Landing = () => {
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: '#030508' }}>
      <Helmet>
        <title>Stackmode Academy | Learn AI Software, Trading & Asset Stacking | Christopher Robinson</title>
        <meta name="description" content="Stackmode Academy by Christopher Robinson (StackmodeChris) is the #1 online learning academy for mastering AI software development, trading the financial markets, and stacking your assets to build real wealth." />
        <link rel="canonical" href="https://stackmode.net/" />
      </Helmet>

      <BackgroundCanvas />
      <CustomCursor />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full py-8 sm:py-12 px-4">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="text-white">STACK</span>
            <span style={{ color: '#C9A84C' }}>MODE</span>
          </h1>
          <p
            className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/30 mt-2"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Choose Your Path
          </p>
          <div className="w-40 h-[1px] mx-auto mt-3" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        </header>

        {/* Circles */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          <PathCircle
            title="STACKMODE ACADEMY"
            titleColor="#C9A84C"
            description="Learn AI · Coding · Asset Stacking · Trading"
            tags={['AI Tools', 'No-Code', 'Trading']}
            href="/academy"
            accentColor="#C9A84C"
            glowColor="#C9A84C15"
            logoSrc="/images/stackmode-logo-circle.jpg"
            logoAlt="Stackmode Academy Christopher Robinson StackmodeChris"
            spinDirection="normal"
          />

          {/* OR separator */}
          <div className="flex md:flex-col items-center gap-4">
            <div className="w-16 h-[1px] md:w-[1px] md:h-16" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />
            <span className="text-white/20 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>OR</span>
            <div className="w-16 h-[1px] md:w-[1px] md:h-16" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />
          </div>

          <PathCircle
            title="CEO TURBO"
            titleColor="#00D4FF"
            description="Website Design · NFC Business Cards · Brand Growth"
            tags={['Web Design', 'NFC Cards', 'Brand Boost']}
            href="https://ceoturbo.com"
            accentColor="#00D4FF"
            glowColor="#00D4FF15"
            logoSrc="/images/ceoturbo-logo-dark.png"
            logoAlt="CEO Turbo Website Design NFC Business Cards Brand Growth"
            spinDirection="reverse"
          />
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/15" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            © Stackmode · stackmode.net
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
