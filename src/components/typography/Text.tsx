import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  size?: "body" | "body-sm";
  weight?: "normal" | "medium" | "semibold";
  color?: "primary" | "secondary";
  children: ReactNode;
}

const weightMap = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

export default function Text({
  as: Tag = "p",
  size = "body",
  weight = "normal",
  color = "primary",
  children,
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-body",
        size === "body" ? "text-body" : "text-body-sm",
        weightMap[weight],
        color === "primary" ? "text-text-primary" : "text-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
