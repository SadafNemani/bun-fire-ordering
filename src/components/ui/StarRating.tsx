import { Star } from "lucide-react";
import type { ReactNode } from "react";

interface StarRatingProps {
  count?: number;
  children?: ReactNode;
}

export default function StarRating({ count = 5, children }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <Star key={i} className="fill-accent text-accent h-4 w-4" />
        ))}
      </div>
      {children && <span className="text-body-sm text-text-secondary">{children}</span>}
    </div>
  );
}
