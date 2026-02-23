import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

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

    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); observer.disconnect(); };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;
  const ringColor = hoverColor || '#C9A84C';
  const ringSize = hoverColor ? 50 : 40;

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 z-[10000] pointer-events-none w-[10px] h-[10px] rounded-full" style={{ background: '#C9A84C', boxShadow: '0 0 12px #C9A84C' }} />
      <div ref={ringRef} className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full border-2 transition-all duration-200"
        style={{ width: ringSize, height: ringSize, borderColor: ringColor, boxShadow: `0 0 15px ${ringColor}40`, marginLeft: ringSize === 50 ? -5 : 0, marginTop: ringSize === 50 ? -5 : 0 }} />
      <style>{`@media (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
