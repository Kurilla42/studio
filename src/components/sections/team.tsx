import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function Team() {
  return (
    <section id="team" className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet Our Expert Team
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Highly trained specialists dedicated to delivering exceptional service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(p => p.id === member.image);
            return (
              <Card key={member.name} className="flex flex-col md:flex-row overflow-hidden group shadow-card hover:shadow-card-hover border-2 border-input/50 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-64 md:w-48 md:h-auto flex-shrink-0 overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <CardContent className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{member.description}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {member.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
