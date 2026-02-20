import { memo } from 'react';

export const CodeTradingBackground = memo(() => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Gradient mesh */}
    <div className="absolute inset-0 opacity-[0.06]" style={{
      background: `
        radial-gradient(ellipse 80% 60% at 20% 30%, hsl(var(--primary)) 0%, transparent 70%),
        radial-gradient(ellipse 60% 80% at 80% 70%, hsl(var(--accent)) 0%, transparent 70%),
        radial-gradient(ellipse 70% 50% at 50% 50%, hsl(var(--secondary)) 0%, transparent 70%)
      `,
    }} />

    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px',
    }} />

    {/* Scrolling code text - left side */}
    <div className="absolute left-[5%] top-0 bottom-0 w-48 overflow-hidden opacity-[0.04]">
      <div className="animate-code-scroll font-mono text-[10px] text-primary leading-5 whitespace-pre select-none">
{`const scanner = new AI();
scanner.analyze(market);
if (breakout.detected) {
  alert("BUY SIGNAL");
}

function calcRisk(entry) {
  return position * leverage;
}

async function fetchData() {
  const res = await api.get();
  return res.json();
}

class TradingBot {
  constructor(config) {
    this.pairs = config;
  }
  
  async scan() {
    for (let p of this.pairs) {
      await this.check(p);
    }
  }
}

export default scanner;
const profit = sell - buy;
console.log("Stack mode.");

const scanner = new AI();
scanner.analyze(market);
if (breakout.detected) {
  alert("BUY SIGNAL");
}

function calcRisk(entry) {
  return position * leverage;
}

async function fetchData() {
  const res = await api.get();
  return res.json();
}

class TradingBot {
  constructor(config) {
    this.pairs = config;
  }
}`}
      </div>
    </div>

    {/* Candlestick lines - right side */}
    <div className="absolute right-[5%] top-0 bottom-0 w-48 overflow-hidden opacity-[0.05]">
      <svg className="animate-candle-scroll w-full" viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '200%' }}>
        {/* Green candles */}
        <rect x="10" y="50" width="8" height="40" fill="hsl(var(--accent))" />
        <line x1="14" y1="30" x2="14" y2="90" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <rect x="30" y="100" width="8" height="60" fill="hsl(var(--accent))" />
        <line x1="34" y1="80" x2="34" y2="160" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        {/* Red candles */}
        <rect x="50" y="120" width="8" height="35" fill="hsl(var(--destructive))" />
        <line x1="54" y1="100" x2="54" y2="155" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
        <rect x="70" y="90" width="8" height="50" fill="hsl(var(--accent))" />
        <line x1="74" y1="70" x2="74" y2="140" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        {/* More candles */}
        <rect x="90" y="130" width="8" height="30" fill="hsl(var(--destructive))" />
        <line x1="94" y1="115" x2="94" y2="160" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
        <rect x="110" y="80" width="8" height="70" fill="hsl(var(--accent))" />
        <line x1="114" y1="60" x2="114" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <rect x="130" y="100" width="8" height="45" fill="hsl(var(--accent))" />
        <line x1="134" y1="85" x2="134" y2="145" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <rect x="150" y="140" width="8" height="25" fill="hsl(var(--destructive))" />
        <line x1="154" y1="125" x2="154" y2="165" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
        <rect x="170" y="70" width="8" height="55" fill="hsl(var(--accent))" />
        <line x1="174" y1="50" x2="174" y2="125" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        {/* Repeat lower */}
        <rect x="20" y="250" width="8" height="45" fill="hsl(var(--accent))" />
        <line x1="24" y1="230" x2="24" y2="295" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <rect x="60" y="300" width="8" height="35" fill="hsl(var(--destructive))" />
        <line x1="64" y1="280" x2="64" y2="335" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
        <rect x="100" y="270" width="8" height="60" fill="hsl(var(--accent))" />
        <line x1="104" y1="250" x2="104" y2="330" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <rect x="140" y="320" width="8" height="30" fill="hsl(var(--destructive))" />
        <line x1="144" y1="305" x2="144" y2="350" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
      </svg>
    </div>

    {/* Glowing intersection dots */}
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: `radial-gradient(circle 2px, hsl(var(--primary)) 0%, transparent 100%)`,
      backgroundSize: '80px 80px',
      backgroundPosition: '0 0',
    }} />
  </div>
));

CodeTradingBackground.displayName = 'CodeTradingBackground';
