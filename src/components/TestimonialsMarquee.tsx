import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Marquee } from '@/components/ui/3d-testimonials';

const reviewImages = Array.from({ length: 75 }, (_, i) => `review-${i + 1}.png`);

// Images that should appear zoomed out (smaller scale) for visual variety
const zoomedOutSet = new Set([
  'review-66.png', 'review-68.png', 'review-69.png', 'review-71.png',
  'review-72.png', 'review-74.png',
]);

// Split into 4 columns
const col1 = reviewImages.filter((_, i) => i % 4 === 0);
const col2 = reviewImages.filter((_, i) => i % 4 === 1);
const col3 = reviewImages.filter((_, i) => i % 4 === 2);
const col4 = reviewImages.filter((_, i) => i % 4 === 3);

const ReviewImg = memo(({ src, onClick }: { src: string; onClick: () => void }) => {
  const isZoomedOut = zoomedOutSet.has(src);
  return (
    <button
      className="w-full rounded-xl overflow-hidden border border-border/30 hover:border-border/60 cursor-pointer transition-all duration-200 block"
      onClick={onClick}
    >
      <img
        src={`/lovable-uploads/${src}`}
        alt="Stackmode Academy member review"
        className={`w-full h-auto block ${isZoomedOut ? 'scale-[0.85] my-1' : ''}`}
        loading="lazy"
        decoding="async"
      />
    </button>
  );
});
ReviewImg.displayName = 'ReviewImg';

const TestimonialsMarquee = memo(() => {
  const [enlarged, setEnlarged] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setEnlarged(prev => prev !== null ? (prev - 1 + reviewImages.length) % reviewImages.length : null);
  }, []);

  const goNext = useCallback(() => {
    setEnlarged(prev => prev !== null ? (prev + 1) % reviewImages.length : null);
  }, []);

  const openImage = useCallback((img: string) => {
    const idx = reviewImages.indexOf(img);
    setEnlarged(idx);
  }, []);

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 mb-10">
        <div className="section-header">
          <p className="section-header__eyebrow">Student Reviews</p>
          <h2 className="section-header__title">What Our Community Says</h2>
          <p className="section-header__subtitle">
            Real reviews from real students — unfiltered and unedited.
          </p>
        </div>
      </div>

      <div className="relative flex h-[600px] w-full items-start justify-center overflow-hidden gap-3 px-4 max-w-6xl mx-auto">
        {/* Column 1 - down */}
        <Marquee vertical pauseOnHover repeat={2} className="[--duration:45s] [--gap:0.75rem] flex-1">
          {col1.map((img) => (
            <ReviewImg key={img} src={img} onClick={() => openImage(img)} />
          ))}
        </Marquee>
        {/* Column 2 - up */}
        <Marquee vertical reverse pauseOnHover repeat={2} className="[--duration:38s] [--gap:0.75rem] flex-1">
          {col2.map((img) => (
            <ReviewImg key={img} src={img} onClick={() => openImage(img)} />
          ))}
        </Marquee>
        {/* Column 3 - down */}
        <Marquee vertical pauseOnHover repeat={2} className="[--duration:50s] [--gap:0.75rem] flex-1 hidden sm:flex">
          {col3.map((img) => (
            <ReviewImg key={img} src={img} onClick={() => openImage(img)} />
          ))}
        </Marquee>
        {/* Column 4 - up */}
        <Marquee vertical reverse pauseOnHover repeat={2} className="[--duration:42s] [--gap:0.75rem] flex-1 hidden lg:flex">
          {col4.map((img) => (
            <ReviewImg key={img} src={img} onClick={() => openImage(img)} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
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
});
TestimonialsMarquee.displayName = 'TestimonialsMarquee';

export default TestimonialsMarquee;
