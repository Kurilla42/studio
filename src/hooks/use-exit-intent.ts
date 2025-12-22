'use client';

import { useEffect } from 'react';

const useExitIntent = (onExitIntent: () => void) => {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // e.clientY <= 0: The user's cursor is at the top of the viewport.
      // e.relatedTarget === null: The cursor has left the window.
      // document.hasFocus() is false: The user has switched tabs.
      if (e.clientY <= 0 || e.relatedTarget === null) {
        onExitIntent();
      }
    };
    
    const handleBeforeUnload = () => {
        onExitIntent();
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [onExitIntent]);
};

export default useExitIntent;
