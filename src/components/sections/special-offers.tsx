import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { specialOffers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type SpecialOffersProps = {
  onClaimOfferClick: () => void;
};

export default function SpecialOffers({ onClaimOfferClick }: SpecialOffersProps) {
  return (
    <section id="offers" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Special Offers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((offer) => {
            const image = PlaceHolderImages.find(p => p.id === offer.image);
            return (
              <Card key={offer.id} className="relative group overflow-hidden rounded-lg h-[400px] shadow-lg text-primary-foreground isolate border-border">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 z-[-2]"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 z-[-1]"></div>
                <div className="relative flex flex-col justify-between h-full p-6 text-shadow-md">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/90">Special Offer</p>
                    <h3 className="text-3xl font-bold mt-1 text-white">{offer.title}</h3>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-4">{offer.discount}</p>
                    <Button onClick={onClaimOfferClick} className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-bold tracking-wider hover:-translate-y-0.5 transition-transform">
                      Claim Offer
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
