"use client";

import React, { useState, useEffect, useCallback } from 'react';

const CursorTrail: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

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
    </>
  );
};

export default CursorTrail;