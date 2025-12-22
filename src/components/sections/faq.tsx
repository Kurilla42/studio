'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data';
import { CheckCircle, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const FaqList = ({ items }: { items: { title: string; detail: string }[] }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
        <div>
          <span className="font-bold text-foreground">{item.title}:</span>{' '}
          <span className="text-muted-foreground">{item.detail}</span>
        </div>
      </li>
    ))}
  </ul>
);

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleValueChange = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section id="faq" className="bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-lg">
              Have questions about our plumbing services? We've compiled answers to the most common inquiries we receive, from pricing and scheduling to warranties. If you don't find your answer here, please don't hesitate to contact us directly.
            </p>
          </div>
          <div className="w-full">
            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4"
              value={openItem ?? ''}
              onValueChange={handleValueChange}
            >
              {faqs.map((faq, index) => {
                const value = `item-${index}`;
                const isOpen = openItem === value;
                return (
                  <AccordionItem
                    key={index}
                    value={value}
                    className="border-none bg-background rounded-lg shadow-card transition-all duration-300"
                  >
                    <AccordionTrigger className="p-6 text-base font-semibold hover:no-underline text-left">
                      <span className="flex-1 pr-4">{faq.question}</span>
                       <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <div className="space-y-4 border-t pt-4">
                        {faq.answer && <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>}
                        {faq.list && <FaqList items={faq.list} />}
                        {faq.conclusion && <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line pt-2">
                          {faq.conclusion}
                        </p>}
                      </div>
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
