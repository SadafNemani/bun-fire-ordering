import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  background?: "white" | "cream";
  children: ReactNode;
}

export default function Card({ background = "white", children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "shadow-card rounded-card flex flex-col gap-2.5 px-5 py-3.75",
        background === "white" ? "bg-surface" : "bg-surface-secondary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
