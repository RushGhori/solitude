import { BarChart3, Cloud, PenTool, Code, Linkedin, Twitter, Dribbble, Smartphone, Settings, type LucideIcon } from 'lucide-react';
import type { ElementType } from 'react';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: ElementType;
  imageId: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageId: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  imageId: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageId: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  imageId: string;
  excerpt: string;
  content: string;
}

export const services: Service[] = [
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    shortDescription: 'Native and cross-platform apps that are fast, reliable, and delightful.',
    description: 'We design and build high-performance mobile applications for iOS and Android. From product discovery and UX to deployment and ongoing iteration, our team ships reliable, secure apps using native (Swift/Kotlin) and cross‑platform (React Native/Flutter) stacks tailored to your needs.',
    icon: Smartphone,
    imageId: 'service-development',
    faqs: [
      { question: 'Do you support both iOS and Android?', answer: 'Yes. We build native and cross‑platform apps to reach all users efficiently.' },
      { question: 'Can you help with store launches?', answer: 'Absolutely. We handle App Store and Play Store submission and compliance.' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Modern, accessible, and scalable web apps built for growth.',
    description: 'We build robust web applications with a strong focus on performance, accessibility, SEO, and developer ergonomics. Using modern frameworks and cloud‑ready architectures, we deliver reliable products that scale with your business.',
    icon: Code,
    imageId: 'service-development',
    faqs: [
      { question: 'What technologies do you use?', answer: 'We work with React/Next.js, Node.js, and modern APIs with TypeScript.' },
      { question: 'Do you provide ongoing support?', answer: 'Yes. We offer maintenance retainers, monitoring, and continuous improvements.' },
    ],
  },
  {
    slug: 'web-and-mobile-design',
    title: 'Web & Mobile Design',
    shortDescription: 'User-centered design that looks beautiful and drives outcomes.',
    description: 'Our design team crafts coherent design systems and intuitive experiences across web and mobile. We run research, wireframing, prototyping, and usability testing to ensure every screen is purposeful and delightful.',
    icon: PenTool,
    imageId: 'service-design',
    faqs: [
      { question: 'What tools do you use?', answer: 'We primarily use Figma and modern prototyping tools for collaboration.' },
      { question: 'Do you do user testing?', answer: 'Yes. We conduct moderated and unmoderated tests throughout the process.' },
    ],
  },
  {
    slug: 'data-analytics-and-insights',
    title: 'Data Analytics & Insights',
    shortDescription: 'Turn raw data into decisions with dashboards, modeling, and BI.',
    description: 'We transform fragmented data into actionable intelligence. From data modeling and warehousing to BI dashboards and forecasting, we provide the visibility and insight needed to move faster with confidence.',
    icon: BarChart3,
    imageId: 'data-analytics',
    faqs: [
      { question: 'Which BI tools do you support?', answer: 'Power BI, Looker, Tableau, Metabase, and custom solutions.' },
      { question: 'Can you build a data warehouse?', answer: 'Yes. We design and implement warehouses on Snowflake and BigQuery.' },
    ],
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    shortDescription: 'Automate repetitive work with integrations, bots, and orchestrations.',
    description: 'We streamline business processes by integrating systems and automating routine tasks. From internal tools and no‑code/low‑code workflows to custom orchestrations, we help teams save time and reduce errors.',
    icon: Settings,
    imageId: 'service-consulting',
    faqs: [
      { question: 'Do you work with no‑code tools?', answer: 'Yes. We use Zapier, Make, and native integrations alongside custom code.' },
      { question: 'How do you ensure reliability?', answer: 'We add observability, retries, and alerting to keep automations dependable.' },
    ],
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    shortDescription: 'Migrate, modernize, and optimize on AWS, Azure, and GCP.',
    description: 'Unlock elasticity and resilience with well‑architected cloud foundations. We handle migrations, platform engineering, cost optimization, and ongoing operations using best practices for security, reliability, and performance.',
    icon: Cloud,
    imageId: 'service-cloud',
    faqs: [
      { question: 'Which providers do you support?', answer: 'AWS, Azure, and Google Cloud with infrastructure as code.' },
      { question: 'Can you reduce our cloud spend?', answer: 'Yes. We analyze usage and implement rightsizing and savings strategies.' },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'With over 20 years of experience in the tech industry, Jane founded Solitude Infotech Inc. with a vision to help businesses innovate and grow. Her leadership and strategic insights are the driving force behind our success.',
    imageId: 'team-1',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Chief Technology Officer',
    bio: 'John is a technology virtuoso with a passion for building scalable and robust systems. He leads our engineering teams and ensures that we stay at the forefront of technological advancements.',
    imageId: 'team-2',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Emily White',
    role: 'Chief Operations Officer',
    bio: 'Emily ensures that our operations run smoothly and efficiently. Her expertise in process optimization and project management is key to delivering exceptional value to our clients on time, every time.',
    imageId: 'team-3',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Lead Designer',
    bio: 'Michael is the creative genius behind our stunning UI/UX designs. He believes that great design is about solving problems and creating delightful experiences. His work has won multiple industry awards.',
    imageId: 'team-4',
    social: { linkedin: '#', twitter: '#' },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'CEO, Innovate Inc.',
    quote: 'Solitude Infotech Inc. transformed our business. Their strategic insights and digital expertise were game-changing. We saw a 200% increase in online engagement within six months.',
    imageId: 'testimonial-1',
  },
  {
    id: 2,
    name: 'David Lee',
    company: 'CTO, TechForward',
    quote: 'The cybersecurity solutions provided by Solitude Infotech Inc. are top-notch. Their team is knowledgeable, responsive, and has given us complete peace of mind.',
    imageId: 'testimonial-2',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    company: 'Founder, Creative Co.',
    quote: 'The UI/UX design team is simply brilliant. They took our vague ideas and turned them into a product that our users absolutely love. The process was collaborative and inspiring.',
    imageId: 'testimonial-3',
  },
];

export const projects: Project[] = [
  { id: 1, title: 'Fintech Dashboard Overhaul', category: 'UI/UX Design', description: 'Complete redesign of a financial analytics platform to improve usability and data visualization.', imageId: 'project-1' },
  { id: 2, title: 'Wellness Mobile App', category: 'Software Development', description: 'Developed a cross-platform mobile app for a health and wellness startup, focusing on user engagement.', imageId: 'project-2' },
  { id: 3, title: 'Fashion E-commerce Platform', category: 'Software Development', description: 'Built a scalable e-commerce website for a fast-growing fashion brand, integrated with their inventory system.', imageId: 'project-3' },
  { id: 4, title: 'Startup Rebranding', category: 'Strategic Consulting', description: 'Led a full rebranding initiative for a tech startup, including market positioning and brand identity.', imageId: 'project-4' },
  { id: 5, title: 'Enterprise Cloud Migration', category: 'Cloud Services', description: 'Managed the migration of a large enterprise\'s entire on-premise infrastructure to a hybrid cloud environment.', imageId: 'project-5' },
  { id: 6, title: 'Global Marketing Campaign', category: 'Digital Marketing', description: 'Executed a multi-channel digital marketing campaign for a B2B SaaS product, resulting in a 300% ROI.', imageId: 'project-6' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-performance-in-2025',
    title: 'Next.js Performance Playbook for 2025',
    author: 'Sheetal Savani',
    date: '2025-07-10',
    imageId: 'blog-nextjs',
    excerpt: 'Real-world tactics to ship faster Next.js apps: routing, caching, and profiling.',
    content: 'Building fast feels like magic to users—and measurable lift to the business. In 2025, winning Next.js apps combine smart rendering choices, edge-aware data fetching, and disciplined profiling.\n\n## The pillars of perceived speed\n- Hydrate less, stream more with React Server Components\n- Push critical path assets and lazy‑load the rest\n- Cache at the edge with short TTLs and smart revalidation\n\n## Rendering strategy that scales\nChoose per route: static, ISR, or dynamic. Pair stable content with ISR and invalidate via webhooks. Keep dynamic routes fast with parallel data fetching and Suspense boundaries.\n\n## Measure, then optimize\nUse Lighthouse, Web Vitals, and the Next.js profiler. Track Core Web Vitals over time, not just locally.\n\n> Optimization without measurement is just shuffling pixels.\n\n## Release checklist\n- Set cache headers for images and fonts\n- Audit bundle with next-bundle-analyzer\n- Add loading states with skeletons\n- Validate TTFB, LCP, INP on real devices',
  },
  {
    slug: 'design-systems-that-scale-mobile-web',
    title: 'Design Systems That Scale Across Web and Mobile',
    author: 'Rushit Ghori',
    date: '2025-08-05',
    imageId: 'blog-design-systems',
    excerpt: 'How to keep multi-platform UI consistent without slowing teams down.',
    content: 'Design systems succeed when they reduce friction for makers. The goal is consistent experiences with minimal ceremony—across browsers and native shells.\n\n## Token-first foundations\n- Define core tokens: color, typography, spacing, radius, motion\n- Store as platform-agnostic source, transform per target (web, iOS, Android)\n- Document usage with do/don\'t examples\n\n## Cross-platform components\nStart with primitives (Button, Input, Sheet) that map to native patterns. Allow escape hatches for platform idioms.\n\n## Governance without bottlenecks\nCreate lightweight review rituals and async proposals. Track adoption via usage analytics, not mandates.\n\n> A system should be a product—with a roadmap, owners, and feedback loops.\n\n## Rollout playbook\n- Pilot with 1–2 squads, gather feedback\n- Migrate top 20% surfaces first\n- Provide codemods and design kits\n- Measure reduction in duplicate UI and defects',
  },
  {
    slug: 'data-modeling-for-insights-not-just-reports',
    title: 'Data Modeling for Insights, Not Just Reports',
    author: 'Sheetal Savani',
    date: '2025-09-12',
    imageId: 'blog-data-modeling',
    excerpt: 'Move beyond dashboards with semantic layers, metrics definitions, and lineage.',
    content: 'Reporting answers what happened. Modeling answers why—and what to do next. The difference is a durable semantic layer, trustworthy metrics, and clear lineage.\n\n## Model for decisions\n- Design event schemas aligned to user and business actions\n- Normalize where it helps, denormalize for query speed\n- Encode business rules once in the semantic layer\n\n## Metrics as contracts\nDefine metrics centrally with names, owners, and formulas. Break glass changes require versioning and communication.\n\n## Lineage and trust\nTrack sources, transforms, and downstream consumers to debug drift fast.\n\n> Data without context becomes trivia. Context creates insight.\n\n## Starter checklist\n- Establish a metrics catalog\n- Add tests to pipelines (freshness, uniqueness)\n- Implement role-based access\n- Publish decision-ready dashboards with clear caveats',
  },
  {
    slug: 'workflow-automation-blueprints-2025',
    title: 'Workflow Automation Blueprints for 2025',
    author: 'Rushit Ghori',
    date: '2025-10-03',
    imageId: 'blog-automation',
    excerpt: 'Patterns to eliminate manual ops using low-code, APIs, and orchestrations.',
    content: 'Great automations feel invisible. They stitch systems together, reduce toil, and leave an audit trail.\n\n## Blueprint patterns\n- Event-driven triggers (webhooks, queues)\n- Human-in-the-loop approvals with timeouts\n- Idempotent jobs with retries and backoff\n\n## Tooling mix\nUse no-code for speed where possible; drop to code for complexity and scale. Wrap everything with observability.\n\n> If you can\'t observe it, you can\'t trust it.\n\n## Reference use cases\n- Employee onboarding: accounts, access, equipment\n- Finance: invoice ingestion, reconciliation, payouts\n- Support: prioritization, summaries, escalations\n\n## Reliability checklist\n- Dead-letter queues\n- Circuit breakers for flaky deps\n- Alerts on SLO breaches',
  },
  {
    slug: 'cloud-cost-optimization-real-world',
    title: 'Cloud Cost Optimization That Actually Works',
    author: 'Sheetal Savani',
    date: '2025-11-18',
    imageId: 'blog-cloud-cost',
    excerpt: 'A practical guide to rightsizing, autoscaling, and savings plans without regressions.',
    content: 'Cost is a feature—treat it like one. Teams that win on cost design for elasticity, pick the right primitives, and keep score rigorously.\n\n## Where money hides\n- Over-provisioned compute and stale reservations\n- Chatty microservices and duplicate data\n- Zombie resources across accounts\n\n## Optimization levers\n- Rightsize instances and enable autoscaling\n- Storage lifecycle policies and compression\n- Savings plans and spot where safe\n\n> Savings are real when they persist release over release.\n\n## Weekly review cadence\n- Track unit costs (per request, per GB)\n- Compare provisioned vs. utilized\n- Triage top regressions and assign owners',
  },
  {
    slug: 'security-by-default-for-product-teams',
    title: 'Security by Default for Product Teams',
    author: 'Rushit Ghori',
    date: '2026-01-07',
    imageId: 'blog-security',
    excerpt: 'Ship features fast without sacrificing safety: least privilege, secrets, and SCA.',
    content: 'Security scales when it\'s built into the path of shipping—not bolted on at the gate.\n\n## Opinionated defaults\n- Least-privilege IAM roles and short-lived credentials\n- Secrets in a managed vault, never in env files\n- SCA and SAST in CI with clear ownership\n\n## Developer experience matters\nAutomate the boring and document the sharp edges. Provide templates and paved roads so teams move quickly and safely.\n\n> The safest workflow is the easiest one.\n\n## Minimum bar checklist\n- Dependency scanning on every PR\n- Pre-commit secrets scanning\n- Policy-as-code for infra and pipelines\n- Incident runbooks with roles and comms',
  },
];

export const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Dribbble', icon: Dribbble, url: '#' },
];
