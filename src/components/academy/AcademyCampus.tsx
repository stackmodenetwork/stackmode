import { motion } from 'framer-motion';
import { Building, Laptop, TrendingUp, Users, Rocket, Trophy, GraduationCap } from 'lucide-react';

const features = [
{ icon: Building, text: 'Learn in-person from industry experts' },
{ icon: Laptop, text: 'Access cutting-edge development labs' },
{ icon: TrendingUp, text: 'Trade in dedicated trading floors' },
{ icon: Users, text: 'Network with entrepreneurs & developers' },
{ icon: Rocket, text: 'Launch products with hands-on support' },
{ icon: Trophy, text: 'Compete in hackathons & trading competitions' }];


export const AcademyCampus = () =>
<section className="py-16 sm:py-20 px-4 relative overflow-hidden">
    {/* Blueprint-style bg */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
    <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }} />


    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>

        <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
          <Building size={14} className="text-secondary" />
          <span className="text-secondary text-xs font-medium">The Vision</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
          Stackmode Academy Atlanta
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          The world's first physical campus dedicated to AI development and wealth stacking. Currently in development.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-left">
          {features.map((f, i) =>
        <motion.div
          key={f.text}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="flex items-start gap-3 bg-card/60 border border-border/50 rounded-lg p-4">

              <f.icon size={18} className="text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{f.text}</span>
            </motion.div>
        )}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <div className="text-center">
            <p className="text-foreground font-bold">2026</p>
            <p className="text-muted-foreground text-xs">Expected Opening</p>
          </div>
          <div className="text-center">
            <p className="text-foreground font-bold">Atlanta, GA</p>
            <p className="text-muted-foreground text-xs">Silicon Valley of the South</p>
          </div>
          <div className="text-center">
            <p className="text-foreground font-bold"> Students Awaiting To Join     </p>
            <p className="text-muted-foreground text-xs">Per Cohort</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4">Online members get priority admission when applications open.</p>

        <a
        href="https://whop.com/stackmode-academy/educationalservice/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-3 rounded-xl transition-all text-sm hover:scale-[1.02]">

          <GraduationCap size={16} />
          Secure Your Spot — Join Online Now
        </a>
      </motion.div>
    </div>
  </section>;