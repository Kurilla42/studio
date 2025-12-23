'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, Wrench, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';

type HeaderProps = {
  onGetQuoteClick: () => void;
};

export default function Header({ onGetQuoteClick }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/95'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-primary" />
          <span className="hidden text-xl font-bold text-foreground sm:inline-block md:hidden lg:inline-block text-shadow-hero">
            ProFlow Plumbing
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Buttons - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 sm:hidden">
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
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5">
            <a href="tel:5551234567" className="flex items-center gap-2">
              <Phone size={16} />
              (555) 123-4567
            </a>
          </Button>
          <Button onClick={onGetQuoteClick} className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover animate-pulse-glow transition-all duration-300 hover:-translate-y-0.5">
            Get Quote
          </Button>
        </div>

        <div className="flex items-center sm:hidden ml-auto">
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
                        <span className="font-bold text-shadow-hero">ProFlow Plumbing</span>
                    </Link>
                </div>
                <nav className="mt-8 flex flex-1 flex-col gap-6">
                    {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
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
