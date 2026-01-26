import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

type ServicesProps = {
  onGetPriceClick: () => void;
};

export default function Services({ onGetPriceClick }: ServicesProps) {
  // Define layout classes for bento grid
  const serviceLayouts = [
    'lg:row-span-2', // Emergency Repairs - tall
    '', // Installation Services - standard
    '', // Maintenance - standard
    'lg:col-span-2', // Drain Cleaning - wide
  ];

  return (
    <section id="services" className="bg-secondary">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground">
            Our Plumbing Services
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            From urgent repairs to routine maintenance, we provide reliable solutions for your home.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className={cn(
              "bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col",
              serviceLayouts[index]
            )}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="w-12 h-12 text-primary" />
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="mb-6">{service.description}</CardDescription>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={onGetPriceClick} className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5">
            Get Exact Price for Free
          </Button>
        </div>
      </div>
    </section>
  );
}
