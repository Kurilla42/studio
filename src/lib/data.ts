import type { Service, TeamMember, Testimonial, FaqItem, NavItem, Offer } from '@/lib/types';
import { Award, CheckCircle, Clock, Droplet, Shield, Smile, Star, Wrench, Zap } from 'lucide-react';

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
        number: "",
        label: "Google Rating",
        id: "stat-3"
    },
    {
        icon: Clock,
        number: "24/7",
        label: "Available",
        id: "stat-4"
    }
];

export const testimonials: Testimonial[] = [
  {
    name: "Deborah Meniane",
    image: "testimonial1-avatar",
    testimonial: "Always professional. Quick to respond and they get the job done right the first time. Highly recommended!",
    rating: 5,
    time: "1 day ago",
    verified: true
  },
  {
    name: "Steve McCollum",
    image: "testimonial2-avatar",
    testimonial: "Prompt courteous professional. Too early to tell if everything works as it should but so far so good. The technician was very knowledgeable.",
    rating: 4,
    time: "1 day ago",
    verified: true
  },
  {
    name: "Marco Tietz",
    image: "testimonial-marco",
    testimonial: "Winson did a great job diagnosing the problem with my dishwasher and the team helped negotiating the warranty. Great service.",
    rating: 5,
    time: "1 day ago",
    verified: true
  },
  {
    name: "Bruce Neighbors",
    image: null,
    fallbackColor: "bg-red-500 text-white",
    testimonial: "Great customer care skills, very efficient and communicated effectively. I was very pleased with the work.",
    rating: 5,
    time: "2 days ago",
    verified: true
  },
  {
    name: "David Sargent",
    image: null,
    fallbackColor: "bg-green-500 text-white",
    testimonial: "Mario did a great job finding the problem with our clothes washer and fixing it. Very happy with the fast service.",
    rating: 5,
    time: "3 days ago",
    verified: true
  },
  {
    name: "Jessica Miller",
    image: "testimonial-jessica",
    testimonial: "They replaced our old water heater. The team was on time, very respectful of our home, and the price was fair. I'm so glad we called them.",
    rating: 5,
    time: "4 days ago",
    verified: true
  },
  {
    name: "Tom Wilson",
    image: null,
    fallbackColor: "bg-indigo-500 text-white",
    testimonial: "Had a recurring drain clog that other companies couldn't fix. ProFlow's hydro-jetting service cleared it completely. It's been months with no issues.",
    rating: 5,
    time: "1 week ago",
    verified: true
  },
  {
    name: "Olivia Garcia",
    image: "testimonial-olivia",
    testimonial: "Called them on a Sunday for a leak under the sink. The plumber arrived in under an hour and fixed it quickly. A real lifesaver!",
    rating: 5,
    time: "1 week ago",
    verified: false
  },
  {
    name: "Chris Brown",
    image: "testimonial-chris",
    testimonial: "Good service, but it took a bit longer than I expected to get an appointment for a non-emergency issue.",
    rating: 4,
    time: "2 weeks ago",
    verified: true
  },
  {
    name: "Patricia Smith",
    image: null,
    fallbackColor: "bg-pink-500 text-white",
    testimonial: "Professional, clean, and transparent pricing. No surprises on the final bill. I appreciate their honesty and will use them again.",
    rating: 5,
    time: "3 weeks ago",
    verified: true
  },
  {
    name: "Robert Johnson",
    image: "testimonial-robert",
    testimonial: "The technician, Mike, was fantastic. He explained the repair options for my furnace clearly and didn't pressure me. Great experience.",
    rating: 5,
    time: "1 month ago",
    verified: true
  },
  {
    name: "Linda Davis",
    image: "testimonial-linda",
    testimonial: "They did a full repipe on our old house. It was a big job, but they handled it with professionalism and finished on schedule. The peace of mind is worth it.",
    rating: 5,
    time: "1 month ago",
    verified: false
  },
  {
    name: "James Martinez",
    image: null,
    fallbackColor: "bg-purple-500 text-white",
    testimonial: "Always reliable. I've used ProFlow for both big and small jobs over the years and they consistently deliver high-quality work.",
    rating: 5,
    time: "2 months ago",
    verified: true
  }
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
        answer: `Our pricing is transparent and upfront - no hidden fees or surprise charges. Here's our pricing structure:

- Service Call: $79 (waived with completed repair)
- Emergency Repairs: Starting at $150-$500 depending on complexity
- Water Heater Installation: $800-$2,500 (depends on type and capacity)
- Drain Cleaning: $150-$400 (standard cleaning)
- Fixture Installation: $125-$350 per fixture

Every job begins with a free diagnostic and detailed quote. You'll know the exact price before any work starts.`
    },
    {
        question: "How quickly can you arrive?",
        answer: `We understand that plumbing emergencies can't wait. That's why we prioritize fast response:

- Emergency Service: 60 minutes or less in most cases
- Same-Day Service: Available for urgent non-emergency repairs
- Scheduled Appointments: We offer flexible scheduling to fit your calendar
- 24/7 Availability: Our team is always ready to respond, day or night

Call now and we'll dispatch a certified technician to your location immediately.`
    },
    {
        question: "Do you offer a warranty or guarantee?",
        answer: `Yes! We stand behind every job we complete with comprehensive guarantees:

- 2-Year Labor Warranty: All repairs and installations are covered for 2 full years
- Parts Warranty: Manufacturer warranties on all parts and equipment
- 100% Satisfaction Guarantee: If you're not happy, we'll make it right
- Free Follow-up Visits: If an issue persists within warranty period, we return at no charge

Our warranty is one of the best in the industry because we use quality parts and employ expert technicians.`
    },
    {
        question: "What is your service process?",
        answer: `Our streamlined service process ensures you get fast, professional results every time:

Step 1 - Contact Us: Call us at (555) 123-4567 or submit an online request. We'll gather details about your plumbing issue.
Step 2 - Fast Response: For emergencies, our certified technician arrives within 60 minutes, fully equipped to solve most common problems.
Step 3 - Diagnosis & Quote: We perform a thorough inspection and provide upfront pricing with no hidden fees or surprise charges.
Step 4 - Expert Repair: Once you approve, we complete the work using quality parts and proven techniques. Most jobs are finished the same day.
Step 5 - Warranty & Payment: We clean up, review everything with you, and provide a 2-year warranty. You only pay when 100% satisfied.

This proven process has helped 1,000+ homeowners solve their plumbing problems quickly and reliably.`
    },
    {
        question: "Are your technicians licensed and certified?",
        answer: `Yes, absolutely. Every ProFlow technician is fully licensed, insured, and certified. Here's what that means for you:

- State Licensed: All technicians hold current state plumbing licenses
- Fully Insured: We carry comprehensive liability and workers' compensation insurance
- Ongoing Training: Our team participates in continuous education to stay current with the latest techniques and code requirements
- Background Checked: Every team member passes thorough background and drug screening

When you hire ProFlow, you're hiring experienced professionals who meet the highest industry standards.`
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

    
