'use client';

import { useEffect } from 'react';

let hasShownExitIntent = false;

const useExitIntent = (onExitIntent: () => void) => {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        onExitIntent();
        hasShownExitIntent = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onExitIntent]);
};

export default useExitIntent;
