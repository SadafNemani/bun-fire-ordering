import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <span
      className={
        (cn("font-body text-accent text-section-label font-extrabold uppercase"), className)
      }
      {...props}
    >
      {children}
    </span>
  );
}
