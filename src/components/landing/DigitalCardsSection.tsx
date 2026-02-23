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

const benefits = [
  { title: 'Tap to Share', desc: 'NFC + QR ready — works with any smartphone.' },
  { title: 'Always Updated', desc: 'Change your info anytime, no reprints needed.' },
  { title: 'Built for CEOs', desc: 'Premium design that commands respect.' },
];

const DigitalCardsSection = () => {
  const { ref, visible } = useInView();
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="relative min-h-screen w-full py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#060610' }}>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,107,43,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-white/20 mb-8" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{'// DIGITAL BUSINESS CARDS'}</p>

        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FF6B2B' }}>
            ONE TAP. INSTANT IMPRESSION.
          </h2>
          <p className={`text-sm sm:text-base max-w-xl mx-auto transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#A0A0B8' }}>
            Your name, your brand, your links — all in one sleek, shareable digital card. No paper. No limits.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-[320px] h-[200px] sm:w-[380px] sm:h-[220px] cursor-pointer"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} onClick={() => setFlipped(f => !f)}
            data-cursor-color="#FF6B2B">
            <div className="absolute inset-0 transition-transform duration-700" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              <div className="absolute inset-0 rounded-xl border p-6 flex flex-col justify-between"
                style={{ backfaceVisibility: 'hidden', borderColor: '#FF6B2B30', background: 'linear-gradient(135deg, #0a0a14 0%, #12121f 50%, #0a0a14 100%)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                <div>
                  <div className="text-xl tracking-[0.15em]" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FF6B2B' }}>YOUR NAME</div>
                  <div className="text-[10px] text-white/30 tracking-widest mt-1" style={{ fontFamily: "'Share Tech Mono', monospace" }}>CEO & FOUNDER</div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-[9px] text-white/20" style={{ fontFamily: "'Share Tech Mono', monospace" }}>yourname.com<br />@yourbrand</div>
                  <div className="w-8 h-8 rounded border flex items-center justify-center" style={{ borderColor: '#FF6B2B30' }}>
                    <span className="text-[8px]" style={{ color: '#FF6B2B' }}>NFC</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl border p-6 flex flex-col items-center justify-center gap-4"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderColor: '#FF6B2B30', background: 'linear-gradient(135deg, #0a0a14 0%, #12121f 50%, #0a0a14 100%)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                <div className="w-24 h-24 rounded-lg border grid grid-cols-4 grid-rows-4 gap-[2px] p-2" style={{ borderColor: '#FF6B2B30' }}>
                  {Array(16).fill(null).map((_, i) => (
                    <div key={i} className="rounded-sm" style={{ background: Math.random() > 0.4 ? '#FF6B2B40' : 'transparent' }} />
                  ))}
                </div>
                <div className="text-[10px] text-white/30 tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace" }}>SCAN TO CONNECT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div key={b.title} className={`text-center p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${500 + i * 150}ms` }}>
              <h3 className="text-lg tracking-[0.15em] mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FF6B2B' }}>{b.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg group"
            style={{ fontFamily: "'Share Tech Mono', monospace", color: '#060610', background: '#FF6B2B', borderColor: '#FF6B2B' }}
            data-cursor-color="#FF6B2B">
            GET YOUR DIGITAL CARD
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalCardsSection;
