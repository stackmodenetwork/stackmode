import { useRef, useEffect, useState } from 'react';

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

const cards = [
  { label: 'CODE', desc: 'Build real, sellable digital assets with AI-powered tools.', accent: true },
  { label: 'CONTENT', desc: 'Grow an audience that buys — on every platform.', accent: false },
  { label: 'CAPITAL', desc: 'Multiply your profits through strategic investing.', accent: false },
];

const AcademySection = () => {
  const { ref, visible } = useInView();

  return (
    <section className="relative min-h-screen w-full py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#060610' }}>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(124,92,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-white/20 mb-8" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          {'// STACKMODE ACADEMY'}
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className={`flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#7C5CFF' }}
            >
              THE ONLY SYSTEM<br />THAT ACTUALLY{' '}
              <span className="relative">
                WORKS
                <span className="absolute left-0 bottom-0 w-full h-[2px]" style={{ background: 'linear-gradient(to right, #7C5CFF, transparent)' }} />
              </span>.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-lg mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#A0A0B8' }}>
              Most courses sell you pieces. We give you the <span style={{ color: '#E8E8F0' }}>blueprint</span> — Code to build, Content to sell, Investing to multiply.
            </p>
            <a
              href="https://whop.com/stackmode-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg group"
              style={{ fontFamily: "'Share Tech Mono', monospace", color: '#060610', background: '#7C5CFF', borderColor: '#7C5CFF' }}
              data-cursor-color="#7C5CFF"
            >
              JOIN FOR $50/MO
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {cards.map((card, i) => (
              <div
                key={card.label}
                className={`relative p-6 rounded-lg border transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                  borderColor: card.accent ? '#7C5CFF50' : 'rgba(255,255,255,0.06)',
                  background: card.accent ? 'rgba(124,92,255,0.04)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <h3 className="text-lg tracking-[0.2em] mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", color: card.accent ? '#7C5CFF' : 'rgba(255,255,255,0.6)' }}>
                  {card.label}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                  {card.desc}
                </p>
                {card.accent && (
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg" style={{ background: '#7C5CFF' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-y" style={{ borderColor: 'rgba(124,92,255,0.1)' }}>
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {Array(3).fill(null).map((_, i) => (
              <span key={i} className="text-xs tracking-[0.25em] mx-4" style={{ fontFamily: "'Share Tech Mono', monospace", color: '#7C5CFF60' }}>
                CODE · CONTENT · CAPITAL · $50/MONTH · BUILD · SELL · MULTIPLY · JOIN TODAY ·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
