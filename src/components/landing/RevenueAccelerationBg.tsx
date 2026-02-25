import { useRef, useEffect } from 'react';

/**
 * Canvas-based revenue acceleration background.
 * Shows rising dollar signs, accelerating trend lines, and particle bursts
 * to convey explosive revenue growth. Optimized with IntersectionObserver.
 */
const RevenueAccelerationBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const obs = new IntersectionObserver(
      ([e]) => { visibleRef.current = e.isIntersecting; },
      { threshold: 0 }
    );
    obs.observe(canvas);

    // Rising currency particles
    const symbols = ['$', '€', '£', '¥', '+', '↑', '▲', '%', '◆'];
    const particles: {
      x: number; y: number; s: string; size: number;
      opacity: number; speed: number; accel: number; drift: number;
    }[] = [];

    const spawnParticle = () => {
      const W = canvas.width, H = canvas.height;
      particles.push({
        x: Math.random() * W,
        y: H + 20,
        s: symbols[Math.floor(Math.random() * symbols.length)],
        size: 8 + Math.random() * 14,
        opacity: 0.03 + Math.random() * 0.08,
        speed: 0.3 + Math.random() * 0.6,
        accel: 0.002 + Math.random() * 0.004,
        drift: (Math.random() - 0.5) * 0.3,
      });
    };

    // Seed initial particles
    for (let i = 0; i < 25; i++) {
      spawnParticle();
      particles[particles.length - 1].y = Math.random() * canvas.height;
    }

    // Acceleration trend data
    let trendPoints: number[] = [];
    let baseVal = 10;
    for (let i = 0; i < 40; i++) {
      baseVal += (0.5 + Math.random()) * (1 + i * 0.08);
      trendPoints.push(baseVal);
    }
    let lastTrendAdd = 0;

    // Burst particles for "acceleration" feel
    const bursts: { x: number; y: number; r: number; maxR: number; opacity: number }[] = [];

    let frame = 0;
    let lastSpawn = 0;
    let raf: number;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Spawn new particles periodically
      if (now - lastSpawn > 300) {
        lastSpawn = now;
        if (particles.length < 40) spawnParticle();
      }

      // Draw rising particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.speed += p.accel; // accelerate!
        p.y -= p.speed;
        p.x += p.drift + Math.sin(frame * 0.01 + i) * 0.2;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#00cfff';
        ctx.font = `${p.size}px "Share Tech Mono", monospace`;
        ctx.fillText(p.s, p.x, p.y);
        ctx.restore();

        if (p.y < -30) {
          particles.splice(i, 1);
        }
      }

      // Exponential trend line across bottom third
      const tAreaX = W * 0.05;
      const tAreaW = W * 0.9;
      const tAreaY = H * 0.45;
      const tAreaH = H * 0.5;

      if (now - lastTrendAdd > 800) {
        lastTrendAdd = now;
        const last = trendPoints[trendPoints.length - 1];
        trendPoints.push(last + (2 + Math.random() * 3) * (1 + trendPoints.length * 0.02));
        if (trendPoints.length > 60) trendPoints.shift();

        // Occasional burst at the leading edge
        if (Math.random() > 0.6) {
          const lastIdx = trendPoints.length - 1;
          const tMin = Math.min(...trendPoints);
          const tMax = Math.max(...trendPoints);
          const tRange = tMax - tMin || 1;
          const lx = tAreaX + (lastIdx / (trendPoints.length - 1)) * tAreaW;
          const ly = tAreaY + tAreaH - ((trendPoints[lastIdx] - tMin) / tRange) * tAreaH;
          bursts.push({ x: lx, y: ly, r: 0, maxR: 15 + Math.random() * 20, opacity: 0.3 });
        }
      }

      const tMin = Math.min(...trendPoints);
      const tMax = Math.max(...trendPoints);
      const tRange = tMax - tMin || 1;

      // Area fill under curve
      ctx.beginPath();
      trendPoints.forEach((p, i) => {
        const x = tAreaX + (i / (trendPoints.length - 1)) * tAreaW;
        const y = tAreaY + tAreaH - ((p - tMin) / tRange) * tAreaH;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      const lastPx = tAreaX + tAreaW;
      ctx.lineTo(lastPx, tAreaY + tAreaH);
      ctx.lineTo(tAreaX, tAreaY + tAreaH);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, tAreaY, 0, tAreaY + tAreaH);
      grad.addColorStop(0, 'rgba(0,207,255,0.06)');
      grad.addColorStop(1, 'rgba(0,207,255,0)');
      ctx.fillStyle = grad;
      ctx.fill();

      // Trend line stroke
      ctx.beginPath();
      trendPoints.forEach((p, i) => {
        const x = tAreaX + (i / (trendPoints.length - 1)) * tAreaW;
        const y = tAreaY + tAreaH - ((p - tMin) / tRange) * tAreaH;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = 'rgba(0,207,255,0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Pulsing dot at leading edge
      const lastIdx = trendPoints.length - 1;
      const dotX = tAreaX + (lastIdx / (trendPoints.length - 1)) * tAreaW;
      const dotY = tAreaY + tAreaH - ((trendPoints[lastIdx] - tMin) / tRange) * tAreaH;
      const pulseR = 3 + Math.sin(now * 0.006) * 1.5;
      ctx.beginPath();
      ctx.arc(dotX, dotY, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,207,255,0.5)';
      ctx.fill();

      // Draw bursts
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.r += 0.6;
        b.opacity -= 0.008;
        if (b.opacity <= 0 || b.r >= b.maxR) { bursts.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,207,255,${b.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Subtle "REVENUE" watermark
      ctx.save();
      ctx.globalAlpha = 0.015;
      ctx.fillStyle = '#00cfff';
      ctx.font = `bold ${Math.min(W * 0.15, 120)}px "Bebas Neue", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('ACCELERATION', W / 2, H * 0.35);
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
