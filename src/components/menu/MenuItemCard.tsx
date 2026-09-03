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
  isBestSeller?: boolean;
  onAddToCart?: () => void;
  className?: string;
}

export default function MenuItemCard({
  item,
  image,
  variant = "vertical",
  isBestSeller,
  onAddToCart,
  className,
}: MenuItemCardProps) {
  if (variant === "horizontal") {
    return (
      <Card
        background="cream"
        className={cn(
          "group hover:shadow-card w-94 shrink-0 flex-row gap-4 transition-all duration-300 hover:-translate-y-1",
          className
        )}
      >
        <div className="rounded-image relative h-24 w-24 shrink-0 overflow-hidden">
          {isBestSeller && (
            <span className="bg-primary text-surface absolute top-0 left-0 z-10 rounded-br-md px-2 py-0.5 text-[9px] font-bold uppercase">
              Best Seller
            </span>
          )}
          <Image
            src={image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="320px"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-body text-item-title font-extrabold">{item.name}</span>
            <span className="font-body text-body text-text-secondary line-clamp-2">
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
    <Card
      background="cream"
      className={cn(
        "group hover:shadow-card gap-4 p-0 transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="rounded-t-card relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-col justify-around gap-3 px-5 pb-5">
        <div className="flex flex-col gap-1">
          <span className="font-body text-item-title text-charcoal font-extrabold">
            {item.name}
          </span>
          <span className="font-body text-body text-text-secondary">{item.description}</span>
        </div>
        <PriceText value={item.price} />
        <div className="flex flex-col items-end">
          <AddToCartButton onClick={onAddToCart} image={image} />
        </div>
      </div>
    </Card>
  );
}
