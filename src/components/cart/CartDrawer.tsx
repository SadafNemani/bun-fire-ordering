"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartItemRow from "./CartItemRow";
import Button from "@/components/ui/Button";
import PriceText from "@/components/typography/PriceText";
import { useCart } from "@/hooks/useCart";
import { menuItems, combos } from "@/data/menu";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const imageMap = Object.fromEntries([
  ...menuItems.map((i) => [i.id, `/images/menu/${i.id}.jpg`]),
  ...combos.map((c) => [c.id, `/images/combos/${c.id}.jpg`]),
]);

const UPSELL_FRIES_ID = "fire-fries";
const UPSELL_DRINK_ID = "cola";

export default function CartDrawer() {
  const { items, itemCount, total, isOpen, closeCart, addItem } = useCart();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.06;

  const hasFries = items.some((i) => i.id === UPSELL_FRIES_ID);
  const hasDrink = items.some((i) => i.id === UPSELL_DRINK_ID);
  const showUpsell = items.length > 0 && (!hasFries || !hasDrink);

  const upsellFries = menuItems.find((i) => i.id === UPSELL_FRIES_ID);
  const upsellDrink = menuItems.find((i) => i.id === UPSELL_DRINK_ID);

  const handleAddUpsell = () => {
    if (!hasFries && upsellFries) {
      addItem({
        id: upsellFries.id,
        name: upsellFries.name,
        price: upsellFries.price,
        quantity: 1,
        category: upsellFries.category,
      });
    }
    if (!hasDrink && upsellDrink) {
      addItem({
        id: upsellDrink.id,
        name: upsellDrink.name,
        price: upsellDrink.price,
        quantity: 1,
        category: upsellDrink.category,
      });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="bg-charcoal/40 fixed inset-0 z-60"
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            initial={isDesktop ? { x: "100%" } : { y: "100%" }}
            animate={isDesktop ? { x: 0 } : { y: 0 }}
            exit={isDesktop ? { x: "100%" } : { y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            {...(!isDesktop && {
              drag: "y",
              dragConstraints: { top: 0, bottom: 0 },
              dragElastic: { top: 0, bottom: 0.4 },
              onDragEnd: (_: unknown, info: { offset: { y: number } }) => {
                if (info.offset.y > 120) closeCart();
              },
            })}
            className={`rounded-t-card bg-surface shadow-card md:rounded-l-card fixed inset-x-0 bottom-0 z-60 flex max-h-[85vh] flex-col pb-[env(safe-area-inset-bottom)] md:inset-x-auto md:top-0 md:right-0 md:h-full md:max-h-none md:w-105 md:rounded-none`}
          >
            <div className="flex justify-center pt-3 md:hidden">
              <span className="rounded-button bg-surface-secondary h-1.5 w-12" />
            </div>

            <div className="flex items-center justify-between px-6 pt-3 pb-4 md:pt-6">
              <h2
                id="cart-drawer-title"
                className="font-body text-charcoal text-[20px] font-extrabold"
              >
                Your Order ({itemCount} {itemCount === 1 ? "item" : "items"})
              </h2>
              <button
                ref={closeButtonRef}
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-button bg-surface-secondary text-charcoal hover:bg-primary hover:text-surface flex h-9 w-9 cursor-pointer items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16 text-center">
                <ShoppingBag className="text-text-secondary h-12 w-12" />
                <p className="font-body text-charcoal text-[16px] font-bold">Your cart is empty</p>
                <p className="font-body text-body-sm text-text-secondary">
                  Add something delicious from the menu to get started.
                </p>
                <Link href="/menu" onClick={closeCart}>
                  <Button variant="primary" className="mt-2">
                    Browse Menu
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6">
                  {items.map((item) => (
                    <CartItemRow key={item.id} item={item} image={imageMap[item.id]} />
                  ))}

                  {showUpsell && upsellFries && upsellDrink && (
                    <div className="rounded-card bg-background flex items-center gap-3 p-4">
                      <div className="rounded-image relative h-12 w-12 shrink-0 overflow-hidden">
                        <Image
                          src={imageMap[hasFries ? upsellDrink.id : upsellFries.id]}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-charcoal text-[14px] font-bold">
                          {!hasFries && !hasDrink
                            ? "Add our popular fries + a drink?"
                            : !hasFries
                              ? "Add our popular fries?"
                              : "Add our popular drink?"}
                        </p>
                        <p className="font-body text-text-secondary text-[12px]">
                          Make it a combo and save.
                        </p>
                      </div>
                      <button
                        onClick={handleAddUpsell}
                        className="rounded-button bg-primary font-body text-surface flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold"
                      >
                        <Plus className="h-3 w-3" />
                        Add
                      </button>
                    </div>
                  )}
                </div>

                <div className="border-surface-secondary flex flex-col gap-3 border-t px-6 pt-4 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-text-secondary text-[14px]">Subtotal</span>
                    <span className="font-body text-charcoal text-[14px] font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-text-secondary text-[14px]">Tax (6%)</span>
                    <span className="font-body text-charcoal text-[14px] font-semibold">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-surface-secondary flex items-center justify-between border-t pt-3">
                    <span className="font-body text-charcoal text-[18px] font-extrabold">
                      Total
                    </span>
                    <PriceText value={total} className="text-[18px]" />
                  </div>

                  <Link href="/checkout" onClick={closeCart}>
                    <Button variant="primary" className="mt-2 w-full justify-center">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
