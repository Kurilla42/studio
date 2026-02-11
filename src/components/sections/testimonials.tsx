'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const fallbackColors = [
    'bg-red-500 text-white',
    'bg-green-500 text-white',
    'bg-blue-500 text-white',
    'bg-yellow-500 text-black',
    'bg-purple-500 text-white',
    'bg-pink-500 text-white',
    'bg-indigo-500 text-white',
    'bg-teal-500 text-white',
];

let colorIndex = 0;

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.8824 36H0L9.44118 0H28.3235L18.8824 36Z" fill="currentColor"/>
        <path d="M47.3235 36H28.4412L37.8824 0H47.3235L47.3235 36Z" fill="currentColor"/>
    </svg>
);


const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  const image = testimonial.image ? PlaceHolderImages.find(p => p.id === testimonial.image) : null;
  const fallbackInitial = testimonial.name.charAt(0);
  
  let fallbackColor;
  if (!image) {
    fallbackColor = testimonial.fallbackColor || fallbackColors[colorIndex % fallbackColors.length];
    colorIndex++;
  } else {
      fallbackColor = 'bg-primary text-primary-foreground';
  }

  return (
    <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_33%] min-w-0 pl-4">
      <Card className="h-full flex flex-col p-8 bg-card border-none rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Stories</p>
        <CardContent className="p-0 text-muted-foreground flex-grow text-lg leading-relaxed">
          <p>{testimonial.testimonial}</p>
        </CardContent>
        <div className="flex items-end justify-between mt-8 pt-8 border-t">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              {image ? (
                <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>
              ) : (
                <AvatarFallback className={cn("font-medium", fallbackColor)}>
                  {fallbackInitial}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground ml-2">{testimonial.time}</p>
              </div>
            </div>
          </div>
          <QuoteIcon className="w-12 h-auto text-border" />
        </div>
      </Card>
    </div>
  );
};


export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true, playOnInit: true })]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi, setScrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section id="testimonials" className="!py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-white">
                What Our Clients Say
            </h2>
            <div className="hidden sm:flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={scrollPrev} className="rounded-full w-14 h-14 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                 <Button variant="ghost" size="icon" onClick={scrollNext} className="rounded-full w-14 h-14 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ArrowRight className="w-6 h-6" />
                </Button>
            </div>
        </div>

        <div className="overflow-hidden -ml-4" ref={emblaRef}>
          <div className="flex h-full">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
        <div className="sm:hidden flex items-center gap-4 mt-8 justify-center">
            <Button variant="ghost" size="icon" onClick={scrollPrev} className="rounded-full w-14 h-14 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={scrollNext} className="rounded-full w-14 h-14 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <ArrowRight className="w-6 h-6" />
            </Button>
        </div>
      </div>
      <div className="container mt-12">
        <div className="relative h-1 w-full bg-card rounded-full overflow-hidden">
            <div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
      </div>
    </section>
  );
}
