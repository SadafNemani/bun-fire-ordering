import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": [
        {
          text: ["primary", "secondary", "accent"],
        },
      ],

      "font-size": [
        {
          text: [
            "section-heading",
            "section-label",
            "section-description",
            "body",
            "statistic",
            "project-title",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
