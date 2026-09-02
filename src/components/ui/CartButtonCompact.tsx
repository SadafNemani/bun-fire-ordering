"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Badge from "./Badge";

interface CartButtonCompactProps {
  itemCount: number;
  onClick?: () => void;
}

export default function CartButtonCompact({ itemCount, onClick }: CartButtonCompactProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      aria-label={`View cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
      className="rounded-button bg-primary shadow-button relative flex h-11 w-11 items-center justify-center"
    >
      <ShoppingBag className="text-surface h-5 w-5" />
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            key={itemCount}
            initial={{ scale: 0.5 }}
            animate={{ scale: [1.3, 1] }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3, ease: "backOut" as const }}
            className="absolute -top-1 -right-1"
          >
            <Badge variant="count" className="bg-accent text-charcoal h-4 min-w-4 px-1 text-[10px]">
              {itemCount}
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
