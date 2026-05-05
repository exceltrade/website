"use client";
import Link from 'next/link';
import { SERVICES } from '../lib/data';

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <Link href="/" className="f-logo">
              <span style={{ color: 'var(--amber)' }}>✦</span> Xcel Trade LLC
            </Link>
            <p className="f-desc c-2 t-md">
              Enterprise AI consulting that turns strategy into measurable outcomes. Founded 2012.
            </p>
            <a
              href="https://www.linkedin.com/company/xcel-trade-llc"
              target="_blank" rel="noopener noreferrer"
              className="f-li" aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          <div className="f-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="f-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/ai-adoption-framework">AI Framework</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="f-cta">
            <h4>Ready to start?</h4>
            <p className="c-2 t-md">Talk to an AI expert about your specific challenges.</p>
            <Link href="/contact" className="btn btn-p" style={{ marginTop: 18 }}>
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="f-bottom">
          <p className="t-sm c-3">© {yr} Xcel Trade LLC. All rights reserved.</p>
          <p className="t-sm c-3">Founded 2012 · CEO: Annie Saeed</p>
        </div>
      </div>

      <style jsx>{`
        .footer { border-top: 1px solid var(--border); padding: 72px 0 36px; }
        .f-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 52px;
          margin-bottom: 52px;
        }
        .f-logo {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-d); font-weight: 800; font-size: 17px;
          letter-spacing: -0.02em; margin-bottom: 14px;
        }
        .f-desc { max-width: 260px; margin-bottom: 20px; }
        .f-li {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--tx-2);
          border: 1px solid var(--border);
          padding: 7px 14px; border-radius: var(--r-xs);
          transition: color 0.18s, border-color 0.18s;
        }
        .f-li:hover { color: var(--amber); border-color: rgba(245,166,35,0.25); }
        .f-col h4, .f-cta h4 {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--tx-3); margin-bottom: 18px;
        }
        .f-col ul { display: flex; flex-direction: column; gap: 9px; }
        .f-col a { font-size: 13.5px; color: var(--tx-2); transition: color 0.18s; }
        .f-col a:hover { color: var(--tx-1); }
        .f-cta p { max-width: 200px; }
        .f-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 28px; border-top: 1px solid var(--border);
        }
        @media (max-width: 960px) {
          .f-top { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 540px) {
          .f-top { grid-template-columns: 1fr; gap: 28px; }
          .f-bottom { flex-direction: column; gap: 6px; }
        }
      `}</style>
    </footer>
  );
}
