"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Badge from "./Badge";
import PriceText from "../typography/PriceText";
import { cn } from "@/utils/cn";

interface CartButtonProps {
  itemCount: number;
  total: number;
  onClick?: () => void;
  className?: string;
}

export default function CartButton({ itemCount, total, onClick, className }: CartButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-button bg-primary flex cursor-pointer items-center gap-2.5 px-4 py-2.5",
        className
      )}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <ShoppingBag className="text-surface h-5 w-5" />
        <AnimatePresence>
          {itemCount > 0 && (
            <motion.div
              key={itemCount}
              initial={{ scale: 0.5 }}
              animate={{ scale: [1.3, 1] }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3, ease: "backOut" as const }}
              className="absolute -top-2 -right-2"
            >
              <Badge
                variant="count"
                className="bg-accent text-charcoal h-4 min-w-4 px-1 text-[10px]"
              >
                {itemCount}
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-surface/80 text-[11px] font-medium">View Cart</span>
        <PriceText value={total} className="text-surface text-[14px]" />
      </div>
    </button>
  );
}
