import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { seoData } from '../../lib/seo';
import { SERVICES } from '../../lib/data';

export default function ServicesPage() {
  const seo = seoData.services;
  return (
    <>
      <NextSeo title="AI Consulting Services" description={seo.description} canonical={seo.canonical} />

      <section className="page-hero section-sm">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h1 className="display-lg">Enterprise AI Services</h1>
          <p className="text-xl text-secondary" style={{ maxWidth: 600, marginTop: 20 }}>
            A complete suite of AI capabilities — from strategy and model development to deployment and data infrastructure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((s, i) => (
              <div key={s.slug} className="service-full-card card">
                <div className="sfcard-left">
                  <div className="sfcard-num text-muted">{String(i+1).padStart(2,'0')}</div>
                  <div className="sfcard-icon" style={{ color: s.color }}>{s.icon}</div>
                  <h2 className="sfcard-title">{s.title}</h2>
                  <p className="sfcard-tagline text-secondary">{s.tagline}</p>
                  <p className="sfcard-desc text-secondary">{s.description}</p>
                  <Link href={`/services/${s.slug}`} className="btn btn-outline" style={{ marginTop: 24 }}>
                    Explore Service →
                  </Link>
                </div>
                <div className="sfcard-right">
                  <h3 className="text-xs text-muted" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Key Capabilities</h3>
                  <ul className="features-list">
                    {s.features.map((f, fi) => (
                      <li key={fi}>
                        <span className="feature-dot" style={{ background: s.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-strip card card-elevated">
            <div>
              <h3 className="display-md" style={{ marginBottom: 12 }}>Not sure where to start?</h3>
              <p className="text-secondary text-lg">Our AI adoption experts will help you identify the highest-value opportunities for your organization.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <Link href="/ai-adoption-framework" className="btn btn-outline">See Our Framework</Link>
              <Link href="/contact" className="btn btn-primary">Talk to an Expert →</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .services-full-grid { display: flex; flex-direction: column; gap: 24px; }
        .service-full-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .sfcard-num { font-family: var(--font-display); font-size: 13px; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 16px; }
        .sfcard-icon { font-size: 40px; margin-bottom: 16px; }
        .sfcard-title { font-family: var(--font-display); font-size: clamp(22px, 3vw, 30px); font-weight: 700; margin-bottom: 8px; letter-spacing: -0.02em; }
        .sfcard-tagline { font-size: 15px; font-weight: 500; margin-bottom: 16px; }
        .sfcard-desc { font-size: 15px; line-height: 1.7; }
        .features-list { display: flex; flex-direction: column; gap: 12px; }
        .features-list li { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--text-secondary); }
        .feature-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .cta-strip { display: flex; align-items: center; justify-content: space-between; gap: 40px; padding: 40px 48px; }
        @media (max-width: 768px) {
          .service-full-card { grid-template-columns: 1fr; gap: 32px; }
          .cta-strip { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
