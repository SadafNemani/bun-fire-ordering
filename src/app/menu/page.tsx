"use client";

import { useState } from "react";
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

  return (
    <>
      <Section background="cream" className="pt-8 md:pt-16">
        <Container>
          <MenuHero />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            <aside className="flex w-full flex-col gap-6 md:w-[30%]">
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
                imageSrc="/images/combo-banner.jpg"
              />
            </aside>

            <div className="flex w-full flex-col gap-6 md:w-[70%]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = categoryIcons[activeCategory];
                    return <Icon className="text-primary h-7 w-7" />;
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
        </Container>
      </Section>
    </>
  );
}
