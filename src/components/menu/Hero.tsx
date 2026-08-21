import Image from "next/image";
import Label from "../typography/Label";
import Heading from "../typography/Heading";
import { siteContent } from "@/data/site-content";

export default function MenuHero() {
  const { hero } = siteContent.menu;

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <Label>{hero.label}</Label>
        <Heading as="h1" size="hero">
          {hero.title}
        </Heading>
      </div>
      <div className="rounded-card relative h-56 w-full overflow-hidden md:h-72">
        <Image
          src="/images/menu-hero.jpg"
          alt="Bun & Fire menu spread"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
