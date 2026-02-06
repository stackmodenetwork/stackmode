import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const reviews = [
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png",
  "review-11.png", "review-12.png", "review-13.png", "review-14.png", "review-15.png",
  "review-16.png", "review-17.png", "review-18.png", "review-19.png", "review-20.png",
  "review-21.png", "review-22.png", "review-23.png", "review-24.png", "review-25.png",
  "review-26.png", "review-27.png", "review-28.png", "review-29.png", "review-30.png",
  "review-31.png", "review-32.png", "review-33.png", "review-34.png", "review-35.png",
  "review-36.png", "review-37.png", "review-38.png", "review-39.png", "review-40.png",
  "review-41.png", "review-42.png", "review-43.png", "review-44.png", "review-45.png",
  "review-46.png", "review-47.png", "review-48.png", "review-49.png", "review-50.png",
  "review-51.png", "review-52.png", "review-57.png", "review-59.png", "review-61.png",
];

const ReviewImage = memo(({ img, onClick }: { img: string; onClick: () => void }) => (
  <motion.button 
    className="flex-shrink-0 rounded-lg overflow-hidden border border-border/40 hover:border-primary/60 cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    <img
      src={`/lovable-uploads/${img}`}
      alt="Member success story"
      className="h-24 sm:h-28 md:h-32 w-auto object-contain"
      loading="lazy"
      decoding="async"
    />
  </motion.button>
));

ReviewImage.displayName = 'ReviewImage';

export const ReviewsBackgroundCarousel = memo(() => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const allReviews = [...reviews, ...reviews, ...reviews];

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? reviews.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === reviews.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        {/* Trust Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-foreground font-medium text-sm">500+ Members Trust Stackmode</span>
        </div>
        
        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4 py-3"
            animate={{ x: [0, -1600] }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {allReviews.map((img, i) => (
              <ReviewImage 
                key={`review-${i}`} 
                img={img} 
                onClick={() => setSelectedIndex(i % reviews.length)}
              />
            ))}
          </motion.div>
        </div>

        {/* Tap to view hint */}
        <p className="text-center text-muted-foreground text-xs mt-3">
          Tap any review to enlarge
        </p>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            {selectedIndex !== null && (
              <motion.img
                key={selectedIndex}
                src={`/lovable-uploads/${reviews[selectedIndex]}`}
                alt="Member success story"
                className="w-full h-auto rounded-xl border-2 border-primary/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground">
              {(selectedIndex ?? 0) + 1} / {reviews.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});

ReviewsBackgroundCarousel.displayName = 'ReviewsBackgroundCarousel';

export default ReviewsBackgroundCarousel;
