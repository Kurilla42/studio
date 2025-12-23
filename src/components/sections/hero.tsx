
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Star as StarIcon } from 'lucide-react';
import { heroStats } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type HeroProps = {
  onScheduleClick: () => void;
};

const rotatingWords = ['Trust', 'Afford', 'Get Fast'];

export default function Hero({ onScheduleClick }: HeroProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);


  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const mobileBackgroundImage = PlaceHolderImages.find(p => p.id === 'hero-background-mobile');


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
    <section ref={heroRef} id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden !p-0">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
       {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          priority
          className="object-cover object-left-top hidden md:block"
          data-ai-hint={backgroundImage.imageHint}
        />
      )}
      {mobileBackgroundImage && (
        <Image
          src={mobileBackgroundImage.imageUrl}
          alt={mobileBackgroundImage.description}
          fill
          priority
          className="object-cover object-center md:hidden"
          data-ai-hint={mobileBackgroundImage.imageHint}
        />
      )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/[.80] via-white/[.80] to-transparent from-0% via-40% to-65%"></div>
      <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-background to-transparent backdrop-blur-sm [mask:linear-gradient(to_top,transparent,black_90%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-background to-transparent backdrop-blur-sm [mask:linear-gradient(to_bottom,transparent,black_90%)]"></div>
      
      <div className="container relative z-10 py-12">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.h1 
              className="text-[2.7rem] sm:text-5xl lg:text-6xl font-hero font-bold text-foreground text-shadow-hero leading-tight"
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
                    className="inline-block text-primary"
                    style={{ filter: 'drop-shadow(2px 2px 4px hsla(var(--primary), 0.3))' }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="emergency-gradient text-primary-foreground shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5 h-12 px-10 text-base" asChild>
                <a href="tel:5551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-4567
                </a>
              </Button>
              <Button size="lg" className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 h-12 px-10 text-base" onClick={onScheduleClick}>
                Schedule Service
              </Button>
            </motion.div>

            <div className="mt-12 w-full">
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
                      <div className="text-[2.7rem] sm:text-5xl font-bold font-hero text-foreground flex items-center gap-1 text-shadow-hero">
                        {stat.id === 'stat-3' ? (
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl">4.9</span>
                                <StarIcon className="w-9 h-9 text-yellow-400 fill-yellow-400 -translate-y-1" />
                            </div>
                        ) : (
                            <span className="text-4xl">{stat.number}</span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground font-bold whitespace-nowrap">{stat.label}</p>
                      <div className="mt-2 h-1 w-12 bg-primary rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
