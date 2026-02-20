import { useState, useCallback, memo } from 'react';
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const allReviews = [
  "review-64.png", "review-63.png", "review-62.png", "review-61.png", "review-59.png", "review-57.png",
  "review-52.png", "review-51.png", "review-50.png", "review-49.png", "review-48.png", "review-47.png",
  "review-46.png", "review-44.png",
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-10.png",
  "review-11.png", "review-12.png", "review-13.png", "review-14.png",
  "review-15.png", "review-16.png", "review-17.png", "review-18.png", "review-19.png", "review-20.png",
];

const ReviewCard = memo(({ img, index, onClick }: { img: string; index: number; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
    onClick={onClick}
    className="break-inside-avoid mb-3 rounded-xl border border-primary/20 bg-card/20 overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]"
  >
    <img
      src={`/lovable-uploads/${img}`}
      alt={`Member result ${index + 1}`}
      className="w-full h-auto block"
      loading={index < 9 ? 'eager' : 'lazy'}
    />
  </motion.div>
));
ReviewCard.displayName = 'ReviewCard';

export function ReviewWall() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const initialCount = 9;
  const displayed = showAll ? allReviews : allReviews.slice(0, initialCount);
  const isOpen = selectedIndex !== null;

  const goNext = useCallback(() => {
    setSelectedIndex(prev => prev !== null ? (prev + 1) % allReviews.length : null);
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex(prev => prev !== null ? (prev - 1 + allReviews.length) % allReviews.length : null);
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono tracking-tight">
            Real Results. Real Members.
          </h2>
          <p className="text-sm text-muted-foreground mt-2">Screenshots from our community</p>
        </div>

        {/* Masonry Wall */}
        <div className="columns-2 sm:columns-3 gap-3">
          {displayed.map((img, index) => (
            <ReviewCard
              key={img}
              img={img}
              index={index}
              onClick={() => setSelectedIndex(allReviews.indexOf(img))}
            />
          ))}
        </div>

        {/* Expand / Collapse */}
        {allReviews.length > initialCount && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/40 px-5 py-2.5 rounded-lg transition-colors"
            >
              {showAll ? <>Show Less <ChevronUp size={16} /></> : <>View All Reviews <ChevronDown size={16} /></>}
            </button>
          </div>
        )}

        {/* Trust badge */}
        <div className="text-center mt-4">
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Check size={14} className="text-primary" />
            Verified real results
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={isOpen} onOpenChange={open => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 border-border/50 overflow-hidden">
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              <button onClick={() => setSelectedIndex(null)} className="absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 border border-border/50">
                <X size={16} />
              </button>
              <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-background/80 border border-border/50">
                <ChevronLeft size={20} />
              </button>
              <img
                src={`/lovable-uploads/${allReviews[selectedIndex]}`}
                alt={`Review ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-background/80 border border-border/50">
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 text-xs text-muted-foreground">
                {selectedIndex + 1} / {allReviews.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
