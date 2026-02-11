'use client';

import Link from 'next/link';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';

const displayNavItems = navItems.slice(0, 4);
const faqItem = navItems.find(item => item.name === 'FAQ');

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center bg-primary bg-noise-dark rounded-full p-1.5 gap-1 sm:gap-2 shadow-lg">
        <nav className="flex items-center gap-1">
          {displayNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium transition-colors rounded-full",
                "text-sm px-3 py-2",
                "text-primary-foreground hover:bg-white/10"
              )}
            >
              {item.name}
            </Link>
          ))}
          {faqItem && (
             <Link
                key={faqItem.name}
                href={faqItem.href}
                className={cn(
                    "font-medium transition-colors rounded-full",
                    "text-sm px-3 py-2",
                    "text-primary-foreground hover:bg-white/10"
                )}
                >
                {faqItem.name}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
