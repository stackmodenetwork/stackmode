import { useMemo } from 'react';

interface FloatingElement {
  id: number;
  type: 'chart' | 'dollar' | 'arrow';
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export const TradingBackground = () => {
  // Reduced number of elements - static positioning, no animations
  const floatingElements = useMemo<FloatingElement[]>(() => {
    const elements: FloatingElement[] = [];
    const types: FloatingElement['type'][] = ['chart', 'dollar', 'arrow'];
    
    // Only 8 elements instead of 20
    for (let i = 0; i < 8; i++) {
      elements.push({
        id: i,
        type: types[i % 3],
        x: 10 + (i * 12),
        y: 15 + (i * 10) % 70,
        size: 16 + (i % 3) * 8,
        opacity: 0.04,
      });
    }
    return elements;
  }, []);

  const renderIcon = (type: FloatingElement['type'], size: number) => {
    switch (type) {
      case 'chart':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
        );
      case 'dollar':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'arrow':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7,7 17,7 17,17" />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static Gradient Orbs - no animation */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
        }}
      />
      
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)',
          bottom: '-5%',
          right: '-5%',
        }}
      />

      {/* Grid Pattern - static */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Static Trading Icons - no animation for performance */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute text-primary"
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
