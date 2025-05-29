
'use client';

import { Cog, Server, Network } from 'lucide-react';
import type { SVGProps } from 'react';
import { useEffect, useState } from 'react';

const NUM_DEBRIS = 25;

// Simple Screw Icon
const ScrewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>Screw Icon</title>
    <circle cx="12" cy="12" r="8" />
    <line x1="9.5" y1="14.5" x2="14.5" y2="9.5" />
    <line x1="9.5" y1="9.5" x2="14.5" y2="14.5" />
  </svg>
);

interface DebrisItem {
  id: number;
  Icon: React.ElementType;
  style: React.CSSProperties;
  className: string;
}

const iconTypes = [Cog, Server, Network, ScrewIcon];
const animationClasses = ['animate-spin-slow', 'animate-bob-subtle', 'animate-drift-XY'];

export function TechDebrisAnimation() {
  const [debrisList, setDebrisList] = useState<DebrisItem[]>([]);

  useEffect(() => {
    const newDebris: DebrisItem[] = [];
    for (let i = 0; i < NUM_DEBRIS; i++) {
      const Icon = iconTypes[Math.floor(Math.random() * iconTypes.length)];
      const size = Math.random() * 1.5 + 1; // 1rem to 2.5rem
      const duration = Math.random() * 10 + 15; // 15s to 25s
      const delay = Math.random() * 5; // 0s to 5s
      const animClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];
      
      newDebris.push({
        id: i,
        Icon,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}rem`,
          height: `${size}rem`,
          opacity: Math.random() * 0.2 + 0.1, // 0.1 to 0.3 opacity
          position: 'absolute',
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
        },
        className: `text-foreground ${animClass}`,
      });
    }
    setDebrisList(newDebris);
  }, []);

  if (debrisList.length === 0) {
    return null; // Avoid rendering on server or before hydration
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {debrisList.map((item) => (
        <item.Icon
          key={item.id}
          style={item.style}
          className={item.className}
          strokeWidth={1} // Thinner lines for background elements
        />
      ))}
    </div>
  );
}
