import { useRef, useEffect } from 'react';

interface UIElement {
  x: number; y: number; type: 'rect' | 'browser' | 'circle' | 'lines'; w: number; h: number; speed: number; opacity: number; drift: number;
}
interface Node {
  x: number; y: number; vx: number; vy: number;
}

const CeoTurboBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const obs = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; }, { threshold: 0 });
    obs.observe(canvas);

    const types: UIElement['type'][] = ['rect', 'browser', 'circle', 'lines'];
    const elements: UIElement[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      type: types[Math.floor(Math.random() * types.length)],
      w: 30 + Math.random() * 60,
      h: 20 + Math.random() * 40,
      speed: 0.1 + Math.random() * 0.25,
      opacity: 0.03 + Math.random() * 0.03,
      drift: (Math.random() - 0.5) * 0.3,
    }));

    const nodes: Node[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let raf: number;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Wireframe UI elements
      elements.forEach(el => {
        ctx.strokeStyle = `rgba(255,140,50,${el.opacity})`;
        ctx.lineWidth = 0.5;
        const { x, y, w, h } = el;

        if (el.type === 'rect') {
          ctx.strokeRect(x, y, w, h);
          // Text lines inside
          for (let i = 0; i < 3; i++) {
            ctx.fillStyle = `rgba(255,140,50,${el.opacity * 0.5})`;
            ctx.fillRect(x + 4, y + 6 + i * 8, w * (0.4 + Math.random() * 0.4), 2);
          }
        } else if (el.type === 'browser') {
          ctx.strokeRect(x, y, w, h);
          ctx.fillStyle = `rgba(255,140,50,${el.opacity * 0.4})`;
          ctx.fillRect(x, y, w, 6);
          // Dots
          for (let d = 0; d < 3; d++) {
            ctx.beginPath();
            ctx.arc(x + 3 + d * 4, y + 3, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (el.type === 'circle') {
          ctx.beginPath();
          ctx.arc(x, y, w * 0.3, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Nav bar lines
          for (let i = 0; i < 4; i++) {
            ctx.fillStyle = `rgba(255,140,50,${el.opacity * 0.6})`;
            ctx.fillRect(x + i * (w / 4 + 4), y, w / 4, 2);
          }
        }

        el.y -= el.speed;
        el.x += el.drift;
        if (el.y < -60) { el.y = H + 40; el.x = Math.random() * W; }
        if (el.x < -80 || el.x > W + 80) el.x = Math.random() * W;
      });

      // Connected nodes
      ctx.fillStyle = 'rgba(255,140,50,0.05)';
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
      ctx.strokeStyle = 'rgba(255,140,50,0.02)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          if (dx * dx + dy * dy < 25000) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); obs.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default CeoTurboBackground;
