"use client";
import Weather from "@/public/assets/weather.png"
import OrangePortfolio from "@/public/assets/orangePortfolio.png"
import Padaria from "@/public/assets/padaria.png"
import Bren from  "@/public/assets/bren.png"
import { ProjectCard } from './projectCard';

export const ProjectsSection = () => {
  return (
    <div id="projects-section" className="sw-full h-auto flex flex-col justify-start pt-[100px] 2xl:pt-[200px] pb-[100px] items-start font-jersey font-lg text-[#C2C2C2]">
      <div className="mb-10 font-sm text-[2rem]">MY PROJECTS</div>
      <div className="w-full flex flex-wrap justify-between gap-y-10">
        <ProjectCard src={Weather} tecnologyInfo={{ name: "Weather", description: "Uma plataforma de previsão do tempo integrada com ia para fazer sugestões sobre o que fazer de acordo com os dados do tempo." }} />
        <ProjectCard src={OrangePortfolio} tecnologyInfo={{ name: "Orange Portfólio", description: "Projeto realizado no botcamp da FCamara. O site é uma plataforma de compartilhamento de projetos pessoais entre os usuários." }} />
        <ProjectCard src={Padaria} tecnologyInfo={{ name: "Padaria Pão Nosso", description: "Site feito para uma padaria local. Nele é possível ver os produtos disponíveis e fazer a sua compra online." }} />
        <ProjectCard src={Bren} tecnologyInfo={{ name: "Bren", description: "Uma plataforma de inteligência artifical usada para tornar negócios mais eficientes e lucratívos automatizando a interação humana com os clientes." }} />

      </div>
    </div>
  );
}