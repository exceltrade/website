export const SITE_URL = 'https://www.xceltradellc.com';
export const SITE_NAME = 'Xcel Trade LLC';

export const SERVICES = [
  {
    slug: 'ai-adoption-consulting',
    title: 'AI Adoption Consulting',
    shortTitle: 'AI Adoption',
    icon: '◈',
    tagline: 'Strategy-first AI transformation',
    description:
      "We assess your organization's AI readiness, define a phased roadmap, and guide you through implementation — ensuring every AI investment ties to measurable business outcomes.",
    features: [
      'AI readiness assessment across data, tech, talent & culture',
      'Use case prioritization & ROI modeling',
      'Vendor selection & technology evaluation',
      'Governance & compliance framework design',
      'Change management & team enablement',
    ],
    color: '#f5a623',
  },
  {
    slug: 'llm-development',
    title: 'LLM Development',
    shortTitle: 'LLM Dev',
    icon: '⬡',
    tagline: 'Domain-specific language models',
    description:
      'Custom large language model development, fine-tuning, and deployment for enterprise use cases — optimized for your industry terminology, compliance requirements, and accuracy benchmarks.',
    features: [
      'Model selection & architecture design',
      'Domain-specific fine-tuning on proprietary data',
      'RLHF & alignment tuning',
      'Evaluation, benchmarking & red-teaming',
      'Secure, scalable model deployment',
    ],
    color: '#2dd4bf',
  },
  {
    slug: 'rag-assistants',
    title: 'RAG Assistants',
    shortTitle: 'RAG',
    icon: '◎',
    tagline: 'Knowledge-grounded AI assistants',
    description:
      "Enterprise AI assistants that retrieve and synthesize information from your proprietary knowledge bases — delivering accurate, cited answers with zero hallucination risk.",
    features: [
      'Knowledge base architecture & indexing',
      'Vector database design & optimization',
      'Retrieval pipeline tuning for precision',
      'Source citation & auditability',
      'Integration with enterprise systems',
    ],
    color: '#a78bfa',
  },
  {
    slug: 'agentic-workflows',
    title: 'Agentic Workflows',
    shortTitle: 'Agents',
    icon: '⟁',
    tagline: 'Autonomous multi-step automation',
    description:
      'Design and deployment of autonomous AI agent systems that execute multi-step business workflows, make decisions, and integrate with enterprise tools — transforming operations at scale.',
    features: [
      'Agent architecture & orchestration design',
      'Multi-agent system development',
      'Tool & API integration',
      'Human-in-the-loop checkpoints',
      'Monitoring, logging & audit trails',
    ],
    color: '#fb923c',
  },
  {
    slug: 'document-automation',
    title: 'Document Automation',
    shortTitle: 'Doc AI',
    icon: '▣',
    tagline: 'Intelligent document processing',
    description:
      'AI-powered systems that extract, classify, and generate documents — eliminating manual document handling across legal, compliance, finance, and operations workflows.',
    features: [
      'Intelligent document extraction (IDP)',
      'Contract analysis & clause detection',
      'Automated report generation',
      'Document classification & routing',
      'Compliance document monitoring',
    ],
    color: '#34d399',
  },
  {
    slug: 'cloud-architecture',
    title: 'Cloud Architecture',
    shortTitle: 'Cloud',
    icon: '◬',
    tagline: 'Infrastructure built for AI scale',
    description:
      'Design and implementation of scalable, secure cloud infrastructure on AWS, Azure, and GCP — purpose-built to support enterprise AI deployments, MLOps pipelines, and high-availability workloads.',
    features: [
      'AI-optimized cloud architecture',
      'AWS, Azure & GCP design',
      'MLOps pipeline implementation',
      'Security & compliance architecture',
      'Cost optimization & FinOps',
    ],
    color: '#60a5fa',
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    shortTitle: 'Data Eng',
    icon: '⬟',
    tagline: 'The foundation every AI model needs',
    description:
      "End-to-end data engineering — pipelines, data lakes, warehouses, and real-time streaming — that prepares your organization's data to power AI and machine learning at enterprise scale.",
    features: [
      'Data pipeline design & implementation',
      'Data lake & warehouse architecture',
      'Real-time streaming (Kafka, Flink)',
      'Data quality & governance',
      'ML feature store development',
    ],
    color: '#f472b6',
  },
];

