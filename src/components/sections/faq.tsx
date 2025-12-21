'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { faqs } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  return (
    <section id="faq" className="bg-secondary">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              asChild
              className="border-none"
            >
              <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-border [&[data-state=open]]:border-primary/30">
                <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline hover:text-primary data-[state=open]:text-primary data-[state=open]:border-b">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-2">
                  <div className="space-y-4">
                    {faq.answer && <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>}
                    {faq.list && <FaqList items={faq.list} />}
                    {faq.conclusion && <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line pt-2">
                      {faq.conclusion}
                    </p>}
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
