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
  // 2 above info block on left
  'why-1': 'md:top-[50%] md:left-[15%]',   // 24/7 Emergency Plumbing
  'why-2': 'md:top-[65%] md:left-[25%]',   // Upfront Pricing
  // 1 on right
  'why-9': 'md:top-[70%] md:left-[80%]',   // Licensed & Insured
  // 2 in center
  'why-3': 'md:top-[85%] md:left-[50%]',   // 1 Year Warranty
  'why-4': 'md:top-[60%] md:left-[55%]',   // Background-Checked
};


const FeatureBadge = ({ feature, onClick, isActive }: { feature: WhyChooseUsItem; onClick: () => void; isActive: boolean; }) => {
  const positionClass = badgePositions[feature.id] || 'md:top-1/2 md:left-1/2';

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "z-20 flex items-center gap-3 rounded-full py-3 px-6 text-base font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isActive
          ? "bg-primary text-primary-foreground shadow-lg"
          : "bg-black/30 text-white hover:bg-black/50 backdrop-blur-md",
        
        // Mobile layout: default, relative positioning within a flex container
        "relative w-full justify-between",
        
        // Desktop layout: absolute positioning
        "md:absolute md:w-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2",
        isActive && "md:scale-105",
        positionClass
      )}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <span>{feature.title}</span>
      <span className={cn("flex h-7 w-7 items-center justify-center rounded-full", isActive ? "bg-white/20" : "bg-muted/50 text-white")}>
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
        <div className="relative aspect-[9/16] md:aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 md:bg-gradient-to-r md:from-black/70 md:to-transparent" />
          
          <div className="absolute inset-0 p-4 flex flex-col justify-end gap-4 md:p-6 lg:p-8 md:block">
            {/* Badge container: on mobile, a flex container. On desktop, a relative container for absolute children. */}
            <div className="flex flex-col gap-2 md:relative md:h-full">
              {interactiveFeatures.map((feature) => (
                <FeatureBadge
                  key={feature.id}
                  feature={feature}
                  onClick={() => handleFeatureClick(feature)}
                  isActive={activeFeature?.id === feature.id}
                />
              ))}
            </div>

            {/* Text Card: a flex item on mobile, absolutely positioned on desktop */}
            <div className="relative z-10 w-full md:absolute md:bottom-8 md:left-8 md:max-w-lg">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10 rounded-xl p-6 shadow-lg text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature ? activeFeature.id : 'default'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="min-h-[280px] flex flex-col justify-center"
                  >
                    {activeFeature ? (
                      <div>
                        <h3 className="text-4xl font-semibold mb-4">{activeFeature.title}</h3>
                        <p className="text-lg opacity-80">
                          {activeFeature.content}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs mb-4">
                          Why choose us
                        </div>
                        <h2 className="text-5xl font-bold leading-tight text-shadow-md">
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
