"use client";

import { Zap, Sparkles, MousePointerClick } from "lucide-react";
import QualitiesGrid from "../shared/QualitiesGrid";
import { siteContent } from "@/data/site-content";

const icons = [Zap, Sparkles, MousePointerClick];

export default function QualitiesSection() {
  const items = siteContent.home.qualities.map((quality, index) => ({
    ...quality,
    icon: icons[index],
  }));

  return <QualitiesGrid variant="home" items={items} />;
}
