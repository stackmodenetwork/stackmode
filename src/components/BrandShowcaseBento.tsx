import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const anim = (i: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay: i * 0.06 }
});

const showcaseItems = [
{ img: '/images/showcase/client-jd.png', title: 'Fitness & Coaching', tools: 'Lovable · Midjourney' },
{ img: '/images/showcase/client-legacy.png', title: 'Global Business', tools: 'Claude · Figma' },
{ img: '/images/showcase/client-7uvhavin.png', title: 'Music & Entertainment', tools: 'Lovable · DALL-E' },
{ img: '/images/showcase/client-ceoturbo.png', title: 'Growth Platform', tools: 'Cursor · Stripe' }];


export default function BrandShowcaseBento() {
  return (
    <section className="section section--glass">
      






































      
    </section>);

}