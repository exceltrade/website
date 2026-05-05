export const SITE_URL = 'https://www.xceltradellc.com';
export const SITE_NAME = 'Xcel Trade LLC';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/default.jpg`;

export const seoData = {
  home: {
    title: 'Xcel Trade LLC | Enterprise AI Consulting & Adoption Services',
    description: 'Xcel Trade LLC delivers enterprise AI consulting, LLM development, RAG assistants, and agentic workflows. Founded 2012. Transform your business with expert AI solutions.',
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/images/og/homepage.jpg`,
  },
  about: {
    title: 'About Xcel Trade LLC | AI Consulting Firm Founded 2012',
    description: 'Learn about Xcel Trade LLC — an enterprise AI consulting firm founded in 2012, led by CEO Annie Saeed. We help organizations adopt AI safely, strategically, and at scale.',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/images/og/about.jpg`,
  },
  contact: {
    title: 'Contact Xcel Trade LLC | Get an AI Consulting Consultation',
    description: 'Ready to transform your enterprise with AI? Contact Xcel Trade LLC to schedule a consultation with our AI experts and start your AI adoption journey today.',
    canonical: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/images/og/contact.jpg`,
  },
  services: {
    title: 'AI Consulting Services | Xcel Trade LLC',
    description: 'Explore Xcel Trade LLC\'s full suite of enterprise AI services: AI adoption consulting, LLM development, RAG assistants, agentic workflows, document automation, cloud architecture, and data engineering.',
    canonical: `${SITE_URL}/services`,
    ogImage: `${SITE_URL}/images/og/services.jpg`,
  },
  framework: {
    title: 'AI Adoption Framework | Xcel Trade LLC\'s 5-Phase Methodology',
    description: 'Explore Xcel Trade LLC\'s proven AI Adoption Framework — a 5-phase methodology covering readiness assessment, strategy, pilot deployment, scaled rollout, and continuous improvement.',
    canonical: `${SITE_URL}/ai-adoption-framework`,
    ogImage: `${SITE_URL}/images/og/ai-framework.jpg`,
  },
  caseStudies: {
    title: 'AI Consulting Case Studies | Xcel Trade LLC Results',
    description: 'See real results from Xcel Trade LLC\'s enterprise AI engagements. Case studies across financial services, healthcare, legal, and logistics industries.',
    canonical: `${SITE_URL}/case-studies`,
    ogImage: `${SITE_URL}/images/og/case-studies.jpg`,
  },
  insights: {
    title: 'AI Insights & Expert Articles | Xcel Trade LLC Blog',
    description: 'Expert insights on enterprise AI adoption, LLMs, RAG systems, agentic workflows, compliance, and cloud AI from the team at Xcel Trade LLC.',
    canonical: `${SITE_URL}/insights`,
    ogImage: `${SITE_URL}/images/og/insights.jpg`,
  },
};

export const servicesSeo = {
  'ai-adoption-consulting': {
    title: 'AI Adoption Consulting for Enterprises | Xcel Trade LLC',
    description: 'Xcel Trade LLC\'s AI adoption consulting helps enterprises build AI strategy, assess readiness, and implement AI solutions that drive ROI. Trusted since 2012.',
    canonical: `${SITE_URL}/services/ai-adoption-consulting`,
    ogImage: `${SITE_URL}/images/og/ai-adoption.jpg`,
  },
  'llm-development': {
    title: 'Custom LLM Development & Fine-Tuning | Xcel Trade LLC',
    description: 'Build domain-specific large language models for your enterprise. Xcel Trade LLC provides custom LLM development, fine-tuning, and secure deployment for regulated industries.',
    canonical: `${SITE_URL}/services/llm-development`,
    ogImage: `${SITE_URL}/images/og/llm-development.jpg`,
  },
  'rag-assistants': {
    title: 'RAG Assistant Development for Enterprises | Xcel Trade LLC',
    description: 'Build intelligent RAG assistants that retrieve answers from your private knowledge base. Xcel Trade LLC designs enterprise RAG systems that are accurate and secure.',
    canonical: `${SITE_URL}/services/rag-assistants`,
    ogImage: `${SITE_URL}/images/og/rag-assistants.jpg`,
  },
  'agentic-workflows': {
    title: 'Agentic AI Workflow Automation | Xcel Trade LLC',
    description: 'Deploy autonomous AI agents that execute complex, multi-step business workflows. Xcel Trade LLC designs agentic systems that integrate with your enterprise stack.',
    canonical: `${SITE_URL}/services/agentic-workflows`,
    ogImage: `${SITE_URL}/images/og/agentic-workflows.jpg`,
  },
  'document-automation': {
    title: 'AI Document Automation for Enterprises | Xcel Trade LLC',
    description: 'Automate document processing, extraction, and generation with AI. Xcel Trade LLC builds intelligent document automation systems for legal, compliance, finance, and operations.',
    canonical: `${SITE_URL}/services/document-automation`,
    ogImage: `${SITE_URL}/images/og/document-automation.jpg`,
  },
  'cloud-architecture': {
    title: 'Cloud Architecture for AI Workloads | Xcel Trade LLC',
    description: 'Design and deploy scalable, secure cloud infrastructure for AI. Xcel Trade LLC architects AWS, Azure, and GCP environments optimized for enterprise AI workloads and MLOps.',
    canonical: `${SITE_URL}/services/cloud-architecture`,
    ogImage: `${SITE_URL}/images/og/cloud-architecture.jpg`,
  },
  'data-engineering': {
    title: 'Data Engineering for AI & Machine Learning | Xcel Trade LLC',
    description: 'Build the data infrastructure your AI needs. Xcel Trade LLC designs data pipelines, lakes, warehouses, and real-time streaming systems to power enterprise machine learning at scale.',
    canonical: `${SITE_URL}/services/data-engineering`,
    ogImage: `${SITE_URL}/images/og/data-engineering.jpg`,
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xcel Trade LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/images/xcel-trade-logo.png`,
  foundingDate: '2012',
  description: 'Enterprise AI consulting firm specializing in AI adoption, LLM development, RAG assistants, agentic workflows, document automation, cloud architecture, and data engineering.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@xceltradellc.com',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  founder: { '@type': 'Person', name: 'Annie Saeed', jobTitle: 'CEO' },
  sameAs: [
    'https://www.linkedin.com/company/xcel-trade-llc',
  ],
};
