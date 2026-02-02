import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, BadgeCheck, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const allReviews = [
  "review-51.png", "review-52.png", "review-57.png", "review-59.png", "review-61.png",
  "review-48.png", "review-47.png", "review-44.png", "review-49.png", "review-50.png",
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png",
  "review-11.png", "review-12.png", "review-46.png", "review-13.png", "review-14.png",
  "review-15.png", "review-16.png", "review-17.png", "review-18.png", "review-19.png",
  "review-20.png", "review-21.png", "review-22.png", "review-23.png", "review-24.png",
  "review-25.png", "review-26.png", "review-27.png", "review-28.png", "review-29.png",
  "review-30.png", "review-31.png", "review-32.png", "review-33.png", "review-34.png",
  "review-35.png", "review-53.png", "review-55.png", "review-58.png"
];

// Simple review card without complex animations
const ReviewCard = ({ 
  img, 
  index, 
  onClick,
  priority 
}: { 
  img: string; 
  index: number; 
  onClick: () => void;
  priority: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="break-inside-avoid bg-card/50 border-2 border-primary/40 rounded-xl overflow-hidden 
                 hover:border-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] 
                 transition-all duration-200 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        {/* Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted/50 animate-pulse" />
        )}
        <img 
          src={`/lovable-uploads/${img}`} 
          alt={`Student success story ${index + 1}`} 
          className={`w-full h-auto block transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export function ReviewsGallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Show fewer items initially for faster load
  const initialCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 6 : 8;
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, initialCount);
  const isOpen = selectedIndex !== null;

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allReviews.length);
    }
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allReviews.length) % allReviews.length);
    }
  }, [selectedIndex]);

  const handleClose = () => setSelectedIndex(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goNext, goPrev]);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 relative">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-2 px-2">
          Real Results from The Stackmode Network
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto px-4">
          Join successful traders who transformed their results
        </p>
      </div>

      {/* Masonry Grid - simple CSS, no animation */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3 lg:gap-4 space-y-2 sm:space-y-3 lg:space-y-4">
        {displayedReviews.map((img, index) => (
          <ReviewCard
            key={img}
            img={img}
            index={index}
            priority={index < 4}
            onClick={() => setSelectedIndex(allReviews.indexOf(img))}
          />
        ))}
      </div>

      {/* Show More / Less Button */}
      {allReviews.length > initialCount && (
        <div className="text-center mt-8 sm:mt-10">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)} 
            className="group border-primary/40 hover:border-primary hover:bg-primary/10 text-primary 
                       px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold transition-all duration-200
                       text-sm sm:text-base"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </>
            ) : (
              <>
                View All {allReviews.length} Reviews
                <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </>
            )}
          </Button>
        </div>
      )}

      {/* Trust Badge */}
      <div className="text-center mt-6 sm:mt-8 px-2">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 
                        text-xs sm:text-sm bg-card/80 border border-primary/30 
                        rounded-xl sm:rounded-full px-4 sm:px-6 py-3 shadow-lg shadow-primary/10">
          <span className="flex items-center gap-2 text-foreground font-medium">
            <BadgeCheck className="w-4 h-4 text-green-500" />
            <span className="whitespace-nowrap">Verified Results</span>
          </span>
          <span className="text-primary/50 hidden sm:inline">|</span>
          <span className="flex items-center gap-2 text-foreground font-medium">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="whitespace-nowrap">Multiple Success Stories</span>
          </span>
          <span className="text-primary/50 hidden sm:inline">|</span>
          <span className="flex items-center gap-2 text-foreground font-medium">
            <Camera className="w-4 h-4 text-primary" />
            <span className="whitespace-nowrap">100% Real Screenshots</span>
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={open => !open && handleClose()}>
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-primary/20 overflow-hidden">
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              {/* Close Button */}
              <button 
                onClick={handleClose} 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>

              {/* Previous Button */}
              <button 
                onClick={goPrev} 
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>

              {/* Image */}
              <img 
                src={`/lovable-uploads/${allReviews[selectedIndex]}`} 
                alt={`Student success story ${selectedIndex + 1}`} 
                className="max-w-[90%] sm:max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
              />

              {/* Next Button */}
              <button 
                onClick={goNext} 
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 border border-border/50 text-xs sm:text-sm text-muted-foreground">
                {selectedIndex + 1} / {allReviews.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
