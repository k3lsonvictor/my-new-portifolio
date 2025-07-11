import Image, { StaticImageData } from "next/image";
import Arrow from "@/public/assets/Arrow.svg";
import "@/app/styles/skillCard.scss"

interface ProjectInfoProps {
  name: string;
  description: string;
  tecnologies: string[];
}

export const ProjectCard = ({ src, ProjectInfo, link }: { src: StaticImageData | string, ProjectInfo: ProjectInfoProps, link: string }) => {
  return (
    <div className="skill-card w-[30%] min-w-[250px] max-[960px]:min-w-full h-[400px] flex flex-col bg-[#202123] border border-[#A8A8A8] items-center gap-6">
      <div className="w-full h-[50%] border border-transparent overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${typeof src === "string" ? src : src.src
                })`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="w-full h-full hover:backdrop-blur-[1px] hover:backdrop-brightness-[0.13] flex justify-center items-center group">
              <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border px-4 py-2 flex gap-2 items-center" onClick={() => window.open(link, '_blank')}>
                Acessar
                <div className="rotate-[-135deg]">
                  <Image
                    src={Arrow}
                    alt="Arrow"
                    width={10}
                    height={30}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-4">
        <div>
          <div className="text-[14px] flex gap-2">
            {ProjectInfo.tecnologies?.map((tec, index) => (
              <div className="bg-white bg-opacity-10 px-2 py-1 rounded-full" key={index}>
                {tec}
              </div>
            ))}
          </div>
        </div>
        <div>
          {ProjectInfo.name}
        </div>
        <div className="text-[14px]">
          {ProjectInfo.description}
        </div>
      </div>
    </div>
  )
}