"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Label from "@/components/typography/Label";
import Heading from "@/components/typography/Heading";
import MenuItemCard from "@/components/menu/MenuItemCard";
import { useCart } from "@/hooks/useCart";
import { menuItems } from "@/data/menu";
import { siteContent } from "@/data/site-content";
import UnderlineSwash from "@/components/ui/UnderlineSwash";

interface PopularPicksSliderProps {
  images: Record<string, string>;
}

export default function PopularPicksSlider({ images }: PopularPicksSliderProps) {
  const { addItem } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { popularPicks } = siteContent.home;

  const popularItems = menuItems.filter((item) => item.popular);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <Label>{popularPicks.label}</Label>
          <Heading as="h2" size="md">
            {popularPicks.title}
          </Heading>
          <UnderlineSwash />
        </div>

        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="rounded-button bg-surface-secondary text-charcoal hover:bg-primary hover:text-surface flex h-10 w-10 items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="rounded-button bg-surface-secondary text-charcoal hover:bg-primary hover:text-surface flex h-10 w-10 items-center justify-center transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex scrollbar-none gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {popularItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            image={images[item.id]}
            variant="horizontal"
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
    </div>
  );
}
