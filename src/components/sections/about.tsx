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

// Let's use 4 features for the interactive display, like in the reference image.
const interactiveFeatures = whyChooseUsItems.filter(item => 
  ['why-1', 'why-2', 'why-3', 'why-9'].includes(item.id)
);

// Define positions for each badge to mimic the reference layout
const badgePositions: { [key: string]: string } = {
  'why-1': 'top-[15%] left-[25%]', // 24/7 Emergency Plumbing -> Top Experience
  'why-2': 'top-[30%] right-[10%]', // Upfront Pricing -> 24/7 Support
  'why-9': 'bottom-[35%] left-[55%]', // Licensed & Insured -> Advanced Technology
  'why-3': 'bottom-[15%] right-[20%]', // 1 Year Warranty -> Transparent Reporting
};


const FeatureBadge = ({ feature, onClick, isActive }: { feature: WhyChooseUsItem; onClick: () => void; isActive: boolean; }) => {
  const positionClass = badgePositions[feature.id] || 'top-1/2 left-1/2';

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "absolute z-20 flex items-center gap-2 rounded-full py-2 px-4 text-sm font-medium transition-all duration-300 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isActive
          ? "bg-primary text-primary-foreground shadow-lg scale-105"
          : "bg-card/70 text-foreground hover:bg-card/100"
      , positionClass)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <span>{feature.title}</span>
      <span className={cn("flex h-5 w-5 items-center justify-center rounded-full", isActive ? "bg-white/20" : "bg-muted")}>
        <ArrowRight className={cn("h-3 w-3", isActive ? "text-white" : "text-foreground")} />
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
    <section id="about" className="bg-secondary !py-12 md:!py-16 lg:!py-20">
      <div className="container">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6 lg:p-8 flex items-end">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {interactiveFeatures.map((feature) => (
            <FeatureBadge
              key={feature.id}
              feature={feature}
              onClick={() => handleFeatureClick(feature)}
              isActive={activeFeature?.id === feature.id}
            />
          ))}

          <div className="relative z-10 w-full max-w-lg">
            <Card className="bg-card/80 backdrop-blur-md rounded-xl p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature ? activeFeature.id : 'default'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="min-h-[140px] flex flex-col justify-center"
                >
                  {activeFeature ? (
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{activeFeature.title}</h3>
                      <p className="text-muted-foreground text-base">
                        {activeFeature.content}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="inline-block rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground mb-4">
                        Why choose us
                      </div>
                      <h2 className="text-[2.7rem] font-bold text-foreground leading-tight">
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
    </section>
  );
}
