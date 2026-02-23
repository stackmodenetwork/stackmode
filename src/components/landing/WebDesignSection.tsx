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

const features = [
  { title: 'Strategy First', desc: 'We build around your goals, not templates.' },
  { title: 'Premium Aesthetic', desc: 'Design that positions you at the top.' },
  { title: 'Built to Convert', desc: 'Every element has a purpose.' },
];

const WebDesignSection = () => {
  const { ref, visible } = useInView();

  return (
    <section className="relative min-h-screen w-full py-20 md:py-28 px-6 overflow-hidden" style={{ background: '#060610' }}>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,107,43,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-white/20 mb-8" style={{ fontFamily: "'Share Tech Mono', monospace" }}>{'// DIGITAL WEB DESIGN'}</p>

        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FF6B2B' }}>
            WEBSITES THAT WORK<br />WHILE YOU SLEEP.
          </h2>
          <p className={`text-sm sm:text-base max-w-xl mx-auto transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#A0A0B8' }}>
            Premium, conversion-focused web design built for CEOs and entrepreneurs who need more than a pretty page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={f.title}
              className={`group p-6 rounded-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + i * 150}ms`, borderColor: 'rgba(255,107,43,0.1)', background: 'rgba(255,107,43,0.02)' }}>
              <h3 className="text-lg tracking-[0.15em] mb-3 transition-colors group-hover:text-[#FF6B2B]" style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'rgba(255,255,255,0.8)' }}>
                {f.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={`rounded-lg border overflow-hidden transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ borderColor: 'rgba(255,107,43,0.1)' }}>
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,107,43,0.1)', background: 'rgba(255,107,43,0.02)' }}>
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            <div className="ml-4 flex-1 h-5 rounded-full max-w-xs" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <span className="text-[9px] text-white/20 ml-3 leading-5" style={{ fontFamily: "'Share Tech Mono', monospace" }}>ceoturbo.com</span>
            </div>
          </div>
          <div className="h-48 sm:h-64 md:h-80 relative" style={{ background: 'linear-gradient(135deg, #060610 0%, rgba(255,107,43,0.03) 50%, #060610 100%)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl tracking-[0.2em] mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FF6B2B40' }}>YOUR SITE HERE</div>
                <div className="text-[10px] text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Designed & built by CEO Turbo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.15em] uppercase px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg group"
            style={{ fontFamily: "'Share Tech Mono', monospace", color: '#060610', background: '#FF6B2B', borderColor: '#FF6B2B' }}
            data-cursor-color="#FF6B2B">
            START YOUR PROJECT
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
