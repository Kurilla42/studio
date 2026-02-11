import type { Service, TeamMember, Testimonial, FaqItem, NavItem, Offer, WhyChooseUsItem } from '@/lib/types';
import { Award, CheckCircle, Clock, DollarSign, Droplet, HardHat, Shield, ShieldAlert, ShieldCheck, Smile, Star, UserCheck, Wrench, Zap, Search } from 'lucide-react';

export const navItems: NavItem[] = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Special Offers', href: '#offers' },
  { name: 'Our Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
];

export const services: Service[] = [
  {
    id: "service-1",
    icon: Wrench,
    title: "24/7 Emergency Plumbing",
    description: "Burst pipe, overflowing toilet, or gas leak? We answer fast, arrive prepared, and stop the damage—day or night. Our certified team is available 24/7 for your peace of mind.",
  },
  {
    id: "service-2",
    icon: Droplet,
    title: "Installations & Upgrades",
    description: "From faucets to full fixture installs, get clean work, code-compliant connections, and dependable performance. We'll help you upgrade your home with modern, efficient plumbing.",
  },
  {
    id: "service-4",
    icon: Zap,
    title: "Drain Cleaning",
    description: "Slow drains or recurring clogs? We clear blockages thoroughly using modern techniques like hydro-jetting to restore proper flow and prevent future backups.",
  },
  {
    id: "service-3",
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Catch small issues before they become big repairs with our annual system checks, tune-ups, and honest recommendations. Keep your plumbing running smoothly and efficiently.",
  }
];

export const heroStats = [
    {
        icon: Award,
        number: "10+",
        label: "Years Experience",
        id: "stat-1"
    },
    {
        icon: Star,
        number: "4.9",
        label: "Google Rating",
        id: "stat-3"
    },
    {
        icon: Smile,
        number: "1000+",
        label: "Happy Customers",
        id: "stat-2"
    },
    {
        icon: Clock,
        number: "24/7",
        label: "Available",
        id: "stat-4"
    }
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "why-1",
    icon: Clock,
    title: "24/7 Emergency Plumbing",
    content: "We answer fast to stop damage day or night, for any plumbing emergency you might face.",
    image: "why-choose-us-1"
  },
  {
    id: "why-2",
    icon: DollarSign,
    title: "Upfront Pricing",
    content: "Receive a detailed, upfront quote before work begins, so there are no surprise fees.",
    image: "why-choose-us-2"
  },
  {
    id: "why-8",
    icon: Clock,
    title: "Response Time - 60 min",
    content: "In an emergency, every minute counts. We guarantee to have a certified technician at your door within 60 minutes of your call."
  },
  {
    id: "why-9",
    icon: ShieldCheck,
    title: "Licensed & Insured",
    content: "We are fully licensed and insured, ensuring your property and our work are completely protected.",
    image: "why-choose-us-3"
  },
  {
    id: "why-3",
    icon: ShieldCheck,
    title: "1 Year Warranty",
    content: "All of our repairs and new installations are fully covered by our one-year labor warranty.",
    image: "why-choose-us-4"
  },
  {
    id: "why-4",
    icon: UserCheck,
    title: "Background-Checked",
    content: "Every technician on our team is 100% background-checked, licensed, and insured for your peace of mind."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Deborah Meniane",
    image: "testimonial1-avatar",
    testimonial: "Always professional. Quick to respond and they get the job done right the first time. Highly recommended!",
    rating: 5,
    time: "1 day ago",
  },
  {
    name: "Steve McCollum",
    image: "testimonial2-avatar",
    testimonial: "Prompt courteous professional. Too early to tell if everything works as it should but so far so good. The technician was very knowledgeable.",
    rating: 4,
    time: "1 day ago",
  },
  {
    name: "Marco Tietz",
    image: "testimonial-marco",
    testimonial: "Winson did a great job diagnosing the problem with my dishwasher and the team helped negotiating the warranty. Great service.",
    rating: 5,
    time: "1 day ago",
  },
  {
    name: "Bruce Neighbors",
    image: null,
    fallbackColor: "bg-red-500 text-white",
    testimonial: "Great customer care skills, very efficient and communicated effectively. I was very pleased with the work.",
    rating: 5,
    time: "2 days ago",
  },
  {
    name: "David Sargent",
    image: null,
    fallbackColor: "bg-green-500 text-white",
    testimonial: "Mario did a great job finding the problem with our clothes washer and fixing it. Very happy with the fast service.",
    rating: 5,
    time: "3 days ago",
  },
  {
    name: "Jessica Miller",
    image: "testimonial-jessica",
    testimonial: "They replaced our old water heater. The team was on time, very respectful of our home, and the price was fair. I'm so glad we called them.",
    rating: 5,
    time: "4 days ago",
  },
  {
    name: "Tom Wilson",
    image: null,
    fallbackColor: "bg-indigo-500 text-white",
    testimonial: "Had a recurring drain clog that other companies couldn't fix. Empire State Plumbing's hydro-jetting service cleared it completely. It's been months with no issues.",
    rating: 5,
    time: "1 week ago",
  },
  {
    name: "Olivia Garcia",
    image: "testimonial-olivia",
    testimonial: "Called them on a Sunday for a leak under the sink. The plumber arrived in under an hour and fixed it quickly. A real lifesaver!",
    rating: 5,
    time: "1 week ago",
  },
  {
    name: "Chris Brown",
    image: "testimonial-chris",
    testimonial: "Good service, but it took a bit longer than I expected to get an appointment for a non-emergency issue.",
    rating: 4,
    time: "2 weeks ago",
  },
  {
    name: "Patricia Smith",
    image: null,
    fallbackColor: "bg-pink-500 text-white",
    testimonial: "Professional, clean, and transparent pricing. No surprises on the final bill. I appreciate their honesty and will use them again.",
    rating: 5,
    time: "3 weeks ago",
  },
  {
    name: "Robert Johnson",
    image: "testimonial-robert",
    testimonial: "The technician, Mike, was fantastic. He explained the repair options for my furnace clearly and didn't pressure me. Great experience.",
    rating: 5,
    time: "1 month ago",
  },
  {
    name: "Linda Davis",
    image: "testimonial-linda",
    testimonial: "They did a full repipe on our old house. It was a big job, but they handled it with professionalism and finished on schedule. The peace of mind is worth it.",
    rating: 5,
    time: "1 month ago",
  },
  {
    name: "James Martinez",
    image: null,
    fallbackColor: "bg-purple-500 text-white",
    testimonial: "Always reliable. I've used Empire State Plumbing for both big and small jobs over the years and they consistently deliver high-quality work.",
    rating: 5,
    time: "2 months ago",
  }
];

