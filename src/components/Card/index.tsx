import type { ReactNode } from "react";


export interface ICardProps {
    children?: ReactNode,
}

export default function Card ({children}: ICardProps) {
  return (
    <div className="bg-theme-light border-theme border-2 rounded-2xl shadow-2xl px-2 py-4 min-h-4/12 min-w-3/12">
      {children}
    </div>
  );
}
