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

// Use 5 features for the interactive display
const interactiveFeatures = whyChooseUsItems.filter(item => 
  ['why-1', 'why-2', 'why-9', 'why-3', 'why-4'].includes(item.id)
);

// Define positions for each badge on desktop (lg) to be random on the right side and within frame
const badgePositions: { [key: string]: string } = {
  'why-1': 'lg:top-[45%] lg:left-[70%]', // 24/7 Emergency Plumbing
  'why-2': 'lg:top-[20%] lg:left-[85%]', // Upfront Pricing
  'why-3': 'lg:top-[60%] lg:left-[88%]', // 1 Year Warranty
  'why-9': 'lg:top-[85%] lg:left-[75%]', // Licensed & Insured
  'why-4': 'lg:top-[70%] lg:left-[60%]', // Background-Checked
};

const FeatureBadge = ({ feature, onClick, isActive }: { feature: WhyChooseUsItem; onClick: () => void; isActive: boolean; }) => {
  const positionClass = badgePositions[feature.id] || 'lg:top-1/2 lg:left-1/2';

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "z-10 flex items-center gap-3 rounded-full font-medium transition-all duration-300 w-full justify-start shadow-md hover:shadow-lg",
        // Responsive sizes for text and padding
        "py-2 px-3 text-[11px] whitespace-nowrap", // Mobile
        "sm:py-3 sm:px-5 sm:text-sm", // Tablet
        "lg:py-3 lg:px-6 lg:text-base", // Desktop
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isActive
          ? "bg-white text-primary ring-2 ring-primary"
          : "bg-white text-foreground",
        "relative lg:absolute lg:w-auto lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2",
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

const TextCard = ({ activeFeature }: { activeFeature: WhyChooseUsItem | null }) => (
  <Card className="bg-white/95 backdrop-blur-sm text-foreground rounded-xl p-4 sm:p-6 shadow-xl">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFeature ? activeFeature.id : 'default'}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="flex flex-col justify-center min-h-[180px] sm:min-h-[220px]"
      >
        {activeFeature ? (
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-foreground">{activeFeature.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {activeFeature.content}
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground mb-4">
              Why choose us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
              Discover why Hundreds of Homeowners Choose Us.
            </h2>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  </Card>
);

export default function About() {
  const [activeFeature, setActiveFeature] = useState<WhyChooseUsItem | null>(null);
  const backgroundImage = PlaceHolderImages.find(p => p.id === 'about-background');

  const handleFeatureClick = (feature: WhyChooseUsItem) => {
    setActiveFeature(activeFeature?.id === feature.id ? null : feature);
  };

  return (
    <section id="about" className="bg-background !py-12 md:!py-16 lg:!py-20">
      <div className="container">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Desktop Layout */}
          <div className="hidden lg:block aspect-video">
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
            <div className="absolute inset-0">
              <div className="relative h-full">
                {interactiveFeatures.map((feature) => (
                  <FeatureBadge
                    key={feature.id}
                    feature={feature}
                    onClick={() => handleFeatureClick(feature)}
                    isActive={activeFeature?.id === feature.id}
                  />
                ))}
              </div>
              <div className="absolute bottom-8 left-8 w-[45%] max-w-lg">
                <TextCard activeFeature={activeFeature} />
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            <div className="relative">
              {backgroundImage && (
                <Image
                  src={backgroundImage.imageUrl}
                  alt={backgroundImage.description}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  data-ai-hint={backgroundImage.imageHint}
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="relative p-4 -mt-64 sm:-mt-80 space-y-4">
                <div className="space-y-3">
                    {interactiveFeatures.map((feature) => (
                        <FeatureBadge
                            key={feature.id}
                            feature={feature}
                            onClick={() => handleFeatureClick(feature)}
                            isActive={activeFeature?.id === feature.id}
                        />
                    ))}
                </div>
                <TextCard activeFeature={activeFeature} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
