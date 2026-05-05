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
    intro:
      "Enterprise AI adoption is no longer optional — but doing it wrong is worse than not doing it at all. Organizations that rush AI deployments without proper readiness assessments, governance structures, and change management strategies routinely find themselves with expensive pilots that never scale, or worse, AI systems that create compliance, security, or reputational problems.",
    sections: [
      {
        id: 's1',
        h2: 'Why Most Enterprise AI Initiatives Fail',
        body:
          "Research consistently shows that most enterprise AI failures are not technical — they're organizational. Common failure points include no clear business problem to solve, insufficient data readiness, missing governance frameworks, neglected change management, and siloed pilots that never connect with enterprise infrastructure. Understanding these failure modes is the first step to avoiding them.",
      },
      {
        id: 's2',
        h2: 'Step 1 — Conduct an AI Readiness Assessment',
        body:
          "An AI readiness assessment evaluates your organization's preparedness across four dimensions: data readiness, technology readiness, talent readiness, and organizational readiness. Each requires honest evaluation before any investment begins.",
      },
      {
        id: 's3',
        h2: 'Step 2 — Define a Strategic AI Roadmap',
        body:
          'Prioritize use cases by business impact and feasibility. Define a phased plan: pilot in months 1–3, scale in months 3–9, optimize continuously. Build governance before deploying any model.',
      },
      {
        id: 's4',
        h2: 'Step 3 — Start with a High-Value Pilot',
        body:
          'A successful, well-scoped pilot is the fastest path to enterprise-wide AI adoption. Good pilots have defined metrics, limited scope, an executive sponsor, and a short timeline.',
      },
      {
        id: 's5',
        h2: 'Step 4 — Build for Scale from Day One',
        body:
          'Make architectural decisions that support future scale: cloud-native infra, APIs, and MLOps practices for versioning and retraining.',
      },
      {
        id: 's6',
        h2: 'Step 5 — Manage Change at the Human Level',
        body:
          'Technology is the easy part. People determine success. Change management, communication, and upskilling are essential.',
      },
    ],
    takeaways: [
      "AI failure is rarely technical — it's organizational.",
      'Start with an AI readiness assessment.',
      'Run a contained, high-value pilot.',
      'Build for scale from day one.',
      'Treat AI adoption as organizational transformation.',
    ],
  },
};

const defaultContent = {
  intro:
    'Enterprise AI is transforming how organizations operate — but success requires the right strategy, the right architecture, and the right partner.',
  sections: [
    {
      id: 's1',
      h2: 'Understanding the Landscape',
      body:
        'The enterprise AI landscape has evolved rapidly. Choosing the right approach requires expertise and careful analysis of your data environment and constraints.',
    },
    {
      id: 's2',
      h2: 'Key Principles for Success',
      body:
        'Successful deployments share common traits: clear problem definition, strong data foundations, governance-first design, and leadership commitment.',
    },
    {
      id: 's3',
      h2: 'Implementation Considerations',
      body:
        'Technical implementation must match your infrastructure, security requirements, and operational constraints.',
    },
  ],
  takeaways: [
    'Define the business problem first.',
    'Invest in data quality.',
    'Governance must be built in.',
    'Pilot with clear metrics.',
    'Scale only what works.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        {/* Header */}
        <header className="sec-sm bg-[var(--bg-1)] border-b border-[var(--border)]">
          <div className="wrap">
            <nav className="flex items-center gap-2 mb-5 t-sm c-3">
              <Link href="/" className="hover:text-[var(--tx-1)]">Home</Link>
              <span>/</span>
              <Link href="/insights" className="hover:text-[var(--tx-1)]">Insights</Link>
              <span>/</span>
              <span className="c-2">{post.category}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="tag tag-a">{post.category}</span>
              <time className="t-xs c-3">{post.date}</time>
              <span className="t-xs c-3">·</span>
              <span className="t-xs c-3">{post.readTime}</span>
            </div>

            <h1 className="d-lg mb-3">{post.title}</h1>
            <p className="t-xl c-2 max-w-[660px] mb-6">{post.subtitle}</p>

            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-full bg-[var(--amber-dim)] border border-[rgba(245,166,35,0.25)] flex items-center justify-center text-[var(--amber)] text-sm">
                ✦
              </div>
              <div>
                <strong className="t-sm">Xcel Trade LLC</strong>
                <p className="t-xs c-3">Enterprise AI Consulting</p>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="wrap grid grid-cols-[230px_1fr] gap-[72px] py-14 items-start max-[880px]:grid-cols-1 max-[880px]:gap-10">
          {/* TOC */}
          <aside className="card card-2 sticky top-[calc(var(--nav-h)+20px)] p-[22px] max-[880px]:hidden">
            <p className="t-xs c-3 uppercase tracking-[0.12em] mb-4">In This Article</p>
            <nav>
              <ol className="flex flex-col gap-1">
                {content.sections.map(s => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-[12.5px] text-[var(--tx-2)] py-1.5 leading-[1.45] hover:text-[var(--amber)]"
                    >
                      {s.h2}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#takeaways"
                    className="block text-[12.5px] text-[var(--tx-2)] py-1.5 leading-[1.45] hover:text-[var(--amber)]"
                  >
                    Key Takeaways
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Main */}
          <div className="prose prose-invert max-w-none">
            <p>{content.intro}</p>

            {content.sections.map(s => (
              <div key={s.id} id={s.id}>
                <h2>{s.h2}</h2>
                <p>{s.body}</p>
              </div>
            ))}

            {/* Takeaways */}
            <div
              id="takeaways"
              className="mt-9 mb-9 rounded-[var(--r-md)] bg-[var(--amber-dim)] border border-[rgba(245,166,35,0.18)] px-7 py-6"
            >
              <h3 className="font-[var(--font-d)] text-[17px] font-bold text-[var(--amber)] mb-4">
                Key Takeaways
              </h3>
              <ul className="flex flex-col gap-2">
                {content.takeaways.map((t, i) => (
                  <li key={i} className="text-[13.5px] text-[var(--tx-2)] relative pl-5">
                    <span className="absolute left-0 text-[var(--amber)] font-bold">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="card mt-11 p-7">
              <h3 className="font-[var(--font-d)] text-[19px] font-bold mb-2">
                Ready to apply this at your organization?
              </h3>
              <p className="text-[14.5px] mb-4 c-2">
                Talk to an Xcel Trade LLC expert about your specific situation.
              </p>

              <div className="flex flex-wrap gap-2">
                {relSvcs.map(s => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="btn btn-o text-[13px]"
                  >
                    {s.icon} {s.title}
                  </Link>
                ))}
                <Link href="/contact" className="btn btn-p">
                  Talk to an Expert →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="sec-sm">
          <div className="wrap">
            <h3 className="d-md mb-7">Related Articles</h3>
            <div className="g3">
              {related.map(p => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="card flex flex-col no-underline"
                >
                  <span className="tag tag-a mb-2 text-[10px]">{p.category}</span>
                  <h4 className="font-[var(--font-d)] text-[15.5px] font-bold leading-[1.3] mb-2">
                    {p.title}
                  </h4>
                  <span className="t-xs c-3">
                    {p.date} · {p.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
