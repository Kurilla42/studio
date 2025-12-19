import type { Service, TeamMember, Testimonial, FaqItem, NavItem, Offer } from '@/lib/types';
import { Award, CheckCircle, Droplet, Shield, Smile, Star, Wrench, Zap } from 'lucide-react';

export const navItems: NavItem[] = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Special Offers', href: '#offers' },
  { name: 'Our Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "24/7 emergency plumbing services for urgent issues. Fast response time.",
    features: ["Burst Pipes", "Gas Leaks", "Blocked Drains"]
  },
  {
    icon: Droplet,
    title: "Installation Services",
    description: "Professional installation of fixtures, appliances, and complete plumbing systems.",
    features: ["Water Heaters", "Fixtures", "Appliances"]
  },
  {
    icon: Shield,
    title: "Maintenance",
    description: "Regular maintenance and thorough inspections to prevent costly future repairs.",
    features: ["Annual Checks", "Preventive Care", "System Audits"]
  },
  {
    icon: Zap,
    title: "Drain Cleaning",
    description: "Advanced drain cleaning services using the latest technology and techniques.",
    features: ["Hydro Jetting", "Camera Inspection", "Root Removal"]
  }
];

export const heroStats = [
    {
        icon: Award,
        number: "10+ Years",
        label: "Experience",
        id: "stat-1"
    },
    {
        icon: Smile,
        number: "1000+",
        label: "Happy Customers",
        id: "stat-2"
    },
    {
        icon: Star,
        number: "4.9",
        label: "Google Rating",
        id: "stat-3"
    },
    {
        icon: CheckCircle,
        number: "Licensed",
        label: "Professionals",
        id: "stat-4"
    }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    image: "testimonial1-avatar",
    testimonial: "Incredible service! They fixed our burst pipe within an hour of my call. The plumber was professional, courteous, and explained everything clearly. I highly recommend ProFlow Plumbing for any emergency.",
    rating: 5,
  },
  {
    name: "Robert Anderson",
    image: "testimonial2-avatar",
    testimonial: "Best plumbers in town! Installed our new water heater efficiently and at a fair price. The team was punctual, clean, and did a fantastic job. We'll definitely be using them for all our plumbing needs.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    image: "testimonial3-avatar",
    testimonial: "A professional team that went above and beyond. They not only fixed the leak but also identified a potential future issue, saving us a lot of money and stress. Their honesty and expertise are unmatched.",
    rating: 5,
  },
    {
    name: "David Williams",
    image: "testimonial4-avatar",
    testimonial: "Outstanding emergency service! Called them at midnight for a clogged drain and they arrived promptly. The technician was friendly and had the problem resolved in no time. Truly a 24/7 lifesaver!",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    image: "testimonial5-avatar",
    testimonial: "Exceptional quality and service! They renovated our master bathroom plumbing, and the results are flawless. Their attention to detail and craftsmanship is impressive. So glad we chose ProFlow.",
    rating: 5,
  },
];

export const specialOffers: Offer[] = [
    {
        id: "offer1",
        title: "Faucet installation",
        discount: "$24 off",
        image: "offer1-bg",
    },
    {
        id: "offer2",
        title: "Water filter cleaning",
        discount: "50% off",
        image: "offer2-bg",
    },
    {
        id: "offer3",
        title: "Drain cleaning",
        discount: "$10 off",
        image: "offer3-bg",
    }
];

export const teamMembers: TeamMember[] = [
    {
        name: "Emergency Repairs Specialist",
        image: "team1-image",
        description: "With over 15 years of experience in rapid response emergency plumbing, our specialist is an expert at diagnosing and resolving urgent issues under pressure, ensuring your home is safe and functional around the clock.",
        certifications: ["Master Plumber License", "Gas Line Specialist", "Emergency Response Certified", "15+ Years Of Experience"]
    },
    {
        name: "Installation Services Expert",
        image: "team2-image",
        description: "Specializing in water heater and fixture installations for 12+ years, this expert ensures every new component is integrated flawlessly into your system for optimal performance and longevity.",
        certifications: ["Certified Installer", "Tankless Water Heater Pro", "Fixture Specialist", "12+ Years Of Experience"]
    },
    {
        name: "Maintenance & Inspection Pro",
        image: "team3-image",
        description: "Our preventive maintenance professional brings 18+ years of expertise in system diagnostics and inspections, helping homeowners avoid costly repairs through meticulous and proactive care.",
        certifications: ["System Auditor", "Preventive Care Expert", "Leak Detection Certified", "18+ Years Of Experience"]
    },
    {
        name: "Drain Cleaning Technician",
        image: "team4-image",
        description: "With 14+ years mastering advanced drain cleaning technology, our technician can tackle the most stubborn clogs using hydro-jetting and camera inspections to restore flow quickly and effectively.",
        certifications: ["Hydro Jetting Certified", "Camera Inspection Pro", "Root Removal Specialist", "14+ Years Of Experience"]
    }
];

