import { useEffect, useRef, useState, useCallback } from 'react';

/* ═══════════════════════════════════════════════
   LEFT CANVAS — Terminal + Trading Chart
   ═══════════════════════════════════════════════ */
const TerminalCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth * 1; canvas.height = canvas.offsetHeight * 1; };
    resize();
    window.addEventListener('resize', resize);

    const obs = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; }, { threshold: 0 });
    obs.observe(canvas);

    // Terminal typing
    const lines = [
      '> initializing stackmode.env...',
      '> loading modules: [trading] [webdev] [ai] [content]',
      '> portfolio.balance = $0 → $12,847.00',
      '> git commit -m \'shipped new product\'',
      '> revenue_stream.add(\'saas\', \'content\', \'trading\')',
      '> stack.execute() ✓ SUCCESS',
    ];
    const lineColors = [0.5, 0.35, 0.7, 0.5, 0.5, 0.7];
    let currentLine = 0;
    let charIndex = 0;
    let typedLines: string[] = [];
    let lastType = 0;
    let pauseUntil = 0;
    const CHAR_DELAY = 45;
    const PAUSE_DELAY = 2500;

    // Candlestick data
    const candleCount = 24;
    let candles: { o: number; c: number; h: number; l: number }[] = [];
    const genCandle = (prev: number) => {
      const change = (Math.random() - 0.45) * 14;
      const o = prev;
      const c = o + change;
      const h = Math.max(o, c) + Math.random() * 8;
      const l = Math.min(o, c) - Math.random() * 8;
      return { o, c, h, l };
    };
    let price = 50;
    for (let i = 0; i < candleCount; i++) {
      const cd = genCandle(price);
      candles.push(cd);
      price = cd.c;
    }
    let lastCandleTime = 0;

    const getMA = (idx: number) => {
      let sum = 0, cnt = 0;
      for (let i = Math.max(0, idx - 4); i <= idx; i++) {
        sum += (candles[i].o + candles[i].c) / 2;
        cnt++;
      }
      return sum / cnt;
    };

    let raf: number;
    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const isMobile = W < 500;
      const termH = H * (isMobile ? 0.5 : 0.55);
      const chartTop = termH + 20;
      const chartH = H - chartTop - 10;

      /* ── TERMINAL ── */
      const termPad = isMobile ? 10 : 20;
      const termW = W - termPad * 2;
      const termY = termPad;
      const titleBarH = isMobile ? 18 : 22;

      ctx.strokeStyle = 'rgba(0,255,136,0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(termPad, termY, termW, termH - termPad * 2, 6);
      ctx.stroke();

      ctx.fillStyle = 'rgba(0,255,136,0.04)';
      ctx.beginPath();
      ctx.roundRect(termPad, termY, termW, titleBarH, [6, 6, 0, 0]);
      ctx.fill();

      const dotColors = ['rgba(255,95,87,0.5)', 'rgba(255,189,46,0.5)', 'rgba(39,201,63,0.5)'];
      dotColors.forEach((col, i) => {
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(termPad + 12 + i * 11, termY + titleBarH / 2, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = 'rgba(0,255,136,0.3)';
      ctx.font = `${isMobile ? 7 : 9}px "Share Tech Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.fillText('STACKMODE_OS v2.1', termPad + termW / 2, termY + titleBarH / 2 + 3);
      ctx.textAlign = 'left';

      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(termPad + 1, termY + titleBarH, termW - 2, termH - termPad * 2 - titleBarH - 1);

      if (now > pauseUntil) {
        if (now - lastType > CHAR_DELAY) {
          lastType = now;
          if (currentLine < lines.length) {
            charIndex++;
            if (charIndex > lines[currentLine].length) {
              typedLines.push(lines[currentLine]);
              currentLine++;
              charIndex = 0;
            }
          } else {
            pauseUntil = now + PAUSE_DELAY;
            typedLines = [];
            currentLine = 0;
            charIndex = 0;
          }
        }
      }

      const fontSize = isMobile ? 9 : 11;
      const lineH = isMobile ? 16 : 22;
      ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
      const textX = termPad + 16;
      const textStartY = termY + titleBarH + 20;

      typedLines.forEach((line, i) => {
        ctx.fillStyle = `rgba(0,255,136,${lineColors[i] || 0.4})`;
        ctx.fillText(line, textX, textStartY + i * lineH);
      });

      if (currentLine < lines.length) {
        const partial = lines[currentLine].substring(0, charIndex);
        const ci = typedLines.length;
        ctx.fillStyle = `rgba(0,255,136,${lineColors[currentLine] || 0.4})`;
        ctx.fillText(partial, textX, textStartY + ci * lineH);
        if (Math.floor(now / 530) % 2 === 0) {
          const tw = ctx.measureText(partial).width;
          ctx.fillStyle = 'rgba(0,255,136,0.6)';
          ctx.fillRect(textX + tw + 2, textStartY + ci * lineH - fontSize + 2, fontSize * 0.55, fontSize);
        }
      }

      /* ── CANDLESTICK CHART ── */
      if (now - lastCandleTime > 2000) {
        lastCandleTime = now;
        candles.shift();
        candles.push(genCandle(candles[candles.length - 1].c));
      }

      let minP = Infinity, maxP = -Infinity;
      candles.forEach(c => { minP = Math.min(minP, c.l); maxP = Math.max(maxP, c.h); });
      const range = maxP - minP || 1;
      const toY = (p: number) => chartTop + chartH - ((p - minP) / range) * chartH * 0.9 - chartH * 0.05;
      const barW = (W - 60) / candleCount;

      ctx.strokeStyle = 'rgba(255,255,255,0.025)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 5; i++) {
        const gy = chartTop + (chartH / 5) * i;
        ctx.beginPath(); ctx.moveTo(30, gy); ctx.lineTo(W - 10, gy); ctx.stroke();
        const pLabel = (maxP - (range / 5) * i).toFixed(0);
        ctx.fillStyle = 'rgba(0,255,136,0.25)';
        ctx.font = `${isMobile ? 6 : 8}px "Share Tech Mono", monospace`;
        ctx.fillText(pLabel, 4, gy + 3);
      }

      candles.forEach((c, i) => {
        const x = 35 + i * barW + barW / 2;
        const bull = c.c >= c.o;
        const bodyTop = toY(Math.max(c.o, c.c));
        const bodyBot = toY(Math.min(c.o, c.c));
        const bodyH = Math.max(bodyBot - bodyTop, 1);

        ctx.strokeStyle = bull ? 'rgba(0,255,136,0.4)' : 'rgba(255,60,80,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x, toY(c.h)); ctx.lineTo(x, toY(c.l)); ctx.stroke();

        ctx.fillStyle = bull ? 'rgba(0,255,136,0.2)' : 'rgba(255,60,80,0.15)';
        ctx.strokeStyle = bull ? 'rgba(0,255,136,0.4)' : 'rgba(255,60,80,0.3)';
        ctx.fillRect(x - barW * 0.3, bodyTop, barW * 0.6, bodyH);
        ctx.strokeRect(x - barW * 0.3, bodyTop, barW * 0.6, bodyH);
      });

      ctx.strokeStyle = 'rgba(0,255,136,0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      candles.forEach((_, i) => {
        const x = 35 + i * barW + barW / 2;
        const y = toY(getMA(i));
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.stroke();

      const glowGrad = ctx.createLinearGradient(0, chartTop + chartH - 40, 0, chartTop + chartH);
      glowGrad.addColorStop(0, 'rgba(0,255,136,0)');
      glowGrad.addColorStop(1, 'rgba(0,255,136,0.03)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, chartTop + chartH - 40, W, 40);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); obs.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ═══════════════════════════════════════════════
   RIGHT CANVAS — Revenue Particles + Wireframe + Trend
   ═══════════════════════════════════════════════ */
const WireframeCanvas = () => {
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

    const isMobile = () => canvas.width < 500;

    const symbols = ['$', '€', '£', '+', '↑', '▲', '◆', '%'];
    const particleCount = () => isMobile() ? 20 : 40;
    let particles: { x: number; y: number; s: string; size: number; opacity: number; speed: number; offset: number; pulse: boolean }[] = [];
    const initParticles = () => {
      const count = particleCount();
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: symbols[Math.floor(Math.random() * symbols.length)],
        size: 10 + Math.random() * 10,
        opacity: 0.04 + Math.random() * 0.12,
        speed: 0.25 + Math.random() * 0.35,
        offset: Math.random() * Math.PI * 2,
        pulse: i % 8 === 0,
      }));
    };
    initParticles();

    let urlCharIdx = 0;
    let urlTyping = true;
    let urlPause = 0;
    const urlText = 'ceoturbo.com';
    let layoutIdx = 0;
    let layoutAlpha = 1;
    let lastLayoutSwitch = 0;

    let trendPoints: number[] = [];
    for (let i = 0; i < 20; i++) trendPoints.push(30 + i * 2 + Math.random() * 8);
    let lastTrendAdd = 0;
    let trendPulseRadius = 3;

    let frame = 0;
    let raf: number;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visibleRef.current) return;
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const mobile = isMobile();

      /* ── LAYER 1: Revenue Particles ── */
      ctx.font = '14px "Share Tech Mono", monospace';
      particles.forEach(p => {
        const scale = p.pulse ? 1 + Math.sin(frame * 0.03 + p.offset) * 0.35 : 1;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#00cfff';
        ctx.font = `${p.size * scale}px "Share Tech Mono", monospace`;
        ctx.fillText(p.s, p.x, p.y);
        ctx.restore();

        p.y -= p.speed;
        p.x += Math.sin(frame * 0.02 + p.offset) * 0.4;
        if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
      });

      /* ── LAYER 2: Browser Wireframe ── */
      const bw = Math.min(W * 0.65, 280);
      const bh = bw * 0.7;
      const bx = (W - bw) / 2;
      const by = (H - bh) / 2 - 20;

      ctx.strokeStyle = 'rgba(0,207,255,0.07)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, bw, bh, 5);
      ctx.stroke();

      ctx.fillStyle = 'rgba(0,207,255,0.04)';
      ctx.fillRect(bx, by, bw, 16);
      ctx.fillStyle = 'rgba(0,207,255,0.08)';
      ctx.fillRect(bx + 6, by + 3, 40, 10);

      const abY = by + 18;
      ctx.strokeStyle = 'rgba(0,207,255,0.06)';
      ctx.strokeRect(bx + 8, abY, bw - 16, 14);

      if (now > urlPause) {
        if (urlTyping) {
          urlCharIdx++;
          if (urlCharIdx > urlText.length) { urlPause = now + 3000; urlTyping = false; }
        } else {
          urlCharIdx--;
          if (urlCharIdx <= 0) { urlPause = now + 500; urlTyping = true; }
        }
      }
      ctx.fillStyle = 'rgba(0,207,255,0.3)';
      ctx.font = `${mobile ? 7 : 8}px "Share Tech Mono", monospace`;
      ctx.fillText(urlText.substring(0, Math.max(0, urlCharIdx)), bx + 12, abY + 10);
      if (Math.floor(now / 530) % 2 === 0) {
        const cursorX = bx + 12 + ctx.measureText(urlText.substring(0, Math.max(0, urlCharIdx))).width + 1;
        ctx.fillRect(cursorX, abY + 3, 1, 9);
      }

      const vpY = abY + 18;
      const vpH = bh - (vpY - by) - 8;
      const vpW = bw - 16;
      const vpX = bx + 8;

      if (now - lastLayoutSwitch > 3500) {
        lastLayoutSwitch = now;
        layoutIdx = (layoutIdx + 1) % 3;
        layoutAlpha = 0;
      }
      layoutAlpha = Math.min(1, layoutAlpha + 0.02);

      ctx.globalAlpha = layoutAlpha;
      const rc = (x: number, y: number, w: number, h: number, r = 2) => {
        ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill();
      };

      ctx.fillStyle = 'rgba(0,207,255,0.06)';
      if (layoutIdx === 0) {
        rc(vpX, vpY, vpW, 8);
        for (let i = 0; i < 4; i++) rc(vpX + vpW - 4 * 14 + i * 14, vpY + 1, 10, 5);
        rc(vpX, vpY + 14, vpW, vpH * 0.5);
        ctx.fillStyle = 'rgba(0,207,255,0.1)';
        rc(vpX + vpW / 2 - 25, vpY + 14 + vpH * 0.55, 50, 10, 3);
      } else if (layoutIdx === 1) {
        const cols = 3, rows = 2, gap = 4;
        const cw = (vpW - gap * (cols - 1)) / cols;
        const ch = (vpH - gap * (rows - 1)) / rows;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            rc(vpX + c * (cw + gap), vpY + r * (ch + gap), cw, ch, 3);
            ctx.fillStyle = 'rgba(0,207,255,0.04)';
            ctx.fillRect(vpX + c * (cw + gap) + 3, vpY + r * (ch + gap) + ch - 8, cw - 6, 3);
            ctx.fillStyle = 'rgba(0,207,255,0.06)';
          }
        }
      } else {
        const sideW = vpW * 0.22;
        rc(vpX, vpY, sideW, vpH);
        const cardW = (vpW - sideW - 12) / 4;
        for (let i = 0; i < 4; i++) {
          rc(vpX + sideW + 6 + i * (cardW + 2), vpY, cardW, vpH * 0.25, 3);
        }
        ctx.fillStyle = 'rgba(0,207,255,0.08)';
        const barHArr = [0.6, 0.8, 0.5, 0.9, 0.7];
        const barArea = vpH * 0.6;
        const barBottom = vpY + vpH;
        const barStartX = vpX + sideW + 10;
        const barGap = (vpW - sideW - 24) / 5;
        barHArr.forEach((h, i) => {
          const bHeight = barArea * h;
          ctx.fillRect(barStartX + i * barGap, barBottom - bHeight, barGap * 0.6, bHeight);
        });
      }
      ctx.globalAlpha = 1;

      /* ── LAYER 3: Revenue Trend Line ── */
      if (now - lastTrendAdd > 1500) {
        lastTrendAdd = now;
        const last = trendPoints[trendPoints.length - 1];
        trendPoints.push(last + 1 + Math.random() * 4);
        if (trendPoints.length > 30) trendPoints.shift();
      }

      const tMinY = Math.min(...trendPoints);
      const tMaxY = Math.max(...trendPoints);
      const tRange = tMaxY - tMinY || 1;
      const tAreaX = W * 0.55;
      const tAreaW = W * 0.4;
      const tAreaY = H * 0.7;
      const tAreaH = H * 0.22;

      ctx.beginPath();
      trendPoints.forEach((p, i) => {
        const x = tAreaX + (i / (trendPoints.length - 1)) * tAreaW;
        const y = tAreaY + tAreaH - ((p - tMinY) / tRange) * tAreaH;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = 'rgba(0,207,255,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const lastX = tAreaX + tAreaW;
      const lastY = tAreaY + tAreaH - ((trendPoints[trendPoints.length - 1] - tMinY) / tRange) * tAreaH;
      ctx.lineTo(lastX, tAreaY + tAreaH);
      ctx.lineTo(tAreaX, tAreaY + tAreaH);
      ctx.closePath();
      const areaGrad = ctx.createLinearGradient(0, tAreaY, 0, tAreaY + tAreaH);
      areaGrad.addColorStop(0, 'rgba(0,207,255,0.04)');
      areaGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = areaGrad;
      ctx.fill();

      trendPulseRadius = 3 + Math.sin(now * 0.005) * 1.5;
      ctx.beginPath();
      ctx.arc(lastX, lastY, trendPulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,207,255,0.6)';
      ctx.fill();
      const rippleR = 6 + Math.sin(now * 0.003) * 4;
      ctx.beginPath();
      ctx.arc(lastX, lastY, rippleR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,207,255,${0.3 - Math.sin(now * 0.003) * 0.15})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); obs.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

/* ═══════════════════════════════════════════════
   KEYWORD TICKER
   ═══════════════════════════════════════════════ */
const TICKER_TEXT = 'STACKMODE ACADEMY · CHRISTOPHER ROBINSON · STACKMODECHRIS · AI TOOLS · PYTHON CODING · STOCK TRADING · CRYPTO INVESTING · WEB DEVELOPMENT · SOFTWARE ENGINEERING · CONTENT MONETIZATION · BUILD DIGITAL ASSETS · $50/MONTH · CEO TURBO · NFC DIGITAL BUSINESS CARDS · BRAND BOOST CALL · ATLANTA GEORGIA · FINANCIAL FREEDOM · LEARN TO CODE · LEARN TO TRADE · CHRISTOPHERROBINSONCEO · STACKMODECHRIS___ · ';

const KeywordTicker = () => (
  <div
    className="relative w-full overflow-hidden group/ticker"
    style={{
      height: 26,
      background: '#070710',
      borderBottom: '1px solid rgba(255,255,255,0.03)',
    }}
  >
    <div
      className="flex items-center h-full whitespace-nowrap animate-marquee group-hover/ticker:[animation-play-state:paused]"
      style={{ width: 'max-content' }}
    >
      {[0, 1, 2].map(i => (
        <p key={i} className="inline-block" style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 9,
          color: '#252525',
          letterSpacing: '0.15em',
          margin: 0,
          padding: '0 12px',
        }}>
          {TICKER_TEXT}
        </p>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════════════ */
const TopBar = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-5 sm:px-8 animate-[slideDown_0.5s_ease_forwards]"
      style={{
        height: 44,
        background: 'rgba(4,4,10,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="flex items-center gap-0">
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: '0.15em', color: '#f0f0f0' }}>
          STACK<span style={{ color: '#00ff88' }}>MODE</span>
        </span>
        <div className="mx-3" style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.12)' }} />
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: '0.15em', color: '#f0f0f0' }}>
          CEO<span style={{ color: '#00cfff' }}>TURBO</span>
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-4" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, color: '#333' }}>
        <span>{time}</span>
        <span>SESSION_001</span>
      </div>
    </header>
  );
};

/* ═══════════════════════════════════════════════
   STATUS BAR
   ═══════════════════════════════════════════════ */
const StatusBar = ({ hover }: { hover: 'left' | 'right' | null }) => (
  <footer
    className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between px-5 sm:px-8"
    style={{
      height: 32,
      background: 'rgba(4,4,10,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.03)',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 8,
      letterSpacing: '2px',
    }}
  >
    <div className="flex items-center gap-2">
      <div className="rounded-full animate-pulse" style={{ width: 5, height: 5, background: '#00ff88' }} />
      <span style={{ color: '#252525' }}>STACKMODE.NET — ALL SYSTEMS OPERATIONAL</span>
    </div>
    <span
      className="hidden sm:block transition-colors duration-300"
      style={{
        color: hover === 'left' ? 'rgba(0,255,136,0.35)' : hover === 'right' ? 'rgba(0,207,255,0.3)' : '#252525',
      }}
    >
      {hover === 'left'
        ? '// STACKMODE ACADEMY — $50/MO → BUILD YOUR STACK'
        : hover === 'right'
          ? '// CEO TURBO — NFC CARDS + BRAND BOOST + WEB DESIGN'
          : '// HOVER TO SELECT YOUR PATH'}
    </span>
  </footer>
);

/* ═══════════════════════════════════════════════
   SOCIAL FOOTER STRIP
   ═══════════════════════════════════════════════ */
const SocialFooterStrip = () => (
  <nav
    className="fixed z-[201] left-0 right-0 flex items-center justify-center gap-6"
    style={{
      bottom: 32,
      height: 28,
      background: 'rgba(4,4,10,0.95)',
      borderTop: '1px solid rgba(255,255,255,0.02)',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 8,
      letterSpacing: '3px',
    }}
    aria-label="Social media links for Christopher Robinson StackmodeChris"
  >
    <a href="https://www.instagram.com/christopherrobinsonceo/" target="_blank" rel="noopener noreferrer"
      aria-label="Follow Christopher Robinson on Instagram — christopherrobinsonceo"
      style={{ color: '#1a1a1a', textDecoration: 'none' }}>INSTAGRAM</a>
    <a href="https://www.youtube.com/@ChristopherRobinson-CEO" target="_blank" rel="noopener noreferrer"
      aria-label="Subscribe to Christopher Robinson on YouTube — ChristopherRobinson-CEO"
      style={{ color: '#1a1a1a', textDecoration: 'none' }}>YOUTUBE</a>
    <a href="https://www.tiktok.com/@stackmodechris___" target="_blank" rel="noopener noreferrer"
      aria-label="Follow StackmodeChris on TikTok — stackmodechris___"
      style={{ color: '#1a1a1a', textDecoration: 'none' }}>TIKTOK</a>
    <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer"
      aria-label="Visit CEO Turbo — NFC Digital Business Cards and Brand Boost by StackmodeChris Christopher Robinson"
      style={{ color: '#1a1a1a', textDecoration: 'none' }}>CEOTURBO.COM</a>
  </nav>
);

/* ═══════════════════════════════════════════════
   CENTER EMBLEM
   ═══════════════════════════════════════════════ */
const CenterEmblem = () => (
  <div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] hidden md:flex flex-col items-center"
    style={{ animation: 'fadeUp 0.7s ease 0.7s both' }}
  >
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 68, height: 68, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: '1px solid transparent',
          borderTopColor: 'rgba(255,255,255,0.4)',
          animation: 'spin 7s linear infinite',
        }}
      />
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: 'rgba(255,255,255,0.45)' }}>SM</span>
    </div>
    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 7, letterSpacing: '0.2em', color: '#1e1e1e', marginTop: 6 }}>
      SELECT PATH
    </span>
  </div>
);

/* ═══════════════════════════════════════════════
   PANEL (shared layout)
   ═══════════════════════════════════════════════ */
interface PanelProps {
  side: 'left' | 'right';
  hovered: boolean;
  otherHovered: boolean;
  onHover: (h: boolean) => void;
}

const LeftPanel = ({ hovered, otherHovered, onHover }: Omit<PanelProps, 'side'>) => {
  const shrink = otherHovered && !hovered;
  return (
    <a
      href="https://stackmode.net"
      data-panel-side="left"
      aria-label="Join Stackmode Academy — Learn AI, Coding and Trading with Christopher Robinson for $50 per month"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative flex items-center justify-center overflow-hidden no-underline"
      style={{
        flex: hovered ? 1.45 : shrink ? 0.85 : 1,
        transition: 'flex 0.65s cubic-bezier(0.77, 0, 0.175, 1)',
        cursor: 'none',
        minHeight: '55vh',
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(4,4,10,0.55)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <TerminalCanvas />

      {/* Green radial glow */}
      <div className="absolute inset-0 pointer-events-none z-[3]" style={{
        background: 'radial-gradient(600px circle at 50% 60%, rgba(0,255,136,0.06) 0%, transparent 70%)',
      }} />

      {/* Corner brackets */}
      <div className="absolute top-5 left-5 w-5 h-5 border-l-[1.5px] border-t-[1.5px] z-[5]" style={{ borderColor: 'rgba(0,255,136,0.25)' }} />
      <div className="absolute bottom-5 right-5 w-5 h-5 border-r-[1.5px] border-b-[1.5px] z-[5]" style={{ borderColor: 'rgba(0,255,136,0.25)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start px-6 sm:px-12 max-w-lg w-full" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
        {/* Logo */}
        <img
          src="/images/stackmode-logo-sm.png"
          alt="Stackmode Academy Christopher Robinson StackmodeChris logo"
          width={120}
          height={40}
          loading="lazy"
          className="mb-4 w-[100px] sm:w-[120px] h-auto object-contain"
        />

        {/* Tag */}
        <span className="mb-3 px-3 py-1 text-[9px] tracking-[0.2em] uppercase rounded-full" style={{
          fontFamily: "'Share Tech Mono', monospace",
          color: '#00ff88',
          border: '1px solid rgba(0,255,136,0.3)',
        }}>
          // 01 — LEARN & EARN
        </span>

        {/* Heading — horizontal on mobile */}
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(38px, 6vw, 86px)',
          lineHeight: 0.92,
          color: '#f0f0f0',
          margin: 0,
        }}>
          <span className="hidden md:inline">STACK<br /><span style={{ color: '#00ff88' }}>MODE</span><br />ACADEMY</span>
          <span className="md:hidden">STACK<span style={{ color: '#00ff88' }}>MODE</span> ACADEMY</span>
        </h2>

        {/* AI element badge */}
        <div className="flex items-center gap-2 mt-3" style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 9,
          color: '#00ff88',
        }}>
          <span className="inline-block w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span>AI-POWERED LEARNING SYSTEM</span>
        </div>

        {/* Description — always visible, white text */}
        <p className="mt-3"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: '#e0e0e0',
            maxWidth: 380,
            lineHeight: 1.6,
          }}
        >
          Code. Content. Capital. One system to build assets, grow audiences, and multiply profits.
        </p>

        {/* Pills — always visible, white text */}
        <div className="flex flex-wrap gap-2 mt-3">
          {['Python', 'Trading', 'Web Dev', 'AI Tools', 'Monetize'].map(p => (
            <span key={p} className="text-[9px] tracking-wider px-2.5 py-1 rounded-sm" style={{
              fontFamily: "'Share Tech Mono', monospace",
              background: 'rgba(0,255,136,0.08)',
              color: '#00ff88',
              border: '1px solid rgba(0,255,136,0.15)',
            }}>{p}</span>
          ))}
        </div>

        {/* CTA — much more visible on mobile */}
        <div className="relative mt-5 overflow-hidden group/cta rounded-sm" style={{
          border: '1.5px solid rgba(0,255,136,0.5)',
          padding: '12px 28px',
          minHeight: 48,
          display: 'flex',
          alignItems: 'center',
        }}
          aria-label="Join Stackmode Academy for $50 per month — AI coding and trading school by StackmodeChris"
        >
          <div className="absolute inset-0 bg-[#00ff88] -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-300" />
          <span className="relative z-10 text-[12px] sm:text-[11px] tracking-[0.25em] font-bold transition-colors duration-300 group-hover/cta:text-black" style={{
            fontFamily: "'Share Tech Mono', monospace",
            color: '#00ff88',
          }}>
            JOIN ACADEMY →
          </span>
        </div>
      </div>
    </a>
  );
};

const RightPanel = ({ hovered, otherHovered, onHover }: Omit<PanelProps, 'side'>) => {
  const shrink = otherHovered && !hovered;
  return (
    <a
      href="https://ceoturbo.com"
      target="_blank"
      rel="noopener noreferrer"
      data-panel-side="right"
      aria-label="Visit CEO Turbo — NFC Digital Business Cards and Brand Boost by StackmodeChris Christopher Robinson"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative flex items-center justify-center overflow-hidden no-underline"
      style={{
        flex: hovered ? 1.45 : shrink ? 0.85 : 1,
        transition: 'flex 0.65s cubic-bezier(0.77, 0, 0.175, 1)',
        cursor: 'none',
        minHeight: '55vh',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(4,4,10,0.55)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <WireframeCanvas />

      {/* Cyan radial glow */}
      <div className="absolute inset-0 pointer-events-none z-[3]" style={{
        background: 'radial-gradient(600px circle at 50% 60%, rgba(0,207,255,0.05) 0%, transparent 70%)',
      }} />

      {/* Corner brackets */}
      <div className="absolute top-5 right-5 w-5 h-5 border-r-[1.5px] border-t-[1.5px] z-[5]" style={{ borderColor: 'rgba(0,207,255,0.25)' }} />
      <div className="absolute bottom-5 left-5 w-5 h-5 border-l-[1.5px] border-b-[1.5px] z-[5]" style={{ borderColor: 'rgba(0,207,255,0.25)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start px-6 sm:px-12 max-w-lg w-full" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
        {/* Logo */}
        <img
          src="/images/ceoturbo-logo-new.png"
          alt="CEO Turbo Christopher Robinson StackmodeChris brand boost logo"
          width={120}
          height={40}
          loading="lazy"
          className="mb-4 w-[100px] sm:w-[120px] h-auto object-contain"
        />

        <span className="mb-3 px-3 py-1 text-[9px] tracking-[0.2em] uppercase rounded-full" style={{
          fontFamily: "'Share Tech Mono', monospace",
          color: '#00cfff',
          border: '1px solid rgba(0,207,255,0.3)',
        }}>
          // 02 — BRAND & SCALE
        </span>

        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(38px, 6vw, 86px)',
          lineHeight: 0.92,
          color: '#f0f0f0',
          margin: 0,
        }}>
          <span className="hidden md:inline">CEO<br /><span style={{ color: '#00cfff' }}>TURBO</span><br />.COM</span>
          <span className="md:hidden">CEO<span style={{ color: '#00cfff' }}>TURBO</span>.COM</span>
        </h2>

        <p className="mt-3"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: '#e0e0e0',
            maxWidth: 380,
            lineHeight: 1.6,
          }}
        >
          Digital business cards. Brand boost calls. Premium web design. Your brand working 24/7 on autopilot.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {['NFC Cards', 'Brand Boost', 'Web Design', 'Revenue'].map(p => (
            <span key={p} className="text-[9px] tracking-wider px-2.5 py-1 rounded-sm" style={{
              fontFamily: "'Share Tech Mono', monospace",
              background: 'rgba(0,207,255,0.08)',
              color: '#00cfff',
              border: '1px solid rgba(0,207,255,0.15)',
            }}>{p}</span>
          ))}
        </div>

        <div className="relative mt-5 overflow-hidden group/cta rounded-sm" style={{
          border: '1.5px solid rgba(0,207,255,0.5)',
          padding: '12px 28px',
          minHeight: 48,
          display: 'flex',
          alignItems: 'center',
        }}
          aria-label="Boost your brand with CEO Turbo — digital business cards and brand strategy by Christopher Robinson"
        >
          <div className="absolute inset-0 bg-[#00cfff] -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-300" />
          <span className="relative z-10 text-[12px] sm:text-[11px] tracking-[0.25em] font-bold transition-colors duration-300 group-hover/cta:text-black" style={{
            fontFamily: "'Share Tech Mono', monospace",
            color: '#00cfff',
          }}>
            BOOST BRAND →
          </span>
        </div>
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════
   SR-ONLY SEO CONTENT
   ═══════════════════════════════════════════════ */
const SeoContent = () => (
  <div className="sr-only">
    <h1>Stackmode Academy — Learn AI, Coding, Software &amp; Trading Online | Christopher Robinson (StackmodeChris)</h1>
    <h2>AI and Software Development Courses by StackmodeChris</h2>
    <h2>Stock Trading and Crypto Investing School Online</h2>
    <h2>CEO Turbo — NFC Digital Business Cards and Brand Boost</h2>
    <h2>Learn to Code and Trade with Christopher Robinson</h2>
    <p>
      Stackmode Academy is the ultimate online school for AI, coding, software development, and trading/investing. Founded by Christopher Robinson, known as StackmodeChris, based in Atlanta, Georgia. Our complete Code-Content-Capital system teaches you to build real digital assets, grow an audience that buys, and multiply your profits through smart investing. Learn Python programming, artificial intelligence tools, web development, stock market trading, and cryptocurrency investing — all in one ecosystem for just $50 per month. Follow StackmodeChris on Instagram at christopherrobinsonceo, YouTube at ChristopherRobinson-CEO, and TikTok at stackmodechris___. Also visit CEO Turbo at ceoturbo.com for NFC digital business cards, brand boost strategy calls, and premium web design services for entrepreneurs and CEOs.
    </p>
  </div>
);

/* ═══════════════════════════════════════════════
   SPLIT HERO — MAIN EXPORT
   ═══════════════════════════════════════════════ */
const SplitHero = () => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const hover = leftHover ? 'left' : rightHover ? 'right' : null;

  return (
    <>
      <TopBar />
      <KeywordTicker />
      <SeoContent />

      {/* "CHOOSE YOUR PATH" heading */}
      <div className="absolute top-[2px] sm:top-[4px] left-0 right-0 z-[150] flex justify-center pointer-events-none">
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(22px, 3.5vw, 36px)',
          letterSpacing: '0.25em',
          color: '#f0f0f0',
          textAlign: 'center',
          margin: 0,
          textShadow: '0 2px 20px rgba(0,0,0,0.8)',
        }}>
          CHOOSE YOUR PATH
        </h2>
      </div>

      <section className="relative w-full overflow-hidden flex flex-col md:flex-row" style={{
        background: '#04040a',
        minHeight: '100vh',
        paddingTop: 96,
        paddingBottom: 60,
      }}>
        {/* Center vertical divider */}
        <div className="absolute left-1/2 top-[15%] bottom-[15%] w-[1px] z-[100] hidden md:block" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
        }} />

        <CenterEmblem />

        <LeftPanel hovered={leftHover} otherHovered={rightHover} onHover={setLeftHover} />
        <RightPanel hovered={rightHover} otherHovered={leftHover} onHover={setRightHover} />
      </section>

      <SocialFooterStrip />
      <StatusBar hover={hover} />

      {/* CRT Scanline */}
      <div className="fixed inset-0 z-[9990] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
      }} />
    </>
  );
};

export default SplitHero;
