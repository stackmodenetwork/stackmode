import { memo } from 'react';

export const AnimatedBackground = memo(() => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {/* Ultra-dark base */}
    <div className="absolute inset-0" style={{ background: '#04060e' }} />
    
    {/* Subtle perspective grid */}
    <div className="absolute inset-0 grid-bg opacity-30" />
    
    {/* Ambient glow orbs — dimmer */}
    <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{
      background: 'radial-gradient(circle, #39ff14, transparent 70%)',
      animation: 'drift-orb 30s ease-in-out infinite',
    }} />
    <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{
      background: 'radial-gradient(circle, #00e5ff, transparent 70%)',
      animation: 'drift-orb 30s ease-in-out infinite reverse',
    }} />
    <div className="absolute bottom-[20%] left-[40%] w-[500px] h-[500px] rounded-full opacity-[0.025]" style={{
      background: 'radial-gradient(circle, #b44fff, transparent 70%)',
      animation: 'drift-orb 25s ease-in-out infinite 5s',
    }} />
    
    {/* Scanlines */}
    <div className="absolute inset-0 scanlines" />
  </div>
));

AnimatedBackground.displayName = 'AnimatedBackground';
export default AnimatedBackground;
