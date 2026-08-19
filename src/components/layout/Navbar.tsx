"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Button from "../ui/Button";
import CartButton from "../ui/CartButton";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

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

  return (
    <header className="bg-surface/95 sticky top-0 z-50 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/">
          <Image src="/logo/bun&fire-logo.svg" width={197} height={36} alt="Bun&Fire logo" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-charcoal hover:text-primary text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {showCart ? (
          <CartButton itemCount={itemCount} total={total} onClick={() => {}} />
        ) : (
          <Link href="/menu">
            <Button variant="primary">ORDER NOW</Button>
          </Link>
        )}
      </Container>
    </header>
  );
}
