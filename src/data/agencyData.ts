import { ServiceDetail, CaseStudy, PricingPackage, SecurityQuestion } from '../types';

export const HERO_IMAGE = '/src/assets/images/tuperian_hero_tech_1785760405966.jpg';
export const CONSULTANT_HERO_IMAGE = 'https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/Untitled%20design%20(16).png?alt=media&token=7e4cfd4f-537a-4585-921f-a703e2f7188b';
export const CYBER_IMAGE = '/src/assets/images/cyber_security_hub_1785760483760.jpg';
export const DEV_IMAGE = '/src/assets/images/app_web_development_1785760652327.jpg';
export const DATA_IMAGE = '/src/assets/images/data_analytics_dashboard_1785760710219.jpg';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    shortDescription: 'Strategic technology roadmaps, cloud infrastructure, and IT cost optimization tailored for small businesses.',
    fullDescription: 'Tuperian Agency acts as your dedicated Virtual Chief Technology Officer (vCTO). We align your IT infrastructure with your business growth goals, eliminate software redundancy, migrate legacy systems to secure cloud environments, and establish 99.99% uptime operational standards.',
    iconName: 'Server',
    imagePath: HERO_IMAGE,
    targetAudience: 'Growing businesses with 5 to 100 employees needing streamlined tech operations.',
    avgTimeline: '2 - 4 weeks initial setup + continuous managed oversight',
    typicalRoi: '30% - 45% reduction in yearly IT operating expenses',
    deliverables: [
      'Comprehensive IT Architecture Audit & Blueprint',
      'Cloud Migration (AWS / Microsoft Azure / Google Cloud)',
      'Vendor & Software Licensing Optimization',
      'Disaster Recovery & 15-Minute SLA Continuity Plan',
      'Virtual CTO Quarterly Strategic Reviews'
    ],
    techStack: ['Microsoft 365', 'Google Workspace', 'AWS', 'Azure', 'Kubernetes', 'Terraform', 'Datadog'],
    keyFeatures: [
      {
        title: 'Virtual CTO Guidance',
        description: 'Get executive tech leadership without the $250k+ salary. Continuous roadmapping and budgeting.'
      },
      {
        title: 'Seamless Cloud Migration',
        description: 'Transition on-premise servers and files to cloud environments with zero operational downtime.'
      },
      {
        title: 'Hardware & Network Optimization',
        description: 'Enterprise-grade Wi-Fi, mesh networking, firewall configuration, and VoIP telephony.'
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    shortDescription: 'Airtight ransomware defense, zero-trust security audits, endpoint protection, and compliance training.',
    fullDescription: 'Small businesses are the #1 target for automated cyber attacks. Tuperian Security delivers multi-layered perimeter defense, round-the-clock threat monitoring, HIPAA/GDPR/SOC2 compliance preparedness, and mandatory phishing defense training for staff.',
    iconName: 'ShieldCheck',
    imagePath: CYBER_IMAGE,
    targetAudience: 'Healthcare, financial services, legal, e-commerce, and data-sensitive small businesses.',
    avgTimeline: '1 - 2 weeks rapid deployment',
    typicalRoi: '100% protection against costly ransomware lockouts & regulatory fines',
    deliverables: [
      'Zero-Trust Network & IAM Access Controls',
      '24/7 Managed Endpoint Detection & Response (EDR)',
      'Quarterly Penetration Testing & Vulnerability Assessment',
      'Automated Staff Phishing Simulations & Training Portal',
      'Regulatory Compliance Readiness Matrix (HIPAA, SOC2, GDPR)'
    ],
    techStack: ['CrowdStrike', 'SentinelOne', 'Cloudflare', 'Bitwarden', 'Duo MFA', 'Wireshark', 'Vault'],
    keyFeatures: [
      {
        title: '24/7 Managed AI EDR',
        description: 'Instant automated containment of malicious payloads and zero-day threats on company devices.'
      },
      {
        title: 'Employee Security Training',
        description: 'Interactive micro-trainings and simulated phishing emails to convert staff into your strongest defense.'
      },
      {
        title: 'Immutable Cloud Backups',
        description: 'Air-gapped backups that ensure instant restoration even in the event of severe ransomware attempts.'
      }
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortDescription: 'Custom mobile & desktop applications (iOS, Android, React Native, SaaS MVPs) built for business growth.',
    fullDescription: 'From field staff management apps to customer portal applications, Tuperian builds high-performance custom software. We transform complex manual workflows into intuitive mobile and desktop solutions with seamless backend integrations.',
    iconName: 'Smartphone',
    imagePath: DEV_IMAGE,
    targetAudience: 'Logistics, field service firms, healthcare providers, and startups launching custom software.',
    avgTimeline: '6 - 12 weeks from sprint start to App Store launch',
    typicalRoi: '3.5x boost in employee productivity & new recurring revenue streams',
    deliverables: [
      'Cross-Platform iOS & Android Native Apps',
      'SaaS MVP & Internal Operations Portals',
      'Custom RESTful & GraphQL API Architectures',
      'Offline-First Data Sync Engine',
      'App Store / Google Play Publishing & Lifecycle Support'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'Firebase', 'Docker'],
    keyFeatures: [
      {
        title: 'Intuitive UX/UI Design',
        description: 'Frictionless interface design crafted specifically for fast user onboarding and daily utility.'
      },
      {
        title: 'Offline Data Resilience',
        description: 'Field workers can keep entering jobs or inspection data even without cellular coverage.'
      },
      {
        title: 'Scalable Microservices',
        description: 'Built on cloud-native serverless architecture designed to scale seamlessly from 10 to 100,000 users.'
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'High-converting custom websites, e-commerce platforms, web apps, and client portals.',
    fullDescription: 'Your website is your 24/7 storefront and primary credibility engine. We replace slow template builders with bespoke, ultra-fast web platforms built with modern React/Next.js frameworks designed to capture leads, process payments, and boost conversion rates.',
    iconName: 'Globe',
    imagePath: DEV_IMAGE,
    targetAudience: 'Professional services, boutique retailers, medical practices, and B2B small businesses.',
    avgTimeline: '3 - 6 weeks',
    typicalRoi: '180% average increase in qualified web leads within 90 days',
    deliverables: [
      'Bespoke React / Next.js Web Application',
      'Ultra-Fast Google PageSpeed (95+ score guaranteed)',
      'Integrated Online Booking & Payment Processing',
      'Headless CMS for effortless team content management',
      'Technical On-Page SEO & Mobile Accessibility Compliance'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Sanity CMS', 'Vercel', 'PostgreSQL'],
    keyFeatures: [
      {
        title: 'Sub-Second Load Speed',
        description: 'Lightning fast web applications built without bloated plugins to keep visitors engaged.'
      },
      {
        title: 'Interactive Client Portals',
        description: 'Allow your customers to view invoices, track order progress, and submit requests securely.'
      },
      {
        title: 'High-Conversion Architecture',
        description: 'Clear visual call-to-action flows engineered to convert casual traffic into paying clients.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Local SEO, Google Business Profile dominance, targeted PPC campaigns, and conversion funnels.',
    fullDescription: 'Dominate your local market and generate a predictable stream of inbound client leads. Tuperian Marketing combines technical local SEO, high-intent Google Search ads, social advertising, and automated email lead nurturing.',
    iconName: 'TrendingUp',
    imagePath: HERO_IMAGE,
    targetAudience: 'Local service businesses, dental clinics, law firms, contractors, and specialized retailers.',
    avgTimeline: 'Ongoing monthly growth campaigns',
    typicalRoi: '4x to 8x Return on Ad Spend (ROAS)',
    deliverables: [
      'Local Business SEO & Top 3 Google Maps Placement',
      'High-Intent Google Search & Meta Ad Campaign Management',
      'Conversion Rate Optimization (CRO) & A/B Landing Page Testing',
      'Automated Lead Nurture & Review Generation Workflows',
      'Transparent Monthly ROI & Revenue Attribution Analytics'
    ],
    techStack: ['Google Ads', 'Meta Business Suite', 'SEMrush', 'Ahrefs', 'HubSpot', 'Zapier', 'Google Analytics 4'],
    keyFeatures: [
      {
        title: 'Google Map Pack Dominance',
        description: 'Optimize your Google Business Profile to capture the highest-intent local searchers near you.'
      },
      {
        title: 'Automated Review Capture',
        description: 'Automatically trigger review request SMS/emails following completed jobs or appointments.'
      },
      {
        title: 'Pay-For-Performance Ads',
        description: 'Data-driven ad budgets focused strictly on booked appointments and verified revenue.'
      }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    shortDescription: 'Business Intelligence dashboards, automated reporting pipelines, inventory analytics, and financial insights.',
    fullDescription: 'Stop guessing and start making data-backed business decisions. Tuperian Agency connects your disparate software tools (accounting, CRM, POS, marketing) into automated, real-time visual dashboards that highlight profit margins, customer lifetime value, and bottlenecks.',
    iconName: 'BarChart3',
    imagePath: DATA_IMAGE,
    targetAudience: 'Small businesses managing inventory, multi-channel sales, or multi-department operations.',
    avgTimeline: '2 - 4 weeks pipeline & dashboard buildout',
    typicalRoi: 'Eliminates 15+ hours/week of manual spreadsheet compilation',
    deliverables: [
      'Unified Data Warehouse (Postgres / Snowflake / BigQuery)',
      'Real-Time Power BI / Looker Interactive Dashboards',
      'Automated Executive KPI Weekly Digest via Email/Slack',
      'Inventory Forecasting & Customer Retention Analytics',
      'Custom ETL Data Pipeline Automation'
    ],
    techStack: ['Power BI', 'Looker', 'Python', 'Pandas', 'PostgreSQL', 'dbt', 'BigQuery'],
    keyFeatures: [
      {
        title: '360° Financial Dashboard',
        description: 'Real-time visibility into net margin, cash flow forecasts, and operational expenses in one view.'
      },
      {
        title: 'Automated Pipeline Sync',
        description: 'No more copy-pasting CSVs. Automated background syncing keeps charts fresh 24/7.'
      },
      {
        title: 'Predictive Insights',
        description: 'Identify seasonal sales surges, churn risks, and profitable customer segments early.'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'veritas-legal',
    clientName: 'Veritas Legal Group',
    industry: 'Legal & Professional Services',
    serviceCategory: 'cyber-security',
    challenge: 'Managing confidential client case files on an aging local Windows server with no offsite backup, facing strict state compliance standards and elevated ransomware risks.',
    solution: 'Tuperian Agency deployed Zero-Trust access control, migrated 1.2TB of sensitive records to an encrypted cloud vault, enforced Duo MFA, and set up 24/7 EDR monitoring.',
    results: [
      { label: 'Uptime Achieved', value: '100%' },
      { label: 'Yearly IT Cost Saved', value: '$22,500' },
      { label: 'Recovery Time SLA', value: '< 10 mins' }
    ],
    testimonial: {
      quote: 'Tuperian transformed our outdated, risky server room into a fortress. We passed our security compliance audit with flying colors and our team can safely work anywhere.',
      author: 'Marcus Vance',
      role: 'Managing Partner, Veritas Legal'
    },
    image: CYBER_IMAGE
  },
  {
    id: 'apex-logistics',
    clientName: 'Apex Express Logistics',
    industry: 'Supply Chain & Fleet Operations',
    serviceCategory: 'app-development',
    challenge: '45 delivery drivers were relying on manual paper manifests, causing lost package records, delayed customer updates, and 12+ hours of manual administrative data entry weekly.',
    solution: 'Tuperian developed a custom React Native driver application with barcode scanning, offline job syncing, GPS route optimization, and an executive Power BI dashboard.',
    results: [
      { label: 'Dispatch Speed Boost', value: '+42%' },
      { label: 'Admin Hours Saved/Wk', value: '18 hrs' },
      { label: 'ROI in 6 Months', value: '310%' }
    ],
    testimonial: {
      quote: 'The custom mobile app Tuperian built for our fleet changed the trajectory of our business. Our drivers love it, and our customers get live tracking links automatically.',
      author: 'Elena Rostova',
      role: 'Director of Operations'
    },
    image: DEV_IMAGE
  },
  {
    id: 'bella-vida',
    clientName: 'Bella Vida Medical Spa',
    industry: 'Healthcare & Wellness',
    serviceCategory: 'web-development',
    challenge: 'A slow WordPress site with broken booking forms was losing local search customers to nearby competitors, with zero conversion tracking.',
    solution: 'Engineered a modern React/Next.js booking portal, implemented Local Business SEO, automated appointment SMS reminders, and managed high-intent Google Search campaigns.',
    results: [
      { label: 'Monthly Online Bookings', value: '+215%' },
      { label: 'Google PageSpeed Rating', value: '99/100' },
      { label: 'Return on Ad Spend', value: '6.4x' }
    ],
    testimonial: {
      quote: 'Within 60 days of launching our new web platform with Tuperian, our calendar was fully booked. The automated review system brought us over 80 new 5-star reviews!',
      author: 'Dr. Clara Thorne',
      role: 'Owner & Medical Director'
    },
    image: HERO_IMAGE
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter-it',
    name: 'IT Essentials & Shield',
    tagline: 'Foundational managed IT, cybersecurity, and cloud maintenance for small teams.',
    priceMonthly: 650,
    setupFee: 490,
    idealFor: '1 - 10 Employees',
    highlight: 'Guaranteed 99.9% Uptime SLA',
    features: [
      '24/7 Managed Endpoint Anti-Ransomware',
      'Cloud Backup & Automated Snapshotting',
      'Microsoft 365 / Google Workspace Management',
      'Remote IT Helpdesk (M-F 8am - 6pm)',
      'Quarterly Tech Stack Health Audit',
      'Password Manager & MFA Enforcement'
    ]
  },
  {
    id: 'pro-growth',
    name: 'Pro Growth & Cyber Suite',
    tagline: 'Comprehensive tech management, security compliance, web support, and data analytics.',
    priceMonthly: 1450,
    setupFee: 850,
    popular: true,
    idealFor: '10 - 35 Employees',
    highlight: 'Includes 24/7 Emergency Cyber Response',
    features: [
      'Everything in Starter IT Essentials',
      '24/7 AI-Powered Threat Detection (EDR)',
      'Dedicated Virtual CTO Strategic Oversight',
      'Quarterly Staff Phishing Training Portal',
      'Web Application Maintenance & Speed SLA',
      'Monthly Power BI / Analytics Dashboard',
      'Priority 1-Hour Response Helpdesk SLA'
    ]
  },
  {
    id: 'enterprise-custom',
    name: 'Scale & Custom Engineering',
    tagline: 'Full-spectrum IT, custom app/web engineering, dedicated vCTO, and marketing campaigns.',
    priceMonthly: 2850,
    setupFee: 1200,
    idealFor: '35 - 100+ Employees',
    highlight: 'Bespoke Custom Software Sprints Included',
    features: [
      'Everything in Pro Growth Suite',
      'Dedicated Senior Systems Engineer & vCTO',
      'Custom Web/App Development Sprint Hours',
      'Full Local SEO & Paid Media Campaign Management',
      'Automated Data Pipeline & Warehouse Sync',
      'Regulatory Compliance Certification (HIPAA/SOC2)',
      'Custom Integration & API Development'
    ]
  }
];

export const SECURITY_QUESTIONS: SecurityQuestion[] = [
  {
    id: 'mfa',
    category: 'Authentication',
    question: 'How is Multi-Factor Authentication (MFA) enforced across your organization?',
    options: [
      { label: 'Mandatory on all email, cloud services, and VPN accounts', score: 25, description: 'Best Practice' },
      { label: 'Optional / Only enabled for a few key staff members', score: 10, description: 'Moderate Risk', isRisky: true },
      { label: 'Not enforced or relying solely on single passwords', score: 0, description: 'High Vulnerability!', isRisky: true }
    ]
  },
  {
    id: 'backups',
    category: 'Disaster Recovery',
    question: 'How frequently are company files and customer databases backed up?',
    options: [
      { label: 'Automated daily/hourly offsite encrypted backups with restore testing', score: 25, description: 'Best Practice' },
      { label: 'Manual weekly backups to an external hard drive or cloud folder', score: 10, description: 'Moderate Risk', isRisky: true },
      { label: 'No routine automated backups in place', score: 0, description: 'Critical Risk!', isRisky: true }
    ]
  },
  {
    id: 'phishing',
    category: 'Employee Awareness',
    question: 'When was your team last trained on identifying phishing & ransomware emails?',
    options: [
      { label: 'Regular training and quarterly simulated phishing exercises', score: 20, description: 'Best Practice' },
      { label: 'One-time onboarding document or occasional informal warning', score: 8, description: 'Moderate Risk', isRisky: true },
      { label: 'No security awareness training provided', score: 0, description: 'High Risk!', isRisky: true }
    ]
  },
  {
    id: 'endpoint',
    category: 'Device Protection',
    question: 'What antivirus or endpoint protection is installed on employee laptops & phones?',
    options: [
      { label: 'Managed 24/7 EDR (Endpoint Detection) with central administration', score: 15, description: 'Best Practice' },
      { label: 'Basic free consumer antivirus or built-in OS defaults', score: 5, description: 'Moderate Risk', isRisky: true },
      { label: 'Unmanaged / Staff use personal unmonitored devices', score: 0, description: 'Critical Risk!', isRisky: true }
    ]
  },
  {
    id: 'access',
    category: 'Access Control',
    question: 'What happens to file and cloud access when an employee leaves the company?',
    options: [
      { label: 'Instant centralized single-click access revocation (SSO/MDM)', score: 15, description: 'Best Practice' },
      { label: 'Manual account password changes over 2-3 days', score: 5, description: 'Moderate Risk', isRisky: true },
      { label: 'No formalized offboarding check; shared logins persist', score: 0, description: 'High Risk!', isRisky: true }
    ]
  }
];
