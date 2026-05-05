"use client";
import Link from 'next/link';
import { SERVICES, STATS, CASE_STUDIES, BLOG_POSTS, INDUSTRIES, FRAMEWORK_PHASES } from '../lib/data';

export const metadata = {
  title: 'Xcel Trade LLC | Enterprise AI Consulting & Adoption Services',
  description:
    'Xcel Trade LLC delivers enterprise AI consulting, LLM development, RAG assistants, and agentic workflows. Founded 2012. Transform your business with expert AI solutions.',
  alternates: { canonical: 'https://www.xceltradellc.com' },
  openGraph: { url: 'https://www.xceltradellc.com', images: [{ url: '/images/og/homepage.jpg', width: 1200, height: 630 }] },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Enterprise AI Since 2012</p>
              <h1 className="d-xl hero-h1">
                AI That Works<br />
                <span className="grad">In the Real World.</span>
              </h1>
              <p className="t-xl c-2 hero-sub">
                Xcel Trade LLC helps enterprises adopt AI strategically — from readiness assessment and LLM development to agentic workflows and cloud deployment.
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-p">Schedule a Consultation →</Link>
                <Link href="/ai-adoption-framework" className="btn btn-o">See Our Framework</Link>
              </div>
              <div className="stats-row">
                {STATS.map(s => (
                  <div key={s.label} className="stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-viz" aria-hidden="true">
              <div className="orb" />
              <div className="orbit-ring">
                {SERVICES.slice(0, 6).map((s, i) => (
                  <div key={s.slug} className="orbit-node" style={{ '--i': i, '--c': s.color }}>
                    <span className="on-icon">{s.icon}</span>
                    <small>{s.shortTitle}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">What We Do</p>
          <div className="svc-hdr">
            <h2 className="d-md">Full-Spectrum Enterprise AI Services</h2>
            <p className="t-lg c-2" style={{ maxWidth: 460 }}>
              Every capability you need — from strategy through deployment.
            </p>
          </div>
          <div className="svc-grid">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card svc-card">
                <div className="svc-icon" style={{ color: s.color }}>{s.icon}</div>
                <h3 className="svc-name">{s.title}</h3>
                <p className="t-sm c-2 svc-tag">{s.tagline}</p>
                <p className="t-sm c-2 svc-desc">{s.description.slice(0, 115)}…</p>
                <span className="svc-cta" style={{ color: s.color }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK ── */}
      <section className="fw-band">
        <div className="wrap">
          <div className="fw-inner">
            <div className="fw-left">
              <p className="eyebrow">Our Methodology</p>
              <h2 className="d-md">The 5-Phase AI Adoption Framework</h2>
              <p className="t-lg c-2" style={{ margin: '16px 0 28px' }}>
                A structured, repeatable methodology for enterprise AI transformation — from initial assessment through continuous optimization.
              </p>
              <div className="phase-pills">
                {FRAMEWORK_PHASES.map(p => (
                  <span key={p.number} className="phase-pill">
                    <span className="phase-n">{p.number}</span>{p.title}
                  </span>
                ))}
              </div>
              <Link href="/ai-adoption-framework" className="btn btn-p" style={{ marginTop: 32 }}>
                Explore the Framework →
              </Link>
            </div>
            <div className="card card-2 fw-stats">
              {STATS.map((s, i) => (
                <div key={s.label} className={`fw-stat${i < STATS.length - 1 ? ' fw-stat--border' : ''}`}>
                  <strong className="d-md grad">{s.value}</strong>
                  <span className="t-sm c-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Proof Points</p>
          <div className="row-hdr">
            <h2 className="d-md">Real Results from Real Engagements</h2>
            <Link href="/case-studies" className="btn btn-o">All Case Studies →</Link>
          </div>
          <div className="g2">
            {CASE_STUDIES.slice(0, 2).map(cs => (
              <div key={cs.slug} className="card cs-card">
                <div className="cs-top">
                  <span className="tag" style={{ background: `${cs.tagColor}14`, color: cs.tagColor, border: `1px solid ${cs.tagColor}28` }}>{cs.tag}</span>
                  <span className="t-xs c-3">{cs.service}</span>
                </div>
                <p className="c-2 t-md" style={{ margin: '14px 0 18px' }}>{cs.solution}</p>
                <div className="cs-results">
                  {cs.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="cs-row">
                      <span className="cs-dot" style={{ background: cs.tagColor }} />
                      <span className="t-sm">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="cs-footer">
                  <Link href={`/services/${cs.serviceSlug}`} className="t-sm" style={{ color: cs.tagColor }}>
                    {cs.service} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="sec-sm">
        <div className="wrap">
          <p className="t-xs c-3" style={{ textAlign: 'center', marginBottom: 20, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Industries Served</p>
          <div className="ind-row">
            {INDUSTRIES.map(ind => (
              <span key={ind} className="tag tag-n ind-tag">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Insights</p>
          <div className="row-hdr">
            <h2 className="d-md">Latest from the Team</h2>
            <Link href="/insights" className="btn btn-o">All Articles →</Link>
          </div>
          <div className="g3">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="card post-card">
                <span className="tag tag-a" style={{ marginBottom: 14 }}>{post.category}</span>
                <h3 className="post-title">{post.title}</h3>
                <p className="t-sm c-2 post-exc">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="t-xs c-3">{post.date}</span>
                  <span className="t-xs c-3">·</span>
                  <span className="t-xs c-3">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="sec">
        <div className="wrap">
          <div className="cta-box">
            <div className="cta-glow" aria-hidden="true" />
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Get Started</p>
            <h2 className="d-lg" style={{ textAlign: 'center' }}>Ready to Transform Your Enterprise with AI?</h2>
            <p className="t-xl c-2" style={{ maxWidth: 520, margin: '18px auto 36px', textAlign: 'center' }}>
              No generic advice — honest assessment and a clear path forward.
            </p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-p">Schedule a Free Consultation →</Link>
              <Link href="/case-studies" className="btn btn-o">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero */
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .hero-glow {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 800px; height: 500px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; padding: 80px 0; }
        .hero-h1 { margin: 0 0 22px; }
        .hero-sub { max-width: 500px; margin-bottom: 32px; }
        .hero-btns { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 44px; }
        .stats-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .stat { display: flex; flex-direction: column; gap: 3px; }
        .stat strong { font-family: var(--font-d); font-size: 26px; font-weight: 800; color: var(--amber); }
        .stat span { font-size: 12px; color: var(--tx-3); }

        /* Hero viz */
        .hero-viz { position: relative; height: 400px; display: flex; align-items: center; justify-content: center; }
        .orb {
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(245,166,35,0.18) 0%, rgba(45,212,191,0.08) 50%, transparent 70%);
          animation: pulse 4s ease infinite;
          display: flex; align-items: center; justify-content: center;
          font-size: 44px; color: var(--amber);
        }
        .orb::after { content: '✦'; }
        .orbit-ring { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .orbit-node {
          position: absolute;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          transform: rotate(calc(var(--i) * 60deg)) translateY(-162px) rotate(calc(var(--i) * -60deg));
          color: var(--c);
          animation: floatY calc(2.8s + var(--i) * 0.4s) ease infinite;
        }
        .on-icon { font-size: 22px; }
        .orbit-node small { font-size: 9px; font-weight: 700; letter-spacing: 0.05em; opacity: 0.75; }

        /* Services */
        .svc-hdr { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 40px; }
        .svc-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        .svc-card { display: flex; flex-direction: column; gap: 7px; text-decoration: none; }
        .svc-icon { font-size: 26px; margin-bottom: 2px; }
        .svc-name { font-family: var(--font-d); font-size: 15px; font-weight: 700; }
        .svc-desc { flex: 1; }
        .svc-cta { font-size: 12.5px; font-weight: 600; margin-top: 6px; }

        /* Framework */
        .fw-band { padding: var(--sec-y) 0; background: var(--bg-1); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .fw-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .phase-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .phase-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 7px 14px; background: var(--bg-2);
          border: 1px solid var(--border); border-radius: 100px;
          font-size: 12.5px; font-weight: 600;
        }
        .phase-n { color: var(--amber); font-family: var(--font-d); font-size: 10px; font-weight: 700; }
        .fw-stats { padding: 36px; display: flex; flex-direction: column; gap: 0; }
        .fw-stat { display: flex; flex-direction: column; gap: 6px; padding: 24px 0; }
        .fw-stat--border { border-bottom: 1px solid var(--border); }

        /* Case studies */
        .row-hdr { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 40px; }
        .cs-card { display: flex; flex-direction: column; }
        .cs-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .cs-results { display: flex; flex-direction: column; gap: 9px; flex: 1; }
        .cs-row { display: flex; align-items: center; gap: 9px; }
        .cs-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
        .cs-footer { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }

        /* Industries */
        .ind-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .ind-tag { font-size: 12px !important; }

        /* Posts */
        .post-card { display: flex; flex-direction: column; text-decoration: none; }
        .post-title { font-family: var(--font-d); font-size: 16.5px; font-weight: 700; line-height: 1.3; margin-bottom: 8px; }
        .post-exc { flex: 1; margin-bottom: 14px; }
        .post-meta { display: flex; gap: 6px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border); }

        /* Final CTA */
        .cta-box {
          position: relative; overflow: hidden;
          background: var(--bg-1); border: 1px solid var(--border);
          border-radius: var(--r-xl);
          padding: clamp(48px,7vw,96px) clamp(32px,5vw,80px);
          text-align: center;
        }
        .cta-glow {
          position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 500px;
          background: radial-gradient(circle, var(--amber-glow) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative; }

        @media (max-width: 1080px) { .svc-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 880px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-viz { display: none; }
          .svc-hdr { flex-direction: column; align-items: flex-start; }
          .svc-grid { grid-template-columns: repeat(2,1fr); }
          .fw-inner { grid-template-columns: 1fr; }
          .row-hdr { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 540px) {
          .svc-grid { grid-template-columns: 1fr; }
          .stats-row { gap: 20px; }
        }
      `}</style>
    </>
  );
}
