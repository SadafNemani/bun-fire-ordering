"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { cn } from "@/utils/cn";
import type { CategoryId } from "@/types/menu";

interface CategoryTabItem {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
  count: number;
}

interface CategoryTabsProps {
  categories: CategoryTabItem[];
  activeCategory: CategoryId;
  onChange: (id: CategoryId) => void;
}

export default function CategoryTabs({ categories, activeCategory, onChange }: CategoryTabsProps) {
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
              "rounded-button relative flex items-center gap-3 overflow-hidden px-4 py-3 text-left transition-colors",
              isActive ? "text-surface" : "bg-surface text-charcoal hover:bg-background"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="category-tab-active-bg"
                className="bg-primary absolute inset-0"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <Icon
              className={cn("relative z-10 h-5 w-5", isActive ? "text-surface" : "text-primary")}
            />
            <span className="font-body relative z-10 flex-1 text-[15px] font-semibold">
              {category.label}
            </span>
            <Badge
              variant={isActive ? "muted" : "count"}
              className={cn("relative z-10", isActive && "bg-surface/20 text-surface")}
            >
              {category.count}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
