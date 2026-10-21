import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { patient_resources } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function useFaqOpen() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));
  return { openId, toggle };
}

export default function PatientResourcesPage() {
  const faq = useFaqOpen();
  return (
    <>
      <Helmet>
        <title>Patient Resources — Bloomwell Clinic PCCL</title>
        <meta
          name="description"
          content="FAQ, what to expect at your first psychiatric appointment, and telehealth setup guide for Bloomwell Clinic PCCL patients in Texas."
        />
        <link rel="canonical" href="https://bloomwellclinic.com/patient-resources" />
        <meta property="og:title" content="Patient Resources — Bloomwell Clinic PCCL" />
        <meta property="og:description" content="Everything you need to feel prepared before your first telehealth psychiatry appointment with Bloomwell Clinic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomwellclinic.com/patient-resources" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <section
          className="py-20 md:py-28"
          style={{ background: 'hsl(22 28% 88%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'hsl(var(--primary))', letterSpacing: '0.18em' }}
              >
                Resources
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {patient_resources.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'hsl(25 20% 40%)' }}
              >
                {patient_resources.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── FIRST APPOINTMENT ── */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Sticky label */}
              <div className="lg:col-span-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="lg:sticky lg:top-28"
                >
                  <motion.div
                    variants={fadeUp}
                    className="w-10 h-0.5 mb-6"
                    style={{ background: 'hsl(var(--primary))' }}
                  />
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-semibold leading-snug mb-5"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                  >
                    {patient_resources.first_appointment.heading}
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {patient_resources.first_appointment.intro}
                  </motion.p>
                </motion.div>
              </div>

              {/* Steps */}
              <motion.div
                className="lg:col-span-8 flex flex-col gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {patient_resources.first_appointment.steps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    variants={fadeUp}
                    className="flex gap-6 p-7 rounded-2xl border border-border"
                    style={{ background: 'hsl(var(--card))' }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: 'hsl(var(--primary) / 0.12)',
                        color: 'hsl(var(--primary))',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3
                        className="text-base font-semibold mb-2"
                        style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TELEHEALTH SETUP ── */}
        <section
          className="py-20 md:py-28"
          style={{ background: 'hsl(30 18% 28%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="w-10 h-0.5 mb-6"
                style={{ background: 'hsl(120 22% 65%)' }}
              />
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 92%)' }}
              >
                {patient_resources.telehealth_setup.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm md:text-base leading-relaxed max-w-xl"
                style={{ color: 'hsl(40 15% 65%)' }}
              >
                {patient_resources.telehealth_setup.intro}
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {patient_resources.telehealth_setup.steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  className="p-6 rounded-2xl"
                  style={{ background: 'hsl(30 15% 34%)' }}
                >
                  <p
                    className="text-3xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(120 22% 65%)' }}
                  >
                    0{i + 1}
                  </p>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 25% 85%)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(40 12% 58%)' }}>
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Label */}
              <div className="lg:col-span-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="lg:sticky lg:top-28"
                >
                  <motion.div
                    variants={fadeUp}
                    className="w-10 h-0.5 mb-6"
                    style={{ background: 'hsl(var(--primary))' }}
                  />
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-semibold leading-snug mb-5"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                  >
                    {patient_resources.faq.heading}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Don't see your question here? We're happy to help.
                  </motion.p>
                  <motion.div variants={fadeUp} className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-block px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                      style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Accordion */}
              <motion.div
                className="lg:col-span-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <div
                  className="border-t"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  {patient_resources.faq.items.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={fadeUp}
                      className="border-b"
                      style={{ borderColor: 'hsl(var(--border))' }}
                    >
                      <button
                        onClick={() => faq.toggle(item.id)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left"
                        aria-expanded={faq.openId === item.id}
                      >
                        <span
                          className="text-base font-semibold leading-snug"
                          style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                        >
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className="flex-shrink-0 transition-transform duration-300"
                          style={{
                            color: 'hsl(var(--primary))',
                            transform: faq.openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: faq.openId === item.id ? '400px' : '0px' }}
                      >
                        <p
                          className="pb-5 text-sm leading-relaxed"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          className="py-16 md:py-20"
          style={{ background: 'hsl(22 28% 88%)' }}
        >
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
                  className="text-2xl md:text-3xl font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                >
                  Still have questions?
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(25 20% 40%)' }}>
                  Our team is here to help you feel confident and comfortable before your first appointment.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
