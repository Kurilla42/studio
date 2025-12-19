import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { services } from '@/lib/data';

type ServicesProps = {
  onGetPriceClick: () => void;
};

export default function Services({ onGetPriceClick }: ServicesProps) {
  return (
    <section id="services" className="bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-2 border-input/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="whitespace-nowrap">{service.title}</CardTitle>
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
