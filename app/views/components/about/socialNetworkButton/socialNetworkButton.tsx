import { ReactNode } from "react";

interface SocialNetworkButtonProps {
  children: ReactNode;
}

export const SocialNetworkButton = ({ children }: SocialNetworkButtonProps) => {
  return (
    <button className="w-6 h-6 opacity-50 hover:opacity-100 hover:transform hover:scale-110 transition-transform duration-200">
      {children}
    </button>
  );
}