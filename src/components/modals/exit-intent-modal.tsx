'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { specialOffers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import useExitIntent from '@/hooks/use-exit-intent';

type ExitIntentModalProps = {
  onGetQuoteClick: () => void;
};

export default function ExitIntentModal({ onGetQuoteClick }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const onExitIntent = () => {
    setIsOpen(true);
  };
  
  useExitIntent(onExitIntent);

  const handleClaimOffer = () => {
    setIsOpen(false);
    onGetQuoteClick();
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="p-8 sm:p-12">
            <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-3xl md:text-4xl font-extrabold primary-gradient-text">Wait! Don't Miss Our Special Offers!</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground mt-2">
                Before you go, check out these exclusive deals to save on your next service.
            </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialOffers.map((offer) => {
                const image = PlaceHolderImages.find(p => p.id === offer.image);
                return (
                <Card key={offer.id} className="relative group overflow-hidden rounded-lg h-[350px] shadow-lg text-primary-foreground isolate">
                    {image && (
                    <Image
                        src={image.imageUrl}
                        alt={offer.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 z-[-2]"
                        data-ai-hint={image.imageHint}
                    />
                    )}
                    <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
                    <div className="relative flex flex-col justify-between h-full p-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/90">Special Offer</p>
                        <h3 className="text-2xl font-bold mt-1 text-white">{offer.title}</h3>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white mb-4">{offer.discount}</p>
                        <Button onClick={handleClaimOffer} className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-bold tracking-wider">
                        Claim Offer
                        </Button>
                    </div>
                    </div>
                </Card>
                );
            })}
            </div>
            <div className="text-center mt-8">
                <Button size="lg" onClick={handleClaimOffer} className="primary-gradient">
                    Get a Free Quote Now!
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">Or call us: <a href="tel:5551234567" className="font-bold text-primary hover:underline">(555) 123-4567</a></p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