export const specialOffers: Offer[] = [
    {
        id: "offer2",
        discount: "$50 OFF",
        title: "Water filter cleaning",
        disclaimer: "Must be mentioned when booking appointment. Cannot be combined with any other offers or discounts."
    },
    {
        id: "offer1",
        discount: "$25 OFF",
        title: "First Time Customers",
        disclaimer: "Must be mentioned when booking appointment. Cannot be combined with any other offers or discounts."
    },
    {
        id: "offer3",
        discount: "$10 OFF",
        title: "Drain cleaning",
        disclaimer: "Must be mentioned when booking appointment. Cannot be combined with any other offers or discounts."
    }
];

export const teamMembers: TeamMember[] = [
    {
        id: "team-1",
        name: "John Smith",
        role: "Emergency Repairs Specialist",
        experience: "15+ Years Of Experience",
        image: "team1-image",
        description: "With over 15 years of experience in rapid response emergency plumbing, John is an expert at diagnosing and resolving urgent issues under pressure, ensuring your home is safe and functional around the clock.",
        certifications: ["Master Plumber License", "Gas Line Specialist", "Emergency Response Certified", "Backflow Prevention Certified"]
    },
    {
        id: "team-2",
        name: "Michael Johnson",
        role: "Installation Services Expert",
        experience: "12+ Years Of Experience",
        image: "team2-image",
        description: "Specializing in water heater and fixture installations for over a decade, Michael ensures every new component is integrated flawlessly into your system for optimal performance and longevity.",
        certifications: ["Certified Installer", "Tankless Water Heater Pro", "Fixture Specialist", "Water Treatment Certified"]
    },
    {
        id: "team-3",
        name: "David Williams",
        role: "Maintenance & Inspection Pro",
        experience: "18+ Years Of Experience",
        image: "team3-image",
        description: "Our preventive maintenance professional, David, brings nearly two decades of expertise in system diagnostics, helping homeowners avoid costly repairs through meticulous and proactive care.",
        certifications: ["System Auditor", "Preventive Care Expert", "Leak Detection Certified", "Plumbing Inspector (CPI)"]
    },
    {
        id: "team-4",
        name: "Chris Brown",
        role: "Drain Cleaning Technician",
        experience: "14+ Years Of Experience",
        image: "team4-image",
        description: "With extensive experience in advanced drain cleaning technology, Chris can tackle the most stubborn clogs using hydro-jetting and camera inspections to restore flow quickly and effectively.",
        certifications: ["Hydro Jetting Certified", "Camera Inspection Pro", "Root Removal Specialist", "Confined Space Entry Certified"]
    }
];

