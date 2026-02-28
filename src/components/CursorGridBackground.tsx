import { useEffect, useRef, useCallback } from 'react';

const GRID_SPACING = 32;
const DOT_SIZE = 1.2;
const INFLUENCE_RADIUS = 200;
const MAX_DISPLACEMENT = 18;

const CursorGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const prevMouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const trailRef = useRef<{ x: number; y: number; alpha: number }[]>([]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    // Track trail points
    const pmx = prevMouseRef.current.x;
    const pmy = prevMouseRef.current.y;
    const moved = Math.abs(mx - pmx) + Math.abs(my - pmy);
    if (moved > 5 && mx > 0) {
      trailRef.current.push({ x: mx, y: my, alpha: 0.4 });
      if (trailRef.current.length > 12) trailRef.current.shift();
    }
    prevMouseRef.current = { x: mx, y: my };

    // Decay trails
    trailRef.current = trailRef.current
      .map(t => ({ ...t, alpha: t.alpha - 0.012 }))
      .filter(t => t.alpha > 0);

    ctx.clearRect(0, 0, W, H);

    // Draw grid dots
    for (let x = GRID_SPACING; x < W; x += GRID_SPACING) {
      for (let y = GRID_SPACING; y < H; y += GRID_SPACING) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = x;
        let drawY = y;
        let alpha = 0.04;
        let size = DOT_SIZE;
        let r = 57, g = 255, b = 20; // green

        if (dist < INFLUENCE_RADIUS) {
          const factor = 1 - dist / INFLUENCE_RADIUS;
          const ease = factor * factor * factor; // cubic ease
          const angle = Math.atan2(dy, dx);
          drawX += Math.cos(angle) * MAX_DISPLACEMENT * ease;
          drawY += Math.sin(angle) * MAX_DISPLACEMENT * ease;
          alpha = 0.04 + ease * 0.6;
          size = DOT_SIZE + ease * 3;

          // Color shift: green → cyan near cursor
          const blend = ease;
          r = Math.round(57 * (1 - blend) + 0 * blend);
          g = Math.round(255 * (1 - blend) + 229 * blend);
          b = Math.round(20 * (1 - blend) + 255 * blend);
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }
    }

    // Draw trail glow orbs
    for (const t of trailRef.current) {
      const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, 40);
      grad.addColorStop(0, `rgba(57,255,20,${t.alpha * 0.15})`);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(t.x - 40, t.y - 40, 80, 80);
    }

    // Main cursor glow
    if (mx > 0 && my > 0) {
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, INFLUENCE_RADIUS);
      grad.addColorStop(0, 'rgba(0,229,255,0.04)');
      grad.addColorStop(0.4, 'rgba(57,255,20,0.02)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(mx - INFLUENCE_RADIUS, my - INFLUENCE_RADIUS, INFLUENCE_RADIUS * 2, INFLUENCE_RADIUS * 2);

      // Connecting lines to nearby dots
      ctx.strokeStyle = 'rgba(0,229,255,0.06)';
      ctx.lineWidth = 0.5;
      for (let x = GRID_SPACING; x < W; x += GRID_SPACING) {
        for (let y = GRID_SPACING; y < H; y += GRID_SPACING) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(x, y);
            ctx.globalAlpha = (1 - dist / 80) * 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
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
