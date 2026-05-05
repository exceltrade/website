import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { seoData, organizationSchema } from '../lib/seo';
import { SERVICES, STATS, CASE_STUDIES, BLOG_POSTS, INDUSTRIES } from '../lib/data';

export default function HomePage() {
  const seo = seoData.home;

  return (
    <>
      <NextSeo
        title="Enterprise AI Consulting & Adoption Services"
        description={seo.description}
        canonical={seo.canonical}
        openGraph={{ url: seo.canonical, images: [{ url: seo.ogImage, width: 1200, height: 630 }] }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero noise-bg">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <span className="eyebrow">Enterprise AI Since 2012</span>
              <h1 className="display-xl hero-heading">
                AI That Works<br />
                <span className="grad-text">In the Real World.</span>
              </h1>
              <p className="text-xl hero-sub">
                Xcel Trade LLC helps enterprises adopt AI strategically — from readiness assessment and LLM development to agentic workflows and cloud deployment.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">Schedule a Consultation →</Link>
                <Link href="/ai-adoption-framework" className="btn btn-outline">See Our Framework</Link>
              </div>
              <div className="hero-stats">
                {STATS.map(s => (
                  <div key={s.label} className="stat-item">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orb" />
              <div className="service-orbit">
                {SERVICES.slice(0, 6).map((s, i) => (
                  <div key={s.slug} className="orbit-item" style={{ '--i': i, '--color': s.color }}>
                    <span>{s.icon}</span>
                    <small>{s.shortTitle}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <div className="services-header">
            <h2 className="display-md">Full-Spectrum Enterprise AI Services</h2>
            <p className="text-lg text-secondary" style={{ maxWidth: 500 }}>
              From strategy through deployment — every capability you need to realize AI's potential.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="service-card card">
                <div className="service-icon" style={{ color: s.color }}>{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-tagline text-secondary text-sm">{s.tagline}</p>
                <p className="service-desc text-sm text-secondary">{s.description.slice(0, 120)}…</p>
                <span className="service-cta" style={{ color: s.color }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK CTA ── */}
      <section className="framework-band">
        <div className="container">
          <div className="framework-inner">
            <div>
              <span className="eyebrow">Our Methodology</span>
              <h2 className="display-md" style={{ marginTop: 0 }}>The 5-Phase AI Adoption Framework</h2>
              <p className="text-lg text-secondary">
                A structured, repeatable methodology for enterprise AI transformation — from initial assessment through continuous optimization.
              </p>
              <div className="phase-pills">
                {['Assess', 'Strategize', 'Pilot', 'Scale', 'Optimize'].map((p, i) => (
                  <span key={p} className="phase-pill">
                    <span className="phase-num">0{i+1}</span> {p}
                  </span>
                ))}
              </div>
              <Link href="/ai-adoption-framework" className="btn btn-primary" style={{ marginTop: 32 }}>Explore the Framework →</Link>
            </div>
            <div className="framework-card card card-elevated">
              <div className="framework-stat">
                <strong className="display-md grad-text">94%</strong>
                <span className="text-secondary">Client retention rate</span>
              </div>
              <hr className="divider" style={{ margin: '24px 0' }} />
              <div className="framework-stat">
                <strong className="display-md grad-text">200+</strong>
                <span className="text-secondary">Enterprise engagements completed</span>
              </div>
              <hr className="divider" style={{ margin: '24px 0' }} />
              <div className="framework-stat">
                <strong className="display-md grad-text">$180M+</strong>
                <span className="text-secondary">In client value delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Proof Points</span>
          <div className="section-header-row">
            <h2 className="display-md">Real Results from Real Engagements</h2>
            <Link href="/case-studies" className="btn btn-outline">All Case Studies →</Link>
          </div>
          <div className="grid-2">
            {CASE_STUDIES.slice(0, 2).map(cs => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="case-card card">
                <div className="case-header">
                  <span className="tag" style={{ background: `${cs.tagColor}18`, color: cs.tagColor, border: `1px solid ${cs.tagColor}30` }}>{cs.tag}</span>
                  <span className="text-sm text-muted">{cs.service}</span>
                </div>
                <p className="text-secondary" style={{ margin: '16px 0 20px' }}>{cs.solution}</p>
                <div className="case-results">
                  {cs.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="result-item">
                      <span className="result-dot" style={{ background: cs.tagColor }} />
                      <span className="text-sm">{r}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section-sm">
        <div className="container">
          <p className="text-center text-sm text-muted" style={{ marginBottom: 24 }}>INDUSTRIES SERVED</p>
          <div className="industries-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind} className="industry-tag tag tag-neutral">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Insights</span>
          <div className="section-header-row">
            <h2 className="display-md">Latest from the Team</h2>
            <Link href="/insights" className="btn btn-outline">All Articles →</Link>
          </div>
          <div className="grid-3">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="post-card card">
                <span className="tag tag-accent" style={{ marginBottom: 16 }}>{post.category}</span>
                <h3 className="post-title">{post.title}</h3>
                <p className="text-sm text-secondary" style={{ margin: '10px 0 20px' }}>{post.excerpt}</p>
                <div className="post-meta text-xs text-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-box">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Get Started</span>
            <h2 className="display-lg text-center">Ready to Transform Your Enterprise with AI?</h2>
            <p className="text-xl text-secondary text-center" style={{ maxWidth: 560, margin: '20px auto 40px' }}>
              Talk to an Xcel Trade expert about your specific challenges. No generic advice — just honest assessment and a path forward.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Schedule a Free Consultation →</Link>
              <Link href="/case-studies" className="btn btn-outline">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero */
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .hero-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(245,166,35,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,166,35,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          padding: 80px 0;
        }
        .hero-heading { margin: 0 0 24px; }
        .hero-sub { color: var(--text-secondary); max-width: 480px; margin-bottom: 36px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .hero-stats { display: flex; gap: 40px; }
        .stat-item { display: flex; flex-direction: column; gap: 4px; }
        .stat-item strong { font-family: var(--font-display); font-size: 28px; font-weight: 800; color: var(--accent); }
        .stat-item span { font-size: 13px; color: var(--text-muted); }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-orb {
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,166,35,0.2) 0%, rgba(45,212,191,0.1) 50%, transparent 70%);
          animation: pulse-glow 4s ease infinite;
          position: relative;
        }
        .hero-orb::before {
          content: '✦';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-size: 48px;
          color: var(--accent);
          opacity: 0.8;
        }
        .service-orbit {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .orbit-item {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transform: rotate(calc(var(--i) * 60deg)) translateY(-170px) rotate(calc(var(--i) * -60deg));
          color: var(--color);
          animation: float calc(3s + var(--i) * 0.5s) ease infinite;
        }
        .orbit-item span { font-size: 24px; }
        .orbit-item small { font-size: 10px; font-weight: 700; letter-spacing: 0.05em; opacity: 0.8; }

        /* Services Grid */
        .services-header { display: flex; justify-content: space-between; align-items: flex-end; gap: 32px; margin-bottom: 48px; }
        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .service-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; }
        .service-icon { font-size: 28px; margin-bottom: 4px; }
        .service-title { font-family: var(--font-display); font-size: 16px; font-weight: 700; }
        .service-tagline { font-weight: 500; }
        .service-desc { flex: 1; }
        .service-cta { font-size: 13px; font-weight: 600; margin-top: 8px; }

        /* Framework band */
        .framework-band { padding: var(--section-py) 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .framework-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .phase-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .phase-pill { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 100px; font-size: 13px; font-weight: 600; }
        .phase-num { color: var(--accent); font-family: var(--font-display); font-size: 11px; }
        .framework-card { text-align: center; padding: 40px; }
        .framework-stat { display: flex; flex-direction: column; gap: 8px; }

        /* Case cards */
        .case-card { text-decoration: none; }
        .case-header { display: flex; align-items: center; justify-content: space-between; }
        .case-results { display: flex; flex-direction: column; gap: 10px; }
        .result-item { display: flex; align-items: center; gap: 10px; }
        .result-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        /* Industries */
        .industries-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .industry-tag { font-size: 13px !important; }

        /* Post cards */
        .post-card { display: flex; flex-direction: column; text-decoration: none; }
        .post-title { font-family: var(--font-display); font-size: 17px; font-weight: 700; line-height: 1.3; }
        .post-meta { display: flex; gap: 8px; margin-top: auto; }

        /* Section header row */
        .section-header-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 48px; }

        /* Final CTA */
        .cta-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: clamp(48px, 8vw, 96px) clamp(32px, 6vw, 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 1100px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
          .services-header { flex-direction: column; align-items: flex-start; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .framework-inner { grid-template-columns: 1fr; }
          .section-header-row { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .hero-stats { gap: 24px; flex-wrap: wrap; }
        }
      `}</style>
    </>
  );
}
