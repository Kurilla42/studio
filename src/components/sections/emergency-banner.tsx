import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section id="emergency-banner" className="!p-0">
      <div className="relative emergency-gradient text-primary-foreground overflow-hidden">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Plumbing Emergency?</h3>
                <p className="opacity-90 mt-1">We're available 24/7 for urgent repairs. Fast response guaranteed!</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-foreground hover:bg-gray-200 shrink-0 shadow-lg hover:-translate-y-0.5 transition-transform">
              <a href="tel:5551234567">Call Emergency Line</a>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </section>
  );
}
