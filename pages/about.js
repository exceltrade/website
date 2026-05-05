import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { seoData } from '../lib/seo';
import { INDUSTRIES, STATS, SERVICES } from '../lib/data';

export default function AboutPage() {
  const seo = seoData.about;
  return (
    <>
      <NextSeo title="About Xcel Trade LLC" description={seo.description} canonical={seo.canonical} />

      <section className="page-hero section-sm">
        <div className="container">
          <span className="eyebrow">About Xcel Trade LLC</span>
          <h1 className="display-lg">Enterprise AI, Done Right</h1>
          <p className="text-xl text-secondary" style={{ maxWidth: 600, marginTop: 20 }}>
            We've been helping enterprises navigate technology transformation since 2012. AI is our current focus — and we approach it with the same discipline we bring to every engagement.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <div>
              <span className="eyebrow">Our Mission</span>
              <h2 className="display-md">Making Enterprise AI Accessible, Safe, and Valuable</h2>
              <p className="text-lg text-secondary" style={{ margin: '20px 0 32px' }}>
                Too many enterprise AI initiatives fail because they start with the technology instead of the problem. We start with your business — what you're trying to achieve, what constraints you operate under, what your data environment looks like. Technology is the last decision we make, not the first.
              </p>
              <p className="text-lg text-secondary">
                Founded in 2012, Xcel Trade LLC has spent over a decade helping enterprises modernize their operations. Our AI practice brings that accumulated expertise to the most significant technology shift of our era.
              </p>
            </div>
            <div className="about-stats">
              {STATS.map(s => (
                <div key={s.label} className="about-stat card">
                  <strong className="display-md grad-text">{s.value}</strong>
                  <span className="text-secondary">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-sm" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h2 className="display-md" style={{ marginBottom: 40 }}>Meet Our CEO</h2>
          <div className="leader-card card">
            <div className="leader-avatar">AS</div>
            <div className="leader-info">
              <h3 className="leader-name">Annie Saeed</h3>
              <p className="leader-title text-accent">Chief Executive Officer</p>
              <p className="text-secondary" style={{ marginTop: 16, maxWidth: 600 }}>
                Annie founded Xcel Trade LLC in 2012 with a vision to make enterprise technology transformation accessible and outcome-focused. Under her leadership, the firm has completed over 200 enterprise engagements and built a reputation for honest assessment, rigorous execution, and measurable results. Annie brings deep expertise in enterprise AI strategy, governance, and organizational change management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Industries Served</span>
          <h2 className="display-md" style={{ marginBottom: 40 }}>Experience Across Every Major Sector</h2>
          <div className="industries-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind} className="industry-item card">
                <span className="text-accent industry-dot">◆</span>
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-sm">
        <div className="container">
          <span className="eyebrow">Our Values</span>
          <h2 className="display-md" style={{ marginBottom: 40 }}>How We Work</h2>
          <div className="grid-3">
            {[
              { icon: '◈', title: 'Honesty First', body: 'We tell clients what they need to hear, not what they want to hear. If AI isn\'t the right solution for a problem, we say so.' },
              { icon: '◎', title: 'Outcomes Over Activity', body: 'Every engagement is measured against defined business outcomes. We succeed when our clients succeed — not when the work is delivered.' },
              { icon: '⬡', title: 'Governance-First Design', body: 'We build AI systems with compliance, security, and explainability as first-order design requirements — not afterthoughts.' },
            ].map(v => (
              <div key={v.title} className="value-card card">
                <span className="value-icon text-accent" style={{ fontSize: 28, marginBottom: 16, display: 'block' }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
                <p className="text-secondary text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ marginBottom: 16 }}>Work With Us</h2>
          <p className="text-lg text-secondary" style={{ maxWidth: 480, margin: '0 auto 32px' }}>
            If you're looking for an AI consulting partner who prioritizes your outcomes over their own billings, let's talk.
          </p>
          <Link href="/contact" className="btn btn-primary">Schedule a Consultation →</Link>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .mission-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; }
        .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .about-stat { display: flex; flex-direction: column; gap: 8px; padding: 28px; text-align: center; }
        .leader-card { display: flex; align-items: flex-start; gap: 32px; padding: 40px; }
        .leader-avatar {
          width: 72px; height: 72px; border-radius: 50%; flex-shrink: 0;
          background: var(--accent-dim); border: 2px solid rgba(245,166,35,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--accent);
        }
        .leader-name { font-family: var(--font-display); font-size: 24px; font-weight: 800; letter-spacing: -0.02em; }
        .leader-title { font-size: 15px; font-weight: 600; margin-top: 4px; }
        .industries-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .industry-item { display: flex; align-items: center; gap: 10px; padding: 16px 20px; font-size: 14px; font-weight: 500; }
        .industry-dot { font-size: 10px; }
        @media (max-width: 900px) {
          .mission-grid { grid-template-columns: 1fr; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .leader-card { flex-direction: column; }
        }
        @media (max-width: 480px) {
          .industries-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
