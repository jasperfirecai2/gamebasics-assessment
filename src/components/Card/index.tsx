import type { HTMLAttributes, ReactNode } from "react";

export interface ICardProps {
    children?: ReactNode,
}

export default function Card ({children, className, ...props}: ICardProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-theme-light border-theme border-2 rounded-2xl shadow-2xl px-2 py-4 min-h-4/12 min-w-3/12 ${className}`} {...props}>
      {children}
    </div>
  );
}
