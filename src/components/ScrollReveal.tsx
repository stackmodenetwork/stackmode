import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scale?: number;
}

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.4, // Faster duration
  direction = 'up',
  distance = 15, // Reduced distance for subtler animation
  scale = 1,
}: ScrollRevealProps) => {
  // Skip animation entirely if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      scale: scale < 1 ? scale : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay: Math.min(delay, 0.3), // Cap max delay
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation wrapper
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.05, // Faster stagger
  delayChildren = 0,
}: StaggerContainerProps) => {
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Child item for stagger animations
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = '' }: StaggerItemProps) => {
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 }, // Reduced movement
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3, // Faster
            ease: 'easeOut',
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
