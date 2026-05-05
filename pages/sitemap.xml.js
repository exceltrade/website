import { SERVICES, BLOG_POSTS, CASE_STUDIES } from '../../lib/data';

const SITE_URL = 'https://www.xceltradellc.com';

function generateSitemap() {
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/ai-adoption-framework', priority: '0.9', changefreq: 'monthly' },
    { url: '/case-studies', priority: '0.8', changefreq: 'monthly' },
    { url: '/insights', priority: '0.8', changefreq: 'weekly' },
  ];

  const servicePages = SERVICES.map(s => ({
    url: `/services/${s.slug}`,
    priority: '0.9',
    changefreq: 'monthly',
  }));

  const blogPages = BLOG_POSTS.map(p => ({
    url: `/insights/${p.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const casePages = CASE_STUDIES.map(cs => ({
    url: `/case-studies/${cs.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...servicePages, ...blogPages, ...casePages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export default function Sitemap(req, res) {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}
