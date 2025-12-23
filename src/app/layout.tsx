import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Inter, Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: '700',
});

export const metadata: Metadata = {
  title: 'ProFlow Plumbing - Expert Plumbing Services',
  description: 'Expert Plumbing Services You Can Trust, Afford, and Get Fast. Licensed and insured specialists for emergency repairs, installations, and maintenance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('!scroll-smooth', inter.variable, oswald.variable)}>
      <head>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
