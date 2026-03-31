import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps {
    children?: ReactNode,
}

export default function Button ({className, children, ...props}: IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`bg-theme-button hover:bg-theme border-theme hover:border-theme-light hover:text-white cursor-pointer border-2 rounded-lg shadow-lg px-4 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
}
