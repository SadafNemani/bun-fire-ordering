"use client";

import { useState, useRef, useEffect } from "react";
import { Hamburger, Layers, Salad, CupSoda, Droplet } from "lucide-react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import MenuHero from "@/components/menu/Hero";
import CategoryFilterBar, { SortOption } from "@/components/menu/CategoryFilterBar";
import CategoryTabs from "@/components/menu/CategoryTabs";
import MenuItemGrid from "@/components/menu/MenuItemGrid";
import ComboCard from "@/components/menu/ComboCard";
import CTABanner from "@/components/shared/CTABanner";
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { menuItems, combos, categories } from "@/data/menu";
import { siteContent } from "@/data/site-content";
import { useCart } from "@/hooks/useCart";
import { CategoryId } from "@/types/menu";
import { cn } from "@/utils/cn";

const categoryIcons: Record<CategoryId, typeof Hamburger> = {
  burgers: Hamburger,
  combos: Layers,
  sides: Salad,
  drinks: CupSoda,
  sauces: Droplet,
};

const categoryDescriptions: Record<CategoryId, string> = {
  burgers: "Smashed fresh, served hot.",
  combos: "Your meal, sorted.",
  sides: "The perfect companions",
  drinks: "Ice-cold refreshment,",
  sauces: "Dip it, drizzle it.",
};

const menuItemImages = Object.fromEntries(
  menuItems.map((item) => [item.id, `/images/menu/${item.id}.jpg`])
);
const comboImages = Object.fromEntries(
  combos.map((combo) => [combo.id, `/images/combos/${combo.id}.jpg`])
);

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("burgers");
  const [sortOption, setSortOption] = useState<SortOption>("popular");
  const contentRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const categoryTabItems = categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    icon: categoryIcons[cat.id],
    count:
      cat.id === "combos" ? combos.length : menuItems.filter((i) => i.category === cat.id).length,
  }));

  const isCombosActive = activeCategory === "combos";

  const filteredItems = menuItems
    .filter((item) => item.category === activeCategory)
    .sort((a, b) => {
      if (sortOption === "popular") return Number(b.popular) - Number(a.popular);
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    });

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory]);

  return (
    <>
      <Section background="cream" className="pt-8 md:pt-16">
        <Container>
          <MenuHero />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:pb-0">
            <aside className="hidden w-full flex-col gap-6 md:flex md:w-[30%]">
              <CategoryTabs
                categories={categoryTabItems}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
              <CTABanner
                variant="compact"
                title={siteContent.menu.banner.title}
                description={siteContent.menu.banner.description}
                buttonLabel={siteContent.menu.banner.buttonPrimary}
                buttonHref="#combos"
                imageSrc="/images/combo-banner.png"
              />
            </aside>

            <div ref={contentRef} className="flex w-full scroll-mt-24 flex-col gap-6 md:w-[70%]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = categoryIcons[activeCategory];
                    return <Icon className="text-surface fill-primary h-20 w-20" strokeWidth={1} />;
                  })()}
                  <div className="flex flex-col">
                    <Heading as="h2" size="md" className="text=[28px]">
                      {categories.find((c) => c.id === activeCategory)?.label}
                    </Heading>
                    <Text size="body-sm" color="secondary">
                      {categoryDescriptions[activeCategory]}
                    </Text>
                  </div>
                </div>

                {!isCombosActive && (
                  <CategoryFilterBar value={sortOption} onChange={setSortOption} />
                )}
              </div>

              {isCombosActive ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {combos.map((combo) => (
                    <ComboCard
                      key={combo.id}
                      combo={combo}
                      image={comboImages[combo.id]}
                      onAddToCart={() =>
                        addItem({
                          id: combo.id,
                          name: combo.name,
                          price: combo.price,
                          quantity: 1,
                          category: "combos",
                        })
                      }
                    />
                  ))}
                </div>
              ) : (
                <MenuItemGrid
                  key={`${activeCategory}-${sortOption}`}
                  items={filteredItems}
                  images={menuItemImages}
                />
              )}
            </div>
          </div>

          <div className="fixed right-0 bottom-6 left-0 z-40 flex justify-center px-4 md:hidden">
            <div className="flex items-end gap-3 overflow-x-auto px-4 py-2 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categoryTabItems.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "rounded-button shadow-button flex shrink-0 flex-col items-center justify-center transition-all duration-300",
                      isActive
                        ? "bg-primary text-surface h-16 w-16"
                        : "bg-surface text-charcoal h-12 w-12"
                    )}
                  >
                    <Icon className={cn(isActive ? "h-6 w-6" : "h-5 w-5")} />
                    <span
                      className={cn(
                        "mt-0.5 leading-none",
                        isActive ? "text-[10px] font-bold" : "text-[9px] font-medium"
                      )}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
