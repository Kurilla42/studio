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
          <span className="font-medium text-foreground">{item.title}:</span>{' '}
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
    <section id="faq">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-lg leading-tight">
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
                    className="border-none bg-card rounded-lg shadow-card transition-all duration-300"
                  >
                    <AccordionTrigger className="p-6 text-lg font-medium hover:no-underline text-left font-body">
                      <span className="flex-1 pr-4">{faq.question}</span>
                       <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 font-body">
                      <div className="space-y-4 border-t pt-4 text-xl">
                        {faq.answer && <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>}
                        {faq.list && <FaqList items={faq.list} />}
                        {faq.conclusion && <p className="text-muted-foreground leading-relaxed whitespace-pre-line pt-2">
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
