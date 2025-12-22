'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { socialProofData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Notification = {
  id: number;
  avatar: string;
  avatarHint: string;
  name: string;
  action: string;
  time: string;
};

let hasShownSocialProof = false;

export default function SocialProof() {
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    if (hasShownSocialProof) {
      return;
    }

    const showRandomNotification = () => {
      const randomAvatarData = socialProofData.avatars[Math.floor(Math.random() * socialProofData.avatars.length)];
      const image = PlaceHolderImages.find(p => p.id === randomAvatarData);

      if (!image) return;

      const newNotification: Notification = {
        id: Date.now(),
        avatar: image.imageUrl,
        avatarHint: image.imageHint,
        name: socialProofData.names[Math.floor(Math.random() * socialProofData.names.length)],
        action: socialProofData.actions[Math.floor(Math.random() * socialProofData.actions.length)],
        time: socialProofData.times[Math.floor(Math.random() * socialProofData.times.length)],
      };
      setNotification(newNotification);
      hasShownSocialProof = true;
    };

    const initialTimeout = setTimeout(showRandomNotification, 5000); // First one after 5s

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 12000); // Auto-dismiss after 12s
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="fixed bottom-6 left-6 z-[9990]">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            layout
          >
            <Card className="w-[320px] p-4 shadow-2xl flex items-start gap-4">
              <Image
                src={notification.avatar}
                alt={notification.name}
                width={48}
                height={48}
                className="rounded-full"
                data-ai-hint={notification.avatarHint}
              />
              <div className="flex-1">
                <p className="font-bold text-sm text-foreground">{notification.name}</p>
                <p className="text-sm text-muted-foreground">{notification.action}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{notification.time}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 shrink-0"
                onClick={() => setNotification(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
