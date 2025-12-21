import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export type Testimonial = {
  name: string;
  image: string | null;
  testimonial: string;
  rating: number;
  time: string;
  verified: boolean;
  fallbackColor?: string;
};

export type Offer = {
    id: string;
    title: string;
    discount: string;
    image: string;
};

export type TeamMember = {
    name: string;
    image: string;
    description: string;
    certifications: string[];
};

export type FaqItem = {
    question: string;
    answer: string;
};

export type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  content: React.ReactNode;
  timestamp: string;
};
