'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import TrustStrip from '@/components/sections/trust-strip';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';
import SpecialOffers from '@/components/sections/special-offers';
import Team from '@/components/sections/team';
import Faq from '@/components/sections/faq';
import ScrollToTop from '@/components/floating/scroll-to-top';
import LiveChat from '@/components/floating/live-chat';
import SocialProof from '@/components/floating/social-proof';
import ContactModal from '@/components/modals/contact-modal';
import ExitIntentModal from '@/components/modals/exit-intent-modal';
import RevealOnScroll from '@/components/animations/reveal-on-scroll';
import HowWeHelped from '@/components/sections/how-we-helped';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-[#000926] bg-noise-dark">
        <Header />
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <Hero onScheduleClick={handleOpenContactModal} />
          </div>
        </div>
        {/* <RevealOnScroll><TrustStrip /></RevealOnScroll> */}
        <RevealOnScroll delay={0.2}><Services onGetPriceClick={handleOpenContactModal} /></RevealOnScroll>
        <div className="container text-center pt-0 pb-12 md:pb-16 lg:pb-20">
            <Button size="lg" className="bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" onClick={handleOpenContactModal}>
                Get Exact Price for Free
            </Button>
        </div>
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <RevealOnScroll delay={0.4}><About /></RevealOnScroll>
          </div>
        </div>
        <RevealOnScroll delay={0.2}><Testimonials /></RevealOnScroll>
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <RevealOnScroll delay={0.2}><SpecialOffers onClaimOfferClick={handleOpenContactModal} /></RevealOnScroll>
          </div>
        </div>
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <RevealOnScroll delay={0.2}><Team /></RevealOnScroll>
          </div>
        </div>
        <RevealOnScroll delay={0.2}><HowWeHelped /></RevealOnScroll>
        <div className="container text-center py-12 md:py-16 lg:py-20">
            <Button size="lg" className="bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" onClick={handleOpenContactModal}>
               Similar Problem? Schedule Inspection
           </Button>
        </div>
        <RevealOnScroll delay={0.2}><Faq /></RevealOnScroll>
      </main>
      <Footer onFormSubmit={() => {}} />

      {/* Floating and Modal Components */}
      <ScrollToTop />
      <SocialProof />
      <LiveChat />
      <ContactModal open={isContactModalOpen} onOpenChange={setContactModalOpen} />
      {/* <ExitIntentModal onGetQuoteClick={handleOpenContactModal} /> */}
    </div>
  );
}
