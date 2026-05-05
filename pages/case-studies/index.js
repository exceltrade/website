import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { seoData } from '../lib/seo';
import { CASE_STUDIES } from '../lib/data';

export default function CaseStudiesPage() {
  const seo = seoData.caseStudies;
  return (
    <>
      <NextSeo title="Case Studies" description={seo.description} canonical={seo.canonical} />

      <section className="page-hero section-sm">
        <div className="container">
          <span className="eyebrow">Proof Points</span>
          <h1 className="display-lg">Enterprise AI Results</h1>
          <p className="text-xl text-secondary" style={{ maxWidth: 580, marginTop: 20 }}>
            Real outcomes from real engagements — across financial services, healthcare, legal, and logistics.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cases-grid">
            {CASE_STUDIES.map(cs => (
              <div key={cs.slug} className="case-card card">
                <div className="case-top">
                  <span className="tag" style={{ background: `${cs.tagColor}15`, color: cs.tagColor, border: `1px solid ${cs.tagColor}25` }}>{cs.tag}</span>
                  <span className="text-xs text-muted">{cs.service}</span>
                </div>
                <div className="case-body">
                  <div className="case-section">
                    <h4 className="case-label">The Challenge</h4>
                    <p className="text-secondary text-sm">{cs.challenge}</p>
                  </div>
                  <div className="case-section">
                    <h4 className="case-label">Our Solution</h4>
                    <p className="text-secondary text-sm">{cs.solution}</p>
                  </div>
                  <div className="case-results">
                    <h4 className="case-label">Results</h4>
                    {cs.results.map((r, i) => (
                      <div key={i} className="result-row">
                        <span className="result-dot" style={{ background: cs.tagColor }} />
                        <span className="text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="case-footer">
                  <Link href={`/services/${cs.serviceSlug}`} className="text-sm" style={{ color: cs.tagColor }}>
                    {cs.service} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ marginBottom: 16 }}>Want results like these?</h2>
          <p className="text-lg text-secondary" style={{ maxWidth: 480, margin: '0 auto 32px' }}>
            Tell us your challenge and we'll show you how we'd approach it.
          </p>
          <Link href="/contact" className="btn btn-primary">Schedule a Consultation →</Link>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .cases-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .case-card { display: flex; flex-direction: column; gap: 0; }
        .case-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
        .case-body { display: flex; flex-direction: column; gap: 20px; flex: 1; }
        .case-section { }
        .case-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; }
        .case-results { margin-top: 4px; }
        .result-row { display: flex; align-items: center; gap: 10px; padding: 6px 0; }
        .result-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .case-footer { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border); }
        @media (max-width: 768px) { .cases-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
