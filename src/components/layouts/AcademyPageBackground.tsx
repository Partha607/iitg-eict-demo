"use client";

import { usePathname } from "next/navigation";
import { PageBackground } from "@/components/layouts/PageBackground";
import { images } from "@/lib/images";

type BgConfig = {
  sources: readonly string[];
  opacity?: number;
} | null;

function resolveBackground(pathname: string): BgConfig {
  if (pathname === "/academy/gallery") {
    return null;
  }
  if (pathname === "/academy") {
    return { sources: [images.buildingSide], opacity: 0.18 };
  }
  if (pathname === "/academy/about") {
    return { sources: [images.buildingFar], opacity: 0.18 };
  }
  if (pathname === "/academy/people") {
    return { sources: [images.topView], opacity: 0.18 };
  }
  if (pathname === "/academy/infrastructure") {
    return { sources: [images.buildingLakeLeft], opacity: 0.18 };
  }
  if (pathname === "/academy/contact") {
    return { sources: [images.buildingCentral], opacity: 0.18 };
  }
  return null;
}

export function AcademyPageBackground() {
  const pathname = usePathname();
  const config = resolveBackground(pathname);
  if (!config) return null;

  return (
    <PageBackground
      sources={config.sources}
      layout="watermark"
      opacity={config.opacity}
      scrimStrength="none"
    />
  );
}
