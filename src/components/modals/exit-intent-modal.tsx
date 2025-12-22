'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { specialOffers } from '@/lib/data';
import useExitIntent from '@/hooks/use-exit-intent';

type ExitIntentModalProps = {
  onGetQuoteClick: () => void;
};

let hasShownExitIntent = false;

export default function ExitIntentModal({ onGetQuoteClick }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const onExitIntent = () => {
    if (!sessionStorage.getItem('hasShownExitIntent')) {
      setIsOpen(true);
      sessionStorage.setItem('hasShownExitIntent', 'true');
    }
  };
  
  // Reset on unmount (e.g. page navigation) is not needed anymore with sessionStorage
  
  useExitIntent(onExitIntent);

  const handleClaimOffer = () => {
    setIsOpen(false);
    onGetQuoteClick();
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="p-8 sm:p-12">
            <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-3xl md:text-4xl font-extrabold primary-gradient-text">Wait! Don't Miss Our Special Offers!</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Before you go, check out these exclusive deals to save on your next service.
            </DialogDescription>
            </DialogHeader>

            <div className="relative my-8 py-3 px-6 text-center text-primary-foreground font-bold primary-gradient rounded-lg overflow-hidden max-w-xs mx-auto">
                Just 1 day left
                <div className="absolute top-0 left-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
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
                    onClick={handleClaimOffer}
                    className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 mt-6 w-full max-w-xs"
                    >
                    Get This Deal
                    </Button>
                </div>
                </div>
            ))}
            </div>
            <div className="text-center mt-10">
                <Button size="lg" onClick={handleClaimOffer} className="primary-gradient">
                    Claim Your Offer Now!
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">Or call us: <a href="tel:5551234567" className="font-bold text-primary hover:underline">(555) 123-4567</a></p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
