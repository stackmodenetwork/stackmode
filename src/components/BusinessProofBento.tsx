import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Marquee } from '@/components/ui/marquee';
import { X } from 'lucide-react';

const proofItems = [
  { img: '/images/proof/cumulative-pl.png', label: '+$2,256 cumulative P&L' },
  { img: '/images/proof/trading-pl-1.png', label: 'Student results — $1,224 day' },
  { img: '/images/proof/youtube-impressions.png', label: '14.2M impressions' },
  { img: '/images/proof/stripe-payouts.png', label: 'Recurring revenue payouts' },
  { img: '/images/proof/youtube-views.png', label: '1.2M+ lifetime views' },
  { img: '/images/proof/student-testimonial.png', label: 'Mentorship results' },
  { img: '/images/proof/stripe-balances.png', label: 'Stripe deposit history' },
];

const row1 = proofItems.slice(0, 4);
const row2 = proofItems.slice(4);

export default function BusinessProofBento() {
  const [enlarged, setEnlarged] = useState<string | null>(null);

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Proof of Work</p>
          <h2 className="section-header__title">Real Results. Real Revenue.</h2>
          <p className="section-header__subtitle">
            Trading P&L, YouTube analytics, Stripe payouts, and student wins — all verified.
          </p>
        </div>
      </div>

      <Marquee pauseOnHover className="[--duration:35s] [--gap:0.75rem] mb-3">
        {row1.map((item, i) => (
          <button
            key={i}
            onClick={() => setEnlarged(item.img)}
            className="relative group flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] w-[340px] h-[220px] cursor-pointer"
          >
            <img src={item.img} alt={item.label} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
            </div>
          </button>
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:0.75rem]">
        {row2.map((item, i) => (
          <button
            key={i}
            onClick={() => setEnlarged(item.img)}
            className="relative group flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] w-[340px] h-[220px] cursor-pointer"
          >
            <img src={item.img} alt={item.label} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
            </div>
          </button>
        ))}
      </Marquee>

      {/* Lightbox */}
      <AnimatePresence>
        {enlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setEnlarged(null)}
          >
            <button onClick={() => setEnlarged(null)} className="absolute top-6 right-6 text-white/60 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={enlarged}
              alt="Enlarged proof"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
