import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Anton, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
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
    <html lang="en" className={cn('!scroll-smooth', anton.variable, inter.variable)}>
      <head>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
