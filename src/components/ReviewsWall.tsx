import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// 40+ curated reviews — trading wins, text reviews, genuine testimonials
const reviewImages = [
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png",
  "review-11.png", "review-12.png", "review-13.png", "review-14.png", "review-15.png",
  "review-16.png", "review-17.png", "review-18.png", "review-19.png", "review-20.png",
  "review-21.png", "review-22.png", "review-23.png", "review-24.png", "review-25.png",
  "review-26.png", "review-27.png", "review-28.png", "review-29.png", "review-30.png",
  "review-31.png", "review-32.png", "review-33.png", "review-34.png", "review-35.png",
  "review-36.png", "review-37.png", "review-38.png", "review-39.png", "review-40.png",
  "review-41.png", "review-42.png", "review-43.png", "review-44.png", "review-45.png",
];

const ReviewImage = memo(({ src, onClick }: { src: string; onClick: () => void }) => (
  <motion.button
    className="w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a] cursor-pointer transition-all duration-300 hover:border-white/[0.15] hover:shadow-lg block break-inside-avoid mb-3"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    <img
      src={`/lovable-uploads/${src}`}
      alt="Stackmode Academy member review"
      className="w-full h-auto block"
      loading="lazy"
      decoding="async"
    />
  </motion.button>
));
ReviewImage.displayName = 'ReviewImage';

export default function ReviewsWall() {
  const [enlarged, setEnlarged] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setColumns(w < 640 ? 2 : w < 1024 ? 3 : 4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const initialCount = columns <= 2 ? 8 : 16;
  const visible = showAll ? reviewImages : reviewImages.slice(0, initialCount);

  const goPrev = () => setEnlarged(prev => prev !== null ? (prev - 1 + reviewImages.length) % reviewImages.length : null);
  const goNext = () => setEnlarged(prev => prev !== null ? (prev + 1) % reviewImages.length : null);

  return (
    <section className="py-16 sm:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="section-header">
          <p className="section-header__eyebrow">Student Reviews</p>
          <h2 className="section-header__title">What Our Community Says</h2>
          <p className="section-header__subtitle">
            Real reviews from real students — unfiltered and unedited.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          style={{ columnCount: columns, columnGap: '0.75rem' }}
          className="w-full"
        >
          {visible.map((img, i) => (
            <ReviewImage key={img} src={img} onClick={() => setEnlarged(i)} />
          ))}
        </div>

        {!showAll && reviewImages.length > initialCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-full text-xs font-medium border border-white/[0.1] hover:border-white/20 transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Show All {reviewImages.length} Reviews
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {enlarged !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setEnlarged(null)}
          >
            <button onClick={() => setEnlarged(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white z-10">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            <motion.img
              key={enlarged}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={`/lovable-uploads/${reviewImages[enlarged]}`}
              alt="Enlarged review"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
              {enlarged + 1} / {reviewImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
