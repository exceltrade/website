import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../lib/seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${SITE_NAME}`}
        defaultTitle={`${SITE_NAME} | Enterprise AI Consulting`}
        description="Enterprise AI consulting: AI adoption, LLM development, RAG assistants, agentic workflows. Founded 2012."
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: SITE_URL,
          siteName: SITE_NAME,
          images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
        }}
        twitter={{ cardType: 'summary_large_image', site: '@xceltradellc' }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