export const faqs: FaqItem[] = [
    {
        id: 'faq-1',
        question: "How much does plumbing service cost?",
        answer: `Our pricing is transparent and upfront - no hidden fees or surprise charges. Here's our pricing structure:`,
        list: [
            { title: "Service Call", detail: "$79 (waived with completed repair)" },
            { title: "Emergency Repairs", detail: "Starting at $150-$500 depending on complexity" },
            { title: "Water Heater Installation", detail: "$800-$2,500 (depends on type and capacity)" },
            { title: "Drain Cleaning", detail: "$150-$400 (standard cleaning)" },
            { title: "Fixture Installation", detail: "$125-$350 per fixture" }
        ],
        conclusion: `Every job begins with a free diagnostic and detailed quote. You'll know the exact price before any work starts.`
    },
    {
        id: 'faq-2',
        question: "How quickly can you arrive?",
        answer: `We understand that plumbing emergencies can't wait. That's why we prioritize fast response:`,
        list: [
          { title: "Emergency Service", detail: "60 minutes or less in most cases" },
          { title: "Same-Day Service", detail: "Available for urgent non-emergency repairs" },
          { title: "Scheduled Appointments", detail: "We offer flexible scheduling to fit your calendar" },
          { title: "24/7 Availability", detail: "Our team is always ready to respond, day or night" }
        ],
        conclusion: `Call now and we'll dispatch a certified technician to your location immediately.`
    },
    {
        id: 'faq-3',
        question: "Do you offer a warranty or guarantee?",
        answer: `Yes! We stand behind every job we complete with comprehensive guarantees:`,
        list: [
            { title: "2-Year Labor Warranty", detail: "All repairs and installations are covered for 2 full years" },
            { title: "Parts Warranty", detail: "Manufacturer warranties on all parts and equipment" },
            { title: "100% Satisfaction Guarantee", detail: "If you're not happy, we'll make it right" },
            { title: "Free Follow-up Visits", detail: "If an issue persists within warranty period, we return at no charge" }
        ],
        conclusion: `Our warranty is one of the best in the industry because we use quality parts and employ expert technicians.`
    },
    {
        id: 'faq-4',
        question: "What is your service process?",
        answer: `Our streamlined service process ensures you get fast, professional results every time:`,
        list: [
          { title: "Step 1 - Contact Us", detail: "Call us at (555) 123-4567 or submit an online request. We'll gather details about your plumbing issue." },
          { title: "Step 2 - Fast Response", detail: "For emergencies, our certified Empire State Plumbing technician arrives within 60 minutes, fully equipped to solve most common problems." },
          { title: "Step 3 - Diagnosis & Quote", detail: "We perform a thorough inspection and provide upfront pricing with no hidden fees or surprise charges." },
          { title: "Step 4 - Expert Repair", detail: "Once you approve, we complete the work using quality parts and proven techniques. Most jobs are finished the same day." },
          { title: "Step 5 - Warranty & Payment", detail: "We clean up, review everything with you, and provide a 2-year warranty. You only pay when 100% satisfied." }
        ],
        conclusion: `This proven process has helped 1,000+ homeowners solve their plumbing problems quickly and reliably.`
    },
    {
        id: 'faq-5',
        question: "Are your technicians licensed and certified?",
        answer: `Yes, absolutely. Every Empire State Plumbing technician is fully licensed, insured, and certified. Here's what that means for you:`,
        list: [
            { title: "State Licensed", detail: "All technicians hold current state plumbing licenses" },
            { title: "Fully Insured", detail: "We carry comprehensive liability and workers' compensation insurance" },
            { title: "Ongoing Training", detail: "Our team participates in continuous education to stay current with the latest techniques and code requirements" },
            { title: "Background Checked", detail: "Every team member passes thorough background and drug screening" }
        ],
        conclusion: `When you hire Empire State Plumbing, you're hiring experienced professionals who meet the highest industry standards.`
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

    
