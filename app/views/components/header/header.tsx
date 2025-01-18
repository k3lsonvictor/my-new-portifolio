"use client";
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";

export const Header = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    "about-section": false,
    "skills-section": false,
  });

  // console.log(visibleSections["home"] === true)

  const scrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = ["home", "about-section", "skills-section", "projects-section"];
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
      {
        root: null,
        rootMargin: "0px",
        threshold: window.innerWidth > 1000 ? 0.5 : 0.3,
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [visibleSections]); // Dependência no estado para atualização correta

  return (
    <div className="absolute top-0 max-[1000px]:top-10 max-[1000px]:flex-col max-[1000px]:gap-4 w-[calc(100%-15px)] h-auto flex justify-between bg-transparente font-jersey text-[#C2C2C2] text-[16px] px-[100px] 2xl:px-[300px] pt-[30px] z-[210] backdrop-blur-md pb-10 max-[1000px]:text-[2vw] max-[1000px]:w-min max-[1000px]:p-0">
      <RoughNotation type="underline" color="#C2C2C2" show={visibleSections["home"] && window.innerWidth > 1000}>
        <button className="cursor-pointer max-[1000px]:hidden" onClick={() => { scrollToSection("home"); }}>
          KELSON VICTOR
        </button>
        <button
          className={`hidden bg-white w-[20px] h-[10px] max-[1000px]:flex transition-all duration-300 ease-in-out transform ${visibleSections["home"] ? "w-[40px] opacity-100" : "opacity-50 hover:w-[40px] hover:opacity-100"}`}
          onClick={() => {
            scrollToSection("home");
          }}
        >
        </button>
      </RoughNotation>
      <div className="flex w-auto gap-20 max-[1000px]:grid max-[1000px]:grid-cols-1 max-[1000px]:gap-4">
        <RoughNotation
          type="circle"
          color="#C2C2C2"
          show={visibleSections["about-section"] && window.innerWidth > 1000}
        >
          <button
            className="max-[1000px]:hidden"
            id="about"
            onClick={() => {
              scrollToSection("about-section");
            }}
          >
            ABOUT
          </button>
          <button
            className={`hidden bg-white w-[20px] h-[10px] max-[1000px]:flex transition-all duration-300 ease-in-out transform ${visibleSections["about-section"] ? "w-[40px] opacity-100" : "opacity-50 hover:w-[40px] hover:opacity-100"}`}
            onClick={() => {
              scrollToSection("about-section");
            }}
          >
          </button>
        </RoughNotation>
        <RoughNotation
          type="circle"
          color="#C2C2C2"
          show={visibleSections["skills-section"] && window.innerWidth > 1000}
        >
          <button
            className="max-[1000px]:hidden"
            onClick={() => {
              scrollToSection("skills-section");
            }}
          >
            SKILLS
          </button>
          <button
            className={`hidden bg-white w-[20px] h-[10px] max-[1000px]:flex transition-all duration-300 ease-in-out transform ${visibleSections["skills-section"] ? "w-[40px] opacity-100" : "opacity-50 hover:w-[40px] hover:opacity-100"
              }`}
            onClick={() => {
              scrollToSection("skills-section");
            }}
          >
          </button>
        </RoughNotation>
        <RoughNotation
          type="circle"
          color="#C2C2C2"
          show={visibleSections["projects-section"] && window.innerWidth > 1000}
        >
          <button
            className="max-[1000px]:hidden"
            id="projects"
            onClick={() => {
              scrollToSection("projects-section");
            }}
          >PROJECTS</button>
          <button
            className={`hidden bg-white w-[20px] h-[10px] max-[1000px]:flex transition-all duration-300 ease-in-out transform ${visibleSections["projects-section"] ? "w-[40px] opacity-100" : "opacity-50 hover:w-[40px] hover:opacity-100"
              }`}
            onClick={() => {
              scrollToSection("projects-section");
            }}
          >
          </button>
        </RoughNotation>
        <RoughNotation
          type="circle"
          color="#C2C2C2"
          show={visibleSections["contact-section"] && window.innerWidth > 1000}
        >
          <button className="max-[1000px]:hidden" onClick={() => { }}>CONTACT</button>
          <button
            className={`hidden bg-white w-[20px] h-[10px] max-[1000px]:flex transition-all duration-300 ease-in-out transform ${visibleSections[""] ? "w-[40px] opacity-100" : "opacity-50 hover:w-[40px] hover:opacity-100"
              }`}
            onClick={() => {
              scrollToSection("about-section");
            }}
          >
          </button>
        </RoughNotation>
      </div>
    </div>
  );
};
