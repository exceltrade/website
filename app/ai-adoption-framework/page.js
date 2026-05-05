"use client";
import Link from 'next/link';
import { FRAMEWORK_PHASES, FAQS, SERVICES, SITE_URL } from '../../lib/data';


export default function FrameworkPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero sec-sm">
        <div className="wrap">
          <p className="eyebrow">Our Methodology</p>
          <h1 className="d-lg">The Xcel Trade AI Adoption Framework</h1>
          <p className="t-xl c-2" style={{ maxWidth: 600, marginTop: 18 }}>
            A structured, 5-phase methodology for enterprise AI transformation — systematic, governance-first, and built for measurable outcomes.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="sec">
        <div className="wrap">
          <div className="phases">
            {FRAMEWORK_PHASES.map((phase) => (
              <div key={phase.number} className="card phase-card">
                <div className="pc-left">
                  <div className="pc-num">{phase.number}</div>
                </div>
                <div className="pc-body">
                  <span className="tag tag-a" style={{ marginBottom: 12 }}>{phase.subtitle}</span>
                  <h2 className="pc-title">{phase.title}</h2>
                  <p className="c-2 pc-desc">{phase.description}</p>
                  <div className="pc-dels">
                    {phase.deliverables.map(d => (
                      <span key={d} className="tag tag-n del-tag">{d}</span>
                    ))}
                  </div>
                </div>
                <div className="pc-bg-num" aria-hidden="true">{phase.number}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in framework */}
      <section className="sec-sm" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <p className="eyebrow">Services Within the Framework</p>
          <h2 className="d-md" style={{ marginBottom: 36 }}>Every Service Has Its Place</h2>
          <div className="svc-chips">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card svc-chip">
                <span style={{ color: s.color, fontSize: 22 }}>{s.icon}</span>
                <strong className="t-md">{s.title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">FAQs</p>
          <h2 className="d-md" style={{ marginBottom: 44 }}>Common Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{faq.q}</summary>
                <p className="faq-a c-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="d-md" style={{ marginBottom: 14 }}>Start with an AI Readiness Assessment</h2>
          <p className="t-lg c-2" style={{ maxWidth: 480, margin: '0 auto 28px' }}>
            Phase 1 of our framework — and the most important first step for any enterprise AI program.
          </p>
          <Link href="/contact" className="btn btn-p">Schedule Your Assessment →</Link>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .phases { display: flex; flex-direction: column; gap: 16px; }
        .phase-card {
          display: grid; grid-template-columns: 72px 1fr 100px;
          gap: 36px; align-items: start; position: relative; overflow: hidden;
        }
        .pc-left { display: flex; justify-content: center; padding-top: 4px; }
        .pc-num {
          width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
          background: var(--amber-dim); border: 1px solid rgba(245,166,35,0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-d); font-size: 17px; font-weight: 800; color: var(--amber);
        }
        .pc-title { font-family: var(--font-d); font-size: clamp(22px,3vw,34px); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; }
        .pc-desc { max-width: 580px; margin-bottom: 18px; font-size: 15px; }
        .pc-dels { display: flex; flex-wrap: wrap; gap: 7px; }
        .del-tag { font-size: 11px !important; }
        .pc-bg-num {
          font-family: var(--font-d); font-size: 80px; font-weight: 800;
          color: rgba(255,255,255,0.025); line-height: 1;
          display: flex; align-items: center;
        }
        .svc-chips { display: flex; flex-wrap: wrap; gap: 10px; }
        .svc-chip { display: flex; align-items: center; gap: 9px; padding: 12px 18px; text-decoration: none; }
        .faq-list { max-width: 760px; }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-q {
          list-style: none; padding: 18px 0;
          font-size: 16px; font-weight: 600; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          color: var(--tx-1);
        }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-q::after { content: '+'; color: var(--amber); font-size: 20px; font-weight: 300; flex-shrink: 0; }
        details[open] .faq-q::after { content: '−'; }
        .faq-a { padding: 0 0 18px; font-size: 14.5px; line-height: 1.75; }
        @media (max-width: 720px) {
          .phase-card { grid-template-columns: 52px 1fr; }
          .pc-bg-num { display: none; }
        }
      `}</style>
    </>
  );
}
