'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Star as StarIcon } from 'lucide-react';
import { heroStats } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HeroProps = {
  onScheduleClick: () => void;
};

const rotatingWords = ['Trust', 'Afford', 'Get Fast'];

export default function Hero({ onScheduleClick }: HeroProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const image1 = PlaceHolderImages.find(p => p.id === 'hero-new-1');
  const image2 = PlaceHolderImages.find(p => p.id === 'hero-new-2');


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
        delay: 0.5 + i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="hero" className="bg-background px-12 py-20 rounded-2xl">
      <motion.div 
        className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left">
          <motion.h1 
            className="text-[2.7rem] sm:text-5xl lg:text-6xl font-hero text-foreground leading-tight"
            variants={itemVariants}
          >
            Expert Plumbing Services
            <br />
            <div className="inline-flex items-center h-[1.2em] z-10 relative">
              You Can&nbsp;
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="inline-block text-foreground"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <div className="mt-8 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  custom={i}
                  variants={statCardVariants}
                  initial="hidden"
                  animate={isMounted ? "visible" : "hidden"}
                  className="p-4"
                >
                  <div className="flex flex-col text-left">
                    <div className="text-[2.7rem] sm:text-5xl font-hero text-foreground flex items-center gap-1">
                      {stat.id === 'stat-3' ? (
                          <div className="flex items-baseline gap-2">
                              <span className="text-4xl sm:text-5xl">4.9</span>
                              <StarIcon className="w-9 h-9 text-primary fill-yellow-400 mt-1 ring-2 ring-primary rounded-full" strokeWidth={1.5} />
                          </div>
                      ) : (
                          <span className="text-4xl sm:text-5xl">{stat.number}</span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button size="lg" className="bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" asChild>
              <a href="tel:5551234567">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-4567
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" onClick={onScheduleClick}>
              Schedule Service
            </Button>
          </motion.div>
        </div>
        {/* Right Column: Images */}
        <div className="relative hidden lg:block h-full min-h-[500px]">
          {image2 && (
            <motion.div 
              className="absolute top-1/4 left-0 w-[80%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary ring-offset-4 ring-offset-background"
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 10 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
                <Image src={image2.imageUrl} alt={image2.description} fill className="object-cover" data-ai-hint={image2.imageHint} />
            </motion.div>
          )}
          {image1 && (
            <motion.div 
              className="absolute top-0 left-1/4 w-[70%] aspect-video rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary ring-offset-4 ring-offset-background"
              initial={{ opacity: 0, y: -50, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              >
              <Image src={image1.imageUrl} alt={image1.description} fill className="object-cover" data-ai-hint={image1.imageHint} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
