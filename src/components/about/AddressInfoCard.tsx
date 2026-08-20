import type { LucideIcon } from "lucide-react";
import Card from "../ui/Card";

interface AddressInfoCardProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  link?: { label: string; href: string };
}

export default function AddressInfoCard({
  icon: Icon,
  label,
  children,
  link,
}: AddressInfoCardProps) {
  return (
    <Card background="cream" className="gap-3">
      <span className="rounded-button bg-cream flex h-11 w-11 items-center justify-center">
        <Icon className="text-primary h-5 w-5" />
      </span>
      <span className="font-body text-body text-charcoal font-bold">{label}</span>
      <div className="font-body text-body-sm text-text-secondary">{children}</div>
      {link && (
        <a href={link.href} className="font-body text-body text-primary font-bold">
          {link.label}
        </a>
      )}
    </Card>
  );
}
