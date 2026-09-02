"use client";

import { motion, AnimatePresence } from "framer-motion";
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
      <button onClick={onDecrease} aria-label="Decrease quantity" className="cursor-pointer">
        <Minus className="text-charcoal hover:text-primary h-4 w-4" />
      </button>

      <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 8, scale: 1.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="text-charcoal text-button font-medium"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>

      <button onClick={onIncrease} aria-label="Increase quantity" className="cursor-pointer">
        <Plus className="text-charcoal hover:text-primary h-4 w-4" />
      </button>
    </div>
  );
}
