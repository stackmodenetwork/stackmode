import { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LazyCalendlyProps {
  url: string;
  height?: number;
}

export const LazyCalendly = ({ url, height = 650 }: LazyCalendlyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract the base Calendly URL for the fallback link
  const fallbackUrl = url.split('?')[0].replace('https://calendly.com/', 'https://calendly.com/');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      // Check if Calendly loaded after a timeout
      const loadTimer = setTimeout(() => setIsLoaded(true), 800);
      const errorTimer = setTimeout(() => {
        // If widget hasn't initialized after 10s, show fallback
        const widget = containerRef.current?.querySelector('.calendly-inline-widget iframe');
        if (!widget) {
          setHasError(true);
        }
      }, 10000);
      
      return () => {
        clearTimeout(loadTimer);
        clearTimeout(errorTimer);
      };
    }
  }, [isVisible, isLoaded]);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: height }}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
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

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/50 rounded-xl border border-border/20 p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Calendar Loading Issue</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md">
            The booking calendar is taking longer than expected. Click below to open it directly.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/80 text-background font-bold">
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Booking Page
            </a>
          </Button>
        </div>
      )}
      
      {/* Calendly widget - only render when visible */}
      {isVisible && !hasError && (
        <div 
          className={`calendly-inline-widget rounded-xl overflow-hidden border border-border/20 bg-background/30 backdrop-blur-sm transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          data-url={url}
          style={{ minWidth: '320px', height }}
        />
      )}

      {/* Always show fallback link at bottom */}
      {isLoaded && !hasError && (
        <div className="text-center mt-4">
          <a 
            href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Having trouble? Open in new tab
          </a>
        </div>
      )}
    </div>
  );
};
