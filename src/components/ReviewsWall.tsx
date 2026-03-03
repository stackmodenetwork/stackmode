import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';

const reviewImages = Array.from({ length: 65 }, (_, i) => ({
  src: `/lovable-uploads/review-${i + 1}.png`,
  alt: `Student review ${i + 1}`,
}));

export default function ReviewsWall() {
  const [enlarged, setEnlarged] = useState<string | null>(null);
  const [columns, setColumns] = useState(4);
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

  const visible = showAll ? reviewImages : reviewImages.slice(0, columns <= 2 ? 8 : 16);

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="section-header">
          <p className="section-header__eyebrow">Student Reviews</p>
          <h2 className="section-header__title">What Our Community Says</h2>
          <p className="section-header__subtitle">
            Real reviews from real students — unfiltered and unedited.
          </p>
        </div>

        <MasonryGrid columns={columns} gap={3}>
          {visible.map((img, i) => (
            <button
              key={i}
              onClick={() => setEnlarged(img.src)}
              className="w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a] cursor-pointer transition-all duration-300 hover:border-white/[0.12] hover:shadow-lg hover:shadow-white/[0.02] block"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </button>
          ))}
        </MasonryGrid>

        {!showAll && reviewImages.length > visible.length && (
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
              alt="Enlarged review"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
