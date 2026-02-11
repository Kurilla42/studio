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
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ExitIntentModalProps = {
  onGetQuoteClick: () => void;
};

export default function ExitIntentModal({ onGetQuoteClick }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  const onExitIntent = () => {
    if (!hasShown) {
      setIsOpen(true);
      setHasShown(true);
    }
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
            <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-3xl md:text-4xl text-foreground text-center font-body font-bold">Wait! Don't Miss Our Special Offers!</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Before you go, check out these exclusive deals to save on your next service.
            </DialogDescription>
            </DialogHeader>

            <div className="relative my-8 py-3 px-6 text-center text-primary-foreground font-medium bg-primary rounded-full overflow-hidden max-w-xs mx-auto">
                Just 1 day left
                <div className="absolute top-0 left-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => {
                const isHighlighted = index === 1;
                return (
                  <Card
                    key={offer.id}
                    className={cn(
                      "flex flex-col text-center items-center p-8 transition-all duration-300 h-full",
                      "bg-card shadow-card",
                      isHighlighted && "scale-105 shadow-2xl"
                    )}
                  >
                    <h3 className="text-2xl font-body font-bold">{offer.title}</h3>
                    <div className="my-6">
                      <span className="text-5xl font-bold">{offer.discount}</span>
                    </div>
                    <Button
                      onClick={handleClaimOffer}
                      className={cn(
                        "mt-auto w-full",
                        isHighlighted && "bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover"
                      )}
                    >
                      Get This Deal
                    </Button>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-10">
                <Button size="lg" onClick={handleClaimOffer}>
                    Claim Your Offer Now!
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">Or call us: <a href="tel:3155268735" className="font-medium text-primary hover:underline">(315) 526-8735</a></p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
