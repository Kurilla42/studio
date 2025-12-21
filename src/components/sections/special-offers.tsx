import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { specialOffers } from '@/lib/data';

type SpecialOffersProps = {
  onClaimOfferClick: () => void;
};

export default function SpecialOffers({ onClaimOfferClick }: SpecialOffersProps) {
  return (
    <section id="offers" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Exclusive Offers
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Save money on your next service with our special deals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="relative p-1 bg-background rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className="border-2 border-dashed border-border rounded-xl h-full p-8 flex flex-col text-center items-center">
                <div className="flex items-center text-primary">
                  <span className="text-5xl font-bold">{offer.discount}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4 h-14 flex items-center">{offer.title}</h3>
                <Button
                  onClick={onClaimOfferClick}
                  className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 mt-6 w-full max-w-xs"
                >
                  Get This Deal
                </Button>
                <p className="text-xs text-muted-foreground mt-auto pt-6">{offer.disclaimer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
