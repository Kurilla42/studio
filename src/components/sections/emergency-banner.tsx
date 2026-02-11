import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function EmergencyBanner() {
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
            <Button asChild size="lg" className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 shrink-0 h-12 px-8 text-base">
              <a href="tel:5551234567">Call Emergency Line</a>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </section>
  );
}
