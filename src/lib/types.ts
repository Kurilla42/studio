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
  fallbackColor?: string;
};

export type Offer = {
    id: string;
    title: string;
    discount: string;
    disclaimer: string;
};

export type TeamMember = {
    name: string;
    image: string;
    description: string;
    certifications: string[];
};

export type FaqItem = {
    id: string;
    question: string;
    answer: string;
    list?: { title: string; detail: string }[];
    conclusion?: string;
};

export type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  content: React.ReactNode;
  timestamp: string;
};
