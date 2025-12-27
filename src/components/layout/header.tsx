'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Phone, Wrench, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';

type HeaderProps = {
  onGetQuoteClick: () => void;
};

export default function Header({ onGetQuoteClick }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        isScrolled ? 'bg-background/95 shadow-md h-16' : 'bg-transparent h-20'
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
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
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
              <span className="text-xl font-medium text-foreground text-shadow-hero">
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
        <div className="flex items-center justify-between w-full lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
            </Link>
            
            <div className="flex items-center gap-2">
                <Button size="sm" asChild className="primary-gradient flex-1 flex-grow-0 basis-auto h-8 px-2">
                    <a href="tel:5551234567" className="flex items-center gap-1 text-xs">
                      (555) 123-4567
                    </a>
                </Button>
                <Button size="sm" onClick={onGetQuoteClick} className="primary-gradient text-xs flex-1 flex-grow-0 basis-auto h-8 px-2">
                    Get Quote
                </Button>
            </div>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                  <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b pb-4">
                      <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                          <Wrench className="h-6 w-6 text-primary" />
                          <span className="font-medium text-shadow-hero">ProFlow Plumbing</span>
                      </Link>
                  </div>
                  <nav className="mt-8 flex flex-1 flex-col gap-6">
                      {navItems.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                      >
                          {item.name}
                      </Link>
                      ))}
                  </nav>
                  <div className="mt-8 flex flex-col gap-4">
                      <Button asChild className="w-full primary-gradient">
                          <a href="tel:5551234567" className="flex items-center gap-2">
                              <Phone size={16} />
                              (555) 123-4567
                          </a>
                      </Button>
                      <Button onClick={() => { onGetQuoteClick(); setMobileMenuOpen(false); }} className="w-full primary-gradient">
                          Get Quote
                      </Button>
                  </div>
                  </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
