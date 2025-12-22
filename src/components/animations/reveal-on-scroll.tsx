'use client';

import { motion } from 'framer-motion';

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
};

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
}: RevealOnScrollProps) {

  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
