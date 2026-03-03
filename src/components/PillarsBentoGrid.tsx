import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, PenTool } from 'lucide-react';

const anim = (i: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay: i * 0.08 },
});

export default function PillarsBentoGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">The Framework</p>
          <h2 className="section-header__title">Three Pillars of Wealth</h2>
          <p className="section-header__subtitle">Master all three. Stack your income streams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {/* Pillar 1 — AI Software — wide */}
          <motion.div {...anim(0)} className="md:col-span-4 relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>01</span>
              </div>
              <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>AI Software Mastery</h3>
              <p className="text-sm max-w-md" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                Build SaaS products, automate workflows, and ship complete applications — all with AI. No coding background needed.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img src="/images/showcase/client-ceoturbo.png" alt="CEO Turbo" className="w-32 h-20 rounded-lg object-cover border border-white/[0.06]" />
              <img src="/images/showcase/client-jd.png" alt="Client" className="w-32 h-20 rounded-lg object-cover border border-white/[0.06]" />
              <img src="/images/showcase/client-legacy.png" alt="Legacy" className="w-32 h-20 rounded-lg object-cover border border-white/[0.06] hidden sm:block" />
            </div>
            <Link to="/academy" className="text-sm font-medium text-white hover:underline mt-4 inline-block">Learn AI →</Link>
          </motion.div>

          {/* Pillar 2 — Trading — tall narrow */}
          <motion.div {...anim(1)} className="md:col-span-2 relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>02</span>
              </div>
              <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>Trading & Asset Stacking</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                Stocks, crypto, forex. Technical analysis, risk management, and compounding strategies.
              </p>
            </div>
            <img src="/images/proof/cumulative-pl.png" alt="+$2,256 P&L" className="w-full rounded-lg mt-4 border border-white/[0.06]" />
            <Link to="/academy" className="text-sm font-medium text-white hover:underline mt-4 inline-block">Learn Trading →</Link>
          </motion.div>

          {/* Pillar 3 — Writing — wide */}
          <motion.div {...anim(2)} className="md:col-span-3 relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>03</span>
              </div>
              <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>Write Like a Pro</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                AI-powered copywriting for ads, emails, landing pages, and social media that actually converts.
              </p>
            </div>
            <Link to="/shop" className="text-sm font-medium text-white hover:underline mt-4 inline-block">Browse Prompts →</Link>
          </motion.div>

          {/* Student proof card */}
          <motion.div {...anim(3)} className="md:col-span-3 relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-0 min-h-[220px]">
            <img src="/images/proof/student-testimonial.png" alt="Student success" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Real student mentorship results</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
