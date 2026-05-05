import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, SERVICES, SITE_URL } from '../../../lib/data';

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/insights/${post.slug}` },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/insights/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

/* ---- Sample content per post ---- */
const CONTENT = {
  'how-enterprises-can-adopt-ai-safely-and-effectively': {
    intro: "Enterprise AI adoption is no longer optional — but doing it wrong is worse than not doing it at all. Organizations that rush AI deployments without proper readiness assessments, governance structures, and change management strategies routinely find themselves with expensive pilots that never scale, or worse, AI systems that create compliance, security, or reputational problems.",
    sections: [
      { id: 's1', h2: 'Why Most Enterprise AI Initiatives Fail', body: "Research consistently shows that most enterprise AI failures are not technical — they're organizational. Common failure points include no clear business problem to solve, insufficient data readiness, missing governance frameworks, neglected change management, and siloed pilots that never connect with enterprise infrastructure. Understanding these failure modes is the first step to avoiding them." },
      { id: 's2', h2: 'Step 1 — Conduct an AI Readiness Assessment', body: "An AI readiness assessment evaluates your organization's preparedness across four dimensions: data readiness (do you have the data required?), technology readiness (does your infrastructure support AI workloads?), talent readiness (do you have the expertise?), and organizational readiness (is leadership aligned and culture prepared for change?). Each requires honest evaluation before any investment begins." },
      { id: 's3', h2: 'Step 2 — Define a Strategic AI Roadmap', body: "Prioritize use cases by business impact and feasibility. Define a phased plan: pilot in months 1–3, scale in months 3–9, optimize on an ongoing basis. Critically, build your governance framework before any model is deployed in production — covering data privacy, model explainability, regulatory compliance, and human-in-the-loop review processes." },
      { id: 's4', h2: 'Step 3 — Start with a Contained, High-Value Pilot', body: "The fastest path to enterprise-wide AI adoption is a successful, well-scoped pilot. Characteristics of a good pilot: defined success metrics, limited scope, an executive sponsor, a short timeline of 6–12 weeks, and documented learnings. Common high-value first pilots include document processing automation and customer-facing RAG assistants." },
      { id: 's5', h2: 'Step 4 — Build for Scale from Day One', body: "Even during your pilot, make architectural decisions that support future scale: cloud-native infrastructure, APIs that allow AI capabilities to be consumed across systems, and MLOps practices for versioning and automated retraining. The difference between organizations that successfully scale AI often comes down to infrastructure discipline during the pilot phase." },
      { id: 's6', h2: 'Step 5 — Manage Change at the Human Level', body: "Technology is the easy part. People are where AI projects succeed or fail. Effective change management includes clear leadership communication, role impact analysis, upskilling programs, and continuous feedback loops. Organizations that treat AI as a technology deployment — rather than an organizational transformation — consistently underperform." },
    ],
    takeaways: [
      "AI failure is rarely technical — it's organizational. Address governance, data, and change management first.",
      "An AI readiness assessment across data, technology, talent, and culture is the essential starting point.",
      "Start with a contained, high-value pilot with defined metrics — don't try to do everything at once.",
      "Build for scale from day one with cloud-native infrastructure and MLOps practices.",
      "Treat AI adoption as organizational transformation, not just technology deployment.",
    ],
  },
};

const defaultContent = {
  intro: "Enterprise AI is transforming how organizations operate — but success requires the right strategy, the right architecture, and the right partner. This article examines the key principles that separate successful enterprise AI deployments from costly failures.",
  sections: [
    { id: 's1', h2: 'Understanding the Landscape', body: "The enterprise AI landscape has evolved rapidly. Organizations now have access to powerful foundation models, open-source alternatives, and a growing ecosystem of tooling. But choosing the right approach for your specific context requires expertise and careful analysis of your data environment, regulatory constraints, and operational requirements." },
    { id: 's2', h2: 'Key Principles for Success', body: "Successful enterprise AI deployments share common characteristics: clear problem definition before technology selection, strong data foundations, governance-first design, and organizational commitment from leadership down. Each of these deserves serious attention before any model training or deployment begins." },
    { id: 's3', h2: 'Implementation Considerations', body: "The technical implementation must be matched to your organization's infrastructure, security requirements, and operational constraints. What works for a startup may not be appropriate for a regulated enterprise. The gap between proof-of-concept and production deployment is where most projects falter — and where the right partner matters most." },
  ],
  takeaways: [
    "Define the business problem before selecting the technology.",
    "Invest in data quality before investing in models.",
    "Governance and compliance must be built in from the start.",
    "Pilot programs should have defined success metrics and timelines.",
    "Scale proven approaches; don't scale unproven ones.",
  ],
};

export default function BlogPost({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  const content = CONTENT[post.slug] || defaultContent;
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);
  const relSvcs = SERVICES.filter(s => post.relatedServices?.includes(s.slug));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Xcel Trade LLC', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Xcel Trade LLC',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insights/${post.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article>
        {/* Header */}
        <header className="post-hdr sec-sm">
          <div className="wrap">
            <nav className="bc t-sm c-3" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/insights">Insights</Link>
              <span>/</span>
              <span className="c-2">{post.category}</span>
            </nav>
            <div className="meta-row">
              <span className="tag tag-a">{post.category}</span>
              <time className="t-xs c-3">{post.date}</time>
              <span className="t-xs c-3">·</span>
              <span className="t-xs c-3">{post.readTime}</span>
            </div>
            <h1 className="d-lg post-h1">{post.title}</h1>
            <p className="t-xl c-2 post-sub">{post.subtitle}</p>
            <div className="author">
              <div className="av">✦</div>
              <div>
                <strong className="t-sm">Xcel Trade LLC</strong>
                <p className="t-xs c-3">Enterprise AI Consulting</p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="wrap post-layout">
          {/* TOC */}
          <aside className="toc card card-2">
            <p className="toc-lbl t-xs c-3">In This Article</p>
            <nav>
              <ol className="toc-ol">
                {content.sections.map(s => (
                  <li key={s.id}><a href={`#${s.id}`}>{s.h2}</a></li>
                ))}
                <li><a href="#takeaways">Key Takeaways</a></li>
              </ol>
            </nav>
          </aside>

          {/* Main */}
          <div className="prose">
            <p>{content.intro}</p>
            {content.sections.map(s => (
              <div key={s.id} id={s.id}>
                <h2>{s.h2}</h2>
                <p>{s.body}</p>
              </div>
            ))}

            <div className="tkbox" id="takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                {content.takeaways.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>

            {/* CTA */}
            <div className="card post-cta">
              <h3>Ready to apply this at your organization?</h3>
              <p className="c-2">Talk to an Xcel Trade LLC expert about your specific situation.</p>
              <div className="cta-row">
                {relSvcs.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="btn btn-o" style={{ fontSize: '13px' }}>
                    {s.icon} {s.title}
                  </Link>
                ))}
                <Link href="/contact" className="btn btn-p">Talk to an Expert →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="sec-sm">
          <div className="wrap">
            <h3 className="d-md" style={{ marginBottom: 28 }}>Related Articles</h3>
            <div className="g3">
              {related.map(p => (
                <Link key={p.slug} href={`/insights/${p.slug}`} className="card rel-post">
                  <span className="tag tag-a" style={{ marginBottom: 10, fontSize: '10px' }}>{p.category}</span>
                  <h4 className="rp-title">{p.title}</h4>
                  <span className="t-xs c-3">{p.date} · {p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <style jsx>{`
        .post-hdr { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .bc { display: flex; align-items: center; gap: 7px; margin-bottom: 20px; }
        .bc a:hover { color: var(--tx-1); }
        .meta-row { display: flex; align-items: center; gap: 9px; margin-bottom: 18px; }
        .post-h1 { margin-bottom: 14px; }
        .post-sub { max-width: 660px; margin-bottom: 26px; }
        .author { display: flex; align-items: center; gap: 11px; }
        .av {
          width: 38px; height: 38px; border-radius: 50%;
          background: var(--amber-dim); border: 1px solid rgba(245,166,35,0.25);
          display: flex; align-items: center; justify-content: center;
          color: var(--amber); font-size: 14px;
        }
        .post-layout {
          display: grid; grid-template-columns: 230px 1fr;
          gap: 72px; padding-top: 56px; padding-bottom: 56px; align-items: start;
        }
        .toc { position: sticky; top: calc(var(--nav-h) + 20px); padding: 22px; }
        .toc-lbl { letter-spacing: 0.12em; text-transform: uppercase; display: block; margin-bottom: 14px; }
        .toc-ol { display: flex; flex-direction: column; gap: 3px; }
        .toc-ol li { counter-increment: none; }
        .toc-ol a { font-size: 12.5px; color: var(--tx-2); padding: 5px 0; display: block; line-height: 1.45; }
        .toc-ol a:hover { color: var(--amber); }
        .tkbox {
          background: var(--amber-dim); border: 1px solid rgba(245,166,35,0.18);
          border-radius: var(--r-md); padding: 26px 28px; margin: 36px 0;
        }
        .tkbox h3 { font-family: var(--font-d); font-size: 17px; font-weight: 700; color: var(--amber); margin-bottom: 14px; }
        .tkbox ul { display: flex; flex-direction: column; gap: 9px; }
        .tkbox li { font-size: 13.5px; color: var(--tx-2); position: relative; padding-left: 18px; }
        .tkbox li::before { content: '✓'; position: absolute; left: 0; color: var(--amber); font-weight: 700; }
        .post-cta { padding: 28px; margin-top: 44px; }
        .post-cta h3 { font-family: var(--font-d); font-size: 19px; font-weight: 700; margin-bottom: 7px; }
        .post-cta p { font-size: 14.5px; margin-bottom: 18px; }
        .cta-row { display: flex; gap: 9px; flex-wrap: wrap; }
        .rel-post { display: flex; flex-direction: column; text-decoration: none; }
        .rp-title { font-family: var(--font-d); font-size: 15.5px; font-weight: 700; line-height: 1.3; margin-bottom: 10px; }
        @media (max-width: 880px) {
          .post-layout { grid-template-columns: 1fr; }
          .toc { display: none; }
        }
      `}</style>
    </>
  );
}
