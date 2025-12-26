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

  // Extract base URL for fallback link
  const fallbackUrl = url.split('?')[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Load Calendly widget script
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    
    if (existingScript) {
      // Script already exists, try to initialize
      initCalendly();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => initCalendly();
    script.onerror = () => setHasError(true);
    document.head.appendChild(script);

    // Also load the CSS
    const existingCSS = document.querySelector('link[href*="calendly.com/assets/external/widget.css"]');
    if (!existingCSS) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    return () => {
      // Cleanup if needed
    };
  }, [isVisible]);

  const initCalendly = () => {
    const checkAndInit = () => {
      if (window.Calendly && containerRef.current) {
        const widgetContainer = containerRef.current.querySelector('.calendly-inline-widget');
        if (widgetContainer) {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: widgetContainer,
            prefill: {},
            utm: {}
          });
          setIsLoaded(true);
        }
      }
    };

    // Try immediately
    checkAndInit();
    
    // Retry a few times if not ready
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (isLoaded || attempts > 10) {
        clearInterval(interval);
        if (!isLoaded && attempts > 10) {
          setHasError(true);
        }
        return;
      }
      checkAndInit();
    }, 500);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (!isVisible) return;

    const errorTimer = window.setTimeout(() => {
      if (!isLoaded) setHasError(true);
    }, 15000);

    return () => window.clearTimeout(errorTimer);
  }, [isVisible, isLoaded]);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: height }}>
      {/* Loading skeleton */}
      {isVisible && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card rounded-xl border border-border/20">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card rounded-xl border border-border/20 p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Calendar Loading Issue</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md">
            The booking calendar is taking longer than expected. Click below to open it directly.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/80 text-background font-bold">
            <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Booking Page
            </a>
          </Button>
        </div>
      )}

      {/* Calendly widget container */}
      {isVisible && !hasError && (
        <div
          className={`calendly-inline-widget rounded-xl overflow-hidden border border-border/20 bg-card transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          data-url={url}
          style={{ minWidth: '320px', height }}
        />
      )}

      {/* Always show fallback link at bottom */}
      {isLoaded && !hasError && (
        <div className="text-center mt-4">
          <a
            href={fallbackUrl}
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

// Add Calendly types
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
      initBadgeWidget?: (options: unknown) => void;
    };
  }
}
