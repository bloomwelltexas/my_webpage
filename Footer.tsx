import { Link } from 'react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const statesServed = [
    'Texas',
  ];

  return (
    <footer style={{ background: 'hsl(30 15% 22%)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'hsl(40 30% 90%)' }}
              >
                Bloomwell Clinic
              </p>
              <p
                className="text-xs tracking-widest uppercase mt-0.5"
                style={{ color: 'hsl(40 20% 65%)', letterSpacing: '0.18em' }}
              >
                PCCL
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(40 15% 65%)' }}>
              Board-certified psychiatric care for families and individuals — delivered with warmth, expertise, and a commitment to using the least intervention necessary.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'hsl(40 20% 65%)', letterSpacing: '0.15em' }}
            >
              Navigate
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer links">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/patient-resources', label: 'Patient Resources' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'hsl(40 15% 65%)' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* States served */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'hsl(40 20% 65%)', letterSpacing: '0.15em' }}
            >
              States Served
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-3">
              {statesServed.map((state) => (
                <span
                  key={state}
                  className="text-sm"
                  style={{ color: 'hsl(40 15% 65%)' }}
                >
                  {state}
                </span>
              ))}
            </div>
          </div>

          {/* Crisis Resources */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'hsl(0 60% 70%)', letterSpacing: '0.15em' }}
            >
              Crisis &amp; Emergency
            </h3>
            <div className="flex flex-col gap-3 text-sm mb-8" style={{ color: 'hsl(40 15% 65%)' }}>
              <a
                href="tel:911"
                className="flex items-center gap-2 transition-opacity hover:opacity-100"
                style={{ color: 'hsl(0 60% 72%)' }}
              >
                <span className="font-semibold">911</span>
                <span style={{ color: 'hsl(40 15% 55%)' }}>— Emergency Services</span>
              </a>
              <a
                href="tel:988"
                className="flex items-center gap-2 transition-opacity hover:opacity-100"
                style={{ color: 'hsl(0 60% 72%)' }}
              >
                <span className="font-semibold">988</span>
                <span style={{ color: 'hsl(40 15% 55%)' }}>— Suicide &amp; Crisis Lifeline</span>
              </a>
              <p className="text-xs leading-relaxed" style={{ color: 'hsl(40 10% 50%)' }}>
                For psychiatric emergencies, go to your nearest emergency room or call 911.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'hsl(40 20% 65%)', letterSpacing: '0.15em' }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm" style={{ color: 'hsl(40 15% 65%)' }}>
              <p>Telehealth — no in-person visits required</p>
              <a
                href="mailto:hello@bloomwellclinic.com"
                className="hover:opacity-100 transition-opacity"
                style={{ color: 'hsl(120 20% 72%)' }}
              >
                hello@bloomwellclinic.com
              </a>
              <Link
                to="/contact"
                className="inline-block mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-center transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
              >
                Request Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Divider + disclaimer */}
        <div
          className="mt-12 pt-8 border-t"
          style={{ borderColor: 'hsl(30 15% 32%)' }}
        >
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'hsl(40 10% 50%)' }}>
            <strong style={{ color: 'hsl(40 15% 60%)' }}>Telehealth Disclaimer:</strong> Bloomwell Clinic PCCL provides psychiatric services via secure telehealth platforms. Services are available only in states where our providers are licensed. Telehealth is not appropriate for psychiatric emergencies. If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs" style={{ color: 'hsl(40 10% 45%)' }}>
              © {currentYear} Bloomwell Clinic PCCL. All rights reserved.
            </p>
            <div className="flex gap-5">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Use' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-xs transition-colors hover:opacity-80"
                  style={{ color: 'hsl(40 10% 50%)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
