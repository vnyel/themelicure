"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const CursorTrail: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });

    // Add a new particle
    particleIdRef.current += 1;
    setParticles((prevParticles) => [
      ...prevParticles,
      {
        id: particleIdRef.current,
        x: e.clientX + (Math.random() - 0.5) * 10, // Slight random offset
        y: e.clientY + (Math.random() - 0.5) * 10, // Slight random offset
        size: Math.random() * 8 + 4, // Random size between 4 and 12
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 60, // Life between 60 and 120 frames
      },
    ]);
  }, []);

  const animateParticles = useCallback(() => {
    setParticles((prevParticles) =>
      prevParticles
        .map((p) => ({
          ...p,
          life: p.life + 1,
          opacity: 1 - p.life / p.maxLife,
          size: p.size * (1 - 0.01), // Slowly shrink
        }))
        .filter((p) => p.life < p.maxLife && p.opacity > 0.05) // Remove dead or very faint particles
    );
    animationFrameRef.current = requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, animateParticles]);

  return (
    <>
      {/* Main custom cursor */}
      <div
        className="fixed rounded-full bg-pink-400 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          width: '20px',
          height: '20px',
        }}
      />

      {/* Fairy dust particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed rounded-full bg-pink-300 pointer-events-none z-[9998]"
          style={{
            left: p.x,
            top: p.y,
            transform: 'translate(-50%, -50%)',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            filter: 'blur(1px)', // Soften the particles
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;