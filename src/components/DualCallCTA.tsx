import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface DualCallCTAProps {
  className?: string;
}

export const DualCallCTA = ({ className = '' }: DualCallCTAProps) => {
  return (
    <section className={`py-8 px-4 border-t border-border ${className}`}>
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={24} className="text-accent mx-auto mb-3" />
        </motion.div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Want Personalized Guidance?
        </h2>
        <p className="text-muted-foreground mb-5 text-sm">
          Book a free consultation to discuss your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.a 
            href="https://calendly.com/stackmodechris/turboboost" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-500/90 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            <Calendar size={18} />
            FREE Consultation Call
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default DualCallCTA;
