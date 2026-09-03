"use client";

import Image from "next/image";
import Label from "../typography/Label";
import Heading from "../typography/Heading";
import Text from "../typography/Text";
import ScriptText from "../typography/ScriptText";
import QualitiesGrid from "../shared/QualitiesGrid";
import { siteContent } from "@/data/site-content";
import { Zap, Clock, ShoppingBag } from "lucide-react";
import UnderlineSwash from "../ui/UnderlineSwash";

const qualities = [
  { icon: Zap, ...siteContent.about.qualities[0] },
  { icon: Clock, ...siteContent.about.qualities[1] },
  { icon: ShoppingBag, ...siteContent.about.qualities[2] },
];

export default function AboutHero() {
  const { hero } = siteContent.about;

  return (
    <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
      <div className="flex flex-col items-start gap-5">
        <Label>{hero.label}</Label>
        <Heading as="h1" size="md" highlightLine={1}>
          {hero.title}
        </Heading>
        <Text color="secondary" weight="semibold">
          {hero.description}
        </Text>
        <div className="flex flex-col items-start gap-1">
          <ScriptText>{hero.scriptText}</ScriptText>
          <UnderlineSwash />
        </div>

        <div className="w-full md:absolute md:top-full md:left-0 md:mt-6 md:w-[80%]">
          <QualitiesGrid variant="about" items={qualities} />
        </div>
      </div>

      <div className="rounded-card relative h-80 w-full overflow-hidden md:h-105">
        <Image
          src="/images/about-hero.png"
          alt="Bun & Fire kitchen"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
