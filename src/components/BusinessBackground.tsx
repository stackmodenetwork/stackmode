import { useMemo } from 'react';

interface FloatingElement {
  id: number;
  type: 'rocket' | 'dollar' | 'target';
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface BusinessBackgroundProps {
  variant?: 'purple' | 'green' | 'mixed';
}

export const BusinessBackground = ({ variant = 'purple' }: BusinessBackgroundProps) => {
  const primaryColor = variant === 'green' ? 'primary' : variant === 'mixed' ? 'primary' : 'accent';
  const secondaryColor = variant === 'green' ? 'accent' : variant === 'mixed' ? 'accent' : 'primary';

  // Reduced elements - static positioning
  const floatingElements = useMemo<FloatingElement[]>(() => {
    const elements: FloatingElement[] = [];
    const types: FloatingElement['type'][] = ['rocket', 'dollar', 'target'];
    
    // Only 6 elements instead of 15
    for (let i = 0; i < 6; i++) {
      elements.push({
        id: i,
        type: types[i % 3],
        x: 15 + (i * 14),
        y: 20 + (i * 12) % 60,
        size: 16 + (i % 3) * 6,
        opacity: 0.04,
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
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static Gradient Orbs - no animation for performance */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--${primaryColor}) / 0.10) 0%, transparent 70%)`,
          top: '-5%',
          right: '-10%',
        }}
      />
      
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--${secondaryColor}) / 0.08) 0%, transparent 70%)`,
          bottom: '-10%',
          left: '-15%',
        }}
      />

      {/* Subtle Grid - static */}
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

      {/* Static Business Icons - no animation */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute text-${primaryColor}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
          }}
        >
          {renderIcon(element.type, element.size)}
        </div>
      ))}
    </div>
  );
};
