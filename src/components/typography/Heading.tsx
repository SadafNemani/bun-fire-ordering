"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type HeadingSize = "hero" | "lg" | "md";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as?: ElementType;
  size?: HeadingSize;
  highlight?: string; // single-line case
  highlightLine?: number; // multi-line case
  animate?: boolean;
  children: ReactNode;
}

const sizeMap: Record<HeadingSize, string> = {
  hero: "text-hero-title",
  lg: "text-heading-lg",
  md: "text-heading-md",
};

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Heading({
  as: Tag = "h2",
  size = "lg",
  highlight,
  highlightLine,
  animate = false,
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
        ? (children as string[]).map((line, i) =>
            animate ? (
              <motion.span
                key={line}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" as const }}
                className={cn("block", i === highlightLine && "text-primary-darker")}
              >
                {line}
              </motion.span>
            ) : (
              <span
                key={line}
                className={cn("block", i === highlightLine && "text-primary-darker")}
              >
                {line}
              </span>
            )
          )
        : highlight && typeof children === "string"
          ? children.split(highlight).reduce<ReactNode[]>((acc, part, i, arr) => {
              acc.push(part);
              if (i < arr.length - 1) {
                acc.push(
                  <span key={1} className="text-primary-darker">
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
