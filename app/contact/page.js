import { SITE_URL } from '../../lib/data';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Xcel Trade LLC | Get an AI Consulting Consultation',
  description: 'Ready to transform your enterprise with AI? Contact Xcel Trade LLC to schedule a consultation with our AI experts and start your AI adoption journey today.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

const STEPS = [
  { n: '01', t: 'We respond within one business day to schedule an initial call.' },
  { n: '02', t: 'A 30-minute call to understand your challenge and context.' },
  { n: '03', t: 'A customised approach outline based on your specific situation.' },
  { n: '04', t: 'A clear proposal with scope, timeline, and investment — no surprises.' },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero sec-sm">
        <div className="wrap">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="d-lg">Let's Talk AI</h1>
          <p className="t-xl c-2" style={{ maxWidth: 560, marginTop: 18 }}>
            Schedule a consultation with an Xcel Trade AI expert. No sales pitch — just an honest conversation about your challenges and how we might help.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="contact-grid">
            <ContactForm />

            <div className="sidebar">
              <div className="card card-2 info-card">
                <h3 className="ic-title">What to Expect</h3>
                <div className="steps">
                  {STEPS.map(s => (
                    <div key={s.n} className="step-row">
                      <span className="step-badge">{s.n}</span>
                      <p className="t-sm c-2">{s.t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card card-2 info-card" style={{ marginTop: 14 }}>
                <h3 className="ic-title">Contact</h3>
                <a href="mailto:info@xceltradellc.com" className="c-link">
                  <span>✉</span> info@xceltradellc.com
                </a>
                <a href="https://www.linkedin.com/company/xcel-trade-llc" target="_blank" rel="noopener noreferrer" className="c-link">
                  <span style={{ fontWeight: 700, fontSize: 12 }}>in</span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .contact-grid { display: grid; grid-template-columns: 1fr 360px; gap: 52px; align-items: start; }
        .info-card { padding: 26px; }
        .ic-title { font-family: var(--font-d); font-size: 15px; font-weight: 700; margin-bottom: 18px; }
        .steps { display: flex; flex-direction: column; gap: 14px; }
        .step-row { display: flex; align-items: flex-start; gap: 13px; }
        .step-badge {
          width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
          background: var(--amber-dim); border: 1px solid rgba(245,166,35,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; color: var(--amber);
        }
        .c-link {
          display: flex; align-items: center; gap: 9px;
          font-size: 13.5px; color: var(--tx-2); padding: 10px 0;
          border-bottom: 1px solid var(--border); transition: color 0.18s;
        }
        .c-link:last-child { border: none; }
        .c-link:hover { color: var(--amber); }
        .c-link span { color: var(--amber); }
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr; }
          .sidebar { order: -1; }
        }
      `}</style>
    </>
  );
}
