import Image from "next/image"
import "@/app/styles/skillCard.scss"

interface TecnologyInfoProps {
  name: string;
  time: string;
}

export const SkillCard = ({src, tecnologyInfo, color}:{src: string, tecnologyInfo: TecnologyInfoProps, color: string}) => {
  return (
    <div className="skill-card w-max min-w-[30%] h-[100px] flex bg-[#202123] border border-[#A8A8A8] items-center px-6 gap-6" style={{ "--g-card-color": color } as React.CSSProperties}>
      <div>
        <Image
          src={src}
          alt=""
        />
      </div>
      <div>
        <div>
          {tecnologyInfo.name}
        </div>
        <div>
          {tecnologyInfo.time}
        </div>
      </div>
      <div className="g-card"></div>
    </div>
  )
}