import { motion } from 'framer-motion';

const proofItems = [
  {
    img: '/images/proof/cumulative-pl.png',
    label: '+$2,256 cumulative P&L',
    span: 'col-span-2',
    aspect: 'aspect-[3/1]',
  },
  {
    img: '/images/proof/trading-pl-1.png',
    label: 'Student results — $1,224 day',
    span: 'col-span-1 row-span-2',
    aspect: 'aspect-[3/5]',
  },
  {
    img: '/images/proof/youtube-impressions.png',
    label: '14.2M impressions',
    span: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    img: '/images/proof/stripe-payouts.png',
    label: 'Recurring revenue payouts',
    span: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    img: '/images/proof/youtube-views.png',
    label: '1.2M+ lifetime views',
    span: 'col-span-1',
    aspect: 'aspect-[5/2]',
  },
  {
    img: '/images/proof/student-testimonial.png',
    label: 'Mentorship results',
    span: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    img: '/images/proof/stripe-balances.png',
    label: 'Stripe deposit history',
    span: 'col-span-1',
    aspect: 'aspect-[4/3]',
  },
];

export default function BusinessProofBento() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Proof of Work</p>
          <h2 className="section-header__title">Real Results. Real Revenue.</h2>
          <p className="section-header__subtitle">
            Trading P&L, YouTube analytics, Stripe payouts, and student wins — all verified.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {proofItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative group overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.label}
                className={`w-full h-full object-cover object-top ${item.aspect} transition-transform duration-500 group-hover:scale-105`}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
