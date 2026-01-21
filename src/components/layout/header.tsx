'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Phone, Wrench, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';


type HeaderProps = {
  onGetQuoteClick: () => void;
};

export default function Header({ onGetQuoteClick }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const isMobile = useIsMobile();


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      if (isMobile) {
        setIsPastHero(scrollPosition > window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.1 } },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isMobile
          ? 'bg-transparent h-16'
          : isScrolled
          ? 'bg-background/95 shadow-md h-16'
          : 'bg-transparent h-20',
        isMobile && !isPastHero && 'transform -translate-y-full'
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between relative">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-1/3">
           <nav className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logo - Centered */}
        <div className="hidden lg:flex w-1/3 justify-center">
          <motion.div
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"}
            variants={logoVariants}
          >
            <Link href="/" className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <span className="text-xl text-foreground text-shadow-hero">
                ProFlow Plumbing
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Right side buttons - Desktop */}
        <motion.div 
            className="hidden lg:flex w-1/3 justify-end items-center gap-4"
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"}
            variants={buttonsVariants}
        >
          <Button asChild className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5">
            <a href="tel:5551234567" className="flex items-center gap-2">
              <Phone size={16} />
              (555) 123-4567
            </a>
          </Button>
          <Button onClick={onGetQuoteClick} className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5">
            Get Quote
          </Button>
        </motion.div>
        
        {/* Mobile Header Content */}
        <div className="flex items-center justify-center w-full lg:hidden">
            <div className="flex w-full items-center gap-4">
                <Button size="sm" asChild className="primary-gradient flex-1">
                    <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                      <Phone size={16} />
                      Call Now
                    </a>
                </Button>
                <Button size="sm" onClick={onGetQuoteClick} className="primary-gradient flex-1">
                    Get Quote
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
