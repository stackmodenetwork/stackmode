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

    const symbols = '$ { } < > / ▲ ▼ ◆ :: => []'.split(' ');
    const particles: { x: number; y: number; s: string; speed: number; opacity: number; size: number; rot: number; color: string }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        s: symbols[Math.floor(Math.random() * symbols.length)],
        speed: 0.12 + Math.random() * 0.3, opacity: 0.03 + Math.random() * 0.04,
        size: 12 + Math.random() * 14, rot: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '#C9A84C' : '#00D4FF',
      });
    }

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.025)';
      ctx.lineWidth = 0.5;
      const gap = 80;
      for (let x = 0; x < w; x += gap) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gap) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    };

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      drawGrid();
      for (const p of particles) {
        p.y -= p.speed; p.rot += 0.002;
        if (p.y < -30) { p.y = h + 30; p.x = Math.random() * w; }
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity;
        ctx.fillText(p.s, 0, 0); ctx.restore();
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
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const handleOver = (e: Event) => setHoverColor((e.currentTarget as HTMLElement).dataset.cursorColor || null);
    const handleOut = () => setHoverColor(null);
    const bind = () => {
      document.querySelectorAll('[data-cursor-color]').forEach(el => {
        el.addEventListener('mouseenter', handleOver);
        el.addEventListener('mouseleave', handleOut);
      });
    };
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });
    bind();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); observer.disconnect(); };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;
  const ringColor = hoverColor || '#C9A84C';
  const ringSize = hoverColor ? 50 : 40;

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 z-[10000] pointer-events-none w-[10px] h-[10px] rounded-full" style={{ background: '#C9A84C', boxShadow: '0 0 12px #C9A84C' }} />
      <div ref={ringRef} className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full border-2 transition-all duration-200"
        style={{ width: ringSize, height: ringSize, borderColor: ringColor, boxShadow: `0 0 15px ${ringColor}40`, marginLeft: ringSize === 50 ? -5 : 0, marginTop: ringSize === 50 ? -5 : 0 }} />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
};

// ─── Path Button ───
interface PathButtonProps {
  title: string;
  subtitle: string;
  href: string;
  accentColor: string;
  logoSrc: string;
  logoAlt: string;
  spinDirection: 'normal' | 'reverse';
}

const PathButton = ({ title, subtitle, href, accentColor, logoSrc, logoAlt, spinDirection }: PathButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-cursor-color={accentColor}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center gap-5 no-underline transition-all duration-500"
      style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
    >
      {/* Circle with spinning border */}
      <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px]">
        {/* Spinning ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${accentColor}80, transparent, ${accentColor}80, transparent)`,
            animation: `spin 6s linear infinite ${spinDirection === 'reverse' ? 'reverse' : 'normal'}`,
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
          }}
        />
        {/* Inner circle with circular logo */}
        <div
          className="absolute inset-[4px] rounded-full overflow-hidden flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}10 0%, #080c10 60%)`,
            boxShadow: hovered
              ? `0 0 50px ${accentColor}25, inset 0 0 30px ${accentColor}10`
              : `inset 0 0 15px ${accentColor}06`,
            transition: 'box-shadow 0.4s ease',
          }}
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-[70%] h-[70%] rounded-full object-cover"
            style={{ filter: `drop-shadow(0 0 15px ${accentColor}40)` }}
          />
        </div>
      </div>

      {/* Title */}
      <h2
        className="text-xl sm:text-2xl md:text-3xl tracking-wider text-center"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: accentColor }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className="text-[10px] sm:text-xs text-white/35 text-center max-w-[220px] leading-relaxed"
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
      >
        {subtitle}
      </p>

      {/* Enter CTA */}
      <span
        className="text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 px-6 py-2 rounded-full border"
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          color: hovered ? '#030508' : accentColor,
          borderColor: `${accentColor}50`,
          background: hovered ? accentColor : 'transparent',
          boxShadow: hovered ? `0 0 20px ${accentColor}30` : 'none',
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
        <title>Stackmode | Choose Your Path | Christopher Robinson</title>
        <meta name="description" content="Stackmode by Christopher Robinson (StackmodeChris) — Choose your path: Stackmode Academy for AI software & trading, or CEO Turbo for website design & brand growth." />
        <link rel="canonical" href="https://stackmode.net/" />
      </Helmet>

      <BackgroundCanvas />
      <CustomCursor />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 gap-10 sm:gap-12">
        {/* Header */}
        <header className="text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl tracking-[0.15em] text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            CHOOSE YOUR PATH
          </h1>
          <div className="w-32 sm:w-48 h-[1px] mx-auto mt-4" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, #00D4FF, transparent)' }} />
        </header>

        {/* Two Buttons */}
        <div className="flex flex-row items-start gap-8 sm:gap-12 md:gap-20 lg:gap-28">
          <PathButton
            title="CEO TURBO"
            subtitle="Website Design · NFC Cards · Brand Growth"
            href="https://ceoturbo.com"
            accentColor="#00D4FF"
            logoSrc="/images/ceoturbo-logo-dark.png"
            logoAlt="CEO Turbo Website Design NFC Business Cards Brand Growth"
            spinDirection="reverse"
          />

          <PathButton
            title="STACKMODE ACADEMY"
            subtitle="Learn AI · Coding · Trading · Asset Stacking"
            href="/academy"
            accentColor="#C9A84C"
            logoSrc="/images/stackmode-logo-circle.jpg"
            logoAlt="Stackmode Academy Christopher Robinson StackmodeChris"
            spinDirection="normal"
          />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/15" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            © Stackmode · stackmode.net
          </p>
        </footer>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Landing;
