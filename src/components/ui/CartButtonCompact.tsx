import { ShoppingBag } from "lucide-react";
import Badge from "./Badge";

interface CartButtonCompactProps {
  itemCount: number;
  onClick?: () => void;
}

export default function CartButtonCompact({ itemCount, onClick }: CartButtonCompactProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`View cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
      className="rounded-button bg-primary shadow-button relative flex h-11 w-11 items-center justify-center"
    >
      <ShoppingBag className="text-surface h-5 w-5" />
      {itemCount > 0 && (
        <Badge
          variant="count"
          className="bg-accent text-charcoal absolute -top-1 -right-1 min-w-4 px-1 text-[10px]"
        >
          {itemCount}
        </Badge>
      )}
    </button>
  );
}
