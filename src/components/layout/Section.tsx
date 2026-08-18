import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-10", className)} {...props}>
      {children}
    </section>
  );
}
