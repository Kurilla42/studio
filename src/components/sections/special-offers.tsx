'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { specialOffers } from '@/lib/data';
import { cn } from '@/lib/utils';

type SpecialOffersProps = {
  onClaimOfferClick: () => void;
};

export default function SpecialOffers({ onClaimOfferClick }: SpecialOffersProps) {
  return (
    <section id="offers" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[2.7rem] text-foreground leading-tight">
            Exclusive Offers
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-[1.5rem] text-muted-foreground leading-tight">
            Save money on your next service with our special deals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {specialOffers.map((offer, index) => {
            const isHighlighted = index === 1;
            return (
              <Card
                key={offer.id}
                className={cn(
                  "flex flex-col p-8 transition-all duration-300 h-full",
                  isHighlighted ? "bg-primary text-primary-foreground scale-105 shadow-2xl" : "bg-card shadow-card"
                )}
              >
                <h3 className="text-2xl font-headline">{offer.title}</h3>
                <div className="my-6">
                  <span className="text-5xl font-bold">{offer.discount}</span>
                  <span className={cn("text-lg ml-2", isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>one-time</span>
                </div>
                <p className={cn("text-base flex-grow", isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {offer.disclaimer}
                </p>
                <Button
                  onClick={onClaimOfferClick}
                  className={cn(
                    "mt-8 w-full",
                    isHighlighted ? "bg-card text-primary hover:bg-card/90" : "primary-gradient shadow-button-primary hover:shadow-button-primary-hover"
                  )}
                >
                  Get This Deal
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
