import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { home } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const serviceImages: Record<string, string> = {
  s1: '/airo-assets/images/pages/home/services-child',
  s2: '/airo-assets/images/pages/home/services-adult',
  s3: '/airo-assets/images/pages/home/services-geriatric',
  s4: '/airo-assets/images/pages/home/services-medication',
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Bloomwell Clinic PCCL — Expert Tele-Psychiatry Care</title>
        <meta
          name="description"
          content="Board-certified psychiatric care for families and individuals of all ages, delivered via secure telehealth. Bloomwell Clinic PCCL emphasizes patient-focused care and medication minimalism."
        />
        <link rel="canonical" href="https://bloomwellclinic.com/" />
        <meta property="og:title" content="Bloomwell Clinic PCCL — Expert Tele-Psychiatry Care" />
        <meta property="og:description" content="Board-certified psychiatric care for all ages via secure telehealth. Patient-focused. Medication-minimalist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomwellclinic.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <img
            src="/airo-assets/images/pages/home/hero"
            alt="Person in calm, naturally lit setting"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Warm overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(105deg, hsl(30 25% 12% / 0.72) 0%, hsl(30 20% 18% / 0.45) 60%, transparent 100%)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-widest mb-6"
                style={{ color: 'hsl(120 25% 72%)', letterSpacing: '0.18em' }}
              >
                Tele-Psychiatry · Board-Certified Care
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 94%)' }}
              >
                {home.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl leading-relaxed mb-10"
                style={{ color: 'hsl(40 20% 80%)' }}
              >
                {home.hero.subheadline}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-7 py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                >
                  {home.hero.cta_primary}
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full font-semibold text-sm border transition-colors hover:bg-white/10"
                  style={{ borderColor: 'hsl(40 30% 80% / 0.5)', color: 'hsl(40 30% 92%)' }}
                >
                  {home.hero.cta_secondary}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div
          className="border-y border-border"
          style={{ background: 'hsl(var(--background))' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {home.hero.trust_items.map((item, i) => (
                <span key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'hsl(var(--primary))' }}
                  />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── PHILOSOPHY ── */}
        <section
          className="py-24 md:py-32"
          style={{ background: 'hsl(22 28% 88%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Pull quote */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div
                  className="w-12 h-0.5 mb-8"
                  style={{ background: 'hsl(var(--primary))' }}
                />
                <blockquote
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-6"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                >
                  "{home.philosophy.pull_quote}"
                </blockquote>
                <p
                  className="text-sm font-medium tracking-wide"
                  style={{ color: 'hsl(25 20% 45%)' }}
                >
                  {home.philosophy.pull_quote_attribution}
                </p>
              </motion.div>

              {/* Principles */}
              <motion.div
                className="flex flex-col gap-10 pt-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {home.philosophy.principles.map((p) => (
                  <motion.div key={p.id} variants={fadeUp} className="flex gap-5">
                    {/* Leaf mark */}
                    <div className="flex-shrink-0 mt-1">
                      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
                        <path
                          d="M9 1C9 1 2 6 2 13C2 17.4 5.1 21 9 21C12.9 21 16 17.4 16 13C16 6 9 1 9 1Z"
                          stroke="hsl(120, 20%, 45%)"
                          strokeWidth="1.5"
                          fill="hsl(120, 20%, 45%, 0.12)"
                        />
                        <line x1="9" y1="21" x2="9" y2="10" stroke="hsl(120, 20%, 45%)" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(25 20% 40%)' }}>
                        {p.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24 md:py-32" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
              >
                {home.services.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {home.services.subheading}
              </motion.p>
            </motion.div>

            {/* Bento grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {home.services.items.map((svc) => (
                <motion.div
                  key={svc.id}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px hsl(25 20% 20% / 0.12)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' as const }}
                  className={[
                    'rounded-2xl overflow-hidden border border-border flex flex-col',
                    svc.featured ? 'md:col-span-2 lg:col-span-2' : '',
                  ].join(' ')}
                  style={{ background: 'hsl(var(--card))' }}
                >
                  <div className={['overflow-hidden', svc.featured ? 'h-56' : 'h-44'].join(' ')}>
                    <img
                      src={serviceImages[svc.id]}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {svc.description}
                    </p>
                    <Link
                      to="/services"
                      className="mt-5 text-sm font-semibold inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                      style={{ color: 'hsl(var(--primary))' }}
                    >
                      Learn more
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CREDENTIALS ── */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ background: 'hsl(30 18% 28%)' }}
        >
          {/* Organic blob decoration */}
          <div
            className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'hsl(var(--primary))', filter: 'blur(60px)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 bottom-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'hsl(22 40% 60%)', filter: 'blur(50px)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 92%)' }}
              >
                {home.credentials.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg max-w-xl mx-auto"
                style={{ color: 'hsl(40 15% 65%)' }}
              >
                {home.credentials.subheading}
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {home.credentials.pillars.map((pillar) => (
                <motion.div
                  key={pillar.id}
                  variants={fadeUp}
                  className="text-center px-4"
                >
                  <p
                    className="text-5xl md:text-6xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(120 22% 72%)' }}
                  >
                    {pillar.stat}
                  </p>
                  <p
                    className="text-base font-semibold mb-3"
                    style={{ color: 'hsl(40 25% 85%)' }}
                  >
                    {pillar.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(40 12% 58%)' }}
                  >
                    {pillar.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 md:py-32" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                className="rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
              >
                <img
                  src="/airo-assets/images/pages/home/cta-telehealth"
                  alt="Calm telehealth session from home"
                  className="w-full h-80 md:h-96 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.div
                  variants={fadeUp}
                  className="w-10 h-0.5 mb-8"
                  style={{ background: 'hsl(var(--primary))' }}
                />
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                >
                  {home.cta.headline}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-base md:text-lg leading-relaxed mb-10"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {home.cta.body}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                  >
                    {home.cta.button}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
