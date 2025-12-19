import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-main-image');

  return (
    <section id="about" className="bg-secondary !py-12 md:!py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Hundreds of Homeowners Choose ProFlow Plumbing
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              ProFlow Plumbing is more than a plumbing service — it's your partner in protecting your home. For over 10 years, we've helped 1,000+ families avoid costly damage and get their plumbing back to normal quickly and safely. Our licensed and insured specialists handle everything from emergency burst pipes to planned upgrades and preventative maintenance.
            </p>
            <p>
              Plumbing issues never happen at a good time. A leak can destroy walls, a sewer backup can stop life at home, and a burst winter pipe can cost thousands. That's why we provide fast emergency response, accurate diagnostics, and fair, transparent pricing — no hidden fees or surprise charges.
            </p>
            <p>
              We don't just fix problems; we build long-term relationships with homeowners who know they can rely on us. When plumbing trouble hits, we work to be the first name you trust — that's the ProFlow Plumbing promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
