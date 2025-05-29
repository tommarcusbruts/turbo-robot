
'use client';

import { useEffect, useState } from 'react';

const NUM_DROPS = 75; // Number of raindrops/characters

interface RainDrop {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  content: string;
  fontSize: string;
}

export function RainingCode() {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    // Ensure this runs only on the client
    const newDrops: RainDrop[] = [];
    for (let i = 0; i < NUM_DROPS; i++) {
      newDrops.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`, // Stagger start times
        animationDuration: `${Math.random() * 4 + 4}s`, // Vary fall speed (4-8s)
        content: Math.random() > 0.5 ? '0' : '1',
        fontSize: `${Math.random() * 0.4 + 0.8}rem`, // Vary size (0.8rem to 1.2rem)
      });
    }
    setDrops(newDrops);
  }, []);

  if (drops.length === 0) {
    // Return null or a placeholder during server render / before hydration if needed
    // to avoid hydration mismatch if Math.random() would cause issues.
    // Since drops are initialized in useEffect, this handles the initial state.
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute text-primary/60 animate-rain-fall font-mono" // Using primary color with increased opacity
          style={{
            left: drop.left,
            animationDelay: drop.animationDelay,
            animationDuration: drop.animationDuration,
            fontSize: drop.fontSize,
            top: '-30px', // Start characters off-screen (above the viewport)
          }}
        >
          {drop.content}
        </span>
      ))}
    </div>
  );
}
