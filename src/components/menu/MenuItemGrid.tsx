"use client";

import { useState } from "react";
import Button from "../ui/Button";
import MenuItemCard from "./MenuItemCard";
import { useCart } from "@/hooks/useCart";
import { MenuItem } from "@/types/menu";

interface MenuItemGridProps {
  items: MenuItem[];
  images: Record<string, string>;
  initialCount?: number;
}

export default function MenuItemGrid({ items, images, initialCount = 6 }: MenuItemGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const { addItem } = useCart();

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            image={images[item.id]}
            variant="vertical"
            onAddToCart={() =>
              addItem({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
                category: item.category,
              })
            }
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button variant="secondary" onClick={() => setVisibleCount((c) => c + initialCount)}>
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
