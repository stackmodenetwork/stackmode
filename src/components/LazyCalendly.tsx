import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';

interface LazyCalendlyProps {
  url: string;
  height?: number;
}

export const LazyCalendly = ({ url, height = 650 }: LazyCalendlyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      // Give Calendly time to initialize
      const timer = setTimeout(() => setIsLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded]);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: height }}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/50 rounded-xl border border-border/20">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm">Loading calendar...</p>
          <div className="flex gap-1 mt-3">
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      )}
      
      {/* Calendly widget - only render when visible */}
      {isVisible && (
        <div 
          className={`calendly-inline-widget rounded-xl overflow-hidden border border-border/20 bg-background/30 backdrop-blur-sm transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          data-url={url}
          style={{ minWidth: '320px', height }}
        />
      )}
    </div>
  );
};
