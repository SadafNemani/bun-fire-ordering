"use client";

import { Plus, Minus } from "lucide-react";
import { cn } from "@/utils/cn";

interface QuantityStepperProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

export default function QuantityStepper({
  value,
  onIncrease,
  onDecrease,
  className,
}: QuantityStepperProps) {
  return (
    <div
      className={cn(
        "bg-background flex items-center justify-between gap-4 rounded-2xl px-5 py-2.5",
        className
      )}
    >
      <button onClick={onDecrease} aria-label="Decrease quantity">
        <Minus className="text-charcoal h-4 w-4" />
      </button>
      <span className="text-charcoal text-[18px] font-medium">{value}</span>
      <button onClick={onIncrease} aria-label="Increase quantity">
        <Plus className="text-charcoal h-4 w-4" />
      </button>
    </div>
  );
}
