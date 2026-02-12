'use client';

import Image from 'next/image';
import { whyChooseUsItems } from '@/lib/data';
import type { WhyChooseUsItem } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const featuredItems = whyChooseUsItems.filter(item => 
  ['why-1', 'why-2', 'why-9', 'why-3'].includes(item.id)
);

const trustLogosIds = [
  'trust-logo-1',
  'trust-logo-2',
  'trust-logo-3',
  'trust-logo-4',
  'trust-logo-5',
];
const trustLogos = PlaceHolderImages.filter(p => trustLogosIds.includes(p.id));


const FeatureCard = ({ item }: { item: WhyChooseUsItem }) => {
  const image = item.image ? PlaceHolderImages.find(p => p.id === item.image) : null;

  return (
    <Card className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ring-2 ring-primary ring-offset-4 ring-offset-background">
      {image && (
        <Image
          src={image.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        <h3 className="text-2xl font-inter font-medium text-shadow-md leading-tight">
          {item.title}
        </h3>
        <p className="text-xl text-shadow-sm opacity-90 leading-snug line-clamp-3">
          {item.content}
        </p>
      </div>
    </Card>
  );
};

export default function About() {
  return (
    <section id="about" className="bg-background py-20 rounded-2xl">
      <div className="h-16" />
      <div className="text-left mb-12">
        <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-[#0C0E28] max-w-3xl">
          Why Hundreds of Homeowners Choose&nbsp;Us
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-2 gap-8 md:flex md:items-center md:justify-center md:gap-x-12 lg:gap-x-16">
          {trustLogos.map((logo, index) => {
            const isLogo4 = logo.id === 'trust-logo-4';
            const isEnlargedMobile = ['trust-logo-2', 'trust-logo-3', 'trust-logo-5'].includes(logo.id);
            return (
              <div 
                key={logo.id} 
                className={cn(
                  "relative transition-transform duration-300 justify-self-center",
                  "md:col-auto",
                  index === 4 ? "col-span-2" : "col-span-1",
                  // Mobile sizes
                  isLogo4 ? "h-24 w-52" : isEnlargedMobile ? "h-14 w-36" : "h-12 w-32",
                  // Desktop sizes
                  isLogo4 ? "sm:h-[6.5rem] sm:w-60 lg:h-[7.3rem] lg:w-64" : "sm:h-14 sm:w-36 lg:h-16 lg:w-40",
                  logo.id === 'trust-logo-3' && "mt-2"
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
            )
          })}
        </div>
      </div>
      <div className="h-8" />
    </section>
  );
}
