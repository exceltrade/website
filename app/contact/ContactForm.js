'use client';

import { useState } from 'react';
import { SERVICES } from '../../lib/data';

export default function ContactForm() {
  const [form, setForm]           = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // ── Replace this with your real handler (Formspree, Resend, etc.) ──
    await new Promise(r => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="success card">
        <div className="s-icon">✓</div>
        <h3>Message Received</h3>
        <p className="c-2 t-md">Thank you for reaching out. A member of our team will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="cform">
      <h2 className="form-h">Send Us a Message</h2>

      <div className="form-row">
        <div className="fg">
          <label htmlFor="name">Full Name *</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={onChange} />
        </div>
        <div className="fg">
          <label htmlFor="email">Work Email *</label>
          <input id="email" name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={onChange} />
        </div>
      </div>

      <div className="fg">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Acme Corporation" value={form.company} onChange={onChange} />
      </div>

      <div className="fg">
        <label htmlFor="service">Service of Interest</label>
        <select id="service" name="service" value={form.service} onChange={onChange}>
          <option value="">Select a service…</option>
          {SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div className="fg">
        <label htmlFor="message">Tell Us About Your Challenge *</label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange}
          placeholder="Describe your challenge or what you're looking to accomplish with AI…" />
      </div>

      <button type="submit" className="btn btn-p submit-btn" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message →'}
      </button>

      <style jsx>{`
        .cform { display: flex; flex-direction: column; gap: 18px; }
        .form-h { font-family: var(--font-d); font-size: 21px; font-weight: 700; margin-bottom: 6px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .fg { display: flex; flex-direction: column; gap: 7px; }
        label { font-size: 12.5px; font-weight: 600; color: var(--tx-2); }
        input, textarea, select {
          background: var(--bg-2); border: 1px solid var(--border);
          border-radius: var(--r-xs); padding: 11px 14px;
          font-size: 14.5px; color: var(--tx-1);
          outline: none; transition: border-color 0.18s; width: 100%;
          -webkit-appearance: none;
        }
        input:focus, textarea:focus, select:focus { border-color: var(--amber); }
        input::placeholder, textarea::placeholder { color: var(--tx-4); }
        textarea { resize: vertical; }
        .submit-btn { align-self: flex-start; }
        .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
        .success { padding: 52px; text-align: center; }
        .s-icon {
          width: 56px; height: 56px; border-radius: 50%;
          background: rgba(45,212,191,0.1); color: var(--teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 700; margin: 0 auto 18px;
          border: 1px solid rgba(45,212,191,0.2);
        }
        .success h3 { font-family: var(--font-d); font-size: 21px; font-weight: 700; margin-bottom: 8px; }
        @media (max-width: 520px) { .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </form>
  );
}
