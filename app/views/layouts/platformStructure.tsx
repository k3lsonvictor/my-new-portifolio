"use client";

import React, { ReactNode, useEffect, useState } from "react";
import "@/app/styles/platformStructure.scss";
import { Header } from "../components/header/header";

export const PlatformStructure = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Marcamos o componente como montado
  }, []);

  useEffect(() => {
    if (!mounted) return; // Só executa após montagem

    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    if (!interBubble) return;

    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;
    let tgX = curX;
    let tgY = curY;

    function move() {
      curX += (tgX - curX) / 5;
      curY += (tgY - curY) / 5;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="platform-container flex flex-col h-screen w-full overflow-hidden">
      <Header />
      <div className="children-container w-full h-full overflow-y-scroll">{children}</div>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};
