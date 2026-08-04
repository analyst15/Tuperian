export type ServiceCategoryKey =
  | 'it-consultancy'
  | 'cyber-security'
  | 'app-development'
  | 'web-development'
  | 'digital-marketing'
  | 'data-analysis';

export interface ServiceDetail {
  id: ServiceCategoryKey;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imagePath: string;
  deliverables: string[];
  techStack: string[];
  targetAudience: string;
  avgTimeline: string;
  typicalRoi: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  serviceCategory: ServiceCategoryKey;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  setupFee: number;
  popular?: boolean;
  idealFor: string;
  features: string[];
  highlight: string;
}

export interface SecurityQuestion {
  id: string;
  category: string;
  question: string;
  options: {
    label: string;
    score: number;
    description: string;
    isRisky?: boolean;
  }[];
}

export interface AIStrategyRoadmap {
  summary: string;
  itInfrastructure: string[];
  cyberSecurity: string[];
  webAndApp: string[];
  marketingAndData: string[];
  roiEstimate: string;
}

export interface ConsultationBooking {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  teamSize: string;
  servicesNeeded: string[];
  notes?: string;
  preferredDate: string;
  preferredTime: string;
  createdAt: string;
  status: 'Received' | 'Assigned' | 'Consultation Scheduled';
}
