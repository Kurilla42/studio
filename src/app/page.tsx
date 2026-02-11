'use client';

import { useState, useEffect } from 'react';
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
  const [showStickyBanner, setShowStickyBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        if (window.scrollY > heroElement.offsetHeight) {
          setShowStickyBanner(true);
        } else {
          setShowStickyBanner(false);
        }
      } else if (window.scrollY > 500) {
        setShowStickyBanner(true);
      } else {
        setShowStickyBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence>
        {showStickyBanner && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <EmergencyBanner />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 bg-[#0C0E28] bg-noise-dark">
        <Header />
        <Hero onScheduleClick={handleOpenContactModal} />
        
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
      <ExitIntentModal onGetQuoteClick={handleOpenContactModal} />
    </div>
  );
}
