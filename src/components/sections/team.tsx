'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { TeamMember } from '@/lib/types';

type TeamProps = {
  onBookPlumberClick: () => void;
};

// Helper component for the static text info
const MemberInfo = ({ member, onShowDetails, alignment = 'center', isOverlay = false }: { member: TeamMember, onShowDetails: () => void, alignment?: 'left' | 'right' | 'center', isOverlay?: boolean }) => {
  const alignmentClasses = {
    left: 'items-start text-left',
    right: 'items-end text-right',
    center: 'items-center text-center'
  };

  if (isOverlay) {
    return (
      <div className={cn("flex flex-col text-white", alignmentClasses[alignment])}>
        <h3 className="text-2xl font-body font-bold leading-tight text-shadow-md">{member.name}</h3>
        <p className="text-base mt-1 leading-tight text-shadow-sm opacity-90">{member.role}</p>
        <p className="text-base mt-1 text-shadow-sm opacity-90">{member.experience}</p>
        <Button onClick={onShowDetails} className="bg-white text-primary hover:bg-gray-100 border-none shadow-lg transition-transform duration-300 hover:-translate-y-0.5 px-6 py-3 mt-4">
           View Profile <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", alignmentClasses[alignment])}>
        <h3 className="text-3xl lg:text-4xl text-foreground font-body font-bold leading-tight">{member.name}</h3>
        <p className="text-xl text-muted-foreground mt-1 leading-tight">{member.role}</p>
        <p className="text-xl text-muted-foreground mt-1 leading-tight">{member.experience}</p>
        <Button onClick={onShowDetails} className="transition-all duration-300 hover:-translate-y-0.5 px-6 py-5 text-base mt-6">
           View Profile <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
    </div>
  );
};

// Helper component for the flippable card
const FlippableImageCard = ({ member, isFlipped, onHideDetails }: { member: TeamMember, isFlipped: boolean, onHideDetails: () => void }) => {
  const image = PlaceHolderImages.find(p => p.id === member.image);

  return (
    <div className="w-full h-full [perspective:1000px] rounded-lg ring-2 ring-primary ring-offset-4 ring-offset-background">
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
          </div>

          {/* Back Face: Details */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Card className="h-full w-full flex flex-col p-6 shadow-xl bg-card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl text-foreground font-bold font-inter">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
                 <Button variant="ghost" size="icon" className="w-8 h-8 -mr-2 -mt-2" onClick={onHideDetails}>
                  <X className="w-5 h-5 text-primary" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
              <div className="space-y-2 mt-4">
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

export default function Team({ onBookPlumberClick }: TeamProps) {
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
    <section id="team" className="bg-background px-6 md:px-12 py-20 rounded-2xl">
      <div className="h-16" />
      <div className="text-left mb-16">
        <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-[#0C0E28]">
          Meet Our Expert Team
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-12">
          {teamMembers.map((member) => (
              <div key={member.id} className="relative h-[48rem] w-full rounded-2xl overflow-hidden shadow-lg">
                  <FlippableImageCard
                      member={member}
                      isFlipped={flippedStates[member.id]}
                      onHideDetails={() => handleFlip(member.id)}
                  />
                  <AnimatePresence>
                  {!flippedStates[member.id] && (
                      <motion.div
                          className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                      >
                      <MemberInfo
                          member={member}
                          onShowDetails={() => handleFlip(member.id)}
                          alignment="left"
                          isOverlay={true}
                      />
                      </motion.div>
                  )}
                  </AnimatePresence>
              </div>
          ))}
      </div>

      {/* Desktop Layout: Image | Info-Top, Info-Bottom | Image */}
      <div className="hidden md:flex flex-col gap-y-16 md:gap-y-24">
        {memberPairs.map((pair, index) => {
          const [member1, member2] = pair;

          return (
            <div key={index} className="grid md:grid-cols-4 md:gap-x-8 items-stretch h-[48rem]">
                <div className="col-span-1">
                  <FlippableImageCard
                    member={member1}
                    isFlipped={flippedStates[member1.id]}
                    onHideDetails={() => handleFlip(member1.id)}
                  />
                </div>

                <div className="col-span-2 flex flex-col justify-around py-12">
                  <MemberInfo
                    member={member1}
                    onShowDetails={() => handleFlip(member1.id)}
                    alignment="left"
                  />
                  <MemberInfo
                    member={member2}
                    onShowDetails={() => handleFlip(member2.id)}
                    alignment="right"
                  />
                </div>
                
                <div className="col-span-1">
                  <FlippableImageCard
                    member={member2}
                    isFlipped={flippedStates[member2.id]}
                    onHideDetails={() => handleFlip(member2.id)}
                  />
                </div>
            </div>
          );
        })}
      </div>
      <div className="h-8" />
      <div className="text-center mt-6">
        <Button size="lg" className="bg-[#f2cf17] text-primary hover:bg-[#f2cf17]/90 border-2 border-primary shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 hover:-translate-y-0.5 h-12 px-6 text-base sm:h-14 sm:px-12 sm:text-lg" onClick={onBookPlumberClick}>
            Book Your Plumber
        </Button>
      </div>
    </section>
  );
}
