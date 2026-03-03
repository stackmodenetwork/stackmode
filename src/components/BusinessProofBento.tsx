import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';

type Category = 'Trading' | 'YouTube' | 'Revenue' | 'Ads' | 'Reviews' | 'Business';

interface ProofItem {
  img: string;
  label: string;
  category: Category;
}

const categoryStyles: Record<Category, string> = {
  Trading: 'bg-emerald-500/20 text-emerald-400',
  YouTube: 'bg-red-500/20 text-red-400',
  Revenue: 'bg-amber-500/20 text-amber-400',
  Ads: 'bg-blue-500/20 text-blue-400',
  Reviews: 'bg-purple-500/20 text-purple-400',
  Business: 'bg-cyan-500/20 text-cyan-400',
};

const proofItems: ProofItem[] = [
  { img: '/images/proof/cumulative-pl.png', label: '+$2,256 cumulative P&L', category: 'Trading' },
  { img: '/images/proof/trading-pl-1.png', label: 'Student results — $1,224 day', category: 'Trading' },
  { img: '/images/proof/trading-pl-2.png', label: 'Live trading P&L', category: 'Trading' },
  { img: '/images/proof/trading-pl-3.png', label: 'Consistent gains', category: 'Trading' },
  { img: '/images/proof/youtube-impressions.png', label: '14.2M impressions', category: 'YouTube' },
  { img: '/images/proof/youtube-views.png', label: '1.2M+ lifetime views', category: 'YouTube' },
  { img: '/images/proof/stripe-payouts.png', label: 'Recurring revenue payouts', category: 'Revenue' },
  { img: '/images/proof/stripe-balances.png', label: 'Stripe deposit history', category: 'Revenue' },
  { img: '/images/proof/student-testimonial.png', label: 'Mentorship results', category: 'Reviews' },
  { img: '/images/proof/content-performance.png', label: 'Content performance', category: 'YouTube' },
  { img: '/images/proof/ad-stats.png', label: 'Ad campaign performance', category: 'Ads' },
  { img: '/images/proof/youtube-shorts.png', label: 'YouTube Shorts analytics', category: 'YouTube' },
  { img: '/images/proof/youtube-lifetime.png', label: 'Lifetime YouTube stats', category: 'YouTube' },
  { img: '/images/proof/yt-revenue.png', label: 'YouTube revenue breakdown', category: 'Revenue' },
  { img: '/images/proof/watch-page-ads.png', label: 'Watch page ad revenue', category: 'Ads' },
  { img: '/images/proof/intel-trade.png', label: 'INTC trade execution', category: 'Trading' },
  { img: '/images/proof/account-value.png', label: 'Account value growth', category: 'Trading' },
  { img: '/images/proof/portfolio-growth.png', label: 'Portfolio growth chart', category: 'Trading' },
  { img: '/images/proof/trading-positions.png', label: 'Active trading positions', category: 'Trading' },
  { img: '/images/proof/amzn-trade.png', label: 'AMZN swing trade', category: 'Trading' },
  ...Array.from({ length: 20 }, (_, i) => ({
    img: `/lovable-uploads/business-proof-${i + 1}.png`,
    label: `Business proof #${i + 1}`,
    category: (i % 3 === 0 ? 'Revenue' : i % 3 === 1 ? 'Business' : 'Reviews') as Category,
  })),
];

const categories: Category[] = ['Trading', 'YouTube', 'Revenue', 'Ads', 'Reviews', 'Business'];

function ProofCard({ item, onClick }: { item: ProofItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03] border border-white/[0.08] bg-[#0a0a0a]"
    >
      <img
        src={item.img}
        alt={item.label}
        className="w-full h-auto object-contain"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="absolute top-0 left-0 p-3">
        <span className={`text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full ${categoryStyles[item.category]}`}>
          {item.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-xs font-medium drop-shadow-md" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {item.label}
        </p>
      </div>
    </div>
  );
}

export default function BusinessProofBento() {
  const [enlarged, setEnlarged] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setColumns(w < 640 ? 1 : w < 768 ? 2 : w < 1024 ? 3 : 4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const filtered = activeFilter === 'All' ? proofItems : proofItems.filter((p) => p.category === activeFilter);

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

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              activeFilter === 'All'
                ? 'bg-white/10 text-white border-white/20'
                : 'bg-transparent border-white/[0.08] hover:border-white/20'
            }`}
            style={{ color: activeFilter === 'All' ? '#fff' : 'rgba(255,255,255,0.5)' }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeFilter === cat
                  ? categoryStyles[cat] + ' border-white/20'
                  : 'bg-transparent border-white/[0.08] hover:border-white/20'
              }`}
              style={{ color: activeFilter !== cat ? 'rgba(255,255,255,0.5)' : undefined }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <MasonryGrid columns={columns} gap={4}>
          {filtered.map((item, i) => (
            <ProofCard key={`${item.img}-${i}`} item={item} onClick={() => setEnlarged(item.img)} />
          ))}
        </MasonryGrid>
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
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
