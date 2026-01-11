import { memo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface CardSkeletonProps {
  className?: string;
  showImage?: boolean;
  lines?: number;
}

export const CardSkeleton = memo(({ 
  className = '',
  showImage = true,
  lines = 3
}: CardSkeletonProps) => {
  return (
    <div className={`bg-card border border-border rounded-2xl overflow-hidden ${className}`}>
      {/* Image skeleton */}
      {showImage && (
        <Skeleton className="w-full h-48" />
      )}
      
      {/* Content skeleton */}
      <div className="p-5 space-y-4">
        {/* Badge */}
        <Skeleton className="h-5 w-20 rounded-full" />
        
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />
        
        {/* Description lines */}
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton 
              key={i} 
              className="h-4" 
              style={{ width: `${100 - (i * 15)}%` }}
            />
          ))}
        </div>
        
        {/* Button skeleton */}
        <Skeleton className="h-10 w-full rounded-lg mt-4" />
      </div>
    </div>
  );
});

CardSkeleton.displayName = 'CardSkeleton';
