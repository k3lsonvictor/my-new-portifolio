import { ReactNode } from "react";

interface SocialNetworkButtonProps {
  children: ReactNode;
  link: string;
}

export const SocialNetworkButton = ({ children, link }: SocialNetworkButtonProps) => {
  return (
    <button className="w-6 h-6 opacity-50 hover:opacity-100 hover:transform hover:scale-110 transition-transform duration-200" onClick={() => window.open(link, '_blank')}>
      {children}
    </button>
  );
}