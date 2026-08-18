import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "cream" | "white";
  children: ReactNode;
}
export default function Section({
  background = "cream",
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-10", background === "white" ? "bg-surface" : "bg-background", className)}
      {...props}
    >
      {children}
    </section>
  );
}
