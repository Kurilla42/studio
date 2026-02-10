'use client';

import Image from 'next/image';
import { whyChooseUsItems } from '@/lib/data';
import type { WhyChooseUsItem } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const featuredItems = whyChooseUsItems.filter(item => 
  ['why-1', 'why-2', 'why-9', 'why-3'].includes(item.id)
);

const FeatureCard = ({ item }: { item: WhyChooseUsItem }) => {
  const image = item.image ? PlaceHolderImages.find(p => p.id === item.image) : null;

  return (
    <Card className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {image && (
        <Image
          src={image.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        <h3 className="text-3xl font-bold font-headline text-shadow-md leading-tight">
          {item.title}
        </h3>
        <p className="text-base text-shadow-sm opacity-90 leading-snug line-clamp-2">
          {item.content}
        </p>
      </div>
    </Card>
  );
};

export default function About() {
  return (
    <section id="about" className="bg-background p-12 rounded-2xl">
      <div className="text-left mb-12">
        <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-[#000926] max-w-3xl">
          Discover why Hundreds of Homeowners Choose Us
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
