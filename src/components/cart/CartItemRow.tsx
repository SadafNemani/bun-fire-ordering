"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import QuantityStepper from "../ui/QuantityStepper";
import PriceText from "../typography/PriceText";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/types/order";

interface CartItemRowProps {
  item: CartItem;
  image: string;
}

export default function CartItemRow({ item, image }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="border-surface-secondary flex items-center gap-4 border-b pb-4 last:border-none last:pb-0">
      <div className="rounded-image relative h-16 w-16 shrink-0 overflow-hidden">
        <Image src={image} alt={item.name} fill className="object-cover" sizes="64px" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-body text-button text-charcoal font-extrabold">{item.name}</span>
          <PriceText value={item.price} />
        </div>

        <QuantityStepper
          value={item.quantity}
          onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
          onDecrease={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
        />
      </div>

      <button
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.name} from cart`}
        className="text-text-secondary hover:text-primary cursor-pointer self-start transition-colors"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}
