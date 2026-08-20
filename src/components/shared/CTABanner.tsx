import Image from "next/image";
import Button from "../ui/Button";
import { cn } from "@/utils/cn";

interface CTABannerProps {
  variant: "hero" | "compact";
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
  className?: string;
}

export default function CTABanner({
  variant,
  title,
  description,
  buttonLabel,
  buttonHref,
  imageSrc,
  className,
}: CTABannerProps) {
  if (variant === "hero") {
    return (
      <div
        className={cn(
          "rounded-card bg-primary flex flex-col items-center gap-8 overflow-hidden md:flex-row",
          className
        )}
      >
        <div className="relative h-64 w-full shrink-0 md:h-auto md:w-1/3 md:self-stretch">
          <Image src={imageSrc} alt="" fill className="object-cover" />
        </div>

        <div className="flex flex-1 flex-col items-start gap-4 px-6 py-10 md:px-0">
          <h2 className="font-heading text-surface text-heading-md leading-none font-extrabold">
            {title}
          </h2>
          <p className="font-body text-surface text-[24px] font-medium">{description}</p>
          <a href={buttonHref}>
            <Button
              variant="primary"
              className="bg-surface text-primary text-button w-70 justify-center"
            >
              {buttonLabel}
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("rounded-card bg-background shadow-card flex flex-col gap-4 p-6", className)}
    >
      <h3 className="font-body text-item-title text-charcoal font-extrabold">{title}</h3>
      <p className="text-hero font-body text-button text-text-secondary font-medium">
        {description}
      </p>
      <a href={buttonHref}>
        <Button
          variant="primary"
          className="bg-surface text-primary text-body w-full justify-center"
        >
          {buttonLabel}
        </Button>
      </a>
      <div className="rounded-image relative h-32 w-full overflow-hidden">
        <Image src={imageSrc} alt="" fill className="object-cover" />
      </div>
    </div>
  );
}
