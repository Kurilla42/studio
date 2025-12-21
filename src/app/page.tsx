'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import EmergencyBanner from '@/components/sections/emergency-banner';
import Testimonials from '@/components/sections/testimonials';
import SpecialOffers from '@/components/sections/special-offers';
import Team from '@/components/sections/team';
import Faq from '@/components/sections/faq';
import ScrollToTop from '@/components/floating/scroll-to-top';
import LiveChat from '@/components/floating/live-chat';
import SocialProof from '@/components/floating/social-proof';
import ContactModal from '@/components/modals/contact-modal';
import ExitIntentModal from '@/components/modals/exit-intent-modal';

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onGetQuoteClick={handleOpenContactModal} />
      <main className="flex-1 pt-20">
        <Hero onScheduleClick={handleOpenContactModal} />
        <Services onGetPriceClick={handleOpenContactModal} />
        <About />
        <EmergencyBanner />
        <Testimonials />
        <SpecialOffers onClaimOfferClick={handleOpenContactModal} />
        <Team />
        <Faq />
      </main>
      <Footer onFormSubmit={() => {}} />

      {/* Floating and Modal Components */}
      <ScrollToTop />
      <SocialProof />
      <LiveChat />
      <ContactModal open={isContactModalOpen} onOpenChange={setContactModalOpen} />
      <ExitIntentModal onGetQuoteClick={handleOpenContactModal} />
    </div>
  );
}
