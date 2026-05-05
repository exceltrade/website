import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { seoData } from '../lib/seo';
import { FRAMEWORK_PHASES, FAQS, SERVICES } from '../lib/data';

export default function FrameworkPage() {
  const seo = seoData.framework;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <NextSeo title="AI Adoption Framework" description={seo.description} canonical={seo.canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero section-sm">
        <div className="container">
          <span className="eyebrow">Our Methodology</span>
          <h1 className="display-lg">The Xcel Trade AI Adoption Framework</h1>
          <p className="text-xl text-secondary" style={{ maxWidth: 620, marginTop: 20 }}>
            A structured, 5-phase methodology for enterprise AI transformation — systematic, governance-first, and built for measurable outcomes.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="section">
        <div className="container">
          <div className="phases-stack">
            {FRAMEWORK_PHASES.map((phase, i) => (
              <div key={phase.number} className="phase-row card">
                <div className="phase-left">
                  <div className="phase-number">{phase.number}</div>
                  <div className="phase-connector" aria-hidden="true" />
                </div>
                <div className="phase-content">
                  <span className="tag tag-accent" style={{ marginBottom: 12 }}>{phase.subtitle}</span>
                  <h2 className="phase-title">{phase.title}</h2>
                  <p className="text-secondary phase-desc">{phase.description}</p>
                  <div className="deliverables">
                    {phase.deliverables.map((d, di) => (
                      <span key={di} className="deliverable-tag tag tag-neutral">{d}</span>
                    ))}
                  </div>
                </div>
                <div className="phase-accent" aria-hidden="true">
                  <span className="phase-accent-num">{phase.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services tied to framework */}
      <section className="section-sm" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">Services Within the Framework</span>
          <h2 className="display-md" style={{ marginBottom: 40 }}>Every Service Has Its Place</h2>
          <div className="framework-services">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="fw-service card">
                <span style={{ color: s.color, fontSize: 24 }}>{s.icon}</span>
                <strong>{s.title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">FAQs</span>
          <h2 className="display-md" style={{ marginBottom: 48 }}>Common Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{faq.q}</summary>
                <p className="faq-a text-secondary">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ marginBottom: 16 }}>Start with an AI Readiness Assessment</h2>
          <p className="text-lg text-secondary" style={{ maxWidth: 500, margin: '0 auto 32px' }}>
            Phase 1 of our framework — and the most important first step for any enterprise AI program.
          </p>
          <Link href="/contact" className="btn btn-primary">Schedule Your Assessment →</Link>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .phases-stack { display: flex; flex-direction: column; gap: 16px; }
        .phase-row {
          display: grid;
          grid-template-columns: 80px 1fr 120px;
          gap: 40px;
          align-items: start;
          position: relative;
          overflow: hidden;
        }
        .phase-left { display: flex; flex-direction: column; align-items: center; }
        .phase-number {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: var(--accent-dim);
          border: 1px solid rgba(245,166,35,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-size: 18px; font-weight: 800;
          color: var(--accent);
        }
        .phase-content { padding: 8px 0; }
        .phase-title { font-family: var(--font-display); font-size: clamp(24px, 3vw, 36px); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 12px; }
        .phase-desc { max-width: 600px; margin-bottom: 20px; }
        .deliverables { display: flex; flex-wrap: wrap; gap: 8px; }
        .deliverable-tag { font-size: 12px !important; }
        .phase-accent { display: flex; align-items: center; justify-content: flex-end; padding: 16px 0; }
        .phase-accent-num { font-family: var(--font-display); font-size: 72px; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; }
        .framework-services { display: flex; flex-wrap: wrap; gap: 12px; }
        .fw-service { display: flex; align-items: center; gap: 10px; padding: 14px 20px; text-decoration: none; font-size: 14px; font-weight: 600; }
        .faq-list { max-width: 780px; display: flex; flex-direction: column; gap: 0; }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-q {
          list-style: none;
          padding: 20px 0;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-primary);
        }
        .faq-q::after { content: '+'; color: var(--accent); font-size: 20px; font-weight: 400; }
        details[open] .faq-q::after { content: '−'; }
        .faq-a { padding: 0 0 20px; font-size: 15px; line-height: 1.7; }
        @media (max-width: 768px) {
          .phase-row { grid-template-columns: 60px 1fr; }
          .phase-accent { display: none; }
        }
      `}</style>
    </>
  );
}
