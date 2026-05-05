import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { seoData } from '../lib/seo';
import { BLOG_POSTS } from '../lib/data';

const CATEGORIES = ['All', 'AI Adoption', 'LLMs', 'RAG', 'Agentic AI', 'Compliance', 'Cloud AI'];

export default function InsightsPage() {
  const seo = seoData.insights;
  return (
    <>
      <NextSeo title="AI Insights & Expert Articles" description={seo.description} canonical={seo.canonical} />

      <section className="page-hero section-sm">
        <div className="container">
          <span className="eyebrow">Insights</span>
          <h1 className="display-lg">AI Insights from Xcel Trade LLC</h1>
          <p className="text-xl text-secondary" style={{ maxWidth: 600, marginTop: 20 }}>
            Expert perspectives on enterprise AI adoption, LLMs, RAG, agentic systems, compliance, and cloud infrastructure.
          </p>
          <div className="categories">
            {CATEGORIES.map(cat => (
              <button key={cat} className={`cat-btn ${cat === 'All' ? 'active' : ''}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Featured</span>
          <Link href={`/insights/${BLOG_POSTS[0].slug}`} className="featured-card card">
            <div className="featured-content">
              <div className="post-meta-row">
                <span className="tag tag-accent">{BLOG_POSTS[0].category}</span>
                <span className="text-xs text-muted">{BLOG_POSTS[0].date} · {BLOG_POSTS[0].readTime}</span>
              </div>
              <h2 className="display-md featured-title">{BLOG_POSTS[0].title}</h2>
              <p className="text-lg text-secondary featured-excerpt">{BLOG_POSTS[0].excerpt}</p>
              <span className="btn btn-outline" style={{ width: 'fit-content' }}>Read Article →</span>
            </div>
            <div className="featured-visual" aria-hidden="true">
              <div className="featured-icon">◈</div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="section-sm">
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: 40 }}>All Articles</h2>
          <div className="posts-grid">
            {BLOG_POSTS.slice(1).map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="post-card card">
                <div className="post-meta-row">
                  <span className="tag tag-accent" style={{ fontSize: '11px' }}>{post.category}</span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="text-sm text-secondary post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="text-xs text-muted">{post.date}</span>
                  <span style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 600 }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero { background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .categories { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .cat-btn {
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .cat-btn:hover, .cat-btn.active {
          color: var(--accent);
          border-color: rgba(245,166,35,0.3);
          background: var(--accent-dim);
        }
        .featured-card {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          text-decoration: none;
          padding: 48px;
        }
        .post-meta-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .featured-title { margin-bottom: 16px; }
        .featured-excerpt { margin-bottom: 28px; }
        .featured-visual {
          display: flex; align-items: center; justify-content: center;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          font-size: 80px;
          color: var(--accent);
          opacity: 0.3;
        }
        .posts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .post-card { display: flex; flex-direction: column; gap: 12px; text-decoration: none; }
        .post-title { font-family: var(--font-display); font-size: 18px; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
        .post-excerpt { flex: 1; }
        .post-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--border); }
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr; }
          .featured-visual { display: none; }
          .posts-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
