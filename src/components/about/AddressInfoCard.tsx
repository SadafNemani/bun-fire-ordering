import { ArrowRight, type LucideIcon } from "lucide-react";
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
    <Card background="cream" className="flex-row items-start gap-4">
      <span className="rounded-button bg-cream flex h-11 w-11 shrink-0 items-center justify-center">
        <Icon className="text-primary h-5 w-5" />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <span className="font-body text-body text-charcoal font-bold">{label}</span>
        <div className="font-body text-body-sm text-text-secondary inline">{children}</div>
        {link && (
          <a
            href={link.href}
            className="font-body text-body text-primary flex items-center font-bold"
          >
            {link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </Card>
  );
}
