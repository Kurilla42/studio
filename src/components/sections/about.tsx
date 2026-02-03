'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whyChooseUsItems } from '@/lib/data';
import type { WhyChooseUsItem } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

// Let's use 5 features for the interactive display
const interactiveFeatures = whyChooseUsItems.filter(item => 
  ['why-1', 'why-2', 'why-9', 'why-3', 'why-4'].includes(item.id)
);

// Define positions for each badge to mimic the reference layout on desktop
const badgePositions: { [key: string]: string } = {
  // Tablet (md) - Arranged along top and right edges
  'why-1': 'md:top-[10%] md:left-[20%]',
  'why-2': 'md:top-[10%] md:left-[50%]',
  'why-9': 'md:top-[10%] md:left-[80%]',
  'why-3': 'md:top-[45%] md:left-[90%]',
  'why-4': 'md:top-[80%] md:left-[90%]',

  // Desktop (lg) - From user's drawing, overrides tablet styles
  'why-1': 'lg:top-[10%] lg:left-[10%]',
  'why-2': 'lg:top-[25%] lg:left-[35%]',
  'why-9': 'lg:top-[70%] lg:left-[80%]',
  'why-3': 'lg:top-[38%] lg:left-[50%]',
  'why-4': 'lg:top-[60%] lg:left-[55%]',
};


const FeatureBadge = ({ feature, onClick, isActive }: { feature: WhyChooseUsItem; onClick: () => void; isActive: boolean; }) => {
  const positionClass = badgePositions[feature.id] || 'md:top-1/2 md:left-1/2';

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "z-20 flex items-center gap-3 rounded-full font-medium transition-all duration-300",
        "py-3 px-6 text-base md:py-2 md:px-4 md:text-sm lg:py-3 lg:px-6 lg:text-base", // Responsive badge size
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isActive
          ? "bg-white text-primary ring-2 ring-primary shadow-lg"
          : "bg-white text-foreground shadow-md hover:shadow-lg",
        
        // Mobile layout: default, relative positioning within a flex container
        "relative w-full justify-start",
        
        // Tablet & Desktop layout: absolute positioning
        "md:absolute md:w-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2",
        isActive && "md:scale-105",
        positionClass
      )}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <span>{feature.title}</span>
      <span className={cn("flex h-7 w-7 items-center justify-center rounded-full ml-auto", isActive ? "bg-primary/10" : "bg-muted")}>
        <ArrowRight className="h-4 w-4" />
      </span>
    </motion.button>
  );
};


export default function About() {
  const [activeFeature, setActiveFeature] = useState<WhyChooseUsItem | null>(null);

  const backgroundImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const handleFeatureClick = (feature: WhyChooseUsItem) => {
    setActiveFeature(feature);
  };

  return (
    <section id="about" className="bg-background !py-12 md:!py-16 lg:!py-20">
      <div className="container">
        {/* Taller aspect ratio on mobile */}
        <div className="relative aspect-[9/21] md:aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
          {backgroundImage && (
            <Image
              src={backgroundImage.imageUrl}
              alt={backgroundImage.description}
              fill
              quality={100}
              className="object-cover"
              data-ai-hint={backgroundImage.imageHint}
            />
          )}
          
          <div className="absolute inset-0 p-4 flex flex-col justify-between gap-4 md:p-6 lg:p-8 md:block">
            
            {/* Badge container: order 1 on mobile, reset on md */}
            <div className="order-1 md:order-none flex flex-col gap-2 md:relative md:h-full">
              {interactiveFeatures.map((feature) => (
                <FeatureBadge
                  key={feature.id}
                  feature={feature}
                  onClick={() => handleFeatureClick(feature)}
                  isActive={activeFeature?.id === feature.id}
                />
              ))}
            </div>

            {/* Text Card: order 2 on mobile, smaller on tablet */}
            <div className="order-2 md:order-none relative z-10 w-full md:absolute md:bottom-4 md:left-4 md:max-w-xs lg:bottom-8 lg:left-8 lg:max-w-lg lg:h-[48%]">
              <Card className="bg-white text-foreground rounded-xl p-4 md:p-5 lg:p-6 shadow-xl h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature ? activeFeature.id : 'default'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="min-h-[240px] lg:min-h-[280px] flex flex-col justify-center h-full"
                  >
                    {activeFeature ? (
                      <div>
                        {/* Responsive font size for active feature */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">{activeFeature.title}</h3>
                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                          {activeFeature.content}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground mb-4">
                          Why choose us
                        </div>
                        {/* Responsive font size for default text */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                          Discover why Hundreds of Homeowners Choose Us.
                        </h2>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
