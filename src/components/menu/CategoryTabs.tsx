"use client";

import type { LucideIcon } from "lucide-react";
import Badge from "../ui/Badge";
import { cn } from "@/utils/cn";
import type { CategoryId } from "@/types/menu";

interface CategoryTabItem {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
  count: number;
}

interface CategoryTabProps {
  categories: CategoryTabItem[];
  activeCategory: CategoryId;
  onChange: (id: CategoryId) => void;
}

export default function CategoryTabs({ categories, activeCategory, onChange }: CategoryTabProps) {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={cn(
              "rounded-button flex cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors",
              isActive ? "bg-primary text-surface" : "bg-surface text-charcoal hover:bg-background"
            )}
          >
            <Icon className={cn("h-5 w-5", isActive ? "text-surface" : "text-primary")} />
            <span className="font-body text-body flex-1 font-semibold">{category.label}</span>
            <Badge
              variant={isActive ? "muted" : "count"}
              className={isActive ? "bg-surface/20 text-surface" : ""}
            >
              {category.count}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
