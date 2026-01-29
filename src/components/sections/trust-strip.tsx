'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const trustLogosIds = [
  'trust-logo-1',
  'trust-logo-2',
  'trust-logo-3',
  'trust-logo-4',
  'trust-logo-5',
];

export default function TrustStrip() {
  const trustLogos = PlaceHolderImages.filter(p => trustLogosIds.includes(p.id));

  return (
    <section className="bg-background !py-8">
      <div className="container">
        <div className="grid grid-cols-6 gap-x-4 gap-y-6 md:flex md:items-center md:justify-center md:gap-x-12 lg:gap-x-16">
          {trustLogos.map((logo, index) => (
            <div 
              key={logo.id} 
              className={cn(
                "relative transition-transform duration-300 justify-self-center",
                
                // Mobile grid layout classes
                "col-span-2", // Base span for all items
                index === 3 && "col-start-2", // Center the bottom row: 4th logo starts at 2nd col
                index === 4 && "col-start-4", // Center the bottom row: 5th logo starts at 4th col
                "md:col-auto", // Reset for desktop flex layout

                // Sizing classes
                {
                  "h-16 w-36 sm:h-[6.5rem] sm:w-60 lg:h-[7.3rem] lg:w-64": logo.id === 'trust-logo-4',
                  "h-8 w-24 sm:h-14 sm:w-36 lg:h-16 lg:w-40": logo.id !== 'trust-logo-4'
                }
              )}
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                fill
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
