import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "count" | "muted";
  children: ReactNode;
}

export default function Badge({ variant = "count", children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-button oy-0.5 text-body-sm inline-flex items-center justify-center px-2 font-medium",
        variant === "count" && "bg-primary text-surface",
        variant === "muted" && "bg-surface-secondary text-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
