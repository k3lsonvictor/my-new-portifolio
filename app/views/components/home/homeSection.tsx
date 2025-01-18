"use client";
import { useEffect, useState } from "react";
import Arrow from "@/public/assets/Arrow.svg";
import Image from "next/image";

export const HomeSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Ativa o fade-in assim que o componente monta
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300); // Pequeno delay para garantir que o CSS aplique a transição
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className={`w-full h-full flex flex-col justify-center items-center text-[80px] font-jersey font-md text-[#C2C2C2] relative transition-opacity duration-[3000ms] ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>Hello</div>
      <div className={`max-[680px]:text-[12vw] text-[5rem] font-crimsonText font-sm`}>
        <p className="">I &apos;m Kelson</p>
      </div>
      <div className={`font-jersey font-md`}>
        <p className="max-[680px]:text-[6vw] text-[2rem]">A web developer</p>
      </div>
      <button onClick={scrollToAbout}>
        <Image
          src={Arrow}
          alt="Arrow"
          width={30}
          height={30}
          className="absolute bottom-[100px] animate-smoothBounce"
        />
      </button>
    </div>
  );
};
