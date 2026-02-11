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
    <section id="offers" className="w-full">
      <div className="container">
        <div className="text-left mb-12">
          <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-white">
            Exclusive Offers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {specialOffers.map((offer, index) => {
            const isHighlighted = index === 1;
            return (
              <Card
                key={offer.id}
                className={cn(
                  "flex flex-col p-8 transition-all duration-300 h-full",
                  "bg-card shadow-card",
                  isHighlighted && "scale-105 shadow-2xl"
                )}
              >
                <h3 className="text-2xl font-body font-bold">{offer.title}</h3>
                <div className="my-6">
                  <span className="text-5xl font-bold">{offer.discount}</span>
                </div>
                <p className={cn("text-base flex-grow text-muted-foreground")}>
                  {offer.disclaimer}
                </p>
                <Button
                  onClick={onClaimOfferClick}
                  className={cn(
                    "mt-8 w-full",
                    isHighlighted && "bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover"
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
