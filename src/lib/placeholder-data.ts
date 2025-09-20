import { Briefcase, BarChart3, ShieldCheck, Cloud, PenTool, Code, Linkedin, Twitter, Dribbble, type LucideIcon } from 'lucide-react';
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
    slug: 'strategic-consulting',
    title: 'Strategic Consulting',
    shortDescription: 'Tailored strategies to navigate market complexities and drive growth.',
    description: 'Our Strategic Consulting service provides businesses with a clear roadmap to success. We analyze market trends, assess competitive landscapes, and identify growth opportunities. Our experts work closely with you to develop actionable strategies that align with your long-term objectives, ensuring sustainable growth and a strong market position.',
    icon: Briefcase,
    imageId: 'service-consulting',
    faqs: [
      { question: 'Who is this service for?', answer: 'Businesses of all sizes looking to refine their vision and strategy.' },
      { question: 'What is the typical engagement duration?', answer: 'Engagements typically range from 3 to 6 months, depending on the scope.' },
      { question: 'How do you measure success?', answer: 'Success is measured through predefined KPIs, including revenue growth, market share, and operational efficiency.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Comprehensive digital marketing solutions to boost your online presence.',
    description: 'Our Digital Marketing services are designed to enhance your brand\'s visibility and engagement across all digital channels. From SEO and content marketing to social media and PPC campaigns, we create data-driven strategies to attract, engage, and convert your target audience. Let us help you build a powerful online presence that delivers measurable results.',
    icon: BarChart3,
    imageId: 'service-marketing',
    faqs: [
      { question: 'What platforms do you specialize in?', answer: 'We are experts in Google Ads, Facebook/Instagram, LinkedIn, and SEO.' },
      { question: 'Can you work with our existing marketing team?', answer: 'Absolutely. We pride ourselves on seamless collaboration.' },
    ],
  },
  {
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    shortDescription: 'Protect your digital assets with our robust cybersecurity services.',
    description: 'In an era of increasing digital threats, our Cybersecurity Solutions offer comprehensive protection for your valuable assets. We conduct vulnerability assessments, implement robust security protocols, and provide 24/7 monitoring to safeguard your systems from cyberattacks. Trust us to be your partner in building a resilient and secure digital environment.',
    icon: ShieldCheck,
    imageId: 'service-security',
    faqs: [
      { question: 'Do you offer employee training?', answer: 'Yes, we provide cybersecurity awareness training to educate your staff on best practices.' },
      { question: 'What is your incident response time?', answer: 'We have a dedicated team that responds to security incidents within minutes.' },
    ],
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    shortDescription: 'Leverage the power of the cloud for scalability and efficiency.',
    description: 'Unlock the full potential of your business with our Cloud Services. We help you migrate, manage, and optimize your infrastructure on leading cloud platforms like AWS, Azure, and Google Cloud. Our solutions are designed for scalability, reliability, and cost-efficiency, enabling you to innovate faster and stay ahead of the competition.',
    icon: Cloud,
    imageId: 'service-cloud',
    faqs: [
      { question: 'Which cloud providers do you support?', answer: 'We are certified partners with AWS, Azure, and Google Cloud.' },
      { question: 'How do you ensure data security in the cloud?', answer: 'We implement industry best practices for data encryption, access control, and compliance.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'Creating intuitive and beautiful user experiences for your products.',
    description: 'Our UI/UX Design service focuses on creating user-centric digital products that are both functional and visually appealing. We conduct thorough user research, create wireframes and prototypes, and design intuitive interfaces that enhance user satisfaction and drive adoption. Let us help you craft a digital experience that your users will love.',
    icon: PenTool,
    imageId: 'service-design',
    faqs: [
      { question: 'What design tools do you use?', answer: 'We primarily use Figma, Sketch, and Adobe XD for our design process.' },
      { question: 'Do you conduct user testing?', answer: 'Yes, user testing is an integral part of our design process to validate design decisions.' },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    shortDescription: 'Custom software solutions to meet your unique business needs.',
    description: 'Our Software Development service delivers high-quality, scalable, and custom software solutions. Whether you need a web application, a mobile app, or a complex enterprise system, our team of experienced developers uses the latest technologies and agile methodologies to build products that are tailored to your specific requirements. Partner with us to turn your ideas into reality.',
    icon: Code,
    imageId: 'service-development',
    faqs: [
      { question: 'What technologies do you specialize in?', answer: 'Our expertise includes React, Node.js, Python, and various database technologies.' },
      { question: 'How do you handle project management?', answer: 'We use agile methodologies, with regular sprints and transparent communication to keep you updated.' },
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
    slug: 'the-future-of-digital-transformation',
    title: 'The Future of Digital Transformation in 2024',
    author: 'Jane Doe',
    date: '2024-05-15',
    imageId: 'blog-1',
    excerpt: 'Digital transformation is no longer a buzzword; it\'s a necessity. Discover the key trends that will shape the future of business.',
    content: 'The landscape of digital transformation is constantly evolving. In 2024, we are seeing a significant shift towards AI-driven automation, hyper-personalization, and sustainable technology. Businesses that embrace these trends will not only survive but thrive in the new digital economy. This post delves into how you can leverage these trends to your advantage.',
  },
  {
    slug: 'navigating-market-volatility',
    title: '5 Strategies for Navigating Market Volatility',
    author: 'John Smith',
    date: '2024-04-22',
    imageId: 'blog-2',
    excerpt: 'In today\'s unpredictable market, having a resilient strategy is crucial. Here are five strategies to help your business weather any storm.',
    content: 'Market volatility can be daunting, but with the right strategies, it can also present opportunities. From diversifying your revenue streams to investing in agile technologies, we explore five proven strategies to build a resilient business that can adapt and grow, even in uncertain times.',
  },
  {
    slug: 'the-importance-of-proactive-cybersecurity',
    title: 'Why Proactive Cybersecurity is Non-Negotiable',
    author: 'Emily White',
    date: '2024-03-10',
    imageId: 'blog-3',
    excerpt: 'Don\'t wait for a breach to happen. A proactive approach to cybersecurity is the best defense against evolving digital threats.',
    content: 'In the digital age, a reactive cybersecurity posture is a recipe for disaster. This article makes the case for a proactive approach, covering everything from regular threat hunting and vulnerability assessments to employee training and incident response planning. Learn how to stay one step ahead of cybercriminals.',
  },
    {
    slug: 'leveraging-cloud-for-business-agility',
    title: 'Leveraging the Cloud for Unprecedented Business Agility',
    author: 'John Smith',
    date: '2024-02-18',
    imageId: 'blog-4',
    excerpt: 'The cloud is more than just storage; it\'s a catalyst for business agility. Explore how cloud-native technologies can accelerate innovation.',
    content: 'Cloud computing has revolutionized how businesses operate. By adopting cloud-native architectures and DevOps practices, organizations can dramatically reduce time-to-market, scale on demand, and foster a culture of continuous innovation. We discuss the key components of a successful cloud strategy and how to get started.',
  },
];

export const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Dribbble', icon: Dribbble, url: '#' },
];
