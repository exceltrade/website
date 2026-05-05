import Link from 'next/link';
import { SERVICES } from '../lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="logo-mark">✦</span>
              <span>Xcel Trade LLC</span>
            </Link>
            <p className="footer-desc">Enterprise AI consulting that turns strategy into measurable outcomes. Founded 2012.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/xcel-trade-llc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/ai-adoption-framework">AI Framework</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-cta-col">
            <h4>Ready to start?</h4>
            <p>Talk to an AI expert about your specific challenges and opportunities.</p>
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Xcel Trade LLC. All rights reserved.</p>
          <div className="footer-legal">
            <span>Founded 2012 · CEO: Annie Saeed</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 80px 0 40px;
          background: var(--bg);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .logo-mark { color: var(--accent); }
        .footer-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 280px;
          margin-bottom: 24px;
        }
        .footer-social { display: flex; gap: 12px; }
        .footer-social a {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          transition: color 0.2s, border-color 0.2s;
        }
        .footer-social a:hover { color: var(--accent); border-color: rgba(245,166,35,0.3); }
        .footer-col h4, .footer-cta-col h4 {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .footer-col ul { display: flex; flex-direction: column; gap: 10px; }
        .footer-col a {
          font-size: 14px;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .footer-col a:hover { color: var(--text-primary); }
        .footer-cta-col p {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          border-top: 1px solid var(--border);
          font-size: 13px;
          color: var(--text-muted);
        }
        @media (max-width: 960px) {
          .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 560px) {
          .footer-top { grid-template-columns: 1fr; gap: 36px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
