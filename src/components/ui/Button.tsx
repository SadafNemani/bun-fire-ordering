import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-button font-body inline-flex cursor-pointer items-center gap-2 px-6 py-3 font-semibold transition-colors",
        variant === "primary" && "bg-primary text-surface hover:bg-primary/90",
        variant === "secondary" &&
          "border-charcoal text-charcoal hover:bg-charcoal/5 border bg-transparent",
        className
      )}
      {...props}
    >
      {children}
      {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
