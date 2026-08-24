import Image from "next/image";
import Card from "../ui/Card";
import PriceText from "../typography/PriceText";
import AddToCartButton from "../ui/AddToCartButton";
import { cn } from "@/utils/cn";
import type { MenuItem } from "@/types/menu";

interface MenuItemCardProps {
  item: MenuItem;
  image: string;
  variant?: "horizontal" | "vertical";
  onAddToCart?: () => void;
  className?: string;
}

export default function MenuItemCard({
  item,
  image,
  variant = "vertical",
  onAddToCart,
  className,
}: MenuItemCardProps) {
  if (variant === "horizontal") {
    return (
      <Card background="cream" className={cn("w-94 shrink-0 flex-row gap-4", className)}>
        <div className="rounded-image relative h-24 w-24 shrink-0 overflow-hidden">
          <Image src={image} alt={item.name} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-body text-item-title font-extrabold">{item.name}</span>
            <span className="font-body text-button text-text-secondary line-clamp-2">
              {item.description}
            </span>
            <PriceText value={item.price} />
          </div>
          <div className="flex flex-col items-end">
            <AddToCartButton onClick={onAddToCart} />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card background="cream" className={cn("gap-4 p-0", className)}>
      <div className="rounded-t-card relative h-48 w-full overflow-hidden">
        <Image src={image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5">
        <div className="flex flex-col gap-1">
          <span className="font-body text-item-title text-charcoal font-extrabold">
            {item.name}
          </span>
          <span className="font-body text-button text-text-secondary">{item.description}</span>
        </div>
        <div className="flex items-center justify-between">
          <PriceText value={item.price} />
          <AddToCartButton onClick={onAddToCart} />
        </div>
      </div>
    </Card>
  );
}
