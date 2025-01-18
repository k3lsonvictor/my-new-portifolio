import "@/app/styles/skillCard.scss"
import { ReactNode } from "react";

export const ContactCard = ({ children, contact, link }: { children: ReactNode, contact: string, link: string }) => {
  return (
    <div className="skill-card w-full max-[660px]:min-w-full min-w-[30%] h-[100px] flex bg-[#202123] border border-[#A8A8A8] items-center px-6 gap-6">
      <div className="flex w-full items-center gap-6">
        <div className="w-[40px] max-[500px]:w-[20px]">
          {children}
        </div>
        <button onClick={() => window.open(link, '_blank')} className="max-[500px]:text-[14px]">{contact}</button>
      </div>
    </div>
  )
}