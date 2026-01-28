import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface FloatingElement {
  id: number;
  type: 'rocket' | 'dollar' | 'target' | 'bar' | 'gear';
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface BusinessBackgroundProps {
  variant?: 'purple' | 'green' | 'mixed';
}

export const BusinessBackground = ({ variant = 'purple' }: BusinessBackgroundProps) => {
  const primaryColor = variant === 'green' ? 'primary' : variant === 'mixed' ? 'primary' : 'accent';
  const secondaryColor = variant === 'green' ? 'accent' : variant === 'mixed' ? 'accent' : 'primary';

  const floatingElements = useMemo<FloatingElement[]>(() => {
    const elements: FloatingElement[] = [];
    const types: FloatingElement['type'][] = ['rocket', 'dollar', 'target', 'bar', 'gear'];
    
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 14 + Math.random() * 20,
        duration: 18 + Math.random() * 15,
        delay: Math.random() * 8,
        opacity: 0.03 + Math.random() * 0.05,
      });
    }
    return elements;
  }, []);

  const renderIcon = (type: FloatingElement['type'], size: number) => {
    switch (type) {
      case 'rocket':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        );
      case 'dollar':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'target':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      case 'bar':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="12" width="4" height="9" rx="1" />
            <rect x="10" y="6" width="4" height="15" rx="1" />
            <rect x="17" y="3" width="4" height="18" rx="1" />
          </svg>
        );
      case 'gear':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--${primaryColor}) / 0.12) 0%, transparent 70%)`,
          top: '-5%',
          right: '-10%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--${secondaryColor}) / 0.10) 0%, transparent 70%)`,
          bottom: '-10%',
          left: '-15%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--secondary) / 0.06) 0%, transparent 70%)`,
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--${primaryColor})) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--${primaryColor})) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Business Icons */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute text-${primaryColor}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        >
          {renderIcon(element.type, element.size)}
        </motion.div>
      ))}

      {/* Growth Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
        <motion.path
          d="M0,300 Q100,250 200,280 T400,220 T600,260 T800,180 T1000,220"
          stroke={`hsl(var(--${primaryColor}))`}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        />
      </svg>

      {/* Rising Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1.5 h-1.5 bg-${primaryColor} rounded-full`}
          style={{
            left: `${15 + i * 14}%`,
            bottom: '-5%',
          }}
          animate={{
            y: [0, -800],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};
