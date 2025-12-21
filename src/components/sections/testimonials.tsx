'use client';

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
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C15.28,4.73 17.29,6.42 17.29,6.42L19.5,4.36C19.5,4.36 17.22,2.38 12.2,2.38C6.42,2.38 2,7.34 2,12C2,16.66 6.42,21.62 12.2,21.62C17.6,21.62 21.5,17.92 21.5,12.29C21.5,11.73 21.45,11.41 21.35,11.1Z"/></svg>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Our Customers Say
            </h2>
            <div className="inline-flex items-center gap-2 mt-4">
                <GoogleIcon />
                <span className="text-lg text-muted-foreground font-semibold">Google</span>
                <span className="text-lg text-muted-foreground font-bold">4.9</span>
            </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => {
              const image = testimonial.image ? PlaceHolderImages.find(p => p.id === testimonial.image) : null;
              const fallbackInitial = testimonial.name.charAt(0);
              const fallbackColor = testimonial.fallbackColor || 'bg-primary text-primary-foreground';
              
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col p-6 bg-card border shadow-card">
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
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
