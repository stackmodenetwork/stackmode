import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, BookOpen, Rocket, Target, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { OptimizedImage } from './OptimizedImage';

interface BlueprintPromoProps {
  variant?: 'full' | 'compact' | 'inline';
  className?: string;
}

export const BlueprintPromo = ({ variant = 'full', className = '' }: BlueprintPromoProps) => {
  const benefits = [
    "Step-by-step business foundations",
    "Proven scaling strategies",
    "AI-powered automation techniques",
    "Complete mastery curriculum"
  ];

  if (variant === 'inline') {
    return (
      <motion.a
        href="https://whop.com/stackmode-academy/educationalservice/"
        target="_blank"
        rel="noopener noreferrer"
        className={`group block bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border-2 border-emerald-500/30 hover:border-emerald-400/60 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 ${className}`}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border border-emerald-500/30 flex-shrink-0">
            <OptimizedImage 
              src="/images/stackmode-blueprint.png" 
              alt="The Stackmode Blueprint"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold">THE STACKMODE BLUEPRINT</span>
            </div>
            <p className="text-foreground font-semibold text-sm mb-1">
              Your Complete Business Success Roadmap
            </p>
            <p className="text-muted-foreground text-xs">
              From foundations to mastery — everything you need to build a thriving business.
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
            <span>Get The Blueprint</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.a>
    );
  }

  if (variant === 'compact') {
    return (
      <section className={`py-8 ${className}`}>
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <motion.div 
              className="relative bg-gradient-to-br from-background via-emerald-950/20 to-background border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-8 overflow-hidden"
              whileHover={{ borderColor: 'rgba(16, 185, 129, 0.6)' }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-emerald-500/20 rounded-2xl blur-xl opacity-50" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6">
                {/* Image */}
                <div className="w-full lg:w-1/3 max-w-xs">
                  <motion.div 
                    className="rounded-xl overflow-hidden border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10"
                    whileHover={{ scale: 1.03, rotate: 1 }}
                  >
                    <OptimizedImage 
                      src="/images/stackmode-blueprint.png" 
                      alt="The Stackmode Blueprint"
                      className="w-full aspect-video object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-4 py-1.5 mb-3"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BookOpen size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-bold">COMPREHENSIVE TRAINING</span>
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    The Stackmode <span className="text-emerald-400">Blueprint</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A complete, step-by-step system to build your business from the ground up. Master the foundations, develop winning strategies, and scale to success.
                  </p>

                  <motion.a
                    href="https://whop.com/stackmode-academy/educationalservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-background font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get The Blueprint</span>
                    <ArrowRight size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  // Full variant
  return (
    <section className={`py-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 rounded-3xl blur-2xl opacity-40" />
            
            <motion.div 
              className="relative bg-gradient-to-br from-background via-emerald-950/30 to-background border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-10 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.4),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.3),transparent_50%)]" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Image side */}
                <div className="w-full lg:w-2/5">
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Image glow */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/40 to-cyan-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="relative rounded-xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl">
                      <OptimizedImage 
                        src="/images/stackmode-blueprint.png" 
                        alt="The Stackmode Blueprint - Complete Business Course"
                        className="w-full aspect-video object-cover"
                      />
                      
                      {/* Scan line effect */}
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
                    </div>

                    {/* Floating badge */}
                    <motion.div 
                      className="absolute -top-3 -right-3 bg-emerald-500 text-background text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🚀 FULL ACCESS
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content side */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-5 py-2 mb-4"
                    animate={{ boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 20px rgba(16,185,129,0.3)', '0 0 0px rgba(16,185,129,0)'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-bold">YOUR BUSINESS SUCCESS ROADMAP</span>
                  </motion.div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    The Stackmode <span className="text-emerald-400">Blueprint</span>
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                    Stop guessing and start building. The Blueprint gives you a complete, proven system to launch, grow, and scale your business — from foundational strategies to advanced mastery techniques.
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {benefits.map((benefit, i) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <motion.a
                      href="https://whop.com/stackmode-academy/educationalservice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-background font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/40"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BookOpen size={20} />
                      <span>Get The Blueprint</span>
                      <ArrowRight size={20} />
                    </motion.a>
                    
                    <span className="text-muted-foreground text-sm">
                      Included with Stackmode Academy
                    </span>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Always Updated
                    </span>
                    <span className="hidden sm:inline text-border">•</span>
                    <span className="flex items-center gap-1">
                      <Users size={12} className="text-emerald-400" />
                      Community Access
                    </span>
                    <span className="hidden sm:inline text-border">•</span>
                    <span className="flex items-center gap-1">
                      <Target size={12} className="text-emerald-400" />
                      Results Focused
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlueprintPromo;
