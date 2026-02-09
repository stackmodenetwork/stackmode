import { useEffect, useState, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

const reviewImages = [
  { src: "/lovable-uploads/review-1.png", alt: "Student Trading Success" },
  { src: "/lovable-uploads/review-2.png", alt: "Trading Profits" },
  { src: "/lovable-uploads/review-3.png", alt: "Consistent Wins" },
  { src: "/lovable-uploads/review-4.png", alt: "Strategy Success" },
  { src: "/lovable-uploads/review-5.png", alt: "Account Growth" },
  { src: "/lovable-uploads/review-6.png", alt: "Coaching Results" },
  { src: "/lovable-uploads/review-7.png", alt: "Trading Mastery" },
  { src: "/lovable-uploads/review-8.png", alt: "Profitable Trading" },
  { src: "/lovable-uploads/review-9.png", alt: "Mentorship Results" },
  { src: "/lovable-uploads/review-10.png", alt: "Student Achievement" },
  { src: "/lovable-uploads/review-11.png", alt: "Trading Success" },
  { src: "/lovable-uploads/review-12.png", alt: "Real Results" },
  { src: "/lovable-uploads/review-13.png", alt: "Trading Win" },
  { src: "/lovable-uploads/review-14.png", alt: "Student Progress" },
  { src: "/lovable-uploads/review-15.png", alt: "Profit Screenshot" },
  { src: "/lovable-uploads/review-16.png", alt: "Trading Growth" },
  { src: "/lovable-uploads/review-17.png", alt: "Success Story" },
  { src: "/lovable-uploads/review-18.png", alt: "Mentorship Win" },
  { src: "/lovable-uploads/review-19.png", alt: "Trading Excellence" },
  { src: "/lovable-uploads/review-20.png", alt: "Student Win" },
  { src: "/lovable-uploads/review-62.png", alt: "YouTube Analytics" },
  { src: "/lovable-uploads/review-63.png", alt: "Ad Campaign Results" },
  { src: "/lovable-uploads/review-64.png", alt: "Revenue Dashboard" },
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = 4;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= reviewImages.length ? 0 : prev + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev === 0 ? reviewImages.length - itemsPerView : prev - 1
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const visibleImages = reviewImages.slice(currentIndex, currentIndex + itemsPerView);
  // Handle wrap-around
  const wrappedImages = visibleImages.length < itemsPerView 
    ? [...visibleImages, ...reviewImages.slice(0, itemsPerView - visibleImages.length)]
    : visibleImages;

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card border border-primary/30 rounded-full p-2 transition-all duration-300 hover:scale-110"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card border border-primary/30 rounded-full p-2 transition-all duration-300 hover:scale-110"
        aria-label="Next testimonials"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden mx-10">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out">
          {wrappedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative group flex-shrink-0 w-[calc(25%-12px)]"
            >
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                ★
              </div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                ★
              </div>
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-105"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(reviewImages.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerView) === index
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
