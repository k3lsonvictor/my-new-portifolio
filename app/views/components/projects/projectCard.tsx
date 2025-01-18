import { StaticImageData } from "next/image";
import "@/app/styles/skillCard.scss"

interface TecnologyInfoProps {
  name: string;
  description: string;
}

export const ProjectCard = ({src, tecnologyInfo}:{src: StaticImageData, tecnologyInfo: TecnologyInfoProps}) => {
  return (
    <div className="skill-card w-[30%] min-w-[250px] max-[960px]:min-w-full h-[400px] flex flex-col bg-[#202123] border border-[#A8A8A8] items-center gap-6">
      <div className={`h-[50%] w-full`} style={{ backgroundImage: `url(${src.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      </div>
      <div className="px-6 flex flex-col gap-4">
        <div>
          {tecnologyInfo.name}
        </div>
        <div className="text-[14px]">
          {tecnologyInfo.description}
        </div>
      </div>
    </div>
  )
}