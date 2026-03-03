import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';

type Category = 'Trading' | 'YouTube' | 'Revenue';

interface ProofItem {
  img: string;
  label: string;
  category: Category;
}

const categoryStyles: Record<Category, { pill: string; dot: string }> = {
  Trading: { pill: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20', dot: 'bg-emerald-400' },
  YouTube: { pill: 'bg-red-500/15 text-red-400 border border-red-500/20', dot: 'bg-red-400' },
  Revenue: { pill: 'bg-amber-500/15 text-amber-400 border border-amber-500/20', dot: 'bg-amber-400' },
};

const proofItems: ProofItem[] = [
  // Trading
  { img: '/images/proof/cumulative-pl.png', label: '+$2,256 cumulative P&L', category: 'Trading' },
  { img: '/images/proof/trading-pl-1.png', label: 'Student results — $1,224 day', category: 'Trading' },
  { img: '/images/proof/trading-pl-2.png', label: 'Live trading P&L', category: 'Trading' },
  { img: '/images/proof/trading-pl-3.png', label: 'Consistent gains', category: 'Trading' },
  { img: '/images/proof/account-value.png', label: 'Account value growth', category: 'Trading' },
  { img: '/images/proof/portfolio-growth.png', label: 'Portfolio growth chart', category: 'Trading' },
  { img: '/images/proof/amzn-trade.png', label: 'AMZN swing trade', category: 'Trading' },
  { img: '/images/proof/student-testimonial.png', label: 'Mentorship results', category: 'Trading' },
  // YouTube
  { img: '/images/proof/youtube-impressions.png', label: '14.2M impressions', category: 'YouTube' },
  { img: '/images/proof/youtube-views.png', label: '1.2M+ lifetime views', category: 'YouTube' },
  { img: '/images/proof/content-performance.png', label: 'Content performance', category: 'YouTube' },
  { img: '/images/proof/youtube-shorts.png', label: 'YouTube Shorts analytics', category: 'YouTube' },
  // Revenue
  { img: '/images/proof/stripe-payouts.png', label: 'Recurring revenue payouts', category: 'Revenue' },
  { img: '/images/proof/stripe-balances.png', label: 'Stripe deposit history', category: 'Revenue' },
];

const categories: Category[] = ['Trading', 'YouTube', 'Revenue'];

function ProofCard({ item, onClick }: { item: ProofItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-full rounded-xl overflow-hidden group cursor-pointer border border-white/[0.06] bg-[#0a0a0a] transition-all duration-300 hover:border-white/[0.12] hover:shadow-lg hover:shadow-white/[0.02] text-left block"
    >
      {/* Image container — no cropping */}
      <div className="relative w-full bg-[#080808]">
        <img
          src={item.img}
          alt={item.label}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
      {/* Info bar below image — no overlay overlap */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-white/[0.06]">
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full ${categoryStyles[item.category].pill}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${categoryStyles[item.category].dot}`} />
          {item.category}
        </span>
        <span className="text-[11px] font-medium truncate" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {item.label}
        </span>
      </div>
    </button>
  );
}

export default function BusinessProofBento() {
  const [enlarged, setEnlarged] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [columns, setColumns] = useState(3);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setColumns(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const filtered = activeFilter === 'All' ? proofItems : proofItems.filter((p) => p.category === activeFilter);
  const visible = showAll ? filtered : filtered.slice(0, columns === 1 ? 6 : 12);

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="section-header">
          <p className="section-header__eyebrow">Proof of Work</p>
          <h2 className="section-header__title">Real Results. Real Revenue.</h2>
          <p className="section-header__subtitle">
            Trading P&L, YouTube analytics, Stripe payouts — all verified.
          </p>
        </div>

        {/* Filter pills — scrollable on mobile */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide px-1 py-1">
            <button
              onClick={() => { setActiveFilter('All'); setShowAll(false); }}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === 'All'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'border border-white/[0.06] hover:border-white/15'
              }`}
              style={{ color: activeFilter !== 'All' ? 'rgba(255,255,255,0.45)' : undefined }}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? categoryStyles[cat].pill
                    : 'border border-white/[0.06] hover:border-white/15'
                }`}
                style={{ color: activeFilter !== cat ? 'rgba(255,255,255,0.45)' : undefined }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <MasonryGrid columns={columns} gap={3}>
          {visible.map((item, i) => (
            <ProofCard key={`${item.img}-${i}`} item={item} onClick={() => setEnlarged(item.img)} />
          ))}
        </MasonryGrid>

        {/* Show more */}
        {!showAll && filtered.length > visible.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-full text-xs font-medium border border-white/[0.1] hover:border-white/20 transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Show All {filtered.length} Results
            </button>
          </div>
        )}
      </div>

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
            <button onClick={() => setEnlarged(null)} className="absolute top-6 right-6 text-white/60 hover:text-white z-10">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={enlarged}
              alt="Enlarged proof"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
