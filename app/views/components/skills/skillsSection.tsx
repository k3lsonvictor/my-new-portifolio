"use client";
import JavaScript from "@/public/assets/logos/Group4.svg"
import TypeScript from "@/public/assets/logos/image.svg"
import React from "@/public/assets/logos/image-1.svg"
import Tailwind from "@/public/assets/logos/image-2.svg"
import Node from "@/public/assets/logos/image-3.svg"
import Next from "@/public/assets/logos/Group 3.svg"
import Nest from "@/public/assets/logos/Group 3-1.svg"
import { SkillCard } from './skillCard';

export const SkillsSection = () => {
  return (
    <div id="skills-section" className="sw-full h-auto flex flex-col justify-start pt-[100px] 2xl:pt-[200px] pb-[100px] items-start font-jersey font-lg text-[#C2C2C2]">
      <div className="mb-10 font-sm text-[2rem]">SKILLS</div>
      <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3"> {/* Alterei de justify-between para justify-start */}
        <SkillCard src={JavaScript} tecnologyInfo={{ name: "JavaScript", time: "4 anos" }} color="247, 223, 30" />
        <SkillCard src={TypeScript} tecnologyInfo={{ name: "TypeScript", time: "3 anos" }} color="0, 122, 204" />
        <SkillCard src={React} tecnologyInfo={{ name: "React", time: "3 anos" }} color="0, 216, 255" />
        <SkillCard src={Tailwind} tecnologyInfo={{ name: "Tailwind", time: "3 anos" }} color="6, 182, 212" />
        <SkillCard src={Node} tecnologyInfo={{ name: "Node", time: "3 anos" }} color="83, 158, 67" />
        <SkillCard src={Next} tecnologyInfo={{ name: "Next", time: "3 anos" }} color="0, 0, 0" />
        <SkillCard src={Nest} tecnologyInfo={{ name: "Nest", time: "3 anos" }} color="223, 35, 77" />
      </div>
    </div>
  );
}