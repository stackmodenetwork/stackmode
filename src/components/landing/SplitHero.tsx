import { useEffect, useRef, useState } from 'react';

// ─── Particle Network Background ───
const ParticleNetwork = () => {
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

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 40 : 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160, 160, 184, 0.15)';
        ctx.fill();
      }
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(160, 160, 184, ${0.06 * (1 - d / maxDist)})`;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

// ─── Themed Canvas Overlay ───
const ThemedCanvas = ({ symbols, color }: { symbols: string[]; color: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => { canvas.width = parent.clientWidth; canvas.height = parent.clientHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 12 : 24;
    const items = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: -(Math.random() * 0.4 + 0.15),
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.01,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: Math.random() * 8 + 14,
      opacity: Math.random() * 0.04 + 0.04,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const it of items) {
        it.y += it.vy;
        it.rot += it.rotV;
        if (it.y < -30) { it.y = canvas.height + 30; it.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.translate(it.x, it.y);
        ctx.rotate(it.rot);
        ctx.font = `${it.size}px "Share Tech Mono", monospace`;
        ctx.fillStyle = color.replace(')', `, ${it.opacity})`).replace('rgb(', 'rgba(');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(it.symbol, 0, 0);
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [symbols, color]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// ─── Panel ───
interface PanelProps {
  logo: string;
  title: string;
  subtitle: string;
  href: string;
  accentColor: string;
  accentRgb: string;
  symbols: string[];
  hovered: boolean;
  onHover: (h: boolean) => void;
  otherHovered: boolean;
}

const Panel = ({ logo, title, subtitle, href, accentColor, accentRgb, symbols, hovered, onHover, otherHovered }: PanelProps) => {
  const isExternal = href.startsWith('http');
  const shrink = otherHovered && !hovered;

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-cursor-color={accentColor}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 transition-all duration-700 ease-out no-underline overflow-hidden group"
      style={{
        flex: hovered ? 1.6 : shrink ? 0.6 : 1,
        minHeight: '45vh',
      }}
    >
      <ThemedCanvas symbols={symbols} color={accentRgb} />

      {/* Background glow */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at center bottom, ${accentColor}${hovered ? '18' : '08'} 0%, transparent 70%)`,
          opacity: shrink ? 0.3 : 1,
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 transition-all duration-500"
        style={{ borderColor: hovered ? `${accentColor}60` : `${accentColor}15` }} />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-r-2 border-b-2 transition-all duration-500"
        style={{ borderColor: hovered ? `${accentColor}60` : `${accentColor}15` }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <img
          src={logo}
          alt={title}
          className="h-20 sm:h-24 md:h-28 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <h2
          className="text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] leading-none transition-all duration-500"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: hovered ? accentColor : '#E8E8F0',
            textShadow: hovered ? `0 0 30px ${accentColor}40` : 'none',
          }}
        >
          {title}
        </h2>

        <p
          className="text-xs sm:text-sm max-w-[280px] leading-relaxed transition-colors duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            color: hovered ? '#A0A0B8' : '#A0A0B860',
          }}
        >
          {subtitle}
        </p>

        {/* CTA button */}
        <div
          className="mt-2 px-8 py-2.5 rounded-full border text-xs tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden relative"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            borderColor: hovered ? accentColor : `${accentColor}40`,
            color: hovered ? '#060610' : accentColor,
            background: hovered ? accentColor : 'transparent',
          }}
        >
          ENTER →
        </div>
      </div>
    </a>
  );
};

// ─── Split Hero ───
const SplitHero = () => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const academySymbols = ['🎓', '📚', '{ }', '💡', '🧠', '📈', '< >', '∑', '∞', 'λ'];
  const turboSymbols = ['$', '↑', '🚀', '⚡', '📊', '◆', '»', '★', '▲', '⬆'];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col" style={{ background: '#060610' }}>
      <ParticleNetwork />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(160,160,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,160,184,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* CHOOSE YOUR PATH mega headline */}
      <div className="relative z-10 pt-8 sm:pt-12 md:pt-16 px-4 text-center">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.04em] leading-none font-bold select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            background: 'linear-gradient(135deg, #7C5CFF 0%, #A07CFF 30%, #FF6B2B 70%, #FF8F5B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%',
            animation: 'gradientSweep 4s ease infinite',
          }}
        >
          CHOOSE YOUR PATH
        </h1>
        <p className="text-[10px] sm:text-xs tracking-[0.4em] mt-3 uppercase" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#A0A0B860' }}>
          Two brands · One vision · Your move
        </p>
      </div>

      {/* Panels */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row px-4 sm:px-6 pb-6 gap-0">
        <Panel
          logo="/images/sm-academy-logo.png"
          title="STACKMODE ACADEMY"
          subtitle="Learn AI / Coding / Trading / Asset Stacking"
          href="/academy"
          accentColor="#7C5CFF"
          accentRgb="rgb(124, 92, 255)"
          symbols={academySymbols}
          hovered={leftHover}
          onHover={setLeftHover}
          otherHovered={rightHover}
        />

        {/* OR Divider */}
        <div className="relative flex items-center justify-center z-20">
          {/* Vertical on desktop */}
          <div className="hidden md:block w-[1px] h-full absolute" style={{ background: 'linear-gradient(to bottom, transparent, #A0A0B820, transparent)' }} />
          {/* Horizontal on mobile */}
          <div className="md:hidden w-full h-[1px] absolute" style={{ background: 'linear-gradient(to right, transparent, #A0A0B820, transparent)' }} />
          <span
            className="relative z-10 text-xs tracking-[0.3em] px-3 py-1.5 rounded-full"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: '#A0A0B860',
              background: '#060610',
              boxShadow: '0 0 20px #A0A0B810',
            }}
          >
            OR
          </span>
        </div>

        <Panel
          logo="/images/ceoturbo-logo-color.png"
          title="CEO TURBO"
          subtitle="Web Design / NFC Cards / Brand Growth"
          href="https://ceoturbo.com"
          accentColor="#FF6B2B"
          accentRgb="rgb(255, 107, 43)"
          symbols={turboSymbols}
          hovered={rightHover}
          onHover={setRightHover}
          otherHovered={leftHover}
        />
      </div>

      {/* Footer bar */}
      <footer className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-4">
        <p className="text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#A0A0B830' }}>
          © STACKMODE
        </p>
        <div className="hidden sm:flex items-center gap-6">
          <span className="text-[9px] tracking-[0.2em]" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#A0A0B820' }}>SCROLL ↓</span>
        </div>
        <p className="text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#A0A0B830' }}>
          stackmode.net
        </p>
      </footer>

      <style>{`
        @keyframes gradientSweep {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default SplitHero;
