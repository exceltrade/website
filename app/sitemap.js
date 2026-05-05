import { SERVICES, BLOG_POSTS, CASE_STUDIES, SITE_URL } from '../lib/data';

export default function sitemap() {
  const now = new Date().toISOString();

  const statics = [
    { url: SITE_URL,                               lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/about`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/services`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/ai-adoption-framework`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/case-studies`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/insights`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
  ];

  const services = SERVICES.map(s => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const posts = BLOG_POSTS.map(p => ({
    url: `${SITE_URL}/insights/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const cases = CASE_STUDIES.map(cs => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...statics, ...services, ...posts, ...cases];
}
