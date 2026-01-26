'use client';

import { Card, CardTitle } from '@/components/ui/card';
import { whyChooseUsItems } from '@/lib/data';
import { cn } from '@/lib/utils';


export default function About() {
  const layoutClasses = [
    'lg:col-span-3', // 24/7 Emergency
    'lg:col-span-3', // Upfront Pricing
    'lg:col-span-2', // 1 Year Warranty
    'lg:col-span-2', // Background-Checked
    'lg:col-span-2', // Installations
    'lg:col-span-3', // Preventive Maintenance
    'lg:col-span-3', // Drain Cleaning
  ];

  return (
    <section id="about" className="bg-secondary !py-12 md:!py-16 lg:!py-20">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground">
                Why Choose Us
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
                For over a decade, we've built a reputation for reliable, transparent, and high-quality plumbing services. Here's why homeowners trust ProFlow for their most critical plumbing needs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className={cn(
                  "bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col p-4 sm:p-6",
                  layoutClasses[index],
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                     <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm flex-grow">{item.content}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
