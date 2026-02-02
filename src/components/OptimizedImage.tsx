import { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onClick?: () => void;
}

export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  priority = false,
  onClick
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { 
        // Much larger margin for earlier loading - prevents late image pop-in
        rootMargin: '300px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {/* Placeholder skeleton - shows immediately */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
          <span className="text-muted-foreground text-xs">Image unavailable</span>
        </div>
      )}
      
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';
