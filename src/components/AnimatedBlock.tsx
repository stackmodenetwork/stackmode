import { ReactNode, forwardRef } from 'react';

interface AnimatedBlockProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedBlock = forwardRef<HTMLDivElement, AnimatedBlockProps>(
  ({ children, delay = 0, className = "" }, ref) => {
    return (
      <div 
        ref={ref}
        className={`block-stack ${className}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    );
  }
);

AnimatedBlock.displayName = 'AnimatedBlock';