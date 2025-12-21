'use client';

import { useEffect } from 'react';

const useExitIntent = (onExitIntent: () => void) => {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      try {
        if (
          e.clientY <= 0 &&
          sessionStorage.getItem('exit-intent-shown') !== 'true'
        ) {
          onExitIntent();
          sessionStorage.setItem('exit-intent-shown', 'true');
        }
      } catch (error) {
        // sessionStorage is not available
        if (e.clientY <= 0) {
          onExitIntent();
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onExitIntent]);
};

export default useExitIntent;
