"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className="flex flex-col items-start gap-5">
        <Label icon={Flame}>{hero.label}</Label>

        <Heading as="h1" size="hero" highlightLine={1} animate>
          {hero.title}
        </Heading>

        <Text size="body" color="secondary" className="whitespace-pre-line">
          {hero.description}
        </Text>

        <div className="flex flex-wrap gap-4">
          <Link href="/menu">
            <Button variant="primary">{hero.buttonPrimary}</Button>
          </Link>
          <Link href="/menu">
            <Button variant="secondary">{hero.buttonSecondary}</Button>
          </Link>
        </div>

        <StarRating count={5}>Loved by burger lovers.</StarRating>
      </div>

      <div ref={imageContainerRef} className="relative h-80 w-full overflow-hidden md:h-130">
        <motion.div style={{ y: parallaxY }} className="relative h-full w-full">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/home-hero.webp"
              alt="Bun & Fire signature burger"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
