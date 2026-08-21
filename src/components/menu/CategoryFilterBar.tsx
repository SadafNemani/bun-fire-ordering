"use client";

import { cn } from "@/utils/cn";

export type SortOption = "popular" | "newest";

interface CategoryFilterBarProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const options: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "newest", label: "Newest" },
];

export default function CategoryFilterBar({ value, onChange }: CategoryFilterBarProps) {
  return (
    <div className="flex items-center gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-button font-body text-body-sm px-4 py-2 font-semibold transition-colors",
            value === option.value
              ? "bg-primary text-surface"
              : "bg-surface-secondary text-text-secondary hover:bg-background"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
