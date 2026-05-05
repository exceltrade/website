import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { servicesSeo, SITE_URL } from '../../lib/seo';
import { SERVICES } from '../../lib/data';

export async function getStaticPaths() {
  return {
    paths: SERVICES.map(s => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  const related = SERVICES.filter(s => s.slug !== params.slug).slice(0, 3);
  if (!service) return { notFound: true };
  return { props: { service, related } };
}

export default function ServicePage({ service, related }) {
  const seo = servicesSeo[service.slug] || {};
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    description: seo.description,
    provider: { '@type': 'Organization', name: 'Xcel Trade LLC' },
    serviceType: service.title,
    areaServed: 'US',
  };

  return (
    <>
      <NextSeo
        title={seo.title || service.title}
        description={seo.description || service.description}
        canonical={seo.canonical}
        openGraph={{ url: seo.canonical, images: [{ url: seo.ogImage, width: 1200, height: 630 }] }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="svc-hero section-sm">
        <div className="container">
          <nav className="breadcrumb text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/services">Services</Link> <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>{service.title}</span>
          </nav>
          <div className="svc-hero-inner">
            <div>
              <div className="svc-icon" style={{ color: service.color }}>{service.icon}</div>
              <h1 className="display-lg svc-heading">{service.title}</h1>
              <p className="text-xl text-secondary svc-tagline">{service.tagline}</p>
              <p className="text-lg text-secondary svc-desc">{service.description}</p>
              <div className="svc-actions">
                <Link href="/contact" className="btn btn-primary">Get Started →</Link>
                <Link href="/ai-adoption-framework" className="btn btn-outline">Our Framework</Link>
              </div>
            </div>
            <div className="svc-features-box card card-elevated">
              <h3 className="features-label">Key Capabilities</h3>
              <ul className="features-list">
                {service.features.map((f, i) => (
                  <li key={i}>
                    <span className="feature-check" style={{ color: service.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Our Approach</span>
          <h2 className="display-md" style={{ marginTop: 0, marginBottom: 48 }}>How We Deliver {service.title}</h2>
          <div className="steps-grid">
            {['Discovery & Assessment', 'Solution Architecture', 'Build & Integrate', 'Deploy & Optimize'].map((step, i) => (
              <div key={step} className="step-card card">
                <div className="step-num" style={{ color: service.color }}>0{i+1}</div>
                <h3 className="step-title">{step}</h3>
                <p className="text-secondary text-sm">
                  {i === 0 && 'We assess your current state, data environment, and specific business objectives to define the right approach.'}
                  {i === 1 && 'Design the technical architecture, select appropriate models and tools, and plan the integration with your existing systems.'}
                  {i === 2 && 'Build, test, and iteratively refine the solution with your team — ensuring accuracy, security, and performance benchmarks are met.'}
                  {i === 3 && 'Deploy to production with MLOps practices, monitoring, and a continuous optimization plan to ensure lasting performance.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-sm">
        <div className="container">
          <span className="eyebrow">Related Services</span>
          <h2 className="display-md" style={{ marginBottom: 40 }}>Often Paired With</h2>
          <div className="related-grid">
            {related.map(r => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="related-card card">
                <span className="related-icon" style={{ color: r.color }}>{r.icon}</span>
                <div>
                  <strong>{r.title}</strong>
                  <p className="text-sm text-secondary" style={{ marginTop: 4 }}>{r.tagline}</p>
                </div>
                <span style={{ color: r.color, marginLeft: 'auto' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="svc-cta card" style={{ '--accent-color': service.color }}>
            <h2 className="display-md" style={{ textAlign: 'center', marginBottom: 16 }}>
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg text-secondary" style={{ textAlign: 'center', marginBottom: 36 }}>
              Schedule a consultation and learn how Xcel Trade LLC can deliver {service.title.toLowerCase()} tailored to your enterprise.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Schedule a Consultation →</Link>
              <Link href="/case-studies" className="btn btn-outline">See Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .svc-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 32px; }
        .breadcrumb a:hover { color: var(--text-primary); }
        .svc-hero-inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: start; }
        .svc-icon { font-size: 48px; margin-bottom: 20px; }
        .svc-heading { margin-bottom: 12px; }
        .svc-tagline { font-weight: 500; margin-bottom: 16px; }
        .svc-desc { max-width: 540px; margin-bottom: 32px; }
        .svc-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .svc-features-box { padding: 32px; }
        .features-label { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 20px; }
        .features-list { display: flex; flex-direction: column; gap: 14px; }
        .features-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--text-secondary); }
        .feature-check { font-weight: 700; flex-shrink: 0; }
        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .step-card { padding: 28px; }
        .step-num { font-family: var(--font-display); font-size: 28px; font-weight: 800; margin-bottom: 12px; }
        .step-title { font-family: var(--font-display); font-size: 16px; font-weight: 700; margin-bottom: 10px; }
        .related-grid { display: flex; flex-direction: column; gap: 12px; }
        .related-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; text-decoration: none; }
        .related-icon { font-size: 24px; flex-shrink: 0; }
        .svc-cta {
          padding: clamp(40px, 6vw, 72px) clamp(32px, 5vw, 64px);
          border-color: color-mix(in srgb, var(--accent-color) 30%, transparent);
        }
        @media (max-width: 900px) {
          .svc-hero-inner { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
