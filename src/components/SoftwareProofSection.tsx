import { motion } from 'framer-motion';
import { Code, Zap, Database, TrendingUp, ArrowRight, Cpu, BarChart3, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SoftwareProofSectionProps {
  variant: 'home' | 'coding';
}

export const SoftwareProofSection = ({ variant }: SoftwareProofSectionProps) => {
  const isHome = variant === 'home';

  const features = isHome ? [
    { icon: BarChart3, text: 'AI-Powered Market Intelligence' },
    { icon: Cpu, text: 'Real-Time Data Processing' },
    { icon: Shield, text: 'Smart Risk Calculators' },
    { icon: TrendingUp, text: 'Sector Analysis Engine' },
  ] : [
    { icon: Database, text: 'Database Architecture & APIs' },
    { icon: Cpu, text: 'AI Agent Integration' },
    { icon: Code, text: 'Full-Stack Deployment' },
    { icon: Zap, text: 'Revenue-Ready SaaS' },
  ];

  return (
    <section className={`py-12 px-4 ${isHome ? 'bg-gradient-to-b from-cyan-500/5 to-background' : 'bg-gradient-to-b from-background to-cyan-500/5'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isHome ? '' : 'lg:order-2'}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
              <Code size={14} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">
                {isHome ? 'Real Software I Built' : 'Learn By Building Real Products'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              {isHome ? (
                <>
                  Like The <span className="text-emerald-400">StackFinder</span>
                </>
              ) : (
                <>
                  Build Software That <span className="text-cyan-400">Actually Ships</span>
                </>
              )}
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {isHome ? (
                <>
                  I didn't learn this from a course — I built it. The <span className="text-foreground font-medium">StackFinder</span> is a live market intelligence platform with AI watchlists, smart calculators, and real-time sector analysis. 
                  <span className="text-foreground font-medium"> In the Academy, I show you exactly how I built it.</span>
                </>
              ) : (
                <>
                  From database architecture to AI logic — you'll build products like the <span className="text-foreground font-medium">StackFinder</span>. 
                  A real trading intelligence tool with live market data, smart calculators, and sector analysis. 
                  <span className="text-foreground font-medium"> No theory. Just code that runs in production.</span>
                </>
              )}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <feature.icon size={14} className={isHome ? 'text-emerald-400' : 'text-cyan-400'} />
                  <span className="text-foreground/80">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              {isHome ? (
                <Link
                  to="/coding"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
                >
                  <Code size={18} />
                  <span>Learn How I Built It</span>
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <a
                  href="https://whop.com/stackmode-academy/educationalservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
                >
                  <Zap size={18} />
                  <span>Start Building Today</span>
                  <ArrowRight size={18} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Screenshots Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative ${isHome ? '' : 'lg:order-1'}`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className={`absolute -inset-4 ${isHome ? 'bg-emerald-500/10' : 'bg-cyan-500/10'} rounded-2xl blur-2xl`} />
              
              {/* Main screenshot */}
              <div className="relative bg-card/50 border border-border rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/stackfinder-preview.png" 
                  alt="StackFinder - AI Market Intelligence"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Floating smaller screenshots */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-2/3 bg-card/80 border border-border rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <img 
                  src="/images/stackfinder-calculators.png" 
                  alt="Smart Calculators"
                  className="w-full"
                  loading="lazy"
                />
              </motion.div>

              <motion.div 
                className="absolute -top-4 -left-4 w-1/2 bg-card/80 border border-border rounded-lg overflow-hidden shadow-xl hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <img 
                  src="/images/stackfinder-sector-iq.png" 
                  alt="Sector IQ Analysis"
                  className="w-full"
                  loading="lazy"
                />
              </motion.div>

              {/* Tech badge */}
              <motion.div 
                className={`absolute bottom-4 left-4 ${isHome ? 'bg-emerald-500' : 'bg-cyan-500'} text-background text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Built with AI + Python
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProofSection;
