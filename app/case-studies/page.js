"use client";
import Link from 'next/link';
import { CASE_STUDIES, SITE_URL } from '../../lib/data';


export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero sec-sm">
        <div className="wrap">
          <p className="eyebrow">Proof Points</p>
          <h1 className="d-lg">Enterprise AI Results</h1>
          <p className="t-xl c-2" style={{ maxWidth: 560, marginTop: 18 }}>
            Real outcomes from real engagements — across financial services, healthcare, legal, and logistics.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="g2">
            {CASE_STUDIES.map(cs => (
              <div key={cs.slug} className="card cs-card">
                <div className="cs-top">
                  <span className="tag" style={{ background: `${cs.tagColor}14`, color: cs.tagColor, border: `1px solid ${cs.tagColor}26` }}>{cs.tag}</span>
                  <span className="t-xs c-3">{cs.service}</span>
                </div>
                <div className="cs-body">
                  <div>
                    <p className="sec-lbl t-xs c-3">The Challenge</p>
                    <p className="t-md c-2">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="sec-lbl t-xs c-3">Our Solution</p>
                    <p className="t-md c-2">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="sec-lbl t-xs c-3">Results</p>
                    <div className="results">
                      {cs.results.map((r, i) => (
                        <div key={i} className="res-row">
                          <span className="res-dot" style={{ background: cs.tagColor }} />
                          <span className="t-sm">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="cs-foot">
                  <Link href={`/services/${cs.serviceSlug}`} className="t-sm" style={{ color: cs.tagColor }}>
                    {cs.service} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="d-md" style={{ marginBottom: 14 }}>Want results like these?</h2>
          <p className="t-lg c-2" style={{ maxWidth: 440, margin: '0 auto 28px' }}>Tell us your challenge and we'll show you how we'd approach it.</p>
          <Link href="/contact" className="btn btn-p">Schedule a Consultation →</Link>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .cs-card { display: flex; flex-direction: column; }
        .cs-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .cs-body { display: flex; flex-direction: column; gap: 18px; flex: 1; }
        .sec-lbl { letter-spacing: 0.1em; text-transform: uppercase; display: block; margin-bottom: 7px; }
        .results { display: flex; flex-direction: column; gap: 8px; }
        .res-row { display: flex; align-items: center; gap: 9px; }
        .res-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
        .cs-foot { margin-top: 22px; padding-top: 16px; border-top: 1px solid var(--border); }
      `}</style>
    </>
  );
}
