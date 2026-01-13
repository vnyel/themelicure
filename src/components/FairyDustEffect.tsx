"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface FairyDustEffectProps {
  trigger: number; // A prop that changes to trigger new particles
  originX: number;
  originY: number;
}

const FairyDustEffect: React.FC<FairyDustEffectProps> = ({ trigger, originX, originY }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const numParticles = 10; // Number of particles per click
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: originX,
        y: originY,
        size: Math.random() * 5 + 3, // Random size between 3 and 8
        opacity: 1,
        vx: (Math.random() - 0.5) * 4, // Random horizontal velocity
        vy: (Math.random() - 0.5) * 4, // Random vertical velocity
        life: 0,
        maxLife: Math.random() * 60 + 60, // Life between 60 and 120 frames
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
  }, [originX, originY]);

  useEffect(() => {
    if (trigger > 0) {
      generateParticles();
    }
  }, [trigger, generateParticles]);

  const animateParticles = useCallback(() => {
    setParticles((prevParticles) => {
      const updatedParticles = prevParticles
        .map((p) => {
          const newLife = p.life + 1;
          const newOpacity = 1 - newLife / p.maxLife;
          return {
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: newOpacity,
            life: newLife,
          };
        })
        .filter((p) => p.opacity > 0); // Remove dead particles

      return updatedParticles;
    });

    animationFrameId.current = requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animateParticles]);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed rounded-full bg-pink-300 pointer-events-none z-[9998]" // Lower z-index to appear behind buttons
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.1s ease-out', // Smooth fade out
          }}
        />
      ))}
    </>
  );
};

export default FairyDustEffect;