export default function Robots(req, res) {}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Allow: /_next/static/

Sitemap: https://www.xceltradellc.com/sitemap.xml`);
  res.end();
  return { props: {} };
}
