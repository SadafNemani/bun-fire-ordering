import type { HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: LucideIcon;
  children: ReactNode;
}

export default function Label({ icon: Icon, children, className, ...props }: LabelProps) {
  return (
    <span
      className={cn(
        "bg-charcoal rounded-button font-body text-accent text-section-label inline-flex items-center gap-2 px-4 py-2 font-extrabold uppercase",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="fill-accent h-5 w-5" />}
      {children}
    </span>
  );
}
