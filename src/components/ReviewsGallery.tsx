import { useState, useEffect, useCallback, memo } from 'react';
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, BadgeCheck, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { OptimizedImage } from '@/components/OptimizedImage';
const allReviews = ["review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png", "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png", "review-11.png", "review-12.png", "review-13.png", "review-14.png", "review-15.png", "review-16.png", "review-17.png", "review-18.png", "review-19.png", "review-20.png", "review-21.png", "review-22.png", "review-23.png", "review-24.png", "review-25.png", "review-26.png", "review-27.png", "review-28.png", "review-29.png", "review-30.png", "review-31.png", "review-32.png", "review-33.png", "review-34.png", "review-35.png"];
export function ReviewsGallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 12);
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
  return <div className="max-w-7xl mx-auto px-4 relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Real Results from Real Clients
        </h3>
        <p className="text-muted-foreground max-w-lg mx-auto">Join successful traders who transformed their results</p>
      </div>

      
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {displayedReviews.map((img, index) => (
          <div 
            key={img} 
            onClick={() => setSelectedIndex(allReviews.indexOf(img))} 
            className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer" 
            style={{
              animationDelay: `${index * 50}ms`,
              animation: 'fade-in 0.5s ease-out forwards'
            }}
          >
            <OptimizedImage 
              src={`/lovable-uploads/${img}`} 
              alt={`Student success story ${index + 1}`} 
              className="w-full h-auto block"
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      {allReviews.length > 12 && <div className="text-center mt-10">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="group border-primary/40 hover:border-primary hover:bg-primary/10 text-primary px-8 py-6 rounded-xl font-semibold transition-all duration-300">
            {showAll ? <>
                Show Less
                <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </> : <>
                View All {allReviews.length} Reviews
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </>}
          </Button>
        </div>}

      {/* Trust Badge */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-4 text-sm bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 shadow-lg shadow-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/60 cursor-default">
          <span className="flex items-center gap-2 text-foreground font-medium">
            <BadgeCheck className="w-4 h-4 text-green-500" />
            Verified Results
          </span>
          <span className="text-primary/50">|</span>
          <span className="flex items-center gap-2 text-foreground font-medium">
            <Users className="w-4 h-4 text-secondary" />
            Multiple Success Stories
          </span>
          <span className="text-primary/50">|</span>
          <span className="flex items-center gap-2 text-foreground font-medium">
            <Camera className="w-4 h-4 text-primary" />
            100% Real Screenshots
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={open => !open && handleClose()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-primary/20 overflow-hidden">
          {selectedIndex !== null && <div className="relative flex items-center justify-center min-h-[50vh]">
              {/* Close Button */}
              <button onClick={handleClose} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors">
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Previous Button */}
              <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110">
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              {/* Image */}
              <img src={`/lovable-uploads/${allReviews[selectedIndex]}`} alt={`Student success story ${selectedIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg" />

              {/* Next Button */}
              <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-all hover:scale-110">
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 border border-border/50 text-sm text-muted-foreground">
                {selectedIndex + 1} / {allReviews.length}
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </div>;
}