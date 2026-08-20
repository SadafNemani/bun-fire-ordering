import Image from "next/image";
import PriceText from "../typography/PriceText";
import type { CartItem } from "@/types/order";

interface OrderSummaryProps {
  items: CartItem[];
  images: Record<string, string>;
  taxRate?: number;
}

export default function OrderSummary({ items, images, taxRate = 0.06 }: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="rounded-card bg-surface shadow-card flex flex-col gap-4 p-6">
      <h3 className="font-body text-item-title text-charcoal font-extrabold">
        Order Summary ({items.length} {items.length === 1 ? "item" : "items"})
      </h3>

      <div className="bg-surface-secondary h-px" />

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border-surface-secondary flex items-center gap-4 border-b pb-4 last:border-none last:pb-0"
          >
            <div className="rounded-image relative h-14 w-14 shrink-0 overflow-hidden">
              <Image src={images[item.id]} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="font-body text-button text-charcoal font-extrabold">
                {item.name}
              </span>
              <span className="font-body text-body-sm text-text-secondary">
                Qty: {item.quantity}
              </span>
            </div>
            <span className="font-body text-button text-charcoal font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-surface-secondary flex flex-col gap-2 border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="font-body text-body text-charcoal font-bold">Subtotal</span>
          <span className="font-body text-body text-charcoal font-bold">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body text-body-sm text-text-secondary font-semibold">
            Tax ({(taxRate * 100).toFixed(0)}%)
          </span>
          <span className="font-body text-body-sm text-text-secondary font-semibold">
            ${tax.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="border-surface-secondary flex items-center justify-between border-t pt-4">
        <span className="font-body text-charcoal text-[20px] font-extrabold">Total</span>
        <PriceText value={total} className="text-[20px]" />
      </div>
    </div>
  );
}
