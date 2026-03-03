import { useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextRotatorProps {
  words?: string[];
  interval?: number;
  className?: string;
}

export function AnimatedTextRotator({
  words = ["AI Software", "Trading Systems", "Digital Assets", "Wealth"],
  interval = 3000,
  className,
}: AnimatedTextRotatorProps) {
  const id = useId();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`inline-block relative ${className || ''}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${id}-${currentIndex}`}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="inline-block"
          style={{
            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
