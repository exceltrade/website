import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { seoData } from '../lib/seo';
import { SERVICES } from '../lib/data';

export default function ContactPage() {
  const seo = seoData.contact;
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with your form handler (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <NextSeo title="Contact Xcel Trade LLC" description={seo.description} canonical={seo.canonical} />

      <section className="page-hero section-sm">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="display-lg">Let's Talk AI</h1>
          <p className="text-xl text-secondary" style={{ maxWidth: 580, marginTop: 20 }}>
            Schedule a consultation with an Xcel Trade AI expert. No sales pitch — just an honest conversation about your challenges and how we might help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="form-col">
              {submitted ? (
                <div className="success-state card">
                  <div className="success-icon">✓</div>
                  <h3>Message Received</h3>
                  <p className="text-secondary">Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h2 className="form-heading">Send Us a Message</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corporation" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell Us About Your Challenge *</label>
                    <textarea id="message" name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Describe your challenge or what you're looking to accomplish with AI..." />
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="info-col">
              <div className="info-card card">
                <h3 className="info-heading">What to Expect</h3>
                <div className="info-steps">
                  {[
                    { step: '01', text: 'We respond within one business day to schedule an initial call.' },
                    { step: '02', text: 'A 30-minute call to understand your challenge and context.' },
                    { step: '03', text: 'A customized approach outline based on your specific situation.' },
                    { step: '04', text: 'A clear proposal with scope, timeline, and investment — no surprises.' },
                  ].map(s => (
                    <div key={s.step} className="info-step">
                      <span className="step-badge">{s.step}</span>
                      <p className="text-sm text-secondary">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-card card" style={{ marginTop: 16 }}>
                <h3 className="info-heading">Contact</h3>
                <a href="mailto:info@xceltradellc.com" className="contact-link">
                  <span>✉</span> info@xceltradellc.com
                </a>
                <a href="https://www.linkedin.com/company/xcel-trade-llc" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span>in</span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .contact-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; align-items: start; }
        .form-heading { font-family: var(--font-display); font-size: 22px; font-weight: 700; margin-bottom: 28px; }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        label { font-size: 13px; font-weight: 600; color: var(--text-secondary); }
        input, textarea, select {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
          -webkit-appearance: none;
        }
        input:focus, textarea:focus, select:focus { border-color: var(--accent); }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
        textarea { resize: vertical; }
        .submit-btn { align-self: flex-start; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
        .success-state { padding: 48px; text-align: center; }
        .success-icon {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(52,211,153,0.1); color: #34d399;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; font-weight: 700; margin: 0 auto 20px;
          border: 1px solid rgba(52,211,153,0.2);
        }
        .success-state h3 { font-family: var(--font-display); font-size: 22px; font-weight: 700; margin-bottom: 10px; }
        .info-card { padding: 28px; }
        .info-heading { font-family: var(--font-display); font-size: 16px; font-weight: 700; margin-bottom: 20px; }
        .info-steps { display: flex; flex-direction: column; gap: 16px; }
        .info-step { display: flex; align-items: flex-start; gap: 14px; }
        .step-badge {
          width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
          background: var(--accent-dim); border: 1px solid rgba(245,166,35,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: var(--accent);
        }
        .contact-link {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: var(--text-secondary);
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s;
        }
        .contact-link:last-child { border-bottom: none; }
        .contact-link:hover { color: var(--accent); }
        .contact-link span { color: var(--accent); font-weight: 700; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .info-col { order: -1; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
