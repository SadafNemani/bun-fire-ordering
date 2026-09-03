import Image from "next/image";
import { Check } from "lucide-react";
import Card from "../ui/Card";
import PriceText from "../typography/PriceText";
import AddToCartButton from "../ui/AddToCartButton";
import type { Combo } from "@/types/menu";

interface ComboCardProps {
  combo: Combo;
  image: string;
  onAddToCart?: () => void;
}

export default function ComboCard({ combo, image, onAddToCart }: ComboCardProps) {
  return (
    <Card background="cream" className="gap-4 p-0">
      <div className="rounded-t-card relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={combo.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5">
        <span className="font-body text-item-title text-charcoal font-extrabold">{combo.name}</span>

        <ul className="flex flex-col gap-1">
          {combo.includes.map((line) => (
            <li
              key={line}
              className="font-body text-body text-text-secondary flex items-center gap-2"
            >
              <Check className="text-primary h-3.5 w-3.5" />
              {line}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <PriceText value={combo.price} />
          <AddToCartButton onClick={onAddToCart} />
        </div>
      </div>
    </Card>
  );
}
