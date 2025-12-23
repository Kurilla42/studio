'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const comparisonData = [
  { feature: 'Response Time', us: '60 minutes', competitors: '3-5 hours' },
  { feature: 'Licensed & Insured', us: 'Yes', competitors: 'Not Always' },
  { feature: 'Upfront Pricing', us: 'Always', competitors: 'Rarely' },
  { feature: 'Background-Checked Technicians', us: '100%', competitors: 'Unknown' },
  { feature: 'Warranty on Work', us: '1 year', competitors: 'Limited' },
  { feature: '24/7 Emergency Service', us: 'Yes', competitors: 'No' },
];

const advantages = [
    { title: 'Upfront Pricing' },
    { title: 'No Hidden Fees' },
    { title: 'Free Estimates' },
    { title: 'Dependable Service' }
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-main-image');
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="about" ref={sectionRef} className="bg-secondary !py-12 md:!py-16 lg:!py-20 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="hidden md:block relative group rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] md:min-h-[600px]">
            {aboutImage && (
              <motion.div
                className="absolute inset-0"
                style={{ y: imageY }}
              >
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover object-center"
                  data-ai-hint={aboutImage.imageHint}
                />
              </motion.div>
            )}
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Hundreds of Homeowners Choose ProFlow Plumbing
              </h2>
            </div>
            <Card className="overflow-hidden shadow-card">
              <table className="w-full text-sm text-center md:text-left">
                <thead>
                  <tr className="primary-gradient">
                    <th className="p-3 text-left font-bold text-primary-foreground"></th>
                    <th className="p-3 text-center font-bold text-primary-foreground">Us</th>
                    <th className="p-3 text-center font-bold text-primary-foreground">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={item.feature} className="border-b border-border last:border-b-0">
                      <td className="p-3 font-semibold text-foreground text-center md:text-left">{item.feature}</td>
                      <td className="p-3 text-center bg-primary/10 text-primary font-bold">{item.us}</td>
                      <td className="p-3 text-center text-muted-foreground">{item.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                ProFlow Plumbing is more than a plumbing service — it's your partner in protecting your home. For over 10 years, we've helped 1,000+ families avoid costly damage and get their plumbing back to normal quickly and safely. Our licensed and insured specialists handle everything from emergency burst pipes to planned upgrades and preventative maintenance.
                </p>
                <p>
                Plumbing issues never happen at a good time. A leak can destroy walls, a sewer backup can stop life at home, and a burst winter pipe can cost thousands. That's why we provide fast emergency response, accurate diagnostics, and fair, transparent pricing — no hidden fees or surprise charges.
                </p>
                <p>
                We don't just fix problems; we build long-term relationships with homeowners who know they can rely on us. When plumbing trouble hits, we work to be the first name you trust — that's the ProFlow Plumbing promise.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4">
              {advantages.map((advantage) => (
                <div key={advantage.title} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground">{advantage.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
