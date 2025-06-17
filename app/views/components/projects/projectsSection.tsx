"use client";
import Weather from "@/public/assets/weather.png"
import OrangePortfolio from "@/public/assets/orangePortfolio.png"
import Padaria from "@/public/assets/padaria.png"
import Bren from "@/public/assets/bren.png"
import { ProjectCard } from './projectCard';
import axios from "axios";
import { useEffect, useState } from "react";

interface ProjetosProps {
  name: string,
  description: string,
  thumb_url: string,
  link: string,
  tecnologies: string[]
}

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjetosProps[]>([])

  useEffect(() => {
    getProjects();
  }, [])

  const getProjects = async () => {
    try {
      const response = await axios.get("https://projects-api-w9p1.onrender.com/");
      if (!response) {
        return
      }
      setProjects(response.data)
      console.log(response)
    } catch {
      console.log("Erro ao buscar projetos")
    }
  }
  return (
    <div id="projects-section" className="sw-full h-auto flex flex-col justify-start pt-[100px] 2xl:pt-[200px] pb-[100px] items-start font-jersey font-lg text-[#C2C2C2]">
      <div className="mb-10 font-sm text-[2rem]">MY PROJECTS</div>
      <div className="w-full flex flex-wrap justify-between gap-y-10">
        {projects.length === 0 ? (
          <>
            <ProjectCard src={Weather} ProjectInfo={{ tecnologies: ["react", "flask"], name: "Weather", description: "Uma plataforma de previsão do tempo integrada com ia para fazer sugestões sobre o que fazer de acordo com os dados do tempo." }} link="https://weather-project-kappa-ten.vercel.app/weather" />
            <ProjectCard src={OrangePortfolio} ProjectInfo={{ tecnologies: ["react", "node"], name: "Orange Portfólio", description: "Projeto realizado no botcamp da FCamara. O site é uma plataforma de compartilhamento de projetos pessoais entre os usuários." }} link="https://hackathon-squad-29-front-end.vercel.app" />
            <ProjectCard src={Padaria} ProjectInfo={{ tecnologies: ["react"], name: "Padaria Pão Nosso", description: "Site feito para uma padaria local. Nele é possível ver os produtos disponíveis e fazer a sua compra online." }} link="https://padaria-project-bm85.vercel.app" />
            <ProjectCard src={Bren} ProjectInfo={{ tecnologies: ["react", "djando-ninja"], name: "Bren", description: "Uma plataforma de inteligência artifical usada para tornar negócios mais eficientes e lucratívos automatizando a interação humana com os clientes." }} link="https://wearebren.com" />
          </>
        ) : (
          projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              src={project.thumb_url}
              ProjectInfo={{
                tecnologies: project.tecnologies,
                name: project.name,
                description: project.description
              }}
              link={project.link}
            />
          ))
        )}
      </div>
    </div>
  );
}