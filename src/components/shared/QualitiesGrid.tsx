import type { LucideIcon } from "lucide-react";
import Card from "../ui/Card";

interface QualityBasic {
  icon: LucideIcon;
  label: string;
  description: string;
}

interface QualityHighlighted {
  icon: LucideIcon;
  highlightedLabel: string;
  normalLabel: string;
  description: string;
}

interface QualitiesGridProps {
  variant: "home" | "about" | "checkout";
  items: QualityBasic[] | QualityHighlighted[];
}

export default function QualitiesGrid({ variant, items }: QualitiesGridProps) {
  if (variant === "home") {
    return (
      <div className="divide-accent bg-charcoal rounded-card flex flex-col divide-y md:flex-row md:divide-x md:divide-y-0">
        {(items as QualityBasic[]).map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-1 items-center gap-4 px-8 py-6">
              <span className="rounded-button border-accent flex h-14 w-14 shrink-0 items-center justify-center border">
                <Icon className="text-accent h-6 w-6" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[24px] font-extrabold text-white">{item.label}</span>
                <span className="text-surface-secondary text-button font-medium">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div className="flex flex-col gap-4">
        {(items as QualityHighlighted[]).map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.highlightedLabel} className="bg-surface flex-row items-center gap-5">
              <span className="rounded-button bg-primary flex h-16 w-16 shrink-0 items-center justify-center">
                <Icon className="text-surface h-7 w-7" />
              </span>
              <div className="flex flex-col">
                <span className="font-heading text-charcoal text-[40px] leading-none font-extrabold">
                  {item.highlightedLabel}
                </span>
                <span className="font-heading text-primary text-[30px] leading-none font-extrabold">
                  {item.normalLabel}
                </span>
                <span className="font-body text-text-secondary text-button mt-2">
                  {item.description}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {(items as QualityBasic[]).map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-4">
            <span className="rounded-button bg-background flex h-11 w-11 shrink-0 items-center justify-center">
              <Icon className="text-primary h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-body text-charcoal text-button font-medium">{item.label}</span>
              <span className="font-body text-text-secondary text-body-sm">{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
