import { memo } from 'react';
import { motion } from 'framer-motion';

const allReviews = [
  "review-51.png", "review-52.png", "review-57.png", "review-59.png", "review-61.png",
  "review-48.png", "review-47.png", "review-44.png", "review-49.png", "review-50.png",
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png",
  "review-11.png", "review-12.png", "review-46.png", "review-13.png", "review-14.png",
];

// Split into two rows for dual-direction scrolling
const row1 = allReviews.slice(0, 13);
const row2 = allReviews.slice(13).concat(allReviews.slice(0, 12)); // Ensure enough items

const ReviewImage = memo(({ img }: { img: string }) => (
  <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 rounded-lg overflow-hidden bg-card/5 border border-border/10">
    <img
      src={`/lovable-uploads/${img}`}
      alt="Success story"
      className="w-full h-auto object-cover opacity-30 hover:opacity-50 transition-opacity"
      loading="lazy"
    />
  </div>
));

ReviewImage.displayName = 'ReviewImage';

export const ReviewsBackgroundCarousel = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      {/* Row 1 - Scrolling Left */}
      <div className="absolute top-[10%] left-0 right-0">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...row1, ...row1, ...row1].map((img, i) => (
            <ReviewImage key={`row1-${i}`} img={img} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="absolute top-[45%] left-0 right-0">
        <motion.div
          className="flex gap-4"
          animate={{ x: [-2000, 0] }}
          transition={{
            x: {
              duration: 70,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...row2, ...row2, ...row2].map((img, i) => (
            <ReviewImage key={`row2-${i}`} img={img} />
          ))}
        </motion.div>
      </div>

      {/* Row 3 - Scrolling Left (slower) */}
      <div className="absolute top-[75%] left-0 right-0 hidden sm:block">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              duration: 80,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...row1.slice().reverse(), ...row1.slice().reverse()].map((img, i) => (
            <ReviewImage key={`row3-${i}`} img={img} />
          ))}
        </motion.div>
      </div>
    </div>
  );
});

ReviewsBackgroundCarousel.displayName = 'ReviewsBackgroundCarousel';

export default ReviewsBackgroundCarousel;
