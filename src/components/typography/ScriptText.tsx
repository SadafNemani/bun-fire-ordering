import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ScriptTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function ScriptText({ children, className, ...props }: ScriptTextProps) {
  return (
    <span className={cn("font-script text-charcoal text-[40px]", className)} {...props}>
      {children}
    </span>
  );
}
