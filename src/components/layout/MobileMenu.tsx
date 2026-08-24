"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "../ui/Button";
import CartButton from "../ui/CartButton";
import { cn } from "@/utils/cn";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  pathname: string;
  showCart: boolean;
  itemCount: number;
  total: number;
  onOpenCart: () => void;
}

export default function MobileMenu({
  open,
  onClose,
  navLinks,
  pathname,
  showCart,
  itemCount,
  total,
  onOpenCart,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="bg-charcoal/40 fixed inset-0 z-40 md:hidden"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-background shadow-card fixed top-0 right-0 z-50 flex h-full w-[80%] max-w-sm flex-col gap-10 px-8 py-6 md:hidden"
          >
            <button
              onClick={onClose}
              className="rounded-button bg-surface text-charcoal shadow-button flex h-11 w-11 items-center justify-center self-end"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "font-heading text-2xl font-extrabold transition-colors",
                      isActive ? "text-primary" : "text-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div>
              {showCart ? (
                <CartButton
                  itemCount={itemCount}
                  total={total}
                  onClick={() => {
                    onClose();
                    onOpenCart();
                  }}
                />
              ) : (
                <Link href="/menu" onClick={onClose}>
                  <Button variant="primary" className="h-12.5 w-full justify-center text-sm">
                    ORDER NOW
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
