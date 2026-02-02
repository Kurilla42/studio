'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { TeamMember } from '@/lib/types';

// Sub-component for each team member to handle state and animation
const TeamMemberDisplay = ({ member, imageAlignment }: { member: TeamMember; imageAlignment: 'left' | 'right' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const image = PlaceHolderImages.find(p => p.id === member.image);

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center",
      imageAlignment === 'right' && "md:[direction:rtl]"
    )}>
      
      {/* Flippable Column */}
      <div className="[perspective:1000px] w-full aspect-[4/5] [direction:ltr]">
        <motion.div
          className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front Face: Image */}
          <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => setIsFlipped(true)}>
            {image && (
              <Image
                src={image.imageUrl}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={image.imageHint}
              />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Back Face: Details */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Card className="h-full w-full flex flex-col p-6 shadow-xl bg-card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl text-foreground font-bold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
                 <Button variant="ghost" size="icon" className="w-8 h-8 -mr-2 -mt-2" onClick={() => setIsFlipped(false)}>
                  <X className="w-5 h-5 text-primary" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{member.description}</p>
              <div className="space-y-2 mt-auto">
                {member.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Static Text & Button Column */}
      <div className="[direction:ltr] flex flex-col justify-center">
        <h3 className="text-[2.7rem] text-foreground font-headline leading-tight">{member.name}</h3>
        <p className="text-[1.5rem] text-muted-foreground mt-1 leading-tight">{member.role}</p>
        <div className="my-6 inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-base self-start">
          {member.experience}
        </div>
        <Button onClick={() => setIsFlipped(true)} className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 self-start px-6 py-5 text-base">
           View Profile <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section id="team" className="bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[2.7rem] text-foreground leading-tight">
            Meet Our Expert Team
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamMemberDisplay
              key={member.id}
              member={member}
              imageAlignment={index % 2 !== 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
