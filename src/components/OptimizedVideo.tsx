import { useEffect, useRef, useState, memo } from 'react';
import { Play } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedVideoProps {
  mobileSrc: string;
  desktopSrc: string;
  poster?: string;
  className?: string;
}

export const OptimizedVideo = memo(({ 
  mobileSrc, 
  desktopSrc, 
  poster,
  className = ''
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Determine if mobile based on viewport width
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const videoSrc = isMobile ? mobileSrc : desktopSrc;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use Intersection Observer for smart preloading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            // Start loading when visible
            video.preload = 'metadata';
            observer.disconnect();
          }
        });
      },
      { 
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.1 
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [hasLoaded]);

  const handleLoadedData = () => {
    setHasLoaded(true);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-muted rounded-xl overflow-hidden z-10">
          <Skeleton className="absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-background/80 flex items-center justify-center animate-pulse">
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-auto rounded-xl transition-opacity duration-500 ${
          hasLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        controls
        playsInline
        preload="none"
        poster={poster}
        onLoadedData={handleLoadedData}
        onLoadStart={handleLoadStart}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

OptimizedVideo.displayName = 'OptimizedVideo';
