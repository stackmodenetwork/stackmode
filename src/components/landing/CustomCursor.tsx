import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf: number;
    const onMove = (e: MouseEvent) => {
      // Dot follows mouse instantly — no lerp
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
      // Ring also follows instantly for zero lag
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };
    window.addEventListener('mousemove', onMove);

    const handleOver = (e: Event) => setHoverColor((e.currentTarget as HTMLElement).dataset.cursorColor || null);
    const handleOut = () => setHoverColor(null);
    const bind = () => {
      document.querySelectorAll('[data-cursor-color]').forEach(el => {
        el.addEventListener('mouseenter', handleOver);
        el.addEventListener('mouseleave', handleOut);
      });
    };
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });
    bind();

    return () => { window.removeEventListener('mousemove', onMove); observer.disconnect(); };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;
  const ringColor = hoverColor || '#C9A84C';

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 z-[10000] pointer-events-none w-[10px] h-[10px] rounded-full will-change-transform" style={{ background: '#C9A84C', boxShadow: '0 0 12px #C9A84C' }} />
      <div ref={ringRef} className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full border-2 will-change-transform transition-[border-color,box-shadow,width,height] duration-150"
        style={{ width: 40, height: 40, borderColor: ringColor, boxShadow: `0 0 15px ${ringColor}40` }} />
      <style>{`@media (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
