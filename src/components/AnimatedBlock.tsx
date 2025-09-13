import { ReactNode } from 'react';

interface AnimatedBlockProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedBlock = ({ children, delay = 0, className = "" }: AnimatedBlockProps) => {
  return (
    <div 
      className={`block-stack ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};