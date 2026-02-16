import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  { target: 1000, suffix: '+', label: 'Students Enrolled' },
  { target: 500, suffix: '+', label: 'Apps Built' },
  { target: 2, suffix: 'M+', label: 'Student Earnings', prefix: '$' },
];

export const AcademyTrustBar = () => (
  <section className="py-8 px-4 border-y border-border/50 bg-card/30">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-4 text-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              {stat.prefix && <span className="text-2xl sm:text-3xl font-bold text-foreground">{stat.prefix}</span>}
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
