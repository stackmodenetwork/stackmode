import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, ExternalLink, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyCalendlyProps {
  url: string;
  height?: number;
}

export const LazyCalendly = ({ url, height = 650 }: LazyCalendlyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const fallbackUrl = useMemo(() => url.split("?")[0], [url]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const t = window.setTimeout(() => {
      if (!isLoaded) setHasError(true);
    }, 25000);
    return () => window.clearTimeout(t);
  }, [isVisible, isLoaded]);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: height }}>
      {/* Enhanced loading skeleton - mimics Calendly layout */}
      {isVisible && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-card rounded-xl border border-border/20 overflow-hidden">
          {/* Header skeleton */}
          <div className="p-6 border-b border-border/20">
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>
          
          {/* Meeting info skeleton */}
          <div className="p-6 border-b border-border/20 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground/50" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground/50" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          
          {/* Calendar grid skeleton */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-6 w-28" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8 rounded" />
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </div>
            
            {/* Days header */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
            
            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <Skeleton 
                  key={i} 
                  className="h-10 w-full rounded-lg" 
                  style={{ 
                    opacity: Math.random() > 0.3 ? 1 : 0.4,
                    animationDelay: `${i * 20}ms` 
                  }} 
                />
              ))}
            </div>
          </div>
          
          {/* Loading indicator overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <Calendar className="w-7 h-7 text-primary animate-pulse" />
              </div>
              <p className="text-muted-foreground text-sm font-medium">Loading calendar...</p>
              <div className="flex gap-1.5 mt-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
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

      {/* Calendly iframe (most reliable; avoids widget.js + adblock issues) */}
      {isVisible && !hasError && (
        <iframe
          title="Book a free strategy call"
          src={url}
          className={`w-full rounded-xl overflow-hidden border border-border/20 bg-card transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ minWidth: "320px", height }}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="strict-origin-when-cross-origin"
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
