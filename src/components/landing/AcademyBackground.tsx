import { useRef, useEffect } from 'react';

interface CodeChar {
  x: number; y: number; speed: number; char: string; opacity: number;
}
interface Candle {
  x: number; y: number; w: number; h: number; wick: number; green: boolean; speed: number; opacity: number;
}

const AcademyBackground = () => {
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

    const codeChars: string[] = ['{}', '</>', '=>', 'const', 'if', '[ ]', 'fn', '0x', '++', 'let', '( )', '&&'];
    const chars: CodeChar[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.15 + Math.random() * 0.3,
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      opacity: 0.03 + Math.random() * 0.04,
    }));

    const candles: Candle[] = Array.from({ length: 12 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height * 0.3 + Math.random() * canvas.height * 0.5,
      w: 4 + Math.random() * 6,
      h: 15 + Math.random() * 40,
      wick: 8 + Math.random() * 20,
      green: Math.random() > 0.4,
      speed: 0.1 + Math.random() * 0.2,
      opacity: 0.04 + Math.random() * 0.03,
    }));

    // Price line
    let lineOffset = 0;

    let raf: number;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Code rain
      ctx.font = '11px "Share Tech Mono", monospace';
      chars.forEach(c => {
        ctx.fillStyle = `rgba(201,168,76,${c.opacity})`;
        ctx.fillText(c.char, c.x, c.y);
        c.y += c.speed;
        if (c.y > H + 20) { c.y = -20; c.x = Math.random() * W; }
      });

      // Candlesticks
      candles.forEach(c => {
        const col = c.green ? `rgba(34,197,94,${c.opacity})` : `rgba(239,68,68,${c.opacity})`;
        ctx.fillStyle = col;
        ctx.fillRect(c.x - c.w / 2, c.y - c.h / 2, c.w, c.h);
        ctx.fillRect(c.x - 0.5, c.y - c.h / 2 - c.wick, 1, c.wick);
        ctx.fillRect(c.x - 0.5, c.y + c.h / 2, 1, c.wick * 0.6);
        c.x -= c.speed;
        if (c.x < -20) { c.x = W + 20; c.y = H * 0.3 + Math.random() * H * 0.5; }
      });

      // Price line
      lineOffset += 0.3;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(201,168,76,0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 3) {
        const y = H * 0.5 + Math.sin((x + lineOffset) * 0.008) * 60 + Math.sin((x + lineOffset) * 0.02) * 20;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); obs.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default AcademyBackground;
