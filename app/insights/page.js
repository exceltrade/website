import Link from 'next/link';
import { BLOG_POSTS, SITE_URL } from '../../lib/data';

export const metadata = {
  title: 'AI Insights & Expert Articles',
  description: 'Expert insights on enterprise AI adoption, LLMs, RAG systems, agentic workflows, compliance, and cloud AI from the team at Xcel Trade LLC.',
  alternates: { canonical: `${SITE_URL}/insights` },
};

const CATS = ['All', 'AI Adoption', 'RAG', 'Agentic AI', 'Compliance', 'Cloud AI'];

export default function InsightsPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <section className="page-hero sec-sm">
        <div className="wrap">
          <p className="eyebrow">Insights</p>
          <h1 className="d-lg">AI Insights from Xcel Trade LLC</h1>
          <p className="t-xl c-2" style={{ maxWidth: 580, marginTop: 18 }}>
            Expert perspectives on enterprise AI adoption, LLMs, RAG, agentic systems, compliance, and cloud infrastructure.
          </p>
          <div className="cats">
            {CATS.map(c => (
              <button key={c} className={`cat-btn${c === 'All' ? ' cat-on' : ''}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Featured</p>
          <Link href={`/insights/${featured.slug}`} className="card card-2 feat-card">
            <div className="feat-body">
              <div className="feat-meta">
                <span className="tag tag-a">{featured.category}</span>
                <span className="t-xs c-3">{featured.date} · {featured.readTime}</span>
              </div>
              <h2 className="d-md feat-title">{featured.title}</h2>
              <p className="t-lg c-2 feat-exc">{featured.excerpt}</p>
              <span className="btn btn-o" style={{ width: 'fit-content' }}>Read Article →</span>
            </div>
            <div className="feat-viz" aria-hidden="true">◈</div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="sec-sm">
        <div className="wrap">
          <h2 className="d-md" style={{ marginBottom: 36 }}>All Articles</h2>
          <div className="g2 posts-grid">
            {rest.map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="card post-card">
                <div className="pm">
                  <span className="tag tag-a" style={{ fontSize: '10px' }}>{post.category}</span>
                  <span className="t-xs c-3">{post.readTime}</span>
                </div>
                <h3 className="pt">{post.title}</h3>
                <p className="t-sm c-2 pe">{post.excerpt}</p>
                <div className="pf">
                  <span className="t-xs c-3">{post.date}</span>
                  <span className="c-amber t-sm" style={{ fontWeight: 600 }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-1); border-bottom: 1px solid var(--border); }
        .cats { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 24px; }
        .cat-btn {
          padding: 7px 14px; border-radius: 100px;
          font-size: 12.5px; font-weight: 600;
          color: var(--tx-2); background: var(--bg-2);
          border: 1px solid var(--border);
          transition: all 0.18s;
        }
        .cat-btn:hover, .cat-on { color: var(--amber); border-color: rgba(245,166,35,0.28); background: var(--amber-dim); }
        .feat-card { display: grid; grid-template-columns: 1fr 240px; gap: 48px; padding: 44px; text-decoration: none; }
        .feat-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .feat-title { margin-bottom: 14px; }
        .feat-exc { margin-bottom: 24px; }
        .feat-viz {
          display: flex; align-items: center; justify-content: center;
          background: var(--bg-3); border-radius: var(--r-md);
          font-size: 72px; color: var(--amber); opacity: 0.2;
        }
        .post-card { display: flex; flex-direction: column; text-decoration: none; }
        .pm { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .pt { font-family: var(--font-d); font-size: 17px; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; margin-bottom: 10px; }
        .pe { flex: 1; }
        .pf { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border); }
        @media (max-width: 720px) {
          .feat-card { grid-template-columns: 1fr; }
          .feat-viz { display: none; }
        }
      `}</style>
    </>
  );
}