export const FRAMEWORK_PHASES = [
  {
    number: '01',
    title: 'Assess',
    subtitle: 'AI Readiness Evaluation',
    description:
      'A comprehensive assessment of your data maturity, technology infrastructure, talent capabilities, and organizational culture to establish a truthful baseline before any AI investment.',
    deliverables: ['Readiness scorecard', 'Gap analysis', 'Risk register', 'Quick wins identification'],
  },
  {
    number: '02',
    title: 'Strategize',
    subtitle: 'AI Roadmap & Business Case',
    description:
      'Prioritize use cases by business impact and feasibility. Define a phased AI roadmap with clear milestones, resource requirements, governance policies, and ROI models.',
    deliverables: ['Use case prioritization matrix', 'AI roadmap (12–24 months)', 'Governance framework', 'ROI projections'],
  },
  {
    number: '03',
    title: 'Pilot',
    subtitle: 'Contained Proof of Value',
    description:
      'Execute one high-priority use case in a contained scope with defined success metrics. Validate technical approach, measure outcomes, and capture learnings before scaling.',
    deliverables: ['Deployed pilot solution', 'Measured KPI outcomes', 'Technical architecture docs', 'Scale-up plan'],
  },
  {
    number: '04',
    title: 'Scale',
    subtitle: 'Enterprise-Wide Deployment',
    description:
      'Expand proven pilots across the organization with cloud-native infrastructure, MLOps practices, and robust change management to ensure adoption and sustained performance.',
    deliverables: ['Production deployment', 'MLOps pipeline', 'Employee training program', 'Integration documentation'],
  },
  {
    number: '05',
    title: 'Optimize',
    subtitle: 'Continuous Intelligence',
    description:
      "Establish ongoing monitoring, model retraining cycles, performance benchmarking, and feedback loops — ensuring your AI systems improve continuously and remain aligned to business goals.",
    deliverables: ['Monitoring dashboards', 'Retraining cadence', 'Performance benchmarks', 'Roadmap updates'],
  },
];

