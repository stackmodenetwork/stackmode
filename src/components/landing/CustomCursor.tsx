import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [panelHover, setPanelHover] = useState<'left' | 'right' | null>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 4}px`;
        dotRef.current.style.top = `${e.clientY - 4}px`;
      }
    };
    window.addEventListener('mousemove', onMove);

    // Lerp ring
    let raf: number;
    const lerp = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.25;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.25;
      if (ringRef.current) {
        const size = panelHover ? 52 : 36;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.left = `${ringPos.current.x - size / 2}px`;
        ringRef.current.style.top = `${ringPos.current.y - size / 2}px`;
      }
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    // Panel hover detection
    const handleOver = (e: Event) => {
      const side = (e.currentTarget as HTMLElement).dataset.panelSide as 'left' | 'right' | undefined;
      if (side) setPanelHover(side);
    };
    const handleOut = () => setPanelHover(null);

    const bind = () => {
      document.querySelectorAll('[data-panel-side]').forEach(el => {
        el.addEventListener('mouseenter', handleOver);
        el.addEventListener('mouseleave', handleOut);
      });
    };
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });
    bind();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [panelHover]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ringColor = panelHover === 'left' ? '#00ff88' : panelHover === 'right' ? '#00cfff' : panelHover === 'gold' ? '#C9A84C' : 'rgba(255,255,255,0.25)';

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[10001] pointer-events-none"
        style={{
          width: 8, height: 8, borderRadius: '50%',
          background: '#fff', mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        className="fixed z-[10001] pointer-events-none rounded-full"
        style={{
          border: `1.5px solid ${ringColor}`,
          boxShadow: panelHover ? `0 0 18px ${ringColor}30` : 'none',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      />
      <style>{`@media (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
