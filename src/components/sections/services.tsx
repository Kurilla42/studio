'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

type ServicesProps = {
  onGetPriceClick: () => void;
};

export default function Services({ onGetPriceClick }: ServicesProps) {
  
  const serviceLayouts = [
    'md:col-span-2', // Emergency Plumbing
    'md:col-span-1', // Installations & Upgrades
    'md:col-span-1', // Drain Cleaning
    'md:col-span-2', // Preventive Maintenance
  ];

  return (
    <section id="services" className="bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-foreground text-left">
              Our Plumbing Services
            </h2>
          </div>
          <div>
            <p className="text-xl text-muted-foreground text-left lg:text-right">
              From urgent repairs to routine maintenance, we provide reliable solutions for your home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={cn(
                    "bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col p-6",
                    serviceLayouts[index]
                )}
              >
                <CardHeader className="p-0 flex-row justify-between items-start mb-4">
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                     <Icon className="w-6 h-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
