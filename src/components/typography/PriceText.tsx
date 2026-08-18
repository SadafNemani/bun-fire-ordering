import { cn } from "@/utils/cn";

interface PriceTextProps {
  value: number;
  className?: string;
}

export default function PriceText({ value, className }: PriceTextProps) {
  return (
    <span className={cn("font-body text-primary text-price font-black", className)}>
      ${value.toFixed(2)}
    </span>
  );
}
