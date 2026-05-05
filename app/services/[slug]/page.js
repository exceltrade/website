"use client";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, SITE_URL } from '../../../lib/data';

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const s = SERVICES.find(sv => sv.slug === params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `${SITE_URL}/services/${s.slug}` },
    openGraph: { url: `${SITE_URL}/services/${s.slug}` },
  };
}

const STEPS = [
  { title: 'Discovery & Assessment', body: 'We assess your current state, data environment, and specific business objectives to define the right approach before any solution design begins.' },
  { title: 'Solution Architecture',  body: 'Design the technical architecture, select appropriate models and tools, and plan integration with your existing systems, security, and compliance requirements.' },
  { title: 'Build & Integrate',      body: 'Build, test, and iteratively refine the solution with your team — ensuring accuracy, security, and performance benchmarks are met before deployment.' },
  { title: 'Deploy & Optimize',      body: 'Deploy to production with MLOps practices, monitoring, and a continuous optimization plan to ensure lasting performance and ROI.' },
];

export default function ServicePage({ params }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();

  const related = SERVICES.filter(s => s.slug !== service.slug).slice(0, 3);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    description: service.description,
    provider: { '@type': 'Organization', name: 'Xcel Trade LLC' },
    areaServed: 'US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="svc-hero sec-sm">
        <div className="wrap">
          <nav className="bc t-sm c-3" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span className="c-2">{service.title}</span>
          </nav>
          <div className="hero-grid">
            <div>
              <div className="svc-ico" style={{ color: service.color }}>{service.icon}</div>
              <h1 className="d-lg" style={{ marginBottom: 10 }}>{service.title}</h1>
              <p className="t-xl c-2" style={{ marginBottom: 14 }}>{service.tagline}</p>
              <p className="t-lg c-2 svc-desc">{service.description}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
                <Link href="/contact" className="btn btn-p">Get Started →</Link>
                <Link href="/ai-adoption-framework" className="btn btn-o">Our Framework</Link>
              </div>
            </div>
            <div className="card card-2 feats-box">
              <p className="feats-cap t-xs c-3">Key Capabilities</p>
              <ul className="feats-list">
                {service.features.map((f, i) => (
                  <li key={i}>
                    <span className="feat-chk" style={{ color: service.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Our Approach</p>
          <h2 className="d-md" style={{ marginBottom: 40 }}>How We Deliver {service.title}</h2>
          <div className="g4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="card step-card">
                <div className="step-num" style={{ color: service.color }}>0{i + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="t-sm c-2">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow">Related Services</p>
          <h2 className="d-md" style={{ marginBottom: 32 }}>Often Paired With</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {related.map(r => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="card rel-card">
                <span className="rel-ico" style={{ color: r.color }}>{r.icon}</span>
                <div style={{ flex: 1 }}>
                  <strong className="t-md">{r.title}</strong>
                  <p className="t-sm c-2" style={{ marginTop: 2 }}>{r.tagline}</p>
                </div>
                <span style={{ color: r.color }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="card svc-cta" style={{ '--sc': service.color }}>
            <h2 className="d-md" style={{ textAlign: 'center', marginBottom: 14 }}>
              Ready to Get Started with {service.title}?
            </h2>
            <p className="t-lg c-2" style={{ textAlign: 'center', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Schedule a consultation and learn how Xcel Trade LLC can deliver {service.title.toLowerCase()} tailored to your enterprise.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-p">Schedule a Consultation →</Link>
              <Link href="/case-studies" className="btn btn-o">See Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .svc-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .bc { display: flex; align-items: center; gap: 8px; margin-bottom: 28px; }
        .bc a:hover { color: var(--tx-1); }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: start; }
        .svc-ico { font-size: 46px; margin-bottom: 18px; }
        .svc-desc { max-width: 520px; }
        .feats-box { padding: 28px; }
        .feats-cap { letter-spacing: 0.12em; text-transform: uppercase; display: block; margin-bottom: 18px; }
        .feats-list { display: flex; flex-direction: column; gap: 13px; }
        .feats-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: var(--tx-2); }
        .feat-chk { font-weight: 700; flex-shrink: 0; }
        .step-card { padding: 24px; }
        .step-num { font-family: var(--font-d); font-size: 28px; font-weight: 800; margin-bottom: 10px; }
        .step-title { font-family: var(--font-d); font-size: 15px; font-weight: 700; margin-bottom: 8px; }
        .rel-card { display: flex; align-items: center; gap: 14px; padding: 18px 22px; text-decoration: none; }
        .rel-ico { font-size: 22px; flex-shrink: 0; }
        .svc-cta {
          padding: clamp(40px,5vw,64px) clamp(28px,4vw,56px);
          border-color: color-mix(in srgb, var(--sc) 25%, transparent);
        }
        @media (max-width: 880px) { .hero-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .g4 { grid-template-columns: repeat(2,1fr); } }
      `}</style>
    </>
  );
}
