'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Star as StarIcon } from 'lucide-react';
import { heroStats } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type HeroProps = {
  onScheduleClick: () => void;
};

const taglines = ["Trust", "Afford", "Get Fast"];

export default function Hero({ onScheduleClick }: HeroProps) {
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentTagline(prev => {
          const currentIndex = taglines.indexOf(prev);
          return taglines[(currentIndex + 1) % taglines.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const plumberImage = PlaceHolderImages.find(p => p.id === 'hero-plumber');
  const backgroundImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden !p-0">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={backgroundImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      
      <div className="container relative z-10 pt-24 pb-12 md:pt-32 md:pb-16">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Left Column: Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-hero font-bold text-foreground text-shadow-hero leading-tight"
              variants={itemVariants}
            >
              Expert Plumbing Services
              <br />
              <div className="inline-flex items-center h-[1.2em] z-10 relative">
                You Can&nbsp;
                <div className="relative w-[150px] sm:w-[210px] lg:w-[240px] text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTagline}
                      className="absolute inset-0 primary-gradient-text whitespace-nowrap"
                      style={{ filter: 'drop-shadow(2px 2px 4px hsla(var(--primary), 0.3))' }}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                    >
                      {currentTagline}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.h1>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="emergency-gradient text-primary-foreground shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5" asChild>
                <a href="tel:5551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-4567
                </a>
              </Button>
              <Button size="lg" className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5" onClick={onScheduleClick}>
                Schedule Service
              </Button>
            </motion.div>

            <div className="mt-12 w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.id}
                    custom={i}
                    variants={statCardVariants}
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                  >
                    <Card className="p-4 bg-background/80 backdrop-blur-md border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0" />
                        <div className="flex flex-col">
                          <div className="text-lg sm:text-2xl font-bold font-hero text-foreground flex items-center gap-1">
                            {stat.id === 'stat-3' ? (
                                <div className="flex items-center gap-1 sm:gap-1.5">
                                    <span className="text-lg sm:text-xl">4.9</span>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm sm:text-base font-body font-normal text-muted-foreground">(108)</span>
                                </div>
                            ) : (
                                stat.number
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-96 md:h-auto md:self-end justify-self-center">
            {plumberImage && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[667px]"
              >
                <Image
                  src={plumberImage.imageUrl}
                  alt={plumberImage.description}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  data-ai-hint={plumberImage.imageHint}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
