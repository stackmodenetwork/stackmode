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
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userTapped, setUserTapped] = useState(false);

  // Determine if mobile based on viewport width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videoSrc = isMobile ? mobileSrc : desktopSrc;

  // Auto-load on desktop, wait for tap on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // On desktop, use intersection observer to preload
    if (!isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasLoaded) {
              video.preload = 'auto';
              video.load();
              setIsLoading(true);
              observer.disconnect();
            }
          });
        },
        { 
          rootMargin: '200px',
          threshold: 0.1 
        }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, [hasLoaded, isMobile]);

  // Handle tap to play on mobile
  const handleTapToPlay = () => {
    const video = videoRef.current;
    if (!video || userTapped) return;

    setUserTapped(true);
    setIsLoading(true);
    video.preload = 'auto';
    video.load();
    
    // Play when ready
    video.oncanplay = () => {
      video.play().catch(() => {
        // If autoplay fails, just show the video with controls
        setIsLoading(false);
        setHasLoaded(true);
      });
    };
  };

  const handleLoadedData = () => {
    setHasLoaded(true);
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setHasLoaded(true);
  };

  // Show tap-to-play overlay on mobile when not tapped yet
  const showTapOverlay = isMobile && !userTapped;
  // Show loading overlay when loading (after tap on mobile, or during auto-load on desktop)
  const showLoadingOverlay = isLoading && !hasLoaded;

  return (
    <div className={`relative ${className}`}>
      {/* Tap to play overlay for mobile */}
      {showTapOverlay && (
        <button
          onClick={handleTapToPlay}
          className="absolute inset-0 rounded-xl overflow-hidden z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Tap to play video"
        >
          {/* Poster image */}
          {poster ? (
            <img 
              src={poster} 
              alt="Tap to play video" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Skeleton className="absolute inset-0" />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Large play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl transform transition-transform hover:scale-110 active:scale-95">
              <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          {/* Tap to play text */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-sm text-white font-medium bg-black/60 px-4 py-2 rounded-full">
              Tap to play
            </span>
          </div>
        </button>
      )}

      {/* Loading overlay (shown after tap on mobile or during desktop preload) */}
      {showLoadingOverlay && !showTapOverlay && (
        <div className="absolute inset-0 rounded-xl overflow-hidden z-10">
          {poster ? (
            <img 
              src={poster} 
              alt="Video loading..." 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Skeleton className="absolute inset-0" />
          )}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center shadow-lg">
              <div className="relative">
                <Play className="w-8 h-8 text-primary ml-1" />
                <div className="absolute -inset-3 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="text-xs text-white/80 bg-black/50 px-3 py-1 rounded-full">
              Loading video...
            </span>
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
        webkit-playsinline=""
        preload="none"
        poster={poster}
        onLoadedData={handleLoadedData}
        onCanPlay={handleCanPlay}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

OptimizedVideo.displayName = 'OptimizedVideo';
