import { useRef, useEffect, useState } from 'react';
import CeoTurboBackground from './CeoTurboBackground';

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const checklist = ['Digital Presence', 'Brand Positioning', 'Content Strategy', 'Visual Identity', 'Revenue Alignment'];

const BrandBoostSection = () => {
  const { ref, visible } = useInView();
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setCheckedCount(prev => {
        if (prev >= checklist.length) { clearInterval(interval); return prev; }
        return prev + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section className="relative min-h-screen w-full py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#030305' }}>
      <CeoTurboBackground />
      {/* Cyan radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #00E5FF, transparent 70%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-white/20 mb-8" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          {'// CEO TURBO — BRAND BOOST'}
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Copy */}
          <div className={`flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#00E5FF' }}
            >
              YOUR BRAND IS MAKING<br />AN IMPRESSION RIGHT NOW.
              <br /><span className="text-white/60">IS IT THE RIGHT ONE?</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              In one focused session we'll sharpen your positioning, elevate how the world sees you, and build a brand that opens doors on autopilot.
            </p>
            <a
              href="https://ceoturbo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg group"
              style={{ fontFamily: "'Share Tech Mono', monospace", color: '#030305', background: '#00E5FF', borderColor: '#00E5FF' }}
              data-cursor-color="#00E5FF"
            >
              BOOK YOUR BRAND BOOST CALL
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right — Terminal card */}
          <div className={`flex-1 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="rounded-lg border p-6 sm:p-8" style={{ borderColor: 'rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.02)' }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[10px] text-white/20" style={{ fontFamily: "'Share Tech Mono', monospace" }}>brand_audit.sh</span>
              </div>

              {/* Checklist */}
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 transition-all duration-300"
                    style={{ opacity: i < checkedCount ? 1 : 0.2 }}
                  >
                    <span className="w-5 h-5 rounded flex items-center justify-center text-xs border transition-all duration-300"
                      style={{
                        borderColor: i < checkedCount ? '#00E5FF' : 'rgba(255,255,255,0.1)',
                        color: i < checkedCount ? '#00E5FF' : 'transparent',
                        background: i < checkedCount ? 'rgba(0,229,255,0.1)' : 'transparent',
                      }}>
                      ✓
                    </span>
                    <span className="text-sm text-white/70" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandBoostSection;
