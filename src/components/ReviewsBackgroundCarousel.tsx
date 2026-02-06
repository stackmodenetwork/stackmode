import { memo } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  "review-51.png", "review-52.png", "review-57.png", "review-59.png", "review-61.png",
  "review-48.png", "review-47.png", "review-44.png", "review-49.png", "review-50.png",
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
];

const ReviewImage = memo(({ img }: { img: string }) => (
  <div className="flex-shrink-0 w-28 sm:w-36 rounded-lg overflow-hidden bg-card/30 border border-border/20">
    <img
      src={`/lovable-uploads/${img}`}
      alt="Member success"
      className="w-full h-auto object-cover"
      loading="lazy"
      decoding="async"
    />
  </div>
));

ReviewImage.displayName = 'ReviewImage';

export const ReviewsBackgroundCarousel = memo(() => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {/* Trust Header */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-muted-foreground text-sm">Trusted by 500+ members</span>
      </div>
      
      {/* Single Row Carousel */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-3 py-2"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...reviews, ...reviews, ...reviews].map((img, i) => (
            <ReviewImage key={`review-${i}`} img={img} />
          ))}
        </motion.div>
      </div>
    </div>
  );
});

ReviewsBackgroundCarousel.displayName = 'ReviewsBackgroundCarousel';

export default ReviewsBackgroundCarousel;
