// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": [
        {
          text: [
            "primary",
            "accent",
            "charcoal",
            "success",
            "surface",
            "text-primary",
            "text-secondary",
          ],
        },
      ],

      "font-size": [
        {
          text: [
            "hero-title",
            "heading-lg",
            "heading-md",
            "section-label",
            "item-title",
            "price",
            "body",
            "body-sm",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
