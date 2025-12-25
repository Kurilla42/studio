'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
          {trustLogos.map(logo => (
            <div key={logo.id} className="relative h-10 w-28 sm:h-12 sm:w-32 lg:h-14 lg:w-36">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                data-ai-hint={logo.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
