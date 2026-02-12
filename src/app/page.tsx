'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
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
import EmergencyBanner from '@/components/sections/emergency-banner';

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [showEmergencyBanner, setShowEmergencyBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowEmergencyBanner(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);


  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence>
        {showEmergencyBanner && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <EmergencyBanner 
              onClose={() => setShowEmergencyBanner(false)}
              onOpenContactModal={handleOpenContactModal}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 bg-[#0C0E28] bg-noise-dark">
        <div className="bg-background relative">
          <div className="container">
              <header className="relative flex items-center justify-center py-4">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-14 w-44 sm:h-16 sm:w-52 hidden sm:block">
                      <Image
                          src="https://i.ibb.co/5W38Bwg1/491d9415-6cff-4653-adcf-752aeb03a16f-removebg-preview.png"
                          alt="Empire State Plumbing Logo"
                          fill
                          className="object-contain object-left"
                          priority
                      />
                  </div>
                  <Header />
              </header>
          </div>
          <Hero onScheduleClick={handleOpenContactModal} />
        </div>
        
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <RevealOnScroll delay={0.4}><About /></RevealOnScroll>
          </div>
        </div>
        
        <RevealOnScroll delay={0.2}><Services onGetPriceClick={handleOpenContactModal} /></RevealOnScroll>
        <div className="container text-center pt-0 pb-12 md:pb-16 lg:pb-20">
            <Button size="lg" className="bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" onClick={handleOpenContactModal}>
                Get Exact Price for Free
            </Button>
        </div>
        
        <RevealOnScroll delay={0.2}><Testimonials /></RevealOnScroll>
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <RevealOnScroll delay={0.2}><SpecialOffers onClaimOfferClick={handleOpenContactModal} /></RevealOnScroll>
          </div>
        </div>
        <div className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <RevealOnScroll delay={0.2}><Team onBookPlumberClick={handleOpenContactModal} /></RevealOnScroll>
          </div>
        </div>
        <RevealOnScroll delay={0.2}><HowWeHelped /></RevealOnScroll>
        <div className="container text-center py-6 md:py-8 lg:py-10">
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
      <ExitIntentModal onGetQuoteClick={handleOpenContactModal} />
    </div>
  );
}
