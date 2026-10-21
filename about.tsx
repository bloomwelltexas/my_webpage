import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { about } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Bloomwell Clinic PCCL</title>
        <meta
          name="description"
          content="Learn about Bloomwell Clinic PCCL — our board-certified providers, clinical philosophy, medication minimalism approach, and commitment to thorough, patient-centered psychiatric care."
        />
        <link rel="canonical" href="https://bloomwellclinic.com/about" />
        <meta property="og:title" content="About — Bloomwell Clinic PCCL" />
        <meta property="og:description" content="Board-certified psychiatric care rooted in clinical rigor, genuine partnership, and a commitment to using the least intervention necessary." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomwellclinic.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': 'https://bloomwellclinic.com/about#webpage',
          name: 'About Bloomwell Clinic PCCL',
          url: 'https://bloomwellclinic.com/about',
          isPartOf: { '@id': 'https://bloomwellclinic.com/#website' },
          about: { '@id': 'https://bloomwellclinic.com/#organization' },
        }).replace(/</g, '\u003c')}</script>
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
                Our Story
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {about.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'hsl(25 20% 40%)' }}
              >
                {about.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="py-20 md:py-24" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-semibold mb-8"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                >
                  {about.mission.heading}
                </motion.h2>
                {about.mission.body.map((p) => (
                  <motion.p
                    key={p.id}
                    variants={fadeUp}
                    className="text-base md:text-lg leading-relaxed mb-5 last:mb-0"
                    style={{ color: 'hsl(25 15% 38%)' }}
                  >
                    <span>{p.text}</span>
                  </motion.p>
                ))}
              </motion.div>

              {/* Pull-quote panel */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="rounded-2xl p-10 md:p-12"
                style={{ background: 'hsl(22 28% 88%)' }}
              >
                <p
                  className="text-2xl md:text-3xl font-semibold leading-snug mb-6"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 28%)' }}
                >
                  "Psychiatric care should be thorough, honest, and built around the person — not the prescription pad."
                </p>
                <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--primary))', letterSpacing: '0.15em' }}>
                  Bloomwell Clinic PCCL
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MEDICATION PHILOSOPHY ── */}
        <section className="py-20 md:py-24" style={{ background: 'hsl(30 15% 22%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="max-w-2xl mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'hsl(120 20% 72%)', letterSpacing: '0.18em' }}
              >
                Medication Philosophy
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 90%)' }}
              >
                {about.philosophy.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(120 20% 72%)' }}
              >
                {about.philosophy.subheading}
              </motion.p>
              {about.philosophy.body.map((p) => (
                <motion.p
                  key={p.id}
                  variants={fadeUp}
                  className="text-base leading-relaxed mb-4 last:mb-0"
                  style={{ color: 'hsl(40 15% 65%)' }}
                >
                  <span>{p.text}</span>
                </motion.p>
              ))}
            </motion.div>

            {/* Pillars */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {about.philosophy.pillars.map((pillar) => (
                <motion.div
                  key={pillar.id}
                  variants={fadeUp}
                  className="rounded-xl p-7"
                  style={{ background: 'hsl(30 15% 28%)', borderLeft: '3px solid hsl(120 20% 55%)' }}
                >
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 88%)' }}
                  >
                    {pillar.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(40 15% 60%)' }}>
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CREDENTIALS ── */}
        <section className="py-20 md:py-24" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'hsl(var(--primary))', letterSpacing: '0.18em' }}
              >
                Qualifications
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold mb-10"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {about.credentials.heading}
              </motion.h2>
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {about.credentials.items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="rounded-xl p-6"
                    style={{ background: 'hsl(22 28% 93%)', border: '1px solid hsl(35 25% 82%)' }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: 'hsl(var(--primary))', letterSpacing: '0.14em' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-base font-semibold"
                      style={{ color: 'hsl(25 25% 28%)' }}
                    >
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-20 md:py-24" style={{ background: 'hsl(22 28% 88%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'hsl(var(--primary))', letterSpacing: '0.18em' }}
              >
                Our Values
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold mb-12"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {about.values.heading}
              </motion.h2>
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {about.values.items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="rounded-2xl p-8"
                    style={{ background: 'hsl(var(--background))' }}
                  >
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: 'hsl(25 15% 40%)' }}>
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-24" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-xl mx-auto"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {about.cta.headline}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: 'hsl(25 15% 40%)' }}
              >
                {about.cta.body}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3.5 rounded-full text-base font-semibold transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                >
                  {about.cta.button}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
