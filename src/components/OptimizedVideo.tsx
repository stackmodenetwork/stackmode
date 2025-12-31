import { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  mobileSrc: string;
  desktopSrc: string;
  poster?: string;
  className?: string;
}

export const OptimizedVideo = ({ 
  mobileSrc, 
  desktopSrc, 
  poster,
  className = ''
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

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
  };

  return (
    <video
      ref={videoRef}
      className={className}
      controls
      playsInline
      preload="none" // Start with none, upgrade when visible
      poster={poster}
      onLoadedData={handleLoadedData}
    >
      {/* Serve appropriate video based on device */}
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
