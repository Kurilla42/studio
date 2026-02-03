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

// Define positions for each badge to mimic the user's drawing on desktop (lg)
const badgePositions: { [key: string]: string } = {
  'why-1': 'lg:top-[12%] lg:left-[58%]', // 24/7 Emergency
  'why-2': 'lg:top-[30%] lg:left-[64%]', // Upfront Pricing
  'why-3': 'lg:top-[48%] lg:left-[72%]', // 1 Year Warranty
  'why-4': 'lg:top-[68%] lg:left-[75%]', // Background-Checked
  'why-9': 'lg:top-[85%] lg:left-[82%]', // Licensed & Insured
};


const FeatureBadge = ({ feature, onClick, isActive }: { feature: WhyChooseUsItem; onClick: () => void; isActive: boolean; }) => {
  const positionClass = badgePositions[feature.id] || 'lg:top-1/2 lg:left-1/2';

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "z-20 flex items-center gap-3 rounded-full font-medium transition-all duration-300 w-full justify-start shadow-md hover:shadow-lg",
        // Base size for mobile and tablet
        "py-3 px-5 text-sm",
        // Larger size for desktop
        "lg:py-3 lg:px-6 lg:text-base", 
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isActive
          ? "bg-white text-primary ring-2 ring-primary"
          : "bg-white text-foreground",
        
        // Mobile & Tablet layout: relative positioning within a flex container
        "relative",
        
        // Desktop layout: absolute positioning
        "lg:absolute lg:w-auto lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2",
        isActive && "lg:scale-105",
        positionClass
      )}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <span>{feature.title}</span>
      <span className={cn("flex h-6 w-6 items-center justify-center rounded-full ml-auto shrink-0", isActive ? "bg-primary/10" : "bg-muted")}>
        <ArrowRight className="h-4 w-4" />
      </span>
    </motion.button>
  );
};


export default function About() {
  const [activeFeature, setActiveFeature] = useState<WhyChooseUsItem | null>(null);

  const backgroundImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const handleFeatureClick = (feature: WhyChooseUsItem) => {
    setActiveFeature(activeFeature?.id === feature.id ? null : feature);
  };

  return (
    <section id="about" className="bg-background !py-12 md:!py-16 lg:!py-20">
      <div className="container">
        {/* Responsive aspect ratio */}
        <div className="relative aspect-[9/16] sm:aspect-[4/3] lg:aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
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
          
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between gap-4 lg:p-8 lg:block">
            
            {/* Badge container: On mobile/tablet, it is a flex column. On desktop, it is a relative block for absolute children. */}
            <div className="order-1 lg:order-none flex flex-col gap-2 lg:relative lg:h-full">
              {interactiveFeatures.map((feature) => (
                <FeatureBadge
                  key={feature.id}
                  feature={feature}
                  onClick={() => handleFeatureClick(feature)}
                  isActive={activeFeature?.id === feature.id}
                />
              ))}
            </div>
            
            {/* Text Card: Order-2 makes it appear below badges on mobile/tablet */}
            <div className="order-2 lg:order-none relative z-10 w-full lg:absolute lg:bottom-8 lg:left-8 lg:w-[45%] lg:max-w-lg">
              <Card className="bg-white text-foreground rounded-xl p-4 sm:p-6 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature ? activeFeature.id : 'default'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="flex flex-col justify-center min-h-[220px] sm:min-h-[240px]"
                  >
                    {activeFeature ? (
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-foreground">{activeFeature.title}</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                          {activeFeature.content}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground mb-4">
                          Why choose us
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
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
