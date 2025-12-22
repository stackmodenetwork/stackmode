import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allReviews = [
  "review-1.png", "review-2.png", "review-3.png", "review-4.png", "review-5.png",
  "review-6.png", "review-7.png", "review-8.png", "review-9.png", "review-10.png",
  "review-11.png", "review-12.png", "review-13.png", "review-14.png", "review-15.png",
  "review-16.png", "review-17.png", "review-18.png", "review-19.png", "review-20.png",
  "review-21.png", "review-22.png", "review-23.png", "review-24.png", "review-25.png",
  "review-26.png", "review-27.png", "review-28.png", "review-29.png", "review-30.png",
  "review-31.png", "review-32.png", "review-33.png", "review-34.png"
];

export function ReviewsGallery() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 relative">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
          <Star className="w-4 h-4 text-secondary fill-secondary" />
          <span className="text-sm font-semibold text-primary">Student Success Stories</span>
          <Star className="w-4 h-4 text-secondary fill-secondary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Real Results from Real Students
        </h3>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Join hundreds of successful traders who transformed their lives
        </p>
      </div>

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-2xl -z-10" />
      
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {displayedReviews.map((img, index) => (
          <div 
            key={img}
            className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            style={{ 
              animationDelay: `${index * 50}ms`,
              animation: 'fade-in 0.5s ease-out forwards'
            }}
          >
            {/* Image */}
            <img
              src={`/lovable-uploads/${img}`}
              alt={`Student success story ${index + 1}`}
              loading="lazy"
              className="w-full h-auto block"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      {allReviews.length > 12 && (
        <div className="text-center mt-10">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="group border-primary/40 hover:border-primary hover:bg-primary/10 text-primary px-8 py-6 rounded-xl font-semibold transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                View All {allReviews.length} Reviews
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      )}

      {/* Trust Badge */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-3 text-muted-foreground text-sm">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Verified Results
          </span>
          <span className="text-border">•</span>
          <span>{allReviews.length}+ Success Stories</span>
          <span className="text-border">•</span>
          <span>100% Real Screenshots</span>
        </div>
      </div>
    </div>
  );
}
