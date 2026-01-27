'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type ServicesProps = {
  onGetPriceClick: () => void;
};

export default function Services({ onGetPriceClick }: ServicesProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const serviceLayouts = [
    'lg:row-span-2', // Emergency Repairs - tall
    '', // Installation Services - standard
    '', // Maintenance - standard
    '', // Drain Cleaning - standard
    '', // Leak Detection - standard
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

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense gap-8">
          {services.map((service, index) => {
            const isFlipped = flippedCards[service.id];
            return (
              <div
                key={service.id}
                className={cn("relative cursor-pointer min-h-[420px]", serviceLayouts[index])}
                style={{ perspective: '1200px' }}
                onClick={() => handleFlip(service.id)}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Card */}
                  <div style={{ backfaceVisibility: 'hidden' }} className="w-full h-full">
                    <Card 
                        className={cn(
                            "border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden h-full",
                            service.imageUrl ? 'text-primary-foreground' : 'bg-card'
                        )}
                    >
                      {service.imageUrl && (
                        <Image 
                            src={service.imageUrl}
                            alt={`${service.title} background`}
                            fill
                            className="object-cover z-0"
                        />
                      )}
                      <div className="relative z-20 flex flex-col flex-grow h-full justify-between p-6">
                        <CardHeader className="p-0">
                            <div className="flex items-center gap-4">
                            <service.icon className={cn("w-12 h-12", service.imageUrl ? 'text-primary-foreground' : 'text-primary')} />
                            <CardTitle className={cn("font-headline text-2xl", service.imageUrl && "text-shadow-md")}>{service.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardFooter className="p-0">
                          <p className={cn("font-semibold text-sm flex items-center gap-2", service.imageUrl && "text-shadow-md")}>
                            View pricing <ArrowRight className="w-4 h-4" />
                          </p>
                        </CardFooter>
                      </div>
                    </Card>
                  </div>

                  {/* Back Card */}
                   <div
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                     <Card className="border-border shadow-card flex flex-col h-full bg-card p-6">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-3xl text-primary">{service.pricing}</CardTitle>
                            <CardDescription className="text-muted-foreground">{service.pricingDetails}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 flex flex-col flex-grow">
                            <p className="text-sm text-foreground mb-4">{service.description}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                            {service.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary" />
                                <span className="text-sm font-medium text-foreground">{feature}</span>
                                </div>
                            ))}
                            </div>
                        </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            )
          })}
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

    