'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
    <path fill="#4285F4" d="M24 9.8c3.86 0 6.96 1.56 9.17 3.62l6.5-6.5C35.24 2.85 30.14 0 24 0 14.62 0 6.62 5.56 2.68 13.61l7.86 6.07C12.25 13.9 17.64 9.8 24 9.8z"></path>
    <path fill="#34A853" d="M46.32 25.13c0-1.66-.15-3.3-.43-4.88H24v9.17h12.52c-.54 2.97-2.17 5.48-4.63 7.18l7.27 5.66c4.25-3.92 6.76-9.67 6.76-16.13z"></path>
    <path fill="#FBBC05" d="M10.54 25.68c-.48-1.45-.76-3-.76-4.68s.28-3.23.76-4.68L2.68 10.27C1.03 13.4 0 17.15 0 21c0 3.85 1.03 7.6 2.68 10.73l7.86-6.05z"></path>
    <path fill="#EA4335" d="M24 48c6.4 0 11.8-2.12 15.73-5.74l-7.27-5.66c-2.12 1.42-4.84 2.26-7.96 2.26-6.36 0-11.75-4.1-13.67-9.73l-7.86 6.07C6.62 42.44 14.62 48 24 48z"></path>
    <path fill="none" d="M0 0h48v48H0z"></path>
  </svg>
)

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

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="bg-secondary !py-12 md:!py-16">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Our Customers Say
            </h2>
            <div className="inline-flex items-center gap-2 mt-4">
                <GoogleIcon />
                <span className="text-lg text-muted-foreground">Google</span>
                <span className="text-lg text-foreground font-bold">4.9</span>
            </div>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => {
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col p-6 bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <Avatar className="w-10 h-10 mr-3 border-2 border-primary/50">
                          {image ? (
                            <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>
                          ) : (
                            <AvatarFallback className={cn("font-bold", fallbackColor)}>
                              {fallbackInitial}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        
                        <div className="flex-1">
                            <div className="flex items-center gap-1.5">
                                <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                            </div>
                           <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className={cn("w-4 h-4", i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300")} />
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                           </div>
                        </div>
                      </div>
                      <CardContent className="p-0 text-sm text-muted-foreground">
                        <p>{testimonial.testimonial}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