export const CASE_STUDIES = [
  {
    slug: 'enterprise-ai-adoption-financial-services',
    industry: 'Financial Services',
    service: 'AI Adoption Consulting',
    serviceSlug: 'ai-adoption-consulting',
    challenge:
      'A regional bank needed to adopt AI across operations but lacked a coherent strategy, clean data infrastructure, and regulatory governance framework.',
    solution:
      'Xcel Trade delivered a full AI readiness assessment, defined an 18-month adoption roadmap, and implemented a governance framework compliant with OCC and FDIC guidance.',
    results: ['42% reduction in loan processing time', '18-month roadmap executed in 14 months', 'Full regulatory compliance maintained', '$2.1M in operational cost savings year one'],
    tag: 'Financial Services',
    tagColor: '#f5a623',
  },
  {
    slug: 'rag-assistant-healthcare-compliance',
    industry: 'Healthcare',
    service: 'RAG Assistants',
    serviceSlug: 'rag-assistants',
    challenge:
      "A healthcare network's compliance team spent 60% of their time answering policy questions from 3,000+ employees across 12 facilities — using documents that changed quarterly.",
    solution:
      "Built a HIPAA-compliant RAG assistant over the organization's 4,000-page policy library, updated automatically from the document management system.",
    results: ['84% reduction in compliance Q&A volume', 'Policy answers in <3 seconds vs 4–6 hours', 'Full source citation for every answer', 'Zero HIPAA violations since deployment'],
    tag: 'Healthcare',
    tagColor: '#34d399',
  },
  {
    slug: 'document-automation-legal-firm',
    industry: 'Legal',
    service: 'Document Automation',
    serviceSlug: 'document-automation',
    challenge:
      'A 200-attorney firm was spending 12,000+ associate hours annually on contract review — manually comparing agreements against standard templates to identify non-standard clauses.',
    solution:
      'Deployed an AI document automation system that ingests contracts, compares against 47 standard clause templates, flags deviations, and generates a summary memo in minutes.',
    results: ['91% reduction in routine contract review time', 'From 4 hours to 11 minutes per contract', '$1.8M in billable time redirected to high-value work', '99.2% clause detection accuracy'],
    tag: 'Legal',
    tagColor: '#a78bfa',
  },
  {
    slug: 'agentic-workflow-logistics',
    industry: 'Logistics',
    service: 'Agentic Workflows',
    serviceSlug: 'agentic-workflows',
    challenge:
      'A national logistics operator was manually coordinating shipment exceptions across 6 internal systems — a process that took 3–4 hours per exception and caused costly delays.',
    solution:
      'Built a multi-agent system that detects shipment anomalies, retrieves relevant data across all 6 systems, drafts resolution options, and executes approved actions automatically.',
    results: ['Exception resolution: 3.5 hours → 18 minutes', '73% reduction in exception-related delays', '$3.4M in avoided penalty charges annually', '94% straight-through processing rate'],
    tag: 'Logistics',
    tagColor: '#60a5fa',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'how-enterprises-can-adopt-ai-safely-and-effectively',
    title: 'How Enterprises Can Adopt AI Safely and Effectively',
    subtitle: 'A practical framework for leaders navigating enterprise AI transformation',
    category: 'AI Adoption',
    date: 'January 15, 2025',
    readTime: '8 min read',
    excerpt:
      "Enterprise AI adoption is no longer optional — but doing it wrong is worse than not doing it at all. Here's a practical five-step framework for doing it right.",
    relatedServices: ['ai-adoption-consulting', 'rag-assistants'],
  },
  {
    slug: 'rag-vs-llms-when-to-use-each',
    title: 'RAG vs LLMs: When to Use Each',
    subtitle: 'A technical breakdown of two architectures — and a decision framework',
    category: 'RAG',
    date: 'January 22, 2025',
    readTime: '7 min read',
    excerpt:
      'Should you build a RAG system or deploy a large language model? The answer depends on your use case, data environment, and accuracy requirements.',
    relatedServices: ['llm-development', 'rag-assistants'],
  },
  {
    slug: 'agentic-ai-workflows-next-frontier-automation',
    title: 'Agentic AI Workflows: The Next Frontier of Automation',
    subtitle: 'How autonomous AI agents are transforming enterprise operations',
    category: 'Agentic AI',
    date: 'January 29, 2025',
    readTime: '9 min read',
    excerpt:
      'Agentic AI changes the automation calculus entirely. AI agents can plan, use tools, maintain memory, and adapt — enabling workflows that rule-based systems never could.',
    relatedServices: ['agentic-workflows', 'document-automation'],
  },
  {
    slug: 'ai-for-compliance-reducing-risk-intelligent-systems',
    title: 'AI for Compliance: Reducing Risk with Intelligent Systems',
    subtitle: 'From reactive documentation to proactive risk intelligence',
    category: 'Compliance',
    date: 'February 5, 2025',
    readTime: '8 min read',
    excerpt:
      'AI is transforming compliance from a cost center into a competitive advantage — enabling real-time monitoring, automated audits, and intelligent risk detection.',
    relatedServices: ['document-automation', 'rag-assistants'],
  },
  {
    slug: 'modernizing-legacy-systems-generative-ai',
    title: 'Modernizing Legacy Systems with Generative AI',
    subtitle: "Legacy infrastructure doesn't need to be replaced to deliver AI value",
    category: 'Cloud AI',
    date: 'February 12, 2025',
    readTime: '10 min read',
    excerpt:
      "The assumption that AI requires modern infrastructure is wrong. Generative AI can be layered on top of legacy systems through well-designed integration architectures.",
    relatedServices: ['cloud-architecture', 'data-engineering'],
  },
];

export const STATS = [
  { value: '12+', label: 'Years in business' },
  { value: '200+', label: 'Enterprise engagements' },
  { value: '94%', label: 'Client retention rate' },
  { value: '$180M+', label: 'Client value delivered' },
];

export const INDUSTRIES = [
  'Financial Services', 'Healthcare', 'Legal', 'Logistics',
  'Manufacturing', 'Government', 'Insurance', 'Retail',
];

export const FAQS = [
  {
    q: 'What is AI adoption consulting?',
    a: "AI adoption consulting helps enterprises assess their readiness for AI, define a strategic roadmap, select appropriate technologies, and implement AI solutions that deliver measurable business outcomes.",
  },
  {
    q: 'How long does enterprise AI adoption take?',
    a: 'A typical AI adoption engagement with Xcel Trade LLC ranges from 3 months for a focused pilot program to 12–18 months for full enterprise deployment.',
  },
  {
    q: 'What is the difference between RAG and a standard LLM?',
    a: "A standard LLM generates responses from its training data alone. RAG (Retrieval-Augmented Generation) supplements the LLM with real-time retrieval from your organization's knowledge bases, enabling more accurate, cited, and current responses.",
  },
  {
    q: 'What industries does Xcel Trade LLC serve?',
    a: 'Xcel Trade LLC serves enterprises across financial services, healthcare, legal, logistics, manufacturing, government, insurance, and retail sectors.',
  },
  {
    q: 'What is the Xcel Trade AI Adoption Framework?',
    a: 'A structured 5-phase methodology: Assess, Strategize, Pilot, Scale, and Optimize. Each phase includes defined deliverables and success criteria, ensuring enterprise AI transformation is systematic and measurable.',
  },
];
