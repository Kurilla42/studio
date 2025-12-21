import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const comparisonData = [
  { feature: 'Response Time', us: '60 minutes', competitors: '3-5 hours' },
  { feature: 'Licensed & Insured', us: 'Yes', competitors: 'Not Always' },
  { feature: 'Upfront Pricing', us: 'Always', competitors: 'Rarely' },
  { feature: 'Background-Checked Technicians', us: '100%', competitors: 'Unknown' },
  { feature: 'Warranty on Work', us: 'Yes', competitors: 'Limited' },
  { feature: '24/7 Emergency Service', us: 'Yes', competitors: 'No' },
];

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
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="primary-gradient">
                    <th className="p-3 text-left font-bold text-primary-foreground"></th>
                    <th className="p-3 text-center font-bold text-primary-foreground">Us</th>
                    <th className="p-3 text-center font-bold text-primary-foreground">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={item.feature} className="border-b border-border last:border-b-0">
                      <td className="p-3 font-semibold text-foreground">{item.feature}</td>
                      <td className="p-3 text-center bg-primary/10 text-primary font-bold">{item.us}</td>
                      <td className="p-3 text-center text-muted-foreground">{item.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed border-l-4 border-primary pl-6">
                <p>
                ProFlow Plumbing is more than a plumbing service — it's your partner in protecting your home. For over 10 years, we've helped 1,000+ families avoid costly damage and get their plumbing back to normal quickly and safely. Our licensed and insured specialists handle everything from emergency burst pipes to planned upgrades and preventative maintenance.
                </p>
                <p>
                We don't just fix problems; we build long-term relationships with homeowners who know they can rely on us. When plumbing trouble hits, we work to be the first name you trust — that's the ProFlow Plumbing promise.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
