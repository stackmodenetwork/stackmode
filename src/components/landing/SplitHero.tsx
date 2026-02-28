import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════
   FLOATING GRID DOTS — subtle animated background
   ═══════════════════════════════════════════════ */
const GridDots = ({ color, side }: { color: string; side: 'left' | 'right' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 1.5;
      canvas.height = canvas.offsetHeight * 1.5;
    };
    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 1.5,
      });
    }

    const draw = () => {
      raf = requestAnimationFrame(draw);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Connect nearby dots
      ctx.strokeStyle = color.replace(/[\d.]+\)$/, '0.06)');
      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [color]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
};

/* ═══════════════════════════════════════════════
   STAT COUNTER
   ═══════════════════════════════════════════════ */
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-lg sm:text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
      {value}
    </div>
    <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] opacity-50" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
      {label}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   PATH CARD — shared component for both paths
   ═══════════════════════════════════════════════ */
interface PathCardProps {
  href: string;
  isExternal?: boolean;
  logo: string;
  logoAlt: string;
  tag: string;
  title: React.ReactNode;
  description: string;
  pills: string[];
  ctaText: string;
  accentColor: string;
  accentRgb: string;
  stats: { value: string; label: string }[];
  index: number;
}

const PathCard = ({ href, isExternal, logo, logoAlt, tag, title, description, pills, ctaText, accentColor, accentRgb, stats, index }: PathCardProps) => {
  const [hovered, setHovered] = useState(false);

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group flex-1 min-h-[420px] sm:min-h-[500px] md:min-h-0 md:h-full rounded-2xl md:rounded-none overflow-hidden"
      style={{
        background: '#0a0a14',
        border: '1px solid rgba(255,255,255,0.06)',
        borderWidth: '1px',
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 hidden sm:block">
        <GridDots color={`rgba(${accentRgb}, 0.12)`} side={index === 0 ? 'left' : 'right'} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 transition-all duration-700" style={{
        background: hovered
          ? `radial-gradient(ellipse at 50% 80%, rgba(${accentRgb}, 0.12) 0%, transparent 70%)`
          : `radial-gradient(ellipse at 50% 100%, rgba(${accentRgb}, 0.04) 0%, transparent 60%)`,
      }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500" style={{
        background: hovered
          ? `linear-gradient(90deg, transparent, ${accentColor}, transparent)`
          : `linear-gradient(90deg, transparent, rgba(${accentRgb}, 0.3), transparent)`,
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-6 sm:p-8 md:p-10 lg:p-14">
        <div>
          {/* Logo + Tag row */}
          <div className="flex items-center gap-3 mb-5 sm:mb-8">
            <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl overflow-hidden transition-all duration-300`} style={{
              border: `1px solid rgba(${accentRgb}, ${hovered ? 0.5 : 0.2})`,
              boxShadow: hovered ? `0 0 20px rgba(${accentRgb}, 0.2)` : 'none',
            }}>
              <img src={logo} alt={logoAlt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: accentColor,
              border: `1px solid rgba(${accentRgb}, 0.25)`,
              background: `rgba(${accentRgb}, 0.06)`,
            }}>
              {tag}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-3 sm:mb-4" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 0.95,
            color: '#f0f0f0',
            letterSpacing: '0.02em',
          }}>
            {title}
          </h2>

          {/* Description */}
          <p className="mb-4 sm:mb-6 max-w-sm" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(13px, 1.4vw, 15px)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.6,
          }}>
            {description}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {pills.map(p => (
              <span key={p} className="text-[10px] sm:text-[11px] tracking-wide px-3 py-1 rounded-lg transition-all duration-300" style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                background: hovered ? `rgba(${accentRgb}, 0.12)` : `rgba(${accentRgb}, 0.06)`,
                color: accentColor,
                border: `1px solid rgba(${accentRgb}, 0.15)`,
              }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Bottom: stats + CTA */}
        <div>
          {/* Stats */}
          <div className="flex gap-6 sm:gap-8 mb-6 sm:mb-8" style={{ color: accentColor }}>
            {stats.map(s => <StatItem key={s.label} {...s} />)}
          </div>

          {/* CTA Button */}
          <div className="relative overflow-hidden rounded-xl group/cta inline-flex transition-all duration-500" style={{
            border: `2px solid rgba(${accentRgb}, ${hovered ? 0.7 : 0.3})`,
            boxShadow: hovered ? `0 0 30px rgba(${accentRgb}, 0.2), 0 4px 20px rgba(0,0,0,0.4)` : '0 4px 12px rgba(0,0,0,0.3)',
          }}>
            <div className={`absolute inset-0 transition-transform duration-400 -translate-x-full group-hover/cta:translate-x-0`} style={{ background: accentColor }} />
            <span className="relative z-10 px-8 sm:px-10 py-3 sm:py-4 text-[15px] sm:text-[18px] tracking-[0.12em] font-bold transition-colors duration-300 group-hover/cta:text-[#04040a]" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: hovered ? '#fff' : accentColor,
            }}>
              {ctaText}
            </span>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-5 right-5 w-4 h-4 border-t border-r transition-all duration-300 hidden sm:block" style={{
        borderColor: hovered ? `rgba(${accentRgb}, 0.5)` : `rgba(${accentRgb}, 0.15)`,
      }} />
      <div className="absolute bottom-5 left-5 w-4 h-4 border-b border-l transition-all duration-300 hidden sm:block" style={{
        borderColor: hovered ? `rgba(${accentRgb}, 0.5)` : `rgba(${accentRgb}, 0.15)`,
      }} />
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-1 no-underline md:h-full">
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={href} className="flex flex-1 no-underline md:h-full">
      {cardContent}
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
    <h2>Learn to Code and Trade with Christopher Robinson — Python AI Web Development</h2>
    <p>
      Stackmode Academy is the ultimate online school for AI, coding, software development, and trading/investing. Founded by Christopher Robinson, known as StackmodeChris, based in Atlanta, Georgia. CEO Turbo offers premium web design, NFC digital business cards, brand boost strategy, and ad revenue optimization. Visit ceoturbo.com for website design and digital business card services. Follow StackmodeChris on Instagram at christopherrobinsonceo, YouTube at ChristopherRobinson-CEO, and TikTok at stackmodechris___.
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

      {/* Minimal top bar */}
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

      {/* Main split section */}
      <section className="relative w-full min-h-screen pt-[48px]" style={{ background: '#04040a' }}>
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Center content wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100dvh-48px)] px-4 sm:px-6 py-8 sm:py-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-6 sm:mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full" style={{
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase" style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: 'rgba(255,255,255,0.4)',
              }}>
                Christopher Robinson • StackmodeChris
              </span>
            </div>
            <h2 className="text-[13px] sm:text-[15px] tracking-[0.3em] uppercase" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.35em',
            }}>
              Choose Your Path
            </h2>
          </motion.div>

          {/* Two cards */}
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-0 flex-1 md:min-h-[520px] lg:min-h-[560px]">
            <PathCard
              href="/academy"
              logo="/images/stackmode-logo-sm.png"
              logoAlt="Stackmode Academy Christopher Robinson StackmodeChris"
              tag="Academy"
              title={<>JOIN THE<br /><span style={{ color: '#00ff88' }}>ACADEMY</span></>}
              description="Master AI coding, build software products, and trade the financial markets. One system — $50/mo."
              pills={['Python & AI', 'Web Dev', 'Trading', 'Asset Stacking']}
              ctaText="JOIN ACADEMY →"
              accentColor="#00ff88"
              accentRgb="0,255,136"
              stats={[
                { value: '2,400+', label: 'Students' },
                { value: '$50', label: 'Per Month' },
                { value: '24/7', label: 'Access' },
              ]}
              index={0}
            />

            {/* Vertical divider — desktop */}
            <div className="hidden md:flex flex-col items-center justify-center px-0">
              <div className="w-[1px] flex-1" style={{
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)',
              }} />
            </div>

            <PathCard
              href="https://ceoturbo.com"
              isExternal
              logo="/images/ceoturbo-logo-new.png"
              logoAlt="CEO Turbo Christopher Robinson StackmodeChris brand design"
              tag="Services"
              title={<>DESIGN YOUR<br /><span style={{ color: '#00cfff' }}>WEBSITE & BRAND</span></>}
              description="We build your website, design your brand, and set up everything you need to look professional online."
              pills={['Website Design', 'Digital Cards', 'Ad Revenue', 'Brand Strategy']}
              ctaText="GET STARTED →"
              accentColor="#00cfff"
              accentRgb="0,207,255"
              stats={[
                { value: '500+', label: 'Brands Built' },
                { value: 'NFC', label: 'Tap Cards' },
                { value: '48hr', label: 'Turnaround' },
              ]}
              index={1}
            />
          </div>

          {/* Bottom social strip */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-5 sm:gap-8 mt-6 sm:mt-10 pb-4"
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

      {/* Subtle scanline */}
      <div className="fixed inset-0 z-[9990] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      }} />
    </>
  );
};

export default SplitHero;
