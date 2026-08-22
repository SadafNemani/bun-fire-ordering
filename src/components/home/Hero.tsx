import Image from "next/image";
import Link from "next/link";
import Label from "../typography/Label";
import Heading from "../typography/Heading";
import Text from "../typography/Text";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import { siteContent } from "@/data/site-content";
import { Flame } from "lucide-react";

export default function HomeHero() {
  const { hero } = siteContent.home;

  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className="flex flex-col items-start gap-5">
        <Label icon={Flame}>{hero.label}</Label>

        <Heading as="h1" size="hero" highlightLine={1}>
          {hero.title}
        </Heading>

        <Text size="body">{hero.description}</Text>

        <StarRating count={5}>Loved by burger lovers.</StarRating>

        <div className="flex flex-wrap gap-4">
          <Link href="/checkout">
            <Button variant="primary">{hero.buttonPrimary}</Button>
          </Link>
          <Link href="/menu">
            <Button variant="secondary">{hero.buttonSecondary}</Button>
          </Link>
        </div>
      </div>

      <div className="rounded-card relative h-80 w-full overflow-hidden md:h-120">
        <Image
          src="/images/home-hero.jpg"
          alt="Bun & Fire signature burger"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
