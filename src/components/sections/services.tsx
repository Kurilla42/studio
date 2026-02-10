'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

type ServicesProps = {
  onGetPriceClick: () => void;
};

export default function Services({ onGetPriceClick }: ServicesProps) {
  
  return (
    <section id="services" className="bg-[#000926] bg-noise-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center mb-12">
          <div>
            <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-white text-left">
              Our Plumbing Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 3;
            return (
              <Card
                key={service.id}
                className={cn(
                  "bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col p-8 relative h-full",
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                )}
              >
                <div className="absolute top-8 right-8 p-3 bg-primary/10 rounded-lg flex-shrink-0">
                   <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <CardTitle className="text-2xl pr-16">{service.title}</CardTitle>
                
                <CardContent className="p-0 flex-grow mt-4">
                  <p className="text-muted-foreground text-base">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
