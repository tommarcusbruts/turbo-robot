
'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const NUM_DOTS_X = 20; // Adjust for density
const NUM_DOTS_Y = 15; // Adjust for density

interface Dot {
  id: string;
  style: React.CSSProperties;
  animationDelay: string;
}

export function DigitalGrid() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const newDots: Dot[] = [];
    for (let i = 0; i < NUM_DOTS_X; i++) {
      for (let j = 0; j < NUM_DOTS_Y; j++) {
        newDots.push({
          id: `dot-${i}-${j}`,
          style: {
            left: `${(i / NUM_DOTS_X) * 100}%`,
            top: `${(j / NUM_DOTS_Y) * 100}%`,
            width: '3px',
            height: '3px',
            backgroundColor: 'hsl(var(--accent) / 0.5)', // Increased opacity
            borderRadius: '50%',
            position: 'absolute',
          },
          animationDelay: `${Math.random() * 2}s`,
        });
      }
    }
    setDots(newDots);
  }, []);

  if (dots.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="animate-subtle-pulse"
          style={{
            ...dot.style,
            animationDelay: dot.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
