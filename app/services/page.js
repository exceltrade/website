import Link from 'next/link';
import { SERVICES } from '../../lib/data';

export const metadata = {
  title: 'AI Consulting Services',
  description: "Explore Xcel Trade LLC's full suite of enterprise AI services: AI adoption consulting, LLM development, RAG assistants, agentic workflows, document automation, cloud architecture, and data engineering.",
  alternates: { canonical: 'https://www.xceltradellc.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero sec-sm">
        <div className="wrap">
          <p className="eyebrow">What We Do</p>
          <h1 className="d-lg">Enterprise AI Services</h1>
          <p className="t-xl c-2" style={{ maxWidth: 580, marginTop: 18 }}>
            A complete suite of AI capabilities — from strategy and model development to deployment and data infrastructure.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <div key={s.slug} className="card svc-row">
                <div className="sr-left">
                  <span className="sr-num c-3 t-xs">{String(i + 1).padStart(2, '0')}</span>
                  <div className="sr-icon" style={{ color: s.color }}>{s.icon}</div>
                  <h2 className="sr-title">{s.title}</h2>
                  <p className="t-md c-2 sr-tag">{s.tagline}</p>
                  <p className="t-md c-2 sr-desc">{s.description}</p>
                  <Link href={`/services/${s.slug}`} className="btn btn-o" style={{ marginTop: 22 }}>
                    Explore Service →
                  </Link>
                </div>
                <div className="sr-right">
                  <p className="sr-cap t-xs c-3">Key Capabilities</p>
                  <ul className="sr-feats">
                    {s.features.map((f, fi) => (
                      <li key={fi}>
                        <span className="feat-dot" style={{ background: s.color }} />
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

      <section className="sec-sm">
        <div className="wrap">
          <div className="card card-2 cta-strip">
            <div>
              <h3 className="d-sm" style={{ marginBottom: 10 }}>Not sure where to start?</h3>
              <p className="t-lg c-2">Our experts will help you identify the highest-value AI opportunities for your organization.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <Link href="/ai-adoption-framework" className="btn btn-o">See Our Framework</Link>
              <Link href="/contact" className="btn btn-p">Talk to an Expert →</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .svc-list { display: flex; flex-direction: column; gap: 20px; }
        .svc-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: start; }
        .sr-num { font-family: var(--font-d); font-weight: 700; letter-spacing: 0.1em; display: block; margin-bottom: 14px; }
        .sr-icon { font-size: 38px; margin-bottom: 14px; }
        .sr-title { font-family: var(--font-d); font-size: clamp(20px,2.8vw,28px); font-weight: 700; letter-spacing: -0.018em; margin-bottom: 7px; }
        .sr-tag { font-weight: 500; margin-bottom: 13px; }
        .sr-cap { letter-spacing: 0.12em; text-transform: uppercase; display: block; margin-bottom: 14px; }
        .sr-feats { display: flex; flex-direction: column; gap: 11px; }
        .sr-feats li { display: flex; align-items: center; gap: 11px; font-size: 13.5px; color: var(--tx-2); }
        .feat-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
        .cta-strip { display: flex; align-items: center; justify-content: space-between; gap: 36px; padding: 36px 44px; }
        @media (max-width: 768px) {
          .svc-row { grid-template-columns: 1fr; gap: 28px; }
          .cta-strip { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
