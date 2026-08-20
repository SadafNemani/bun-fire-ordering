import { Clock } from "lucide-react";
import { cn } from "@/utils/cn";

interface EstimatedTimeCardProps {
  size?: "sm" | "lg";
  time: string;
  description: string;
  className?: string;
}

export default function EstimatedTimeCard({
  size = "sm",
  time,
  description,
  className,
}: EstimatedTimeCardProps) {
  const isLarge = size === "lg";

  return (
    <div
      className={cn(
        "rounded-card bg-background flex flex-col items-center gap-3 text-center",
        isLarge ? "p-10" : "p-6",
        className
      )}
    >
      <Clock className={cn("text-primary", isLarge ? "h-16 w-16" : "h-8 w-8")} />
      <span className="font-body text-button text-charcoal font-extrabold">
        Estimated Pickup Time
      </span>
      <span
        className={cn(
          "font-body text-primary font-extrabold",
          isLarge ? "text-[50px] leading-none" : "text-[20px]"
        )}
      >
        {time}
      </span>
      <p className="font-body text-body-sm text-text-secondary font-medium">{description}</p>
    </div>
  );
}
