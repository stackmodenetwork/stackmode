import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, PenTool } from 'lucide-react';

const anim = (i: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay: i * 0.08 }
});

export default function PillarsBentoGrid() {
  return (
    <section className="section">
      








































































      
    </section>);

}