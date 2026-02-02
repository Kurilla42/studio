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

// Helper component for the static text info
const MemberInfo = ({ member, onShowDetails }: { member: TeamMember, onShowDetails: () => void }) => {
  return (
    <div className="flex flex-col items-center text-center">
        <h3 className="text-[2.7rem] text-foreground font-headline leading-tight">{member.name}</h3>
        <p className="text-[1.5rem] text-muted-foreground mt-1 leading-tight">{member.role}</p>
        <div className="my-6 inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-base self-center">
          {member.experience}
        </div>
        <Button onClick={onShowDetails} className="primary-gradient shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 self-center px-6 py-5 text-base">
           View Profile <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
    </div>
  );
};

// Helper component for the flippable card
const FlippableImageCard = ({ member, isFlipped, onHideDetails }: { member: TeamMember, isFlipped: boolean, onHideDetails: () => void }) => {
  const image = PlaceHolderImages.find(p => p.id === member.image);

  return (
    <div className="w-full aspect-[4/5] [perspective:1000px]">
        <motion.div
          className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front Face: Image */}
          <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg group">
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
                 <Button variant="ghost" size="icon" className="w-8 h-8 -mr-2 -mt-2" onClick={onHideDetails}>
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
  );
}

export default function Team() {
  const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>(
    teamMembers.reduce((acc, member) => ({ ...acc, [member.id]: false }), {})
  );

  const handleFlip = (memberId: string) => {
    setFlippedStates(prev => ({ ...prev, [memberId]: !prev[memberId] }));
  };

  const memberPairs: [TeamMember, TeamMember][] = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    if (teamMembers[i+1]) {
      memberPairs.push([teamMembers[i], teamMembers[i+1]]);
    }
  }

  return (
    <section id="team" className="bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[2.7rem] text-foreground leading-tight">
            Meet Our Expert Team
          </h2>
        </div>
        <div className="flex flex-col gap-y-24">
          {memberPairs.map((pair, index) => {
            const [member1, member2] = pair;
            const isReversed = index % 2 !== 0;
            
            const firstImageMember = isReversed ? member2 : member1;
            const secondImageMember = isReversed ? member1 : member2;

            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
                <FlippableImageCard
                  member={firstImageMember}
                  isFlipped={flippedStates[firstImageMember.id]}
                  onHideDetails={() => handleFlip(firstImageMember.id)}
                />
                
                <div className="flex flex-col justify-center gap-12 order-first lg:order-none">
                  <MemberInfo
                    member={member1}
                    onShowDetails={() => handleFlip(member1.id)}
                  />
                  <MemberInfo
                    member={member2}
                    onShowDetails={() => handleFlip(member2.id)}
                  />
                </div>

                <FlippableImageCard
                  member={secondImageMember}
                  isFlipped={flippedStates[secondImageMember.id]}
                  onHideDetails={() => handleFlip(secondImageMember.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
