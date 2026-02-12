'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type EmergencyBannerProps = {
  onClose: () => void;
  onOpenContactModal: () => void;
};

export default function EmergencyBanner({ onClose, onOpenContactModal }: EmergencyBannerProps) {
  const [countdown, setCountdown] = useState(7);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (countdown < 2) {
      onClose();
      return;
    }

    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onClose]);

  const handleActionClick = () => {
    if (!isMobile) {
      onOpenContactModal();
    }
    onClose();
  };

  return (
    <section id="emergency-banner" className="!p-0">
      <div className="relative emergency-gradient text-primary-foreground overflow-hidden">
        <div className="container py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl">Plumbing Emergency?</h3>
                <p className="opacity-90 text-sm md:text-base mt-1">We're available 24/7 for urgent repairs. Fast response guaranteed!</p>
              </div>
            </div>
            {isMobile ? (
              <Button asChild size="lg" className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 shrink-0 h-12 px-8 text-base">
                <a href="tel:3155268735">Call Emergency Line</a>
              </Button>
            ) : (
              <Button size="lg" className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 shrink-0 h-12 px-8 text-base" onClick={handleActionClick}>
                Schedule Now
              </Button>
            )}
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-4">
              <p className="text-xs opacity-80 hidden sm:block">The notification will close in {countdown} seconds</p>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-white/20" onClick={onClose}>
                  <X size={18} />
              </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </section>
  );
}

    