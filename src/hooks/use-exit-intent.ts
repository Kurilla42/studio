'use client';

import { useEffect } from 'react';

const useExitIntent = (onExitIntent: () => void) => {
  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        onExitIntent();
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // This is sometimes used for mobile, but can be intrusive.
      // We will stick to desktop mouse leave for now.
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    // window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      // window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [onExitIntent]);
};

export default useExitIntent;
