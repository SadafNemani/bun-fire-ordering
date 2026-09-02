"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";
import { triggerFlyToCart } from "../cart/FlyToCartLayer";

interface AddToCartButtonProps {
  onClick?: () => void;
  image?: string;
  className?: string;
}

export default function AddToCartButton({ onClick, image, className }: AddToCartButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (image) {
      triggerFlyToCart(rect.left + rect.width / 2, rect.top + rect.height / 2, image);
    }
    onClick?.();
  };

  return (
    <div className={cn("relative h-12.5 w-12.5", className)}>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={handleClick}
        className="group rounded-button bg-primary absolute top-0 right-0 flex h-12.5 w-12.5 cursor-pointer items-center justify-end overflow-hidden transition-[width] duration-300 ease-in-out hover:w-23"
        aria-label="Add to cart"
      >
        <span className="flex h-12.5 w-12.5 shrink-0 items-center justify-center">
          <Plus className="text-surface h-5 w-5" />
        </span>
        <span className="font-body text-surface max-w-0 overflow-hidden font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-12.5 group-hover:pr-3 group-hover:opacity-100">
          Add
        </span>
      </motion.button>
    </div>
  );
}
