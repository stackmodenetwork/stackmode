import { useRef, useEffect } from 'react';

/**
 * Canvas-based revenue acceleration background.
 * Falling/rising currency symbols only — clean, high-res, no pixelated charts.
 * Optimized with IntersectionObserver.
 */
const RevenueAccelerationBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use devicePixelRatio for crisp rendering
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const obs = new IntersectionObserver(
      ([e]) => { visibleRef.current = e.isIntersecting; },
      { threshold: 0 }
    );
    obs.observe(canvas);

    // Rising currency particles
    const symbols = ['$', '€', '£', '¥', '+', '↑', '▲', '%', '◆', '★'];
    const particles: {
      x: number; y: number; s: string; size: number;
      opacity: number; speed: number; accel: number; drift: number; rotation: number; rotSpeed: number;
    }[] = [];

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const spawnParticle = () => {
      particles.push({
        x: Math.random() * W(),
        y: H() + 20,
        s: symbols[Math.floor(Math.random() * symbols.length)],
        size: 10 + Math.random() * 18,
        opacity: 0.03 + Math.random() * 0.07,
        speed: 0.3 + Math.random() * 0.5,
        accel: 0.001 + Math.random() * 0.003,
        drift: (Math.random() - 0.5) * 0.25,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
      });
    };

    // Seed initial particles
    for (let i = 0; i < 30; i++) {
      spawnParticle();
      particles[particles.length - 1].y = Math.random() * H();
    }

    let frame = 0;
    let lastSpawn = 0;
    let raf: number;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      frame++;
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);

      // Spawn new particles
      if (now - lastSpawn > 250) {
        lastSpawn = now;
        if (particles.length < 50) spawnParticle();
      }

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.speed += p.accel;
        p.y -= p.speed;
        p.x += p.drift + Math.sin(frame * 0.015 + i) * 0.15;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#00cfff';
        ctx.font = `${p.size}px "Share Tech Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(p.s, 0, 0);
        ctx.restore();

        if (p.y < -30) {
          particles.splice(i, 1);
        }
      }

      // Subtle "ACCELERATION" watermark
      ctx.save();
      ctx.globalAlpha = 0.012;
      ctx.fillStyle = '#00cfff';
      ctx.font = `bold ${Math.min(w * 0.12, 100)}px "Bebas Neue", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('ACCELERATION', w / 2, h * 0.35);
      ctx.restore();
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      obs.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default RevenueAccelerationBg;
