import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { contact } from 'virtual:content';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const patientType = String(formData.get('patient_type') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (dropdowns, radios, checkboxes) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message || 'New inquiry from Bloomwell Clinic contact form' }],
            data: {
              __gd_contact_form_title: 'Contact Bloomwell Clinic',
              'Patient Type': patientType,
              'Phone': phone,
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — Bloomwell Clinic PCCL</title>
        <meta
          name="description"
          content="Contact Bloomwell Clinic PCCL to schedule a telehealth psychiatric appointment or ask questions about our services. Serving patients in Texas."
        />
        <link rel="canonical" href="https://bloomwellclinic.com/contact" />
        <meta property="og:title" content="Contact — Bloomwell Clinic PCCL" />
        <meta property="og:description" content="Reach out to Bloomwell Clinic PCCL to get started with telehealth psychiatric care in Texas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomwellclinic.com/contact" />
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
                Get in Touch
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
              >
                {contact.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'hsl(25 20% 40%)' }}
              >
                {contact.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

              {/* ── FORM ── */}
              <motion.div
                className="lg:col-span-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="w-10 h-0.5 mb-7" style={{ background: 'hsl(var(--primary))' }} />
                <motion.h2
                  variants={fadeUp}
                  className="text-2xl md:text-3xl font-semibold mb-8"
                  style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                >
                  Send Us a Message
                </motion.h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 rounded-2xl text-center"
                    style={{ background: 'hsl(120 20% 94%)' }}
                    role="status"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: 'hsl(var(--primary) / 0.15)' }}
                    >
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                        <path d="M4 11L9 16L18 6" stroke="hsl(120, 25%, 40%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-heading)', color: 'hsl(25 30% 22%)' }}
                    >
                      Message Received
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(25 20% 40%)' }}>
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    variants={fadeUp}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ position: 'absolute', left: '-9999px' }}
                      aria-hidden="true"
                    />

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          Full Name <span aria-hidden="true" style={{ color: 'hsl(var(--primary))' }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:ring-2"
                          style={{
                            background: 'hsl(var(--card))',
                            borderColor: 'hsl(var(--border))',
                            color: 'hsl(var(--foreground))',
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          Email Address <span aria-hidden="true" style={{ color: 'hsl(var(--primary))' }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:ring-2"
                          style={{
                            background: 'hsl(var(--card))',
                            borderColor: 'hsl(var(--border))',
                            color: 'hsl(var(--foreground))',
                          }}
                        />
                      </div>
                    </div>

                    {/* Phone + Patient Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:ring-2"
                          style={{
                            background: 'hsl(var(--card))',
                            borderColor: 'hsl(var(--border))',
                            color: 'hsl(var(--foreground))',
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="patient_type"
                          className="text-sm font-semibold"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          Who Is This For?
                        </label>
                        <select
                          id="patient_type"
                          name="patient_type"
                          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:ring-2 appearance-none"
                          style={{
                            background: 'hsl(var(--card))',
                            borderColor: 'hsl(var(--border))',
                            color: 'hsl(var(--foreground))',
                          }}
                        >
                          <option value="">Select one…</option>
                          <option value="Myself (adult)">Myself (adult)</option>
                          <option value="My child or teen">My child or teen</option>
                          <option value="An older adult / family member">An older adult / family member</option>
                          <option value="Not sure">Not sure</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us a little about what brings you here, or ask any questions you have. There's no wrong way to start."
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:ring-2 resize-none"
                        style={{
                          background: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          color: 'hsl(var(--foreground))',
                        }}
                      />
                    </div>

                    {status === 'error' && (
                      <p
                        className="text-sm px-4 py-3 rounded-xl"
                        style={{ background: 'hsl(0 60% 96%)', color: 'hsl(0 55% 40%)' }}
                        role="alert"
                      >
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="self-start px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </motion.div>

              {/* ── INFO SIDEBAR ── */}
              <motion.div
                className="lg:col-span-5 flex flex-col gap-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {/* Telehealth */}
                <motion.div
                  variants={fadeUp}
                  className="p-7 rounded-2xl"
                  style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'hsl(var(--primary) / 0.12)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <rect x="1" y="3" width="10" height="8" rx="1.5" stroke="hsl(120, 25%, 45%)" strokeWidth="1.4" />
                      <path d="M11 6L15 4V12L11 10" stroke="hsl(120, 25%, 45%)" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                  >
                    {contact.info.telehealth_heading}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {contact.info.telehealth_body}
                  </p>
                </motion.div>

                {/* States served */}
                <motion.div
                  variants={fadeUp}
                  className="p-7 rounded-2xl"
                  style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'hsl(var(--primary) / 0.12)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="hsl(120, 25%, 45%)" strokeWidth="1.4" />
                      <circle cx="8" cy="6" r="1.5" stroke="hsl(120, 25%, 45%)" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <h3
                    className="text-base font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                  >
                    {contact.info.states_heading}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {contact.info.states.map((state, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: 'hsl(var(--primary) / 0.12)',
                          color: 'hsl(var(--primary))',
                        }}
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Response time */}
                <motion.div
                  variants={fadeUp}
                  className="p-7 rounded-2xl"
                  style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'hsl(var(--primary) / 0.12)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6.5" stroke="hsl(120, 25%, 45%)" strokeWidth="1.4" />
                      <path d="M8 4.5V8.5L10.5 10" stroke="hsl(120, 25%, 45%)" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--foreground))' }}
                  >
                    {contact.info.response_heading}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {contact.info.response_body}
                  </p>
                </motion.div>

                {/* Crisis notice */}
                <motion.div
                  variants={fadeUp}
                  className="p-6 rounded-2xl border-l-2"
                  style={{
                    background: 'hsl(0 30% 97%)',
                    borderColor: 'hsl(0 55% 60%)',
                  }}
                >
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: 'hsl(0 50% 38%)' }}
                  >
                    {contact.info.crisis_heading}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'hsl(0 30% 45%)' }}>
                    {contact.info.crisis_body}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
