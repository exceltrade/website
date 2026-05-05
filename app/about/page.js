"use client";
import Link from 'next/link';
import { INDUSTRIES, STATS, SITE_URL } from '../../lib/data';


const VALUES = [
  { icon: '◈', title: 'Honesty First', body: "We tell clients what they need to hear, not what they want to hear. If AI isn't the right solution for a problem, we say so." },
  { icon: '◎', title: 'Outcomes Over Activity', body: 'Every engagement is measured against defined business outcomes. We succeed when our clients succeed — not when the work is delivered.' },
  { icon: '⬡', title: 'Governance-First Design', body: 'We build AI systems with compliance, security, and explainability as first-order design requirements — not afterthoughts.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero sec-sm">
        <div className="wrap">
          <p className="eyebrow">About Xcel Trade LLC</p>
          <h1 className="d-lg">Enterprise AI, Done Right</h1>
          <p className="t-xl c-2" style={{ maxWidth: 580, marginTop: 18 }}>
            We've been helping enterprises navigate technology transformation since 2012. AI is our current focus — approached with the same discipline we bring to every engagement.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="sec">
        <div className="wrap">
          <div className="mission-grid">
            <div>
              <p className="eyebrow">Our Mission</p>
              <h2 className="d-md">Making Enterprise AI Accessible, Safe, and Valuable</h2>
              <p className="t-lg c-2" style={{ margin: '18px 0' }}>
                Too many enterprise AI initiatives fail because they start with the technology instead of the problem. We start with your business — what you're trying to achieve, what constraints you operate under, what your data environment looks like. Technology is the last decision we make, not the first.
              </p>
              <p className="t-lg c-2">
                Founded in 2012, Xcel Trade LLC has spent over a decade helping enterprises modernize their operations. Our AI practice brings that accumulated expertise to the most significant technology shift of our era.
              </p>
            </div>
            <div className="stats-box">
              {STATS.map(s => (
                <div key={s.label} className="card stat-card">
                  <strong className="d-md grad">{s.value}</strong>
                  <span className="t-sm c-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="sec-sm" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <p className="eyebrow">Leadership</p>
          <h2 className="d-md" style={{ marginBottom: 36 }}>Meet Our CEO</h2>
          <div className="card card-2 leader-card">
            <div className="l-av">AS</div>
            <div className="l-info">
              <h3 className="l-name">Annie Saeed</h3>
              <p className="c-amber t-md" style={{ marginTop: 4, fontWeight: 600 }}>Chief Executive Officer</p>
              <p className="t-lg c-2" style={{ marginTop: 14, maxWidth: 580 }}>
                Annie founded Xcel Trade LLC in 2012 with a vision to make enterprise technology transformation accessible and outcome-focused. Under her leadership, the firm has completed over 200 enterprise engagements and built a reputation for honest assessment, rigorous execution, and measurable results. Annie brings deep expertise in enterprise AI strategy, governance, and organizational change management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Industries Served</p>
          <h2 className="d-md" style={{ marginBottom: 36 }}>Experience Across Every Major Sector</h2>
          <div className="ind-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind} className="card ind-item">
                <span className="c-amber" style={{ fontSize: 9 }}>◆</span>
                <span className="t-md">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow">Our Values</p>
          <h2 className="d-md" style={{ marginBottom: 36 }}>How We Work</h2>
          <div className="g3">
            {VALUES.map(v => (
              <div key={v.title} className="card val-card">
                <span className="c-amber val-ico">{v.icon}</span>
                <h3 className="val-title">{v.title}</h3>
                <p className="t-sm c-2">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="d-md" style={{ marginBottom: 14 }}>Work With Us</h2>
          <p className="t-lg c-2" style={{ maxWidth: 440, margin: '0 auto 28px' }}>
            If you're looking for an AI consulting partner who prioritizes your outcomes, let's talk.
          </p>
          <Link href="/contact" className="btn btn-p">Schedule a Consultation →</Link>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .mission-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 72px; align-items: start; }
        .stats-box { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .stat-card { display: flex; flex-direction: column; gap: 7px; text-align: center; padding: 24px; }
        .leader-card { display: flex; align-items: flex-start; gap: 28px; padding: 36px; }
        .l-av {
          width: 68px; height: 68px; border-radius: 50%; flex-shrink: 0;
          background: var(--amber-dim); border: 2px solid rgba(245,166,35,0.28);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-d); font-size: 19px; font-weight: 800; color: var(--amber);
        }
        .l-name { font-family: var(--font-d); font-size: 22px; font-weight: 800; letter-spacing: -0.018em; }
        .ind-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; }
        .ind-item { display: flex; align-items: center; gap: 9px; padding: 14px 18px; }
        .val-card { padding: 26px; }
        .val-ico { font-size: 26px; display: block; margin-bottom: 14px; }
        .val-title { font-family: var(--font-d); font-size: 17px; font-weight: 700; margin-bottom: 9px; }
        @media (max-width: 880px) { .mission-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .ind-grid { grid-template-columns: repeat(2,1fr); }
          .leader-card { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