export const faqs: FaqItem[] = [
    {
        question: "How much does plumbing service cost?",
        answer: "Our pricing is transparent and upfront - no hidden fees or surprise charges. Here's our pricing structure:\n\n- Service Call: $79 (waived with completed repair)\n- Emergency Repairs: Starting at $150-$500 depending on complexity\n- Water Heater Installation: $800-$2,500 (depends on type and capacity)\n- Drain Cleaning: $150-$400 (standard cleaning)\n- Fixture Installation: $125-$350 per fixture\n\nEvery job begins with a free diagnostic and detailed quote. You'll know the exact price before any work starts."
    },
    {
        question: "How quickly can you arrive?",
        answer: "We understand that plumbing emergencies can't wait. That's why we prioritize fast response:\n\n- Emergency Service: 60 minutes or less in most cases\n- Same-Day Service: Available for urgent non-emergency repairs\n- Scheduled Appointments: We offer flexible scheduling to fit your calendar\n- 24/7 Availability: Our team is always ready to respond, day or night\n\nCall now and we'll dispatch a certified technician to your location immediately."
    },
    {
        question: "Do you offer a warranty or guarantee?",
        answer: "Yes! We stand behind every job we complete with comprehensive guarantees:\n\n- 2-Year Labor Warranty: All repairs and installations are covered for 2 full years\n- Parts Warranty: Manufacturer warranties on all parts and equipment\n- 100% Satisfaction Guarantee: If you're not happy, we'll make it right\n- Free Follow-up Visits: If an issue persists within warranty period, we return at no charge\n\nOur warranty is one of the best in the industry because we use quality parts and employ expert technicians."
    },
    {
        question: "What is your service process?",
        answer: "Our streamlined service process ensures you get fast, professional results every time:\n\nStep 1 - Contact Us: Call us at (555) 123-4567 or submit an online request. We'll gather details about your plumbing issue.\nStep 2 - Fast Response: For emergencies, our certified technician arrives within 60 minutes, fully equipped to solve most common problems.\nStep 3 - Diagnosis & Quote: We perform a thorough inspection and provide upfront pricing with no hidden fees or surprise charges.\nStep 4 - Expert Repair: Once you approve, we complete the work using quality parts and proven techniques. Most jobs are finished the same day.\nStep 5 - Warranty & Payment: We clean up, review everything with you, and provide a 2-year warranty. You only pay when 100% satisfied.\n\nThis proven process has helped 1,000+ homeowners solve their plumbing problems quickly and reliably."
    },
    {
        question: "Are your technicians licensed and certified?",
        answer: "Yes, absolutely. Every ProFlow technician is fully licensed, insured, and certified. Here's what that means for you:\n\n- State Licensed: All technicians hold current state plumbing licenses\n- Fully Insured: We carry comprehensive liability and workers' compensation insurance\n- Ongoing Training: Our team participates in continuous education to stay current with the latest techniques and code requirements\n- Background Checked: Every team member passes thorough background and drug screening\n\nWhen you hire ProFlow, you're hiring experienced professionals who meet the highest industry standards."
    }
]

export const socialProofData = {
  actions: [
    "just booked Emergency Repairs",
    "just scheduled Drain Cleaning",
    "just requested Installation Services",
    "just booked Maintenance Service",
  ],
  times: ["2 minutes ago", "5 minutes ago", "8 minutes ago", "12 minutes ago"],
  avatars: ["social-proof-avatar-1", "social-proof-avatar-2", "social-proof-avatar-3", "social-proof-avatar-4"],
  names: ["Alex P.", "Maria K.", "John D.", "Samantha G.", "Michael B."],
};
