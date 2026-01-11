import { memo } from 'react';
import { Play } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface VideoSkeletonProps {
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export const VideoSkeleton = memo(({ 
  className = '', 
  aspectRatio = '16:9' 
}: VideoSkeletonProps) => {
  const paddingMap = {
    '16:9': 'pb-[56.25%]',
    '4:3': 'pb-[75%]',
    '1:1': 'pb-[100%]'
  };

  return (
    <div className={`relative ${paddingMap[aspectRatio]} ${className}`}>
      <div className="absolute inset-0 bg-muted rounded-xl overflow-hidden">
        {/* Video frame skeleton */}
        <Skeleton className="absolute inset-0 rounded-xl" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center animate-pulse">
            <Play className="w-8 h-8 text-primary ml-1" />
          </div>
        </div>
        
        {/* Progress bar skeleton */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <Skeleton className="h-1 w-full rounded-full bg-muted-foreground/20" />
          <div className="flex justify-between mt-2">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
});

VideoSkeleton.displayName = 'VideoSkeleton';
