"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Button from "../ui/Button";
import CartButton from "../ui/CartButton";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/utils/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

const cartVisiblePaths = ["/menu", "/checkout", "/order-confirmation"];

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, total } = useCart();
  const showCart = cartVisiblePaths.includes(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={cn(
          "rounded-button bg-surface flex items-center justify-between border border-transparent transition-all duration-300",
          scrolled ? "shadow-card px-6 py-2.5" : "px-6 py-4"
        )}
      >
        <Link href="/" className="transition-transform duration-200 hover:scale-105">
          <Image src="/logo/bun&fire-logo.svg" width={197} height={36} alt="Bun&Fire logo" />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-button font-body relative px-4 py-2 text-sm font-extrabold transition-colors",
                  isActive ? "text-primary" : "text-charcoal hover:text-primary"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-dot"
                    className="rounded-button bg-primary absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          {showCart ? (
            <CartButton itemCount={itemCount} total={total} onClick={() => {}} />
          ) : (
            <Link href="/menu">
              <Button variant="primary" className="h-12.5 px-6 text-sm">
                ORDER NOW
              </Button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-button bg-background text-charcoal shadow-button flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
        showCart={showCart}
        itemCount={itemCount}
        total={total}
      />
    </header>
  );
}
