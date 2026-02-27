import { useState, useCallback, memo } from 'react';
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const allReviews = [
  "review-65.png", "review-51.png", "review-52.png", "review-57.png", "review-59.png", "review-61.png",
  "review-48.png", "review-47.png", "review-44.png", "review-49.png", "review-50.png",
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png",
  "review-11.png", "review-12.png", "review-46.png", "review-13.png", "review-14.png",
  "review-62.png", "review-63.png", "review-64.png",
];

const ReviewCard = memo(({ img, index, onClick }: { img: string; index: number; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="break-inside-avoid mb-2 bg-card/30 border border-border/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors cursor-pointer"
  >
    <img 
      src={`/lovable-uploads/${img}`} 
      alt={`Review ${index + 1}`} 
      className="w-full h-auto block"
      loading={index < 4 ? 'eager' : 'lazy'}
    />
  </div>
));

ReviewCard.displayName = 'ReviewCard';

export function ReviewsGallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const initialCount = 6;
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

  return (
    <div className="relative">
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 gap-2">
        {displayedReviews.map((img, index) => (
          <ReviewCard
            key={img}
            img={img}
            index={index}
            onClick={() => setSelectedIndex(allReviews.indexOf(img))}
          />
        ))}
      </div>

      {/* Show More Button */}
      {allReviews.length > initialCount && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-cyan-500/50 px-4 py-2 rounded-lg transition-colors"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View All <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      )}

      {/* Trust Badge */}
      <div className="text-center mt-4">
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Check size={14} className="text-emerald-400" />
          Verified real results
        </span>
      </div>

      {/* Lightbox */}
      <Dialog open={isOpen} onOpenChange={open => !open && handleClose()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 border-border/50 overflow-hidden">
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              <button onClick={handleClose} className="absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 border border-border/50">
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
    </div>
  );
}
