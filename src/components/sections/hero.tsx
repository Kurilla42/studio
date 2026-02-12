'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Star as StarIcon } from 'lucide-react';
import { heroStats } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HeroProps = {
  onScheduleClick: () => void;
};

export default function Hero({ onScheduleClick }: HeroProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const image1 = PlaceHolderImages.find(p => p.id === 'hero-new-1');
  const image2 = PlaceHolderImages.find(p => p.id === 'hero-new-2');
  const image3 = PlaceHolderImages.find(p => p.id === 'hero-new-3');


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
    <section id="hero" className="pt-12 pb-32">
      <div className="container">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.h1 
              className="text-[5rem] font-hero text-foreground leading-[1.1]"
              variants={itemVariants}
            >
              Trusted Plumbing Services in Upper Manhattan
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
                                <StarIcon className="w-9 h-9 text-primary fill-yellow-400 mt-1" strokeWidth={1.5} />
                            </div>
                        ) : (
                            <span className="text-4xl sm:text-5xl">{stat.number}</span>
                        )}
                      </div>
                      <p className="text-xl text-muted-foreground">{stat.label}</p>
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
                <a href="tel:3155268735">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (315) 526-8735
                </a>
              </Button>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" onClick={onScheduleClick}>
                Schedule Service
              </Button>
            </motion.div>
          </div>
          {/* Right Column: Images */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            {image1 && (
              <motion.div 
                className="absolute top-1/4 left-0 w-[55%] aspect-video rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary ring-offset-4 ring-offset-background"
                initial={{ opacity: 0, x: -50, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              >
                  <Image src={image1.imageUrl} alt={image1.description} fill className="object-cover" data-ai-hint={image1.imageHint} />
              </motion.div>
            )}
            {image2 && (
              <motion.div 
                className="absolute top-0 right-20 w-[50%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary ring-offset-4 ring-offset-background"
                initial={{ opacity: 0, y: -50, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                <Image src={image2.imageUrl} alt={image2.description} fill className="object-cover" data-ai-hint={image2.imageHint} />
              </motion.div>
            )}
             {image3 && (
              <motion.div 
                className="absolute bottom-16 right-20 w-[40%] aspect-square rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary ring-offset-4 ring-offset-background"
                initial={{ opacity: 0, y: 50, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                >
                <Image src={image3.imageUrl} alt={image3.description} fill className="object-cover" data-ai-hint={image3.imageHint} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

    