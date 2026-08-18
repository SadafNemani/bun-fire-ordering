import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-300 px-5 sm:px-8 xl:px-0", className)} {...props}>
      {children}
    </div>
  );
}
