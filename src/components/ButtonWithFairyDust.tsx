"use client";

import React, { useRef, useState, useCallback } from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import FairyDustEffect from './FairyDustEffect';

interface ButtonWithFairyDustProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonWithFairyDust: React.FC<ButtonWithFairyDustProps> = ({ children, onClick, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [particleTrigger, setParticleTrigger] = useState(0);
  const [particleOrigin, setParticleOrigin] = useState({ x: -100, y: -100 });

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setParticleOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
      setParticleTrigger((prev) => prev + 1);
    }
    onClick?.(event); // Call original onClick if it exists
  }, [onClick]);

  return (
    <>
      <Button ref={buttonRef} onClick={handleClick} {...props}>
        {children}
      </Button>
      <FairyDustEffect trigger={particleTrigger} originX={particleOrigin.x} originY={particleOrigin.y} />
    </>
  );
};

export default ButtonWithFairyDust;