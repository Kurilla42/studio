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
    <section className="bg-background py-8">
      <div className="container">
        <div className="grid grid-cols-3 md:flex items-center justify-center gap-x-4 gap-y-6 md:gap-x-12 lg:gap-x-16">
          {trustLogos.map(logo => (
            <div 
              key={logo.id} 
              className={cn(
                "relative transition-transform duration-300 justify-self-center",
                // Special size for the Google logo to visually balance it. 
                // It's increased by roughly 30% from the base size of other logos.
                {
                  "h-16 w-36 sm:h-[6.5rem] sm:w-60 lg:h-[7.3rem] lg:w-64": logo.id === 'trust-logo-4',
                  "h-8 w-24 sm:h-14 sm:w-36 lg:h-16 lg:w-40": logo.id !== 'trust-logo-4'
                },
                // Center the middle element on the second row for mobile
                logo.id === 'trust-logo-5' && 'col-start-2'
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
