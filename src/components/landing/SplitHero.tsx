import { useEffect, useRef, useState } from 'react';

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
        ctx.fillStyle = isLeft ? 'rgba(201, 168, 76, 0.12)' : 'rgba(0, 229, 255, 0.12)';
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

interface PanelProps {
  side: 'left' | 'right';
  title: string;
  subtitle: string;
  href: string;
  accentColor: string;
  logoSrc: string;
  logoAlt: string;
  hovered: boolean;
  onHover: (h: boolean) => void;
  otherHovered: boolean;
}

const Panel = ({ side, title, subtitle, href, accentColor, logoSrc, logoAlt, hovered, onHover, otherHovered }: PanelProps) => {
  const isExternal = href.startsWith('http');
  const shrink = otherHovered && !hovered;

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-cursor-color={accentColor}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative flex flex-col items-center justify-center transition-all duration-700 ease-out no-underline overflow-hidden group"
      style={{
        flex: hovered ? 1.6 : shrink ? 0.6 : 1,
        background: `radial-gradient(ellipse at ${side === 'left' ? '70%' : '30%'} 50%, ${accentColor}08 0%, #030305 70%)`,
      }}
    >
      {/* Vertical accent line */}
      <div
        className="absolute top-0 h-full w-[1px] transition-opacity duration-500"
        style={{
          [side === 'left' ? 'right' : 'left']: 0,
          background: `linear-gradient(to bottom, transparent, ${accentColor}40, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* Logo */}
      <div
        className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 transition-all duration-500"
        style={{
          boxShadow: hovered ? `0 0 60px ${accentColor}30, 0 0 120px ${accentColor}15` : `0 0 20px ${accentColor}10`,
          border: `2px solid ${accentColor}${hovered ? '60' : '20'}`,
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <img src={logoSrc} alt={logoAlt} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] text-center transition-all duration-500"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: accentColor, textShadow: hovered ? `0 0 30px ${accentColor}40` : 'none' }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className="mt-3 text-xs sm:text-sm text-white/40 text-center max-w-[280px] tracking-wide"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        {subtitle}
      </p>

      {/* CTA */}
      <span
        className="mt-6 text-xs font-bold tracking-[0.3em] uppercase px-8 py-2.5 rounded-full border transition-all duration-300"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          color: hovered ? '#030305' : accentColor,
          borderColor: `${accentColor}50`,
          background: hovered ? accentColor : 'transparent',
          boxShadow: hovered ? `0 0 25px ${accentColor}30` : 'none',
        }}
      >
        ENTER →
      </span>
    </a>
  );
};

const SplitHero = () => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col" style={{ background: '#030305' }}>
      <MatrixRain />

      {/* Scanline overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)' }} />

      {/* Header */}
      <header className="relative z-10 text-center pt-8 sm:pt-12 pb-4">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] text-white/90"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          CHOOSE YOUR PATH
        </h1>
        <div className="w-40 h-[1px] mx-auto mt-3" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, #00E5FF, transparent)' }} />
      </header>

      {/* Panels */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row">
        <Panel
          side="left"
          title="STACKMODE ACADEMY"
          subtitle="Code · Content · Capital"
          href="/academy"
          accentColor="#C9A84C"
          logoSrc="/images/stackmode-logo-circle.jpg"
          logoAlt="Stackmode Academy Christopher Robinson StackmodeChris"
          hovered={leftHover}
          onHover={setLeftHover}
          otherHovered={rightHover}
        />
        <Panel
          side="right"
          title="CEO TURBO"
          subtitle="Web Design · NFC Cards · Brand Growth"
          href="https://ceoturbo.com"
          accentColor="#00E5FF"
          logoSrc="/images/ceoturbo-logo-dark.png"
          logoAlt="CEO Turbo Website Design NFC Business Cards Brand Growth"
          hovered={rightHover}
          onHover={setRightHover}
          otherHovered={leftHover}
        />
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4">
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          © Stackmode · stackmode.net
        </p>
      </footer>
    </section>
  );
};

export default SplitHero;
