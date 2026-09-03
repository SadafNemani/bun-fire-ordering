"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
> {
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
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "rounded-button font-body inline-flex cursor-pointer items-center gap-2 px-6 py-3.5 font-bold transition-colors",
        variant === "primary" &&
          "bg-primary-darker text-surface hover:bg-primary-darker/90 hover:shadow-button",
        variant === "secondary" &&
          "border-charcoal text-charcoal hover:bg-charcoal/5 border bg-transparent",
        className
      )}
      {...props}
    >
      {children}
      {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </motion.button>
  );
}
