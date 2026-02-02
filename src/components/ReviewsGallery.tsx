import { useState, useEffect, useCallback, memo } from 'react';
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, BadgeCheck, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const allReviews = [
  "review-51", "review-52", "review-57", "review-59", "review-61",
  "review-48", "review-47", "review-44", "review-49", "review-50",
  "review-1", "review-2", "review-3", "review-4", "review-5",
  "review-6", "review-7", "review-8", "review-9", "review-10",
  "review-11", "review-12", "review-46", "review-13", "review-14",
  "review-15", "review-16", "review-17", "review-18", "review-19",
  "review-20", "review-21", "review-22", "review-23", "review-24",
  "review-25", "review-26", "review-27", "review-28", "review-29",
  "review-30", "review-31", "review-32", "review-33", "review-34",
  "review-35", "review-53", "review-55", "review-58"
];

// Check WebP support once
const supportsWebP = (() => {
  if (typeof document === 'undefined') return false;
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').startsWith('data:image/webp');
})();

// Get optimal image source - WebP if supported, PNG fallback
const getImageSrc = (name: string) => {
  // Currently using PNG - when WebP versions are uploaded, uncomment the line below
  // if (supportsWebP) return `/lovable-uploads/${name}.webp`;
  return `/lovable-uploads/${name}.png`;
};

// Memoized review card for performance
const ReviewCard = memo(({ 
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
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) return;
    
    const element = document.querySelector(`[data-review="${index}"]`);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px', threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [index, priority]);

  return (
    <div
      data-review={index}
      onClick={onClick}
      className="break-inside-avoid mb-2 sm:mb-3 bg-card/50 border border-primary/30 rounded-lg overflow-hidden 
                 hover:border-primary hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] 
                 transition-all duration-150 cursor-pointer"
    >
      <div className="relative bg-muted/20">
        {/* Placeholder skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10" style={{ aspectRatio: '3/4' }} />
        )}
        
        {(isInView || priority) && (
          <picture>
            {/* WebP source - browser will use if supported and file exists */}
            <source srcSet={`/lovable-uploads/${img}.webp`} type="image/webp" />
            {/* PNG fallback */}
            <img 
              src={getImageSrc(img)} 
              alt={`Student success ${index + 1}`} 
              className={`w-full h-auto block transition-opacity duration-150 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'auto'}
              onLoad={() => setIsLoaded(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </picture>
        )}
      </div>
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

export function ReviewsGallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Reduced initial count for faster first paint
  const initialCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 4 : 6;
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
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Real Results from The Stackmode Network
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
          Join successful traders who transformed their results
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3">
        {displayedReviews.map((img, index) => (
          <ReviewCard
            key={img}
            img={img}
            index={index}
            priority={index < 2}
            onClick={() => setSelectedIndex(allReviews.indexOf(img))}
          />
        ))}
      </div>

      {/* Show More / Less Button */}
      {allReviews.length > initialCount && (
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)} 
            className="border-primary/40 hover:border-primary hover:bg-primary/10 text-primary 
                       px-6 py-5 rounded-xl font-semibold text-sm"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="ml-2 w-4 h-4" /></>
            ) : (
              <>View All {allReviews.length} Reviews <ChevronDown className="ml-2 w-4 h-4" /></>
            )}
          </Button>
        </div>
      )}

      {/* Trust Badge */}
      <div className="text-center mt-6 px-2">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 
                        text-xs sm:text-sm bg-card/80 border border-primary/30 
                        rounded-xl sm:rounded-full px-4 sm:px-6 py-3">
          <span className="flex items-center gap-2 text-foreground font-medium">
            <BadgeCheck className="w-4 h-4 text-green-500" />
            <span>Verified Results</span>
          </span>
          <span className="text-primary/50 hidden sm:inline">|</span>
          <span className="flex items-center gap-2 text-foreground font-medium">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Multiple Success Stories</span>
          </span>
          <span className="text-primary/50 hidden sm:inline">|</span>
          <span className="flex items-center gap-2 text-foreground font-medium">
            <Camera className="w-4 h-4 text-primary" />
            <span>100% Real Screenshots</span>
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={open => !open && handleClose()}>
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] max-h-[95vh] p-0 bg-background/95 border-primary/20 overflow-hidden">
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              <button 
                onClick={handleClose} 
                className="absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              <button 
                onClick={goPrev} 
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background border border-border/50"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>

              <picture>
                <source srcSet={`/lovable-uploads/${allReviews[selectedIndex]}.webp`} type="image/webp" />
                <img 
                  src={getImageSrc(allReviews[selectedIndex])} 
                  alt={`Student success ${selectedIndex + 1}`} 
                  className="max-w-[90%] sm:max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
                  loading="eager"
                />
              </picture>

              <button 
                onClick={goNext} 
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background border border-border/50"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background/80 border border-border/50 text-xs text-muted-foreground">
                {selectedIndex + 1} / {allReviews.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
