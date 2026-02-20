import { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Curated reviews: trading wins, text message reviews, genuine testimonials only
// Removed: ad dashboards, Systeme.io lead pages, duplicates
const reviews = [
  "review-61.png", "review-59.png", "review-57.png",
  "review-52.png", "review-51.png", "review-50.png", "review-49.png",
  "review-47.png", "review-45.png", "review-43.png", "review-41.png",
  "review-39.png", "review-37.png", "review-35.png", "review-33.png",
  "review-31.png", "review-29.png", "review-27.png", "review-25.png",
  "review-23.png", "review-21.png", "review-19.png", "review-17.png",
  "review-15.png", "review-13.png", "review-11.png",
  "review-8.png", "review-5.png", "review-3.png", "review-1.png",
];

const tripled = [...reviews, ...reviews, ...reviews];

const ReviewImage = memo(({ img, onClick }: { img: string; onClick: () => void }) => (
  <motion.button
    className="flex-shrink-0 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    <img
      src={`/lovable-uploads/${img}`}
      alt="Member result"
      className="h-28 sm:h-36 w-auto object-contain"
      loading="lazy"
      decoding="async"
    />
  </motion.button>
));
ReviewImage.displayName = 'ReviewImage';

export function ReviewWall() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setSelectedIndex(prev => prev !== null ? (prev - 1 + reviews.length) % reviews.length : null);
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex(prev => prev !== null ? (prev + 1) % reviews.length : null);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground font-mono tracking-tight">
            Real Results. <span className="text-[#00FF88] drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]">Real Members.</span>
          </h2>
          <div className="flex items-center justify-center gap-0.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-accent fill-accent" />
            ))}
          </div>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 py-3"
          animate={{ x: [0, -8800] }}
          transition={{
            x: { duration: 120, repeat: Infinity, ease: 'linear' },
          }}
        >
          {tripled.map((img, i) => (
            <ReviewImage
              key={`r-${i}`}
              img={img}
              onClick={() => setSelectedIndex(i % reviews.length)}
            />
          ))}
        </motion.div>
      </div>

      <p className="text-center text-muted-foreground text-xs mt-3">Tap any review to enlarge</p>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none shadow-none">
          <div className="relative flex items-center justify-center max-h-[80vh]">
            <button onClick={() => setSelectedIndex(null)} className="absolute -top-10 right-2 p-2 text-foreground/70 hover:text-foreground transition-colors z-30">
              <X size={24} />
            </button>
            <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors">
              <ChevronRight size={24} />
            </button>
            {selectedIndex !== null && (
              <motion.img
                key={selectedIndex}
                src={`/lovable-uploads/${reviews[selectedIndex]}`}
                alt="Member result"
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl border-2 border-primary/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground">
              {(selectedIndex ?? 0) + 1} / {reviews.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
