"use client";
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";

export const Header = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    "about-section": false,
    "skills-section": false,
  });

  const scrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = ["home", "about-section", "skills-section"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const updatedSections = { ...visibleSections };
        entries.forEach((entry) => {
          updatedSections[entry.target.id] = entry.isIntersecting;
        });
        setVisibleSections(updatedSections);
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [visibleSections]); // Dependência no estado para atualização correta

  return (
    <div className="absolute top-0 w-[calc(100%-15px)] h-auto flex justify-between bg-transparente font-jersey text-[#C2C2C2] text-[16px] px-[100px] 2xl:px-[300px] pt-[30px] z-[210] backdrop-blur-md pb-10">
      <RoughNotation type="underline" color="#C2C2C2" show={visibleSections["home"]}>
        <button className="cursor-pointer" onClick={() => {scrollToSection("home");}}>
          KELSON VICTOR
        </button>
      </RoughNotation>
      <div className="flex w-auto gap-20">
        <RoughNotation
          type="circle"
          color="#C2C2C2"
          show={visibleSections["about-section"]}
        >
          <button
            id="about"
            onClick={() => {
              scrollToSection("about-section");
            }}
          >
            ABOUT
          </button>
        </RoughNotation>
        <RoughNotation
          type="circle"
          color="#C2C2C2"
          show={visibleSections["skills-section"]}
        >
          <button
            id="skills"
            onClick={() => {
              scrollToSection("skills-section");
            }}
          >
            SKILLS
          </button>
        </RoughNotation>
        <button onClick={() => { }}>PROJECTS</button>
        <button onClick={() => { }}>CONTACT</button>
      </div>
    </div>
  );
};
