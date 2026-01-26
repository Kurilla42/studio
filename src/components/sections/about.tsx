'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { whyChooseUsItems } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function About() {
  const video = PlaceHolderImages.find(p => p.id === 'why-choose-us-video');
  const [openItem, setOpenItem] = useState<string>('why-1'); // Default to first item open

  return (
    <section id="about" className="bg-secondary !py-12 md:!py-16 lg:!py-20">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground">
                Why Choose Us
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
                For over a decade, we've built a reputation for reliable, transparent, and high-quality plumbing services. Here's why homeowners trust ProFlow for their most critical plumbing needs.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Video */}
          <div className="w-full aspect-[9/12] lg:sticky lg:top-24 rounded-2xl overflow-hidden shadow-lg">
            {video && (
              <Image
                src={video.imageUrl}
                alt={video.description}
                fill
                unoptimized
                className="w-full h-full object-cover"
                data-ai-hint={video.imageHint}
              />
            )}
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full">
            <Accordion 
              type="single" 
              collapsible 
              className="w-full border-t border-border"
              value={openItem}
              onValueChange={(value) => setOpenItem(value || '')}
            >
              {whyChooseUsItems.map((item, index) => {
                const isOpen = openItem === item.id;
                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className={cn(
                        "border-b border-border transition-colors duration-300",
                        isOpen ? 'bg-card' : 'bg-transparent'
                    )}
                  >
                    <AccordionTrigger className="w-full text-left p-6 text-base md:text-lg font-medium hover:no-underline !justify-start">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-primary opacity-70">
                          {`0${index + 1}`}
                        </span>
                        <span className="flex-1 text-foreground">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 px-6 pl-[4.25rem]">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
