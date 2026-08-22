import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type HeadingSize = "hero" | "lg" | "md";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as?: ElementType;
  size?: HeadingSize;
  highlight?: string; // single-line case
  highlightLine?: number; // multi-line case
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
  highlightLine,
  children,
  className,
  ...props
}: HeadingProps) {
  const isLineArray = Array.isArray(children) && children.every((c) => typeof c === "string");

  return (
    <Tag
      className={cn("font-heading text-charcoal font-extrabold", sizeMap[size], className)}
      {...props}
    >
      {isLineArray
        ? (children as string[]).map((line, i) => (
            <span key={line} className={cn("block", i === highlightLine && "text-primary")}>
              {line}
            </span>
          ))
        : highlight && typeof children === "string"
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
