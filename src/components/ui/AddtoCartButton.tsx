"use client";

import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";

interface AddToCartButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function AddToCartButton({ onClick, className }: AddToCartButtonProps) {
  return (
    <div className={cn("relative h-12.5 w-12.5", className)}>
      <button
        onClick={onClick}
        className="group rounded-button bg-primary absolute top-0 right-0 flex h-12.5 w-fit cursor-pointer items-center justify-end overflow-hidden transition-all duration-300 ease-in-out"
        aria-label="Add to cart"
      >
        <span className="flex h-12.5 w-12.5 shrink-0 items-center justify-center">
          <Plus className="text-surface h-5 w-5" />
        </span>
        <span className="font-body text-surface max-w-0 overflow-hidden font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-12.5 group-hover:pr-3 group-hover:opacity-100">
          Add
        </span>
      </button>
    </div>
  );
}
