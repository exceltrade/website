import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { SITE_URL } from '../../lib/seo';
import { BLOG_POSTS, SERVICES } from '../../lib/data';

export async function getStaticPaths() {
  return {
    paths: BLOG_POSTS.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  const related = BLOG_POSTS.filter(p => p.slug !== params.slug).slice(0, 3);
  if (!post) return { notFound: true };
  return { props: { post, related } };
}

// Sample content per post
const POST_CONTENT = {
  'how-enterprises-can-adopt-ai-safely-and-effectively': {
    intro: 'Enterprise AI adoption is no longer optional — but doing it wrong is worse than not doing it at all. Organizations that rush AI deployments without proper readiness assessments, governance structures, and change management strategies routinely find themselves with expensive pilots that never scale, or worse, AI systems that create compliance, security, or reputational problems.',
    sections: [
      { h2: 'Why Most Enterprise AI Initiatives Fail', body: 'Research consistently shows that most enterprise AI failures are not technical — they\'re organizational. Common failure points include no clear business problem to solve, insufficient data readiness, missing governance frameworks, neglected change management, and siloed pilots that never connect with enterprise infrastructure. Understanding these failure modes is the first step to avoiding them.' },
      { h2: 'Step 1 — Conduct an AI Readiness Assessment', body: 'An AI readiness assessment evaluates your organization\'s preparedness across four dimensions: data readiness (do you have the data required?), technology readiness (does your infrastructure support AI workloads?), talent readiness (do you have the expertise?), and organizational readiness (is leadership aligned and culture prepared?). Each dimension requires honest evaluation before investment begins.' },
      { h2: 'Step 2 — Define a Strategic AI Roadmap', body: 'Prioritize use cases by business impact and feasibility using a 2×2 matrix. Define a phased plan: pilot in months 1–3, scale in months 3–9, then optimize on an ongoing basis. Critically, build a governance framework covering data privacy, model explainability, regulatory compliance, and human-in-the-loop review processes before any model is deployed in production.' },
      { h2: 'Step 3 — Start with a Contained, High-Value Pilot', body: 'The fastest path to enterprise-wide AI adoption is a successful, well-scoped pilot. Characteristics of a good pilot: defined success metrics (specific KPIs measured before and after), limited scope (one department, one workflow), an executive sponsor, a short timeline (6–12 weeks), and documented learnings.' },
      { h2: 'Step 4 — Build for Scale from Day One', body: 'Even during your pilot, make architectural decisions that support future scale: cloud-native infrastructure, APIs that allow AI capabilities to be consumed across systems, MLOps practices for versioning and automated retraining, and complete documentation. The difference between organizations that successfully scale AI and those that don\'t often comes down to infrastructure discipline during the pilot phase.' },
      { h2: 'Step 5 — Manage Change at the Human Level', body: 'Technology is the easy part. People are where AI projects succeed or fail. Effective change management includes clear leadership communication, role impact analysis, training programs, and feedback loops. Organizations that treat AI as a technology deployment — rather than an organizational transformation — consistently underperform.' },
    ],
    takeaways: [
      'AI failure is rarely technical — it\'s organizational. Address governance, data, and change management first.',
      'An AI readiness assessment across data, technology, talent, and culture is the essential starting point.',
      'Start with a contained, high-value pilot with defined metrics — don\'t try to do everything at once.',
      'Build for scale from day one with cloud-native infrastructure and MLOps practices.',
      'Treat AI adoption as organizational transformation, not just technology deployment.',
    ],
    relatedServices: ['ai-adoption-consulting', 'rag-assistants'],
  },
};

const defaultContent = {
  intro: 'Enterprise AI is transforming how organizations operate — but success requires the right strategy, the right architecture, and the right partner.',
  sections: [
    { h2: 'Understanding the Landscape', body: 'The enterprise AI landscape has evolved rapidly. Organizations now have access to powerful foundation models, open-source alternatives, and a growing ecosystem of tools — but choosing the right approach for your specific context requires expertise and careful analysis.' },
    { h2: 'Key Principles for Success', body: 'Successful enterprise AI deployments share common characteristics: clear problem definition, strong data foundations, governance-first design, and organizational commitment. Each of these deserves attention before any model training or deployment begins.' },
    { h2: 'Implementation Considerations', body: 'The technical implementation must be matched to your organization\'s infrastructure, security requirements, and operational constraints. What works for a startup may not be appropriate for a regulated enterprise — and the gap between proof-of-concept and production deployment is where most projects falter.' },
  ],
  takeaways: [
    'Define the business problem before selecting the technology.',
    'Invest in data quality before investing in models.',
    'Governance and compliance must be built in from the start.',
    'Pilot programs should have defined success metrics and timelines.',
    'Scale proven approaches; don\'t scale unproven ones.',
  ],
  relatedServices: ['ai-adoption-consulting', 'llm-development'],
};

export default function BlogPostPage({ post, related }) {
  const content = POST_CONTENT[post.slug] || defaultContent;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Xcel Trade LLC', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Xcel Trade LLC', logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/xcel-trade-logo.png` } },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insights/${post.slug}` },
  };

  const relatedSvcs = SERVICES.filter(s => content.relatedServices.includes(s.slug));

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`${SITE_URL}/insights/${post.slug}`}
        openGraph={{ type: 'article', url: `${SITE_URL}/insights/${post.slug}`, article: { publishedTime: post.date, authors: ['Xcel Trade LLC'] } }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article>
        {/* Header */}
        <header className="post-header section-sm">
          <div className="container">
            <nav className="breadcrumb text-sm text-muted">
              <Link href="/">Home</Link> <span>/</span>
              <Link href="/insights">Insights</Link> <span>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>{post.category}</span>
            </nav>
            <div className="post-meta-row">
              <span className="tag tag-accent">{post.category}</span>
              <time className="text-sm text-muted">{post.date}</time>
              <span className="text-sm text-muted">·</span>
              <span className="text-sm text-muted">{post.readTime}</span>
            </div>
            <h1 className="display-lg post-title">{post.title}</h1>
            <p className="text-xl text-secondary post-subtitle">{post.subtitle}</p>
            <div className="post-author">
              <div className="author-avatar">✦</div>
              <div>
                <strong className="text-sm">Xcel Trade LLC</strong>
                <p className="text-xs text-muted">Enterprise AI Consulting</p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="post-layout container">
          {/* TOC */}
          <aside className="toc">
            <h3 className="toc-title">In This Article</h3>
            <nav>
              <ol className="toc-list">
                {content.sections.map((s, i) => (
                  <li key={i}><a href={`#section-${i}`}>{s.h2}</a></li>
                ))}
                <li><a href="#takeaways">Key Takeaways</a></li>
              </ol>
            </nav>
          </aside>

          {/* Main content */}
          <div className="post-body prose">
            <p>{content.intro}</p>
            {content.sections.map((s, i) => (
              <div key={i} id={`section-${i}`}>
                <h2>{s.h2}</h2>
                <p>{s.body}</p>
              </div>
            ))}

            {/* Key Takeaways */}
            <div className="takeaways-box" id="takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                {content.takeaways.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>

            {/* CTA */}
            <div className="post-cta">
              <h3>Ready to apply this at your organization?</h3>
              <p>Talk to an Xcel Trade LLC expert about your specific situation.</p>
              <div className="cta-btns">
                {relatedSvcs.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="btn btn-outline" style={{ fontSize: '14px' }}>
                    {s.icon} {s.title}
                  </Link>
                ))}
                <Link href="/contact" className="btn btn-primary">Talk to an Expert →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <section className="section-sm">
          <div className="container">
            <h3 className="display-md" style={{ marginBottom: 32 }}>Related Articles</h3>
            <div className="grid-3">
              {related.map(p => (
                <Link key={p.slug} href={`/insights/${p.slug}`} className="post-card card">
                  <span className="tag tag-accent" style={{ marginBottom: 12, fontSize: '11px' }}>{p.category}</span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, lineHeight: 1.3, marginBottom: 10 }}>{p.title}</h4>
                  <span className="text-xs text-muted">{p.date} · {p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <style jsx>{`
        .post-header { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
        .breadcrumb a:hover { color: var(--text-primary); }
        .post-meta-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .post-title { margin-bottom: 16px; }
        .post-subtitle { margin-bottom: 28px; max-width: 680px; }
        .post-author { display: flex; align-items: center; gap: 12px; }
        .author-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--accent-dim);
          border: 1px solid rgba(245,166,35,0.3);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent); font-size: 16px;
        }
        .post-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 80px;
          padding-top: 60px;
          padding-bottom: 60px;
          align-items: start;
        }
        .toc {
          position: sticky;
          top: calc(var(--nav-h) + 24px);
          padding: 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .toc-title { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 16px; }
        .toc-list { display: flex; flex-direction: column; gap: 4px; counter-reset: toc; }
        .toc-list li { counter-increment: toc; }
        .toc-list a { font-size: 13px; color: var(--text-secondary); padding: 5px 0; display: block; line-height: 1.4; }
        .toc-list a:hover { color: var(--accent); }
        .takeaways-box {
          background: var(--accent-dim);
          border: 1px solid rgba(245,166,35,0.2);
          border-radius: var(--radius-md);
          padding: 28px 32px;
          margin: 40px 0;
        }
        .takeaways-box h3 { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--accent); margin-bottom: 16px; }
        .takeaways-box ul { display: flex; flex-direction: column; gap: 10px; }
        .takeaways-box li { font-size: 14px; color: var(--text-secondary); position: relative; padding-left: 20px; }
        .takeaways-box li::before { content: '✓'; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
        .post-cta {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 32px;
          margin-top: 48px;
        }
        .post-cta h3 { font-family: var(--font-display); font-size: 20px; font-weight: 700; margin-bottom: 8px; }
        .post-cta p { color: var(--text-secondary); font-size: 15px; margin-bottom: 20px; }
        .cta-btns { display: flex; gap: 10px; flex-wrap: wrap; }
        .post-card { display: flex; flex-direction: column; text-decoration: none; }
        @media (max-width: 900px) {
          .post-layout { grid-template-columns: 1fr; }
          .toc { display: none; }
        }
      `}</style>
    </>
  );
}
