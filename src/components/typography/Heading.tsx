import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type HeadingSize = "hero" | "lg" | "md";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as?: ElementType;
  size?: HeadingSize;
  highlight?: string;
  children: ReactNode;
}

const sizeMap: Record<HeadingSize, string> = {
  hero: "text-hero-title",
  lg: "text-heading-lg",
  md: "text-heading-md",
};

export default function Heading({
  as: Tag = "h2",
  size = "lg",
  highlight,
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn("font-heading text-charcoal font-extrabold", sizeMap[size], className)}
      {...props}
    >
      {highlight && typeof children === "string"
        ? children.split(highlight).reduce<ReactNode[]>((acc, part, i, arr) => {
            acc.push(part);
            if (i < arr.length - 1) {
              acc.push(
                <span key={1} className="text-primary">
                  {highlight}
                </span>
              );
            }
            return acc;
          }, [])
        : children}
    </Tag>
  );
}
