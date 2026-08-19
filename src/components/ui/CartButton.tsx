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
        "bg-surface-secondary rounded-button shadow-button flex cursor-pointer items-center gap-3 px-7.5 py-2.5",
        className
      )}
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <ShoppingBag className="text-charcoal h-8 w-8" />
        {itemCount > 0 && (
          <Badge variant="count" className="absolute -top-1 -right-1">
            {itemCount}
          </Badge>
        )}
      </span>
      <span className="flex flex-col items-start">
        <span className="text-text-secondary text-button">View Cart</span>
        <PriceText value={total} />
      </span>
    </button>
  );
}
