'use client';

import { useEffect } from 'react';

export default function DevToolsBlocker() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
      }
      // Block Ctrl+Shift+I (Windows/Linux)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
      // Block Cmd+Opt+I (Mac)
      if (e.metaKey && e.altKey && e.key === 'i') {
         e.preventDefault();
      }
      // Block Ctrl+Shift+J (Windows/Linux)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
      }
       // Block Cmd+Opt+J (Mac)
      if (e.metaKey && e.altKey && e.key === 'j') {
        e.preventDefault();
      }
      // Block Ctrl+U
      if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
      }
       // Block Cmd+U
       if (e.metaKey && e.key === 'u') {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
