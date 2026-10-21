import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { services } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const serviceImages: Record<string, string> = {
  child: '/airo-assets/images/pages/home/services-child',
  adult: '/airo-assets/images/pages/home/services-adult',
  geriatric: '/airo-assets/images/pages/home/services-geriatric',
  medication: '/airo-assets/images/pages/home/services-medication',
};

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Psychiatric Services — Bloomwell Clinic PCCL</title>
        <meta
          name="description"
          content="Board-certified psychiatric care for children, adolescents, adults, and seniors in Texas via secure telehealth. Specialties include ADHD, anxiety, depression, trauma, and medication management."
        />
        <link rel="canonical" href="https://bloomwellclinic.com/services" />
        <meta property="og:title" content="Psychiatric Services — Bloomwell Clinic PCCL" />
        <meta property="og:description" content="Specialized telehealth psychiatry for every stage of life — child, adult, and geriatric care in Texas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomwellclinic.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(22 28% 88%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'hsl(var(--primary))', letterSpacing: '0.18em' }}
              >
                What We Treat
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {services.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'hsl(25 20% 40%)' }}
              >
                {services.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-16 md:py-20" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="w-10 h-0.5 mb-6" style={{ background: 'hsl(var(--primary))' }} />
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold mb-5"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
              >
                {services.intro.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {services.intro.body}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section className="pb-24 md:pb-32" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-16">
              {services.services.map((svc, idx) => (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={stagger}
                >
                  {/* Image — alternates sides */}
                  <motion.div
                    variants={fadeUp}
                    className={['rounded-2xl overflow-hidden', idx % 2 === 1 ? 'lg:order-last' : ''].join(' ')}
                  >
                    <img
                      src={serviceImages[svc.id]}
                      alt={svc.headline}
                      className="w-full h-72 md:h-80 object-cover"
                      loading="lazy"
                      width={700}
                      height={500}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div variants={stagger} className="flex flex-col gap-5">
                    <motion.div variants={fadeUp} className="flex items-center gap-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          background: 'hsl(var(--primary) / 0.12)',
                          color: 'hsl(var(--primary))',
                          letterSpacing: '0.14em',
                        }}
                      >
                        {svc.age_group}
                      </span>
                      <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {svc.age_range}
                      </span>
                    </motion.div>

                    <motion.h2
                      variants={fadeUp}
                      className="text-3xl md:text-4xl font-semibold leading-snug"
                      style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                    >
                      {svc.headline}
                    </motion.h2>

                    <motion.p
                      variants={fadeUp}
                      className="text-sm leading-relaxed"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      {svc.description}
                    </motion.p>

                    {/* Conditions */}
                    <motion.div variants={fadeUp}>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: 'hsl(var(--muted-foreground))', letterSpacing: '0.14em' }}
                      >
                        Conditions We Treat
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {svc.conditions.map((c, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full border"
                            style={{
                              borderColor: 'hsl(var(--border))',
                              color: 'hsl(var(--foreground))',
                              background: 'hsl(var(--card))',
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Approach */}
                    <motion.div
                      variants={fadeUp}
                      className="p-5 rounded-xl border-l-2"
                      style={{
                        background: 'hsl(var(--muted) / 0.5)',
                        borderColor: 'hsl(var(--primary))',
                      }}
                    >
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--foreground))' }}>
                        {svc.approach}
                      </p>
                    </motion.div>

                    {svc.note ? (
                      <motion.p
                        variants={fadeUp}
                        className="text-xs leading-relaxed"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        <span className="font-semibold">Note: </span>
                        {svc.note}
                      </motion.p>
                    ) : null}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLINICAL PHILOSOPHY ── */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(30 18% 28%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="w-10 h-0.5 mb-6" style={{ background: 'hsl(120 22% 65%)' }} />
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 92%)' }}
              >
                {services.approach.heading}
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {services.approach.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="p-7 rounded-2xl"
                  style={{ background: 'hsl(30 15% 34%)' }}
                >
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 25% 85%)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(40 12% 58%)' }}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-24" style={{ background: 'hsl(22 28% 88%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="max-w-xl">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                >
                  {services.cta.headline}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(25 20% 40%)' }}>
                  {services.cta.body}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                >
                  {services.cta.button}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
