import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { brand } from "@/constants/brand";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-surface">
      <Container className="flex flex-col gap-9 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Image src="/logo/bun&fire-logo.svg" width={197} height={36} alt="Bun&Fire logo" />
          </Link>
        </div>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-body-sm text-surface/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="font-body text-body-sm text-surface/80 flex flex-col gap-1">
          <span className="text-surface font-medium">{brand.hours.days}</span>
          <span>{brand.hours.time}</span>
        </div>

        <div className="font-body text-body-sm text-surface/80 flex flex-col gap-1">
          <span>{brand.address.line1}</span>
          <span>{brand.address.line2}</span>
        </div>
      </Container>

      <div className="border-surface/10 border-t py-4">
        <Container>
          <p className="font-body text-body-sm text-surface/60">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
