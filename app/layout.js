import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.xceltradellc.com'),
  title: {
    default: 'Xcel Trade LLC | Enterprise AI Consulting & Adoption Services',
    template: '%s | Xcel Trade LLC',
  },
  description:
    'Xcel Trade LLC delivers enterprise AI consulting, LLM development, RAG assistants, and agentic workflows. Founded 2012. Transform your business with expert AI solutions.',
  keywords: ['enterprise AI consulting', 'AI adoption', 'LLM development', 'RAG assistants', 'agentic workflows', 'document automation'],
  authors: [{ name: 'Xcel Trade LLC', url: 'https://www.xceltradellc.com' }],
  creator: 'Xcel Trade LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.xceltradellc.com',
    siteName: 'Xcel Trade LLC',
    title: 'Xcel Trade LLC | Enterprise AI Consulting & Adoption Services',
    description: 'Enterprise AI consulting: AI adoption, LLM development, RAG assistants, agentic workflows. Founded 2012.',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630, alt: 'Xcel Trade LLC' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xceltradellc',
    title: 'Xcel Trade LLC | Enterprise AI Consulting',
    description: 'Enterprise AI consulting: AI adoption, LLM development, RAG assistants, agentic workflows.',
    images: ['/images/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Xcel Trade LLC',
    url: 'https://www.xceltradellc.com',
    logo: 'https://www.xceltradellc.com/images/logo.png',
    foundingDate: '2012',
    description: 'Enterprise AI consulting firm specializing in AI adoption, LLM development, RAG assistants, agentic workflows, document automation, cloud architecture, and data engineering.',
    contactPoint: { '@type': 'ContactPoint', email: 'info@xceltradellc.com', contactType: 'customer service' },
    founder: { '@type': 'Person', name: 'Annie Saeed', jobTitle: 'CEO' },
    sameAs: ['https://www.linkedin.com/company/xcel-trade-llc'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--nav-h)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
