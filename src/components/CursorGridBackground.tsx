import { useEffect, useRef, useCallback } from 'react';

const GRID_SPACING = 40;
const DOT_SIZE = 1;
const DOT_COLOR_BASE = 'rgba(0,255,136,';
const INFLUENCE_RADIUS = 150;
const MAX_DISPLACEMENT = 12;

const CursorGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    ctx.clearRect(0, 0, W, H);

    for (let x = GRID_SPACING; x < W; x += GRID_SPACING) {
      for (let y = GRID_SPACING; y < H; y += GRID_SPACING) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = x;
        let drawY = y;
        let alpha = 0.06;
        let size = DOT_SIZE;

        if (dist < INFLUENCE_RADIUS) {
          const factor = 1 - dist / INFLUENCE_RADIUS;
          const ease = factor * factor; // quadratic ease
          // Push dots away from cursor
          const angle = Math.atan2(dy, dx);
          drawX += Math.cos(angle) * MAX_DISPLACEMENT * ease;
          drawY += Math.sin(angle) * MAX_DISPLACEMENT * ease;
          alpha = 0.06 + ease * 0.5;
          size = DOT_SIZE + ease * 2;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
        ctx.fillStyle = `${DOT_COLOR_BASE}${alpha})`;
        ctx.fill();
      }
    }

    // Glow ring around cursor
    if (mx > 0 && my > 0) {
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, INFLUENCE_RADIUS);
      grad.addColorStop(0, 'rgba(0,255,136,0.03)');
      grad.addColorStop(0.5, 'rgba(0,255,136,0.01)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(mx - INFLUENCE_RADIUS, my - INFLUENCE_RADIUS, INFLUENCE_RADIUS * 2, INFLUENCE_RADIUS * 2);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  if (
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  ) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CursorGridBackground;
